import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Editor } from './editor/Editor';
import { Preview } from './preview/Preview';
import st from './Body.module.css';
export const Body: React.FC = () => {
  return (
    <Container className={st.top}>
      <Row>
        <Col md="12" lg="6">
          <Editor />
        </Col>
        <Col md="12" lg="6" className="d-none d-sm-block">
          <Preview />
        </Col>
      </Row>
    </Container>
  );
};
