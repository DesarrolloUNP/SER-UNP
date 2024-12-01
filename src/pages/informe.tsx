import { Encabezado } from "eco-unp/ui";
import { FormularioInforme } from "../components/forms/informe/formularioInforme";
import { Breadcrumb } from "react-bootstrap";

export const Informe: React.FC = ({}) => {
  return (
    <div className="main_container">
      <div className="my-3 container">
        <div className="justify-content-center row">

          <div className="d-flex justify-content-between align-items-center">

            <Breadcrumb className="mb-0">
              <Breadcrumb.Item href={"/"}>Ordenes de Trabajo</Breadcrumb.Item>
              <Breadcrumb.Item active>Informe</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="col-xl-9 col-lg-11">
            <Encabezado
              dependencia={"Subdirección de Evaluación de Riesgo"}
            ></Encabezado>
            <FormularioInforme></FormularioInforme>
          </div>
        </div>
      </div>
    </div>
  );
};
