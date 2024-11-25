import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Terceros } from '../pages/terceros';
const ruteo: React.FC = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/"><Terceros/></Breadcrumb.Item>
      <Breadcrumb.Item href="/biblioteca">
        Biblioteca
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Datos</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ruteo;
