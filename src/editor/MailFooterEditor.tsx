import React, { useCallback, useEffect } from "react";
import { extParam } from "../utils";
import Textarea from "react-textarea-autosize";
import { LS_KEYS } from "../utils";
let SavedText =
  localStorage.getItem(LS_KEYS.footer) ||
  `以上です。

------
このメールは、以下のツールを利用して作成しました。
- [テレワーク用のメールテンプレート](https://yoshi6jp.github.io/mail-template-for-work-from-home/)`;
if (extParam.get("name")) {
  SavedText = localStorage.getItem(LS_KEYS.footer_ext) || `以上です。`;
}
export const MailFooterEditor: React.FC<{
  onChange: (val: string) => void;
}> = ({ onChange }) => {
  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = evt.target.value || "";
      onChange(value);
      if (extParam.get("name")) {
        localStorage.setItem(LS_KEYS.footer_ext, value);
      } else {
        localStorage.setItem(LS_KEYS.footer, value);
      }
    },
    [onChange]
  );
  useEffect(() => {
    onChange(SavedText);
  }, [onChange]);

  return (
    <Textarea
      className="form-control"
      minRows={3}
      onChange={handleChange}
      defaultValue={SavedText}
      placeholder="本文のフッター"
    />
  );
};
