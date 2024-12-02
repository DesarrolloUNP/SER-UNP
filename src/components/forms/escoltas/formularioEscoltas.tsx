import React, { useState, useEffect } from "react";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import { Card, CardHeader, CardBody, Form, Button } from "react-bootstrap";
import ComponenteInfoEntrevista from "./componenteInfoEntrevista";
import ComponenteObservaciones from "./comportenteObservaciones";
import ExpandableCard from "../../../shared/tarjetaExpandible";
import { useNavigate } from "react-router-dom";


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

export const FormularioEscoltas: React.FC = () => {

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        tipoEntrevista: "",
        fechaHora: "",
        numeroIdentificacion: "",
        calidad: "",
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        departamento: "",
        municipio: "",
        telefonoOrigen: "",
        telefonoDestino: "",
        amenazas: "",
        desplazamientos: "",
        actividades: "",
        conductas: "",
        observaciones: "",
        zona: "",
        ruralFields: {},
        urbanaFields: {},
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const handleFieldChange = (e: React.ChangeEvent<any>, location: string) => {
        console.log(`Cambiando el campo ${e.target.name} a ${e.target.value}  que es ${location}`);
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData((prevState: any) => ({
            ...prevState,
            [location + "Fields"]: {
                ...prevState[location + "Fields"],
                [name]: fieldValue,
            },
        }));
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Escoltas"} />

            <ExpandableCard title="Información de la Entrevista">
                <ComponenteInfoEntrevista formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
            </ExpandableCard>

            <ExpandableCard title="Observaciones">
                <ComponenteObservaciones formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <div className="d-flex justify-content-end mt-4 mb-4">
                <Button type="submit" variant="success">
                    Enviar
                </Button>
            </div>
        </Form>
    );
};

export default FormularioEscoltas;
