import React, { useCallback, useEffect } from "react";
import Textarea from "react-textarea-autosize";
import { LS_KEYS } from "../utils";
const SavedText =
  localStorage.getItem(LS_KEYS.footer) ||
  `以上です。

------
このメールは、以下のツールを利用して作成しました。
- [テレワーク用のメールテンプレート](https://yoshi6jp.github.io/mail-template-for-work-from-home/)`;
export const MailFooterEditor: React.FC<{
  onChange: (val: string) => void;
}> = ({ onChange }) => {
  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = evt.target.value || "";
      onChange(value);
      localStorage.setItem(LS_KEYS.footer, value);
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
