import React from "react";
import ComponenteActividad from "./componenteActividad";
import ComponenteAnalisis from "./componenteAnalisis";
import ComponenteResidencial from "./componenteResidencial";
import ComponenteSeguridad from "./componenteSeguridad";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import { Card, CardHeader, CardBody, Form } from "react-bootstrap";

export const datosOrden = {
    ordenTrabajoNo: "12345",
    fechaSolicitudUNP: { dia: "01", mes: "01", año: "2023" },
    fechaReciboER: { dia: "02", mes: "01", año: "2023" },
    fechaExpedicion: { dia: "03", mes: "01", año: "2023" },
    tipoIdentificacion: "Cédula",
    numeroIdentificacion: "987654321",
    sexo: "Masculino",
    primerNombre: "Juan",
    segundoNombre: "Carlos",
    primerApellido: "Pérez",
    segundoApellido: "González",
};

export const FormularioEntorno: React.FC = () => (
    <Form>

        <Card className="border-0 shadow mt-4 mt-4">
            
            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Entornos"} />
        </Card>

        <Card className="border-0 shadow mt-4">
            <CardHeader className="text-right bg-unp text-light py-3">ANÁLISIS E INSPECCIÓN</CardHeader>
            <CardBody>
                <ComponenteAnalisis />
            </CardBody>
        </Card>

        <Card className="border-0 shadow mt-4">
            <CardHeader className="text-right bg-unp text-light py-3">RESIDENCIAL</CardHeader>
            <CardBody>
                <ComponenteResidencial />
            </CardBody>
        </Card>

        <Card className="border-0 shadow mt-4">
            <CardHeader className="text-right bg-unp text-light py-3">Actividad o función (poblacional) programa UNP</CardHeader>
            <CardBody>
                <ComponenteActividad />
            </CardBody>
        </Card>

        <Card className="border-0 shadow mt-4">
            <CardHeader className="text-right bg-unp text-light py-3">SEGURIDAD DEL SITIO</CardHeader>
            <CardBody>
                <ComponenteSeguridad />
            </CardBody>
        </Card>

    </Form>
);

export default FormularioEntorno;
