import React, { useState } from "react";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import { Card, CardHeader, CardBody, Form } from "react-bootstrap";
import ComponenteInfoEntrevista from "./componenteInfoEntrevista"; // Nombre ajustado aquí

export const FormularioEscoltas: React.FC = () => {
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

    const [formData, setFormData] = useState({
        tipoEntrevista: "",
        fechaHora: "",
        numeroIdentificacion: "",
        calidad: "",
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        direccion: "",
        departamento: "",
        municipio: "",
        telefonoOrigen: "",
        telefonoDestino: "",
        amenazas: "",
        desplazamientos: "",
        actividades: "",
        conductas: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Form>
            <Card className="border-0 shadow mt-4">
                
                <InformacionOrdenTrabajo datos={datosOrden} titulo={"ESCOLTAS"} />
            </Card>

            <Card className="border-0 shadow mt-4">
                <CardHeader className="text-right bg-unp text-light py-3">INFORMACIÓN DE LA ENTREVISTA</CardHeader>
                <CardBody>
                    <ComponenteInfoEntrevista formData={formData} handleChange={handleChange} />
                </CardBody>
            </Card>

            <Card className="border-0 shadow mt-4">
                <CardHeader className="text-right bg-unp text-light py-3">OBSERVACIONES</CardHeader>
                <CardBody>
                    {/* Aquí puedes agregar campos adicionales para observaciones si es necesario */}
                </CardBody>
            </Card>
        </Form>
    );
};

export default FormularioEscoltas;
