import React, { useContext, useCallback } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { RootContext } from "./Provider";
import { extParam } from "./utils";
import { LS_KEYS } from "./utils";
export const Header: React.FC = () => {
  const { to, subject, body, formData, sendUrl } = useContext(RootContext);
  const href = `https://outlook.office.com/owa/?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}&to=${to}&path=/mail/action/compose`;
  const handleClick = useCallback(async () => {
    if (formData && sendUrl) {
      const body = JSON.stringify(formData);
      localStorage.setItem(LS_KEYS.schema_json_data, body);
      await fetch(sendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
    } else if (extParam.get("content")) {
      window.close();
    }
  }, [formData, sendUrl]);
  return (
    <Navbar dark={true} color="dark" fixed="top">
      <NavbarBrand>テレワーク用のメールテンプレート</NavbarBrand>
      <Button
        color="warning"
        outline={true}
        onClick={handleClick}
        className="d-none d-sm-inline-block"
        title="Outlook on the webでメールを作成"
        tag="a"
        target="_blank"
        href={href}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Button>
    </Navbar>
  );
};
