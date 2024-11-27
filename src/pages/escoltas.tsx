import { Encabezado } from "eco-unp/ui";
import { FormularioEscoltas } from "../components/forms/escoltas/formularioEscoltas";
import { Breadcrumb } from "react-bootstrap";
import "../styles/migaDePan.css"

export const Escoltas: React.FC = ({}) => {
  return (
    <div>
      <div className="my-3 container">
          {/* Contenedor del Encabezado con Breadcrumb */}
          <div className="breadcrumb-container">
            {/* Breadcrumb alineado a la derecha */}
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item href={"/"}> <u>Ordenes de Trabajo</u> </Breadcrumb.Item>
              <Breadcrumb.Item active>Escoltas</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        <div className="justify-content-center row">
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
