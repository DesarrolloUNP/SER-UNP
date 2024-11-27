import { Encabezado } from "eco-unp/ui";
import { FormularioDocumental } from "../components/forms/documental/formularioDocumental";
import { Breadcrumb } from "react-bootstrap";
export const Documental: React.FC = ({}) => {
  return (
    <>
      <div>
        <div className="my-3 container">
          <div className="justify-content-center row">
            {/* Contenedor del Encabezado con Breadcrumb */}
            <div className="breadcrumb-container">
              {/* Breadcrumb alineado a la derecha */}
              <Breadcrumb className="mb-0">
                <Breadcrumb.Item href={"/"}><u>Ordenes de Trabajo</u></Breadcrumb.Item>
                <Breadcrumb.Item active>Documental</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="col-xl-9 col-lg-11">
              <Encabezado
                dependencia={"Subdirección de Evaluación de Riesgo"}
              ></Encabezado>
              <FormularioDocumental></FormularioDocumental>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
