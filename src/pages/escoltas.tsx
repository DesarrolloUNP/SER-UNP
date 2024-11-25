import { Encabezado } from "eco-unp/ui";
import { FormularioEscoltas } from "../components/forms/escoltas/formularioEscoltas";
import { Breadcrumb } from "react-bootstrap";

export const Escoltas: React.FC = ({}) => {
  return (
    <div className="main_container">
      <div className="my-3 container">
        <div className="justify-content-center row">
          {/* Contenedor del Encabezado con Breadcrumb */}
          <div className="d-flex justify-content-between align-items-center">
            {/* Breadcrumb alineado a la derecha */}
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item href={"/"}>Ordenes de Trabajo</Breadcrumb.Item>
              <Breadcrumb.Item active>Escoltas</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="col-xl-9 col-lg-11">
            <Encabezado
              dependencia={"Subdirección de Evaluación de Riesgo"}
            ></Encabezado>
            <FormularioEscoltas></FormularioEscoltas>
          </div>
        </div>
      </div>
    </div>
  );
};
