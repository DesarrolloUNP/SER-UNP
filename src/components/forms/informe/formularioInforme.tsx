import React, { useState } from "react";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import { Card, CardHeader, CardBody, Form, Button } from "react-bootstrap";
import ExpandableCard from "../../../shared/tarjetaExpandible";


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

export const FormularioInforme: React.FC = () => {

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({

    });

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
        }
        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <InformacionOrdenTrabajo datos={datosOrden} titulo={"ESCOLTAS"} />

            <div className="d-flex justify-content-end mt-4 mb-4">
                <Button type="submit" variant="primary">
                    Enviar
                </Button>
            </div>
        </Form>
    );
};

export default FormularioInforme;
