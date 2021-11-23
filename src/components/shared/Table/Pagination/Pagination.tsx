import { classNamesFunction, styled } from "@fluentui/utilities";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CustomButton } from "../../CustomButton";
import { PageButton } from "./PageButton";
import { getStyles } from "./Pagination.styles";
import { IPaginationProps, IPaginationStyleProps, IPaginationStyles } from "./Pagination.types";

const getClassNames = classNamesFunction<IPaginationStyleProps, IPaginationStyles>();

const PaginationBase = ({ styles, itemsPerPage, itemsCount, onPageChange, pageButtonNumber = 5 }: IPaginationProps) => {
  if (pageButtonNumber < 3) {
    throw "pageButtonNumber should be at least 3";
  }
  const classNames = getClassNames(styles);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const totalPage = Math.ceil(itemsCount / itemsPerPage);
  const lastPageIndex = totalPage - 1;
  const hasPrevPage = currentPageIndex > 0;
  const hasNextPage = currentPageIndex < lastPageIndex;

  useEffect(() => {
    if (currentPageIndex > lastPageIndex) {
      setCurrentPageIndex(lastPageIndex);
    }
  }, [currentPageIndex, lastPageIndex]);

  useEffect(() => {
    onPageChange(currentPageIndex);
  }, [currentPageIndex, onPageChange]);

  const onClickPrev = useCallback(() => {
    setCurrentPageIndex((prevIndex) => prevIndex - 1);
  }, []);
  const onClickNext = useCallback(() => {
    setCurrentPageIndex((prevIndex) => prevIndex + 1);
  }, []);

  const onClickPage = useCallback((pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
  }, []);
  const renderButton = useCallback(
    (pageIndex: number) => (
      <PageButton pageIndex={pageIndex} activePageIndex={currentPageIndex} onClick={onClickPage} key={pageIndex} />
    ),
    [currentPageIndex, onClickPage]
  );

  const midButtons = useMemo(() => {
    let leftIndex: number;
    let rightIndex: number;
    if (pageButtonNumber + 2 >= totalPage) {
      leftIndex = 1;
      rightIndex = totalPage - 2;
    } else {
      const left = Math.floor(pageButtonNumber / 2);
      leftIndex = currentPageIndex - left;
      rightIndex = leftIndex + pageButtonNumber - 1;
      if (leftIndex <= 0) {
        const offset = 1 - leftIndex;
        leftIndex += offset;
        rightIndex += offset;
      } else if (rightIndex >= lastPageIndex) {
        const offset = rightIndex - lastPageIndex + 1;
        leftIndex -= offset;
        rightIndex -= offset;
      }
    }
    if (rightIndex < leftIndex) {
      return null;
    } else if (rightIndex === leftIndex) {
      return renderButton(rightIndex);
    }
    if (rightIndex <= leftIndex + 2) {
      return (
        <>
          {renderButton(leftIndex)}
          {renderButton(rightIndex)}
        </>
      );
    } else {
      const buttons = [leftIndex > 1 ? <div>...</div> : renderButton(leftIndex)];
      for (let i = leftIndex + 1; i < rightIndex; i++) {
        buttons.push(renderButton(i));
      }
      buttons.push(rightIndex < lastPageIndex - 1 ? <div>...</div> : renderButton(rightIndex));
      return buttons;
    }
  }, [currentPageIndex, lastPageIndex, pageButtonNumber, renderButton, totalPage]);

  return (
    <div className={classnames(classNames.root, "flex justify-between")}>
      <div>
        <CustomButton
          label="PREV"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          iconLeft
          styles={classNames.subComponentStyles.navigateButton}
          disabled={!hasPrevPage}
          onClick={onClickPrev}
        />
      </div>
      <div className="flex space-x-2">
        <PageButton pageIndex={0} activePageIndex={currentPageIndex} onClick={onClickPage} />
        {midButtons}
        {lastPageIndex > 0 && (
          <PageButton pageIndex={lastPageIndex} activePageIndex={currentPageIndex} onClick={onClickPage} />
        )}
      </div>
      <div>
        <CustomButton
          label="NEXT"
          icon={<FontAwesomeIcon icon={faChevronRight} />}
          styles={classNames.subComponentStyles.navigateButton}
          disabled={!hasNextPage}
          onClick={onClickNext}
        />
      </div>
    </div>
  );
};

export const Pagination = styled<IPaginationProps, IPaginationStyleProps, IPaginationStyles>(PaginationBase, getStyles);
