import React, { useEffect, useState } from "react";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import { Card, Button, Form, CardHeader } from "react-bootstrap";
import ExpandableCard from "../../../shared/tarjetaExpandible";
import ComponenteDatosInforme from "./componenteAnalisis";
import ComponenteDatosInforme2 from "./componenteAnalisis2";
import ComponenteAmenaza from "./componenteAmenaza";
import { Paginador } from "../../../shared/paginadorFormulario";
import { steps } from "./pasosPaginador";
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
    segundoApellido: "González",
    poblacionObjeto: "Víctimas de violaciones a los DDHH e infracciones al DIH, incluyendo dirigentes, líderes, representantes de Organizaciones  de población desplazada o de reclamantes de tierras en situación de riesgo extraordinario o extremo. (Numeral 9 artículo 2.4.1.2.6. del Decreto 1066 de 2015). Comprende las victimas relacionados en el inciso primero del artículo 31 de la ley 1448 de 2011, que intervienen en los procesos administrativos y judiciales de reparación y en especial de restitución de tierras. ",
    evaluacionesRiesgoAnteriores: "Evaluación de riesgo otra solicitud",
    medidasProteccionVigentes: "Medidas Vigentes...",
    factorDiferencialGenero: "Victima del conflicto armado",
};

export const FormularioInforme: React.FC = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        poblacionObjeto: datosOrden.poblacionObjeto,
        tipoEstudio: "",
        hechosAnteriores: "",
        hechosActuales: "",
        actividadesVerificacion: "",
        conclusion: "",
        pretencionesEvaluar: "",
        evaluacionesRiesgoAnteriores: datosOrden.evaluacionesRiesgoAnteriores,
        sugerenciasRecomendaciones: "",
        medidasProteccionVigentes: datosOrden.medidasProteccionVigentes,
        medidasEmergencia: "",
        contextoOrdenPublico: "",
        nucleoFamiliar: "",
        informesRiesgoDefensoria: "",
        medidasCautelares: "",
        factorDiferencialGenero: datosOrden.factorDiferencialGenero,
        fecha: "",
        zonaRiesgo: "",
        posibleAutor: {
            gao: "",
            gaor: "",
            gdo: "",
            gdco: "",
            desconocido: false,
            otro: "",
        },
        forma: {
            escrita: "",
            telefonica: "",
            mediosMagneticos: "",
            informacionTerceros: false,
            objetoSimbolico: false,
            verbal: false,
        },
        causaOMotivo: {
            laboral: false,
            personal: false,
            politico: false,
            economico: false,
            funcionPublica: false,
            funcionSocial: false,
            funcionHumanitaria: false,
            funcionSindical: false,
            ideologico: false,
            otras: false,
            cuales: "",
        },
        observaciones: "",
    });

    const totalPages = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = type === "checkbox" && (e.target as HTMLInputElement).checked;

        if (name.includes(".")) {

            const [parent, child] = name.split(".");
            setFormData((prev) => ({
                ...prev,
                [parent]: {
                    ...(prev[parent as keyof typeof prev] as object),
                    [child]: type === "checkbox" ? checked : value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
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

    const renderPageContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <ExpandableCard title="Analisis">
                        <ComponenteDatosInforme formData={formData} handleChange={handleChange} />
                    </ExpandableCard>
                );
            case 2:
                return (
                    <ExpandableCard title="Desarrollo">
                        <ComponenteDatosInforme2 formData={formData} handleChange={handleChange} />
                    </ExpandableCard>
                );
            case 3:
                return (
                    <ExpandableCard title="Características de la Presunta Amenaza">
                        <ComponenteAmenaza formData={formData} handleChange={handleChange} />
                    </ExpandableCard>
                );
            default:
                return null;
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Informe Ejecución"} />

            <Card className="border-0 shadow mt-5 mb-4 pt-3" style={{ backgroundColor: "#F9F9F9" }}>
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
                {currentPage < totalPages && (
                    <Button variant="primary" onClick={() => setCurrentPage(currentPage + 1)}>
                        Siguiente
                    </Button>
                )}
                {currentPage === totalPages && (
                    <Button type="submit" variant="success">
                        Enviar
                    </Button>
                )}
            </div>
        </Form>
    );
};

export default FormularioInforme;
