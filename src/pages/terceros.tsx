import { Encabezado } from "eco-unp/ui";
import { FormularioTerceros } from "../components/forms/terceros/formularioTerceros";
import ruteo from "../shared/rutas";
import { Breadcrumb } from "react-bootstrap";

export const Terceros: React.FC = ({}) => {
  return (
    <>
      <div className="main_container">
        <div className="my-3 container">
            {/* Contenedor del Encabezado con Breadcrumb */}
            <div className="d-flex justify-content-between align-items-center">
              {/* Breadcrumb alineado a la derecha */}
              <Breadcrumb className="mb-0">
                <Breadcrumb.Item href={"/"}>Ordenes de Trabajo</Breadcrumb.Item>
                <Breadcrumb.Item active >Terceros</Breadcrumb.Item>
                
              </Breadcrumb>
            </div>
          <div className="justify-content-center row">
            

            <div className="col-xl-9 col-lg-11">
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
