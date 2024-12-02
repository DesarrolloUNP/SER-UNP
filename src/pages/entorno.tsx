import { Encabezado } from "eco-unp/ui";
import { FormularioEntorno } from "../components/forms/entorno/formularioEntorno";
import { Breadcrumb } from "react-bootstrap";

export const Entorno: React.FC = ({}) => {
  return (
    <div>
      <div className="my-3 container">
        <div className="justify-content-center row">
          {/* Contenedor del Encabezado con Breadcrumb */}
          <div className="breadcrumb-container">
            {/* Breadcrumb alineado a la derecha */}
            <Breadcrumb className="mb-0">
              <Breadcrumb.Item href={"/"}><u>Ordenes de Trabajo</u></Breadcrumb.Item>
              <Breadcrumb.Item active>Entorno</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div >
            <Encabezado
              dependencia={"Subdirección de Evaluación de Riesgo"}
            ></Encabezado>
            <FormularioEntorno></FormularioEntorno>
          </div>
        </div>
      </div>
    </div>
  );
};
