import { Encabezado } from "eco-unp/ui";
import { FormularioEntrevista } from "../components/forms/entrevista/formularioEntrevista";
import { Breadcrumb } from "react-bootstrap";

export const Entrevista: React.FC = () => {
  return (
    <div className="main_container">
      <div className="my-3 container">
        <div className="justify-content-center row">
          {/* Contenedor del Encabezado con Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center">
            {/* Breadcrumb alineado a la derecha */}
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item href={"/"}>Ordenes de Trabajo</Breadcrumb.Item>
              <Breadcrumb.Item active>Entrevista</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="col-xl-9 col-lg-11">
            <Encabezado
              dependencia={"Subdirección de Evaluación de Riesgo"}
            ></Encabezado>
            <FormularioEntrevista></FormularioEntrevista>
          </div>
        </div>
      </div>
    </div>
  );
};
