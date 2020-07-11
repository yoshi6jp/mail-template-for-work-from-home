import React from 'react';
import { ToEditor } from './ToEditor';
import { TypeSelector } from './TypeSelector';
import { SubjectEditor } from './SubjectEditor';
import { BodyEditor } from './BodyEditor';

export const Editor: React.FC = () => {
  return (
    <>
      <div className="d-none d-sm-block">
        <ToEditor />
        <TypeSelector />
        <SubjectEditor />
      </div>
      <br />
      <BodyEditor />
    </>
  );
};
