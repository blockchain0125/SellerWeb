import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { KeyboardEventHandler, useCallback, useRef } from "react";
import { Field } from "../Field";
import { useAutoControlled } from "../hooks/useAutoControlled";
import { StrongTypedTag } from "../Tag";
import { getStyles } from "./TagEditor.styles";
import { ITagEditorProps, ITagEditorStyleProps, ITagEditorStyles } from "./TagEditor.types";

const getClassNames = classNamesFunction<ITagEditorStyleProps, ITagEditorStyles>();
const Tag = StrongTypedTag<number>();

const TagEditorBase = ({ styles, onChange, value, ...fieldProps }: ITagEditorProps) => {
  const { root } = getClassNames(styles);
  const [tags, onTagsChange] = useAutoControlled<string[]>({ onChange, value, defaultValue: [] });
  const tagInput = useRef<HTMLDivElement>(null);

  const onRemoveTag = useCallback(
    (tagIndex: number) => {
      if (tags) {
        onTagsChange([...tags.slice(0, tagIndex), ...tags.slice(tagIndex + 1)]);
      }
    },
    [onTagsChange, tags]
  );

  const onTagInputKeyPress = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      if (event.key === "Enter") {
        const newTag = tagInput.current?.innerText;
        if (newTag) {
          tagInput.current.innerHTML = "";
          onTagsChange([...(tags as string[]), newTag]);
        }
        event.preventDefault();
      }
    },
    [onTagsChange, tags]
  );

  return (
    <Field {...fieldProps} materialStyleLabel={fieldProps.materialStyleLabel ?? false}>
      <div className={root}>
        <div className="gap-2 flex flex-wrap">
          {tags?.map((tag, i) => (
            <Tag key={tag} label={tag} customData={i} onRemove={onRemoveTag} />
          ))}
          <div contentEditable className="flex-grow " ref={tagInput} onKeyPress={onTagInputKeyPress} />
        </div>
      </div>
    </Field>
  );
};

export const TagEditor = styled<ITagEditorProps, ITagEditorStyleProps, ITagEditorStyles>(TagEditorBase, getStyles);
