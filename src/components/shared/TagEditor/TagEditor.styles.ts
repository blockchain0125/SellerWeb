import tw from "twin.macro";
import { ITagEditorStyleProps, ITagEditorStyles } from "./TagEditor.types";

export function getStyles({}: ITagEditorStyleProps): ITagEditorStyles {
  return {
    root: tw`bg-white border-grey10 border p-2`,
  };
}
