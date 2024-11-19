import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import UbicacionFecha from "./infoGeneral";
import HijosInfo from "./componenteFamiliar";
import ComponenteBiografico from "./componenteBiografico";
import { InfoLaboral } from "./componenteLaboral";
import { ComponenteConyugal } from "./componenteConyugal"
import { ComponentePadres } from "./componentePadres";
import { camposForm } from "./configForm";
import { datosOrden } from "../entorno/formularioEntorno";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import ExpandableCard from "../../../shared/tarjetaExpandible";
import PersonasCargoInfo from "./componentePersonasAcargo";

export const FormularioEntrevista: React.FC = () => {

    const [formData, setFormData] = useState(camposForm);
    const [validated, setValidated] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Hijos
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

    //Personas a cargo
    const handlePersonaAcargoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newPersonasCargo = [...formData.personasCargo];
        newPersonasCargo[index] = { ...newPersonasCargo[index], [name]: value };
        setFormData({ ...formData, personasCargo: newPersonasCargo });
    };

    const handleAddPersonaAcargo = () => {
        setFormData({ ...formData, personasCargo: [...formData.personasCargo, { nombres: "", edad: "", parentesco: "", residencia: "" }] });
    };

    const handleRemovePersonaAcargo = (index: number) => {
        const newPersonasCargo = formData.personasCargo.filter((_, i) => i !== index);
        setFormData({ ...formData, personasCargo: newPersonasCargo });
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

            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Entrevista"} />

            <ExpandableCard title="Información general de la entrevista">
                <UbicacionFecha formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <ExpandableCard title="Componente biográfico">
                <ComponenteBiografico formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <ExpandableCard title="Componente familiar">
                <ComponenteConyugal formData={formData} handleChange={handleChange} />
                <HijosInfo
                    hijos={formData.hijos}
                    handleHijoChange={handleHijoChange}
                    handleAddHijo={handleAddHijo}
                    handleRemoveHijo={handleRemoveHijo}
                />
                <ComponentePadres formData={formData} handleChange={handleChange} />
                <PersonasCargoInfo
                    personasCargo={formData.personasCargo}
                    handlePersonaAcargoChange={handlePersonaAcargoChange}
                    handleAddPersonaAcargo={handleAddPersonaAcargo}
                    handleRemovePersonaAcargo={handleRemovePersonaAcargo}
                />
            </ExpandableCard>

            <ExpandableCard title="Componente laboral">
                <InfoLaboral formData={formData} handleChange={handleChange} />
            </ExpandableCard>

            <div className="d-flex justify-content-end mt-4 mb-4">
                <Button type="submit" variant="primary">
                    Enviar
                </Button>
            </div>
        </Form>
    );
};




