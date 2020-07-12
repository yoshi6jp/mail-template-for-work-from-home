import React, { useContext } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { RootContext } from "./Provider";
export const Header: React.FC = () => {
  const { to, subject, body } = useContext(RootContext);
  const href = `https://outlook.office.com/owa/?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}&to=${to}&path=/mail/action/compose`;
  return (
    <Navbar dark={true} color="dark" fixed="top">
      <NavbarBrand>テレワーク用のメールテンプレート</NavbarBrand>
      <Button
        className="d-none d-sm-inline-block"
        title="[Experiment] Outlook on the webでメールを作成"
        tag="a"
        target="_blank"
        href={href}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Button>
    </Navbar>
  );
};
