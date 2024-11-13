import React from "react";
import ComponenteActividad from "./componenteActividad";
import ComponenteAnalisis from "./componenteAnalisis";
import ComponenteResidencial from "./componenteResidencial";
import ComponenteSeguridad from "./componenteSeguridad";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";

const datosOrden = {
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
    segundoApellido: "González"
};


export const FormularioEntorno: React.FC = () => (
    <div>
        <InformacionOrdenTrabajo datos={datosOrden} />
        <ComponenteAnalisis />
        <ComponenteResidencial />
        <ComponenteActividad />
        <ComponenteSeguridad />
    </div>
);

export default FormularioEntorno;
