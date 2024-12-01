import { Encabezado } from "eco-unp/ui";
import { Breadcrumb } from "react-bootstrap";
import { FormularioEstandar } from "../components/forms/estandar/formularioEstandar";

export const Estandar: React.FC = () => {
    return (
        <div className="main_container">
            <div className="my-3 container">
                <div className="justify-content-center row">
                    {/* <div className="d-flex justify-content-between align-items-center">
                        <Breadcrumb className="mb-0">
                            <Breadcrumb.Item href={"/"}>Ordenes de Trabajo</Breadcrumb.Item>
                            <Breadcrumb.Item active>Entrevista</Breadcrumb.Item>
                        </Breadcrumb>
                    </div> */}
                    <div>
                        <Encabezado
                            dependencia={"Subdirección de Evaluación de Riesgo"}
                        ></Encabezado>
                        <FormularioEstandar></FormularioEstandar>
                    </div>
                </div>
            </div>
        </div>
    );
};