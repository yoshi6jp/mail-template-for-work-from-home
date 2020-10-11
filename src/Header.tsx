import React, { useContext, useCallback } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { RootContext } from "./Provider";
export const Header: React.FC = () => {
  const { to, subject, body, formData, sendUrl } = useContext(RootContext);
  const href = `https://outlook.office.com/owa/?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}&to=${to}&path=/mail/action/compose`;
  const handleClick = useCallback(async () => {
    await fetch(sendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }, [formData, sendUrl]);
  return (
    <Navbar dark={true} color="dark" fixed="top">
      <NavbarBrand>テレワーク用のメールテンプレート</NavbarBrand>
      <Button
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
