import React, { useState } from "react";
import { Card, CardHeader, CardBody, Form, Button } from "react-bootstrap";
import UbicacionFecha from "./infoGeneral";
import HijosInfo from "./componenteFamiliar";
import ComponenteBiografico from "./componenteBiografico";
import { InfoLaboral } from "./componenteLaboral";
import { ComponenteConyugal } from "./componenteConyugal"
import { ComponentePadres } from "./componentePadres";
import { camposForm } from "./configForm";

export const FormularioEntrevista: React.FC = () => {
    const [formData, setFormData] = useState(camposForm);

    const [validated, setValidated] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleHijoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newHijos = [...formData.hijos];
        newHijos[index] = { ...newHijos[index], [name]: value };
        setFormData({ ...formData, hijos: newHijos });
    };

    const handleAddHijo = () => {
        setFormData({ ...formData, hijos: [...formData.hijos, { nombre: "", edad: "", actividad: "", residencia: "" }] });
    };

    const handleRemoveHijo = (index: number) => {
        const newHijos = formData.hijos.filter((_, i) => i !== index);
        setFormData({ ...formData, hijos: newHijos });
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
            <Card className="border-0 shadow mt-4">
                <CardHeader className="text-right bg-unp text-light py-3">Información general de la entrevista</CardHeader>
                <CardBody>
                    <UbicacionFecha formData={formData} handleChange={handleChange} />
                </CardBody>
            </Card>

            <Card className="border-0 shadow mt-4">
                <CardHeader className="text-right bg-unp text-light py-3">Componente biográfico</CardHeader>
                <CardBody>
                    <ComponenteBiografico formData={formData} handleChange={handleChange} />
                </CardBody>
            </Card>

            <Card className="border-0 shadow mt-4">
                <CardHeader className="text-right bg-unp text-light py-3">Componente familiar</CardHeader>
                <CardBody>
                    <ComponenteConyugal formData={formData} handleChange={handleChange} />
                    <HijosInfo
                        hijos={formData.hijos}
                        handleHijoChange={handleHijoChange}
                        handleAddHijo={handleAddHijo}
                        handleRemoveHijo={handleRemoveHijo}
                    />
                    <ComponentePadres formData={formData} handleChange={handleChange} />
                </CardBody>
            </Card>

            <Card className="border-0 shadow mt-4">
                <CardHeader className="text-right bg-unp text-light py-3">Componente laboral</CardHeader>
                <CardBody>
                    <InfoLaboral formData={formData} handleChange={handleChange} />
                </CardBody>
            </Card>

            <div className="d-flex justify-content-end mt-4 mb-4">
                <Button type="submit" variant="primary">
                    Enviar
                </Button>
            </div>
        </Form>
    );
};




