import React, { useState, ChangeEvent } from "react";
import ComponenteActividad from "./componenteActividad";
import ComponenteAnalisis from "./componenteAnalisis";
import ComponenteResidencial from "./componenteResidencial";
import ComponenteSeguridad from "./componenteSeguridad";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import { Card, CardHeader, CardBody, Form, Button } from "react-bootstrap";
import ExpandableCard from "../../../shared/tarjetaExpandible";
import { useNavigate } from "react-router-dom";

interface FormData {
    inspeccionFechaResidencial: string; 
    inspeccionFechaActividad: string;
    residencialDistancia: string;
    actividadDistancia: string;
    barrerasFisicasResidencia: string;
    barrerasFisicasActividad: string;
    controlIngresoResidencia: string;
    controlIngresoActividad: string;
    medidasTecnicasResidencia: string;
    medidasTecnicasActividad: string;
    puntosApoyoResidencia: string;
    puntosApoyoActividad: string;
    analisisDesplazamientos: string;
}

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

export const FormularioEntorno: React.FC = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        inspeccionFechaResidencial: "",
        inspeccionFechaActividad: "",
        residencialDistancia: "",
        actividadDistancia: "",
        barrerasFisicasResidencia: "",
        barrerasFisicasActividad: "",
        controlIngresoResidencia: "",
        controlIngresoActividad: "",
        medidasTecnicasResidencia: "",
        medidasTecnicasActividad: "",
        puntosApoyoResidencia: "",
        puntosApoyoActividad: "",
        analisisDesplazamientos: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log("Formulario enviado:", formData);
            alert('Formulario enviado')
            setTimeout(() => {
                navigate("/");
            });
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Entornos"} />

            <ExpandableCard title="Análisis e Inspección">
                <ComponenteAnalisis />
            </ExpandableCard>

            <ExpandableCard title="Residencial">
                <ComponenteResidencial formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <ExpandableCard title="Actividad ó Función (Poblacional) Programa UNP">
                <ComponenteActividad formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <ExpandableCard title="Seguridad del Sitio">
                <ComponenteSeguridad formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <div className="d-flex justify-content-end mt-4 mb-4">
                <Button type="submit" variant="success">
                    Enviar
                </Button>
            </div>
            
        </Form >
    );
};

export default FormularioEntorno;
