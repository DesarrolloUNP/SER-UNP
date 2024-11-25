import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import UbicacionFecha from "./infoGeneral";
import HijosInfo from "./componenteFamiliar";
import ComponenteBiografico from "./componenteBiografico";
import { InfoLaboral } from "./componenteLaboral";
import { ComponenteConyugal } from "./componenteConyugal";
import { ComponenteFliaOrigen } from "./componentePadres";
import { camposForm, steps } from "./configForm";
import { datosOrden } from "../entorno/formularioEntorno";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import ExpandableCard from "../../../shared/tarjetaExpandible";
import PersonasCargoInfo from "./componentePersonasAcargo";
import { Paginador } from "../../../shared/paginadorFormulario";
import { RelacionFamiliar } from "./componenteRelacionFamilia";

export const FormularioEntrevista: React.FC = () => {

    //Formulario
    const [formData, setFormData] = useState(camposForm);
    const [validated, setValidated] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    //Hijos
    const handleHijoChange = (index: number, e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        const newHijos = [...formData.hijos];
        newHijos[index] = { ...newHijos[index], [name]: value };
        setFormData({ ...formData, hijos: newHijos });
    };

    const handleAddHijo = () => {
        setFormData({
            ...formData,
            hijos: [...formData.hijos, { nombres: "", apellidos: "", edad: "", actividad: "", numeroContacto: "", factorDiferencial: "", subfactorDifrencial: "", causaMuerte: "" }],
        });
    };

    const handleRemoveHijo = (index: number) => {
        const newHijos = formData.hijos.filter((_, i) => i !== index);
        setFormData({ ...formData, hijos: newHijos });
    };

    //Familia de origen
    const handleFliaOrigenChange = (index: number, e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        const newFamiliares = [...formData.familiares];
        newFamiliares[index] = { ...newFamiliares[index], [name]: value };
        setFormData({ ...formData, familiares: newFamiliares });
    };

    const handleAddFliaOrigen = () => {
        setFormData({
            ...formData,
            familiares: [...formData.familiares, { tipo: "", nombres: "", apellidos: "", ocupacion: "", numeroContacto: "", factorDiferencial: "", subfactorDifrencial: "", causaMuerte: "" }],
        });
    };

    const handleRemoveFliaOrigen = (index: number) => {
        const newFamiliares = formData.familiares.filter((_, i) => i !== index);
        setFormData({ ...formData, familiares: newFamiliares });
    };

    //Personas a cargo
    const handlePersonaAcargoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newPersonasCargo = [...formData.personasCargo];
        newPersonasCargo[index] = { ...newPersonasCargo[index], [name]: value };
        setFormData({ ...formData, personasCargo: newPersonasCargo });
    };

    const handleAddPersonaAcargo = () => {
        setFormData({
            ...formData,
            personasCargo: [
                ...formData.personasCargo, { nombres: "", apellidos: "", edad: "", residencia: "", parentesco: "", factorDiferencial: "", subfactorDifrencial: "" },
            ],
        });
    };

    const handleRemovePersonaAcargo = (index: number) => {
        const newPersonasCargo = formData.personasCargo.filter((_, i) => i !== index);
        setFormData({ ...formData, personasCargo: newPersonasCargo });
    };

    // Paginador
    const totalPages = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const renderPageContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <>
                        <ExpandableCard title="Información general de la entrevista">
                            <UbicacionFecha formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
                        </ExpandableCard>
                        <ExpandableCard title="Componente biográfico">
                            <ComponenteBiografico
                                formData={formData}
                                handleChange={handleChange}
                                updateFormData={(field, value) =>
                                    setFormData(prevState => ({ ...prevState, [field]: value }))
                                }
                            />
                        </ExpandableCard>
                    </>
                );
            case 2:
                return (
                    <div>
                        <ExpandableCard title="Familia nuclear">
                            <ComponenteConyugal formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
                            <HijosInfo
                                hijos={formData.hijos}
                                handleHijoChange={handleHijoChange}
                                handleAddHijo={handleAddHijo}
                                handleRemoveHijo={handleRemoveHijo} />
                        </ExpandableCard>
                        <ExpandableCard title="Familia de origen">
                            <ComponenteFliaOrigen familiares={formData.familiares}
                                handleFliaOrigenChange={handleFliaOrigenChange}
                                handleAddFliaOrigen={handleAddFliaOrigen}
                                handleRemoveFliaOrigen={handleRemoveFliaOrigen} />
                        </ExpandableCard>
                        <ExpandableCard title="Dependientes familiares">
                            <PersonasCargoInfo
                                personasCargo={formData.personasCargo}
                                handlePersonaAcargoChange={handlePersonaAcargoChange}
                                handleAddPersonaAcargo={handleAddPersonaAcargo}
                                handleRemovePersonaAcargo={handleRemovePersonaAcargo}
                            />
                        </ExpandableCard>
                        <ExpandableCard title="Relación familiar">
                            <RelacionFamiliar formData={formData} handleChange={handleChange} ></RelacionFamiliar>
                        </ExpandableCard>
                    </div>

                );
            case 3:
                return (
                    <ExpandableCard title="Componente laboral">
                        <InfoLaboral formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange}/>
                    </ExpandableCard>
                );
            default:
                return null;
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Card className="border-0 shadow mt-5 mb-4 pt-3" style={{ backgroundColor: '#F9F9F9' }}>
                <Paginador
                    currentStep={currentPage}
                    totalSteps={totalPages}
                    onStepClick={(step) => setCurrentPage(step)}
                    steps={steps}
                />
            </Card>

            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Entrevista"} />

            {renderPageContent()} {/*Función que distribuye las páginas*/}

            <div className="d-flex justify-content-between m-4">
                {currentPage > 1 && (
                    <Button variant="secondary" onClick={() => setCurrentPage(currentPage - 1)}>
                        Anterior
                    </Button>
                )}
                {currentPage < totalPages - 1 && (
                    <Button variant="primary" onClick={() => setCurrentPage(currentPage + 1)}>
                        Siguiente
                    </Button>
                )}
                {currentPage === totalPages - 1 && (
                    <Button type="submit" variant="success">
                        Enviar
                    </Button>
                )}
            </div>
        </Form>
    );
};





