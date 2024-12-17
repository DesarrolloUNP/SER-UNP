import {
    React, useEffect, useState, Form, Button, Card, HijosInfo, ComponenteBiografico, InfoLaboral, ComponenteConyugal, ComponenteFliaOrigen, camposForm,
    denuncias, desplazamientos, familiares, hijos, historialActividadPoblacional, personasCargo, steps, datosOrden, InformacionOrdenTrabajo, ExpandableCard,
    PersonasCargoInfo, Paginador, RelacionFamiliar, ActividadPoblacional, HistorialInfo, InfoGeneral, DatosNotificacion, GrupoPoblacionalInfo, Medidas, RutasInfo,
    Entorno, DenunciasInfo, RelatoHechos, ArchivosInfo, useNavigate
} from './import';

export const FormularioEntrevista: React.FC = () => {

    //Formulario
    const [formData, setFormData] = useState(camposForm);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" || type === "switch" ? checked : value;
        setFormData((prevState) => ({
            ...prevState,
            [name]: fieldValue,
        }));
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

    //Métodos genéricos
    type SeccionArray = keyof Pick<typeof camposForm, 'hijos' | 'familiares' | 'personasCargo' | 'historialActividadPoblacional' | 'desplazamientos' | 'denuncias' | 'anexos'>;

    const handleAddItem = (section: SeccionArray, newItem: any) => {
        if (Array.isArray(formData[section])) {
            setFormData({
                ...formData,
                [section]: [...formData[section], newItem],
            });
        } else { console.error(`La sección "${section}" no es un array.`); }
    };

    const handleRemoveItem = (section: SeccionArray, index: number) => {
        if (Array.isArray(formData[section])) {
            setFormData({
                ...formData,
                [section]: formData[section].filter((_, i) => i !== index),
            });
        } else { console.error(`La sección "${section}" no es un array.`); }
    };

    const handleItemChange = (section: SeccionArray, index: number, e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        if (Array.isArray(formData[section])) {
            const updatedSection = [...formData[section]];
            updatedSection[index] = { ...updatedSection[index], [name]: value };
            setFormData({ ...formData, [section]: updatedSection });
        } else { console.error(`La sección "${section}" no es un array.`); }
    };

    //Hijos
    const handleHijoChange = (index: number, e: React.ChangeEvent<any>) =>
        handleItemChange("hijos", index, e);

    const handleAddHijo = () =>
        handleAddItem("hijos", hijos);

    const handleRemoveHijo = (index: number) =>
        handleRemoveItem("hijos", index);

    //Familia de origen
    const handleFliaOrigenChange = (index: number, e: React.ChangeEvent<any>) =>
        handleItemChange("familiares", index, e);

    const handleAddFliaOrigen = () =>
        handleAddItem("familiares", familiares);

    const handleRemoveFliaOrigen = (index: number) =>
        handleRemoveItem("familiares", index);

    //Personas a cargo
    const handlePersonaAcargoChange = (index: number, e: React.ChangeEvent<any>) =>
        handleItemChange("personasCargo", index, e);

    const handleAddPersonaAcargo = () =>
        handleAddItem("personasCargo", personasCargo);

    const handleRemovePersonaAcargo = (index: number) =>
        handleRemoveItem("personasCargo", index);

    //Historial
    const handleHistorialChange = (index: number, e: React.ChangeEvent<any>) =>
        handleItemChange("historialActividadPoblacional", index, e);

    const handleAddHistorial = () =>
        handleAddItem("historialActividadPoblacional", historialActividadPoblacional);

    const handleRemoveHistorial = (index: number) =>
        handleRemoveItem("historialActividadPoblacional", index);

    //Desplazamientos
    const handleRutasChange = (index: number, e: React.ChangeEvent<any>) =>
        handleItemChange("desplazamientos", index, e);

    const handleAddRutas = () =>
        handleAddItem("desplazamientos", desplazamientos);

    const handleRemoveRuta = (index: number) =>
        handleRemoveItem("desplazamientos", index);

    //Denuncias
    const handleDenunciasChange = (index: number, e: React.ChangeEvent<any>) =>
        handleItemChange("denuncias", index, e);

    const handleAddDenuncias = () =>
        handleAddItem("denuncias", denuncias);

    const handleRemoveDenuncias = (index: number) =>
        handleRemoveItem("denuncias", index);

    //Anexos
    const handleArchivoChange = (index: number, e: React.ChangeEvent<any>) => {
        const newArchivos = [...formData.anexos];
        newArchivos[index].archivo = e.target.files ? e.target.files[0] : null;
        setFormData({ ...formData, anexos: newArchivos });
    };

    const handleAddArchivo = () =>
        handleAddItem("anexos", { archivo: null });

    const handleRemoveArchivo = (index: number) =>
        handleRemoveItem("anexos", index);

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
                            <InfoGeneral formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
                        </ExpandableCard>
                        <ExpandableCard title="Componente biográfico">
                            <ComponenteBiografico
                                formData={formData}
                                handleChange={handleChange}
                                updateFormData={(field, value) => setFormData(prevState => ({ ...prevState, [field]: value }))}
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
                    <div>
                        <ExpandableCard title="Componente laboral">
                            <InfoLaboral formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
                        </ExpandableCard>
                        <ExpandableCard title="Componente actividad poblacional">
                            <ActividadPoblacional formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange}></ActividadPoblacional>
                        </ExpandableCard>
                        <ExpandableCard title="Historial de actividad poblacional">
                            <HistorialInfo
                                historial={formData.historialActividadPoblacional}
                                handleHistorialChange={handleHistorialChange}
                                handleAddHistorial={handleAddHistorial}
                                handleRemoveHistorial={handleRemoveHistorial}
                            />
                        </ExpandableCard>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <ExpandableCard title="Datos de notificación">
                            <DatosNotificacion formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
                        </ExpandableCard>
                    </div>
                )
            case 5:
                return (
                    <ExpandableCard title="Grupo poblacional">
                        <GrupoPoblacionalInfo formData={formData} handleChange={handleChange} handleFieldChange={handleFieldChange} />
                    </ExpandableCard>
                )
            case 6:
                return (
                    <ExpandableCard title="Medidas de protección">
                        <Medidas formData={formData} handleChange={handleChange} />
                    </ExpandableCard>
                )
            case 7:
                return (
                    <div>
                        <ExpandableCard title="Desplazamientos">
                            <RutasInfo
                                desplazamientos={formData.desplazamientos}
                                handleRutasChange={handleRutasChange}
                                handleAddRutas={handleAddRutas}
                                handleRemoveRuta={handleRemoveRuta} />
                        </ExpandableCard>
                        <ExpandableCard title="Entorno sociocultural">
                            <Entorno formData={formData} handleChange={handleChange} />
                        </ExpandableCard>
                    </div>

                )
            case 8:
                return (
                    <ExpandableCard title="Denuncias o quejas ante autoridades competentes">
                        <DenunciasInfo
                            denuncias={formData.denuncias}
                            handleDenunciasChange={handleDenunciasChange}
                            handleAddDenuncias={handleAddDenuncias}
                            handleRemoveDenuncias={handleRemoveDenuncias} />
                    </ExpandableCard>
                )
            case 9:
                return (<>
                    <ExpandableCard title="Relato de los hechos">
                        <RelatoHechos formData={formData} handleChange={handleChange} />
                    </ExpandableCard>
                    <ExpandableCard title="Documentación entregada por el evaluado">
                        <ArchivosInfo
                            archivos={formData.anexos}
                            handleArchivoChange={handleArchivoChange}
                            handleAddArchivo={handleAddArchivo}
                            handleRemoveArchivo={handleRemoveArchivo} />
                    </ExpandableCard>
                </>
                )
            default:
                return null;
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit} >
                <InformacionOrdenTrabajo datos={datosOrden} titulo={"Entrevista"} />
                <Card className="border-0 shadow mt-5 mb-4 pt-3" style={{ backgroundColor: '#F9F9F9' }}>
                    <Paginador
                        currentStep={currentPage}
                        totalSteps={totalPages}
                        onStepClick={(step) => setCurrentPage(step)}
                        steps={steps}
                    />
                </Card>
                {renderPageContent()}
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
        </>
    );
};





