import { Encabezado } from "eco-unp/ui";
import { FormularioTerceros } from "../components/forms/terceros/formularioTerceros";
import ruteo from "../shared/rutas";
import { Breadcrumb } from "react-bootstrap";

export const Terceros: React.FC = ({}) => {
  return (
    <>
      <div>
        <div className="my-3 container">
            {/* Contenedor del Encabezado con Breadcrumb */}
            <div className="breadcrumb-container">
              {/* Breadcrumb alineado a la derecha */}
              <Breadcrumb className="mb-0">
                <Breadcrumb.Item href={"/"}><u>Ordenes de Trabajo</u></Breadcrumb.Item>
                <Breadcrumb.Item active >Terceros</Breadcrumb.Item>
                
              </Breadcrumb>
            </div>
          <div className="justify-content-center row">
            

            <div>
              <Encabezado
                dependencia={"Subdirección de Evaluación de Riesgo"}
              ></Encabezado>
              <FormularioTerceros></FormularioTerceros>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
