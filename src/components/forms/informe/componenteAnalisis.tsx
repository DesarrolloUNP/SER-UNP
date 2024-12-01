import React, { ChangeEvent, useEffect, useRef } from "react";
import { Form, Col, FormGroup, FormLabel, FormControl, FormSelect } from "react-bootstrap";
import { FaUsers, FaUserShield, FaBook, FaClipboardList } from "react-icons/fa";
import { SubtituloForm } from "eco-unp/ui";
import { FaUserPen, FaMagnifyingGlass } from "react-icons/fa6";

interface ComponenteDatosInformeProps {
    formData: {
        poblacionObjeto: string;
        tipoEstudio: string;
        hechosAnteriores: string;
        hechosActuales: string;
        actividadesVerificacion: string;
        conclusion: string;
        pretencionesEvaluar: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteDatosInforme: React.FC<ComponenteDatosInformeProps> = ({ formData, handleChange }) => {

    const poblacionObjetoRef = useRef<HTMLTextAreaElement>(null);


    const adjustTextareaHeight = () => {
        if (poblacionObjetoRef.current) {
            poblacionObjetoRef.current.style.height = "auto";
            poblacionObjetoRef.current.style.height = `${poblacionObjetoRef.current.scrollHeight}px`;
        }
    };


    useEffect(() => {
        adjustTextareaHeight();
    }, [formData.poblacionObjeto]);

    useEffect(() => {
        const handleResize = () => adjustTextareaHeight();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
            <>
                <SubtituloForm subtitulo={"Población"} icon={FaUsers} />
                <FormGroup>
                    <FormLabel>Población Objeto</FormLabel>
                    <FormControl
                        as="textarea"
                        name="poblacionObjeto"
                        value={formData.poblacionObjeto}
                        onChange={handleChange}
                        readOnly
                        ref={poblacionObjetoRef}
                        style={{
                            backgroundColor: "#f5f5f5",
                            color: "#6c757d",
                            resize: "none",
                            overflow: "hidden",
                        }}
                    />
                </FormGroup>

                <SubtituloForm subtitulo={"Tipo de Estudio"} icon={FaUserShield} />
                <Col md={6}>
                <FormGroup>
                    <FormSelect>
                        <option value="">Seleccione...</option>
                        <option>Estudio por primera vez</option>
                        <option>Reevaluación por temporalidad</option>
                        <option>Reevaluación por hechos sobrevinientes</option>
                        <option>Devolución por CERREM</option>
                        <option>Evaluación de riesgo otra solicitud</option>
                    </FormSelect>
                </FormGroup>
                </Col>

                <SubtituloForm subtitulo={"Hechos"} icon={FaBook} />
                <FormGroup className="mb-2">
                    <FormLabel>Hechos Anteriores / Antecedentes*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="hechosAnteriores"
                        value={formData.hechosAnteriores}
                        onChange={handleChange}
                        placeholder="Describa los antecedentes o hechos anteriores."
                    />
                </FormGroup>

                <FormGroup className="mb-2">
                    <FormLabel>Hechos Actuales*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="hechosActuales"
                        value={formData.hechosActuales}
                        onChange={handleChange}
                        placeholder="Describa los hechos actuales."
                    />
                </FormGroup>

                <SubtituloForm subtitulo={"Verificación"} icon={FaClipboardList} />
                <FormGroup className="mb-3">
                    <FormLabel>Actividades de Verificación*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="actividadesVerificacion"
                        value={formData.actividadesVerificacion}
                        onChange={handleChange}
                        placeholder="Describa las actividades de verificación realizadas."
                    />
                </FormGroup>

                <SubtituloForm subtitulo={"Conclusión del Analisis"} icon={FaUserPen} />
                <FormGroup className="mb-3">
                    <FormLabel>Conclusión *</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="conclusion"
                        value={formData.conclusion}
                        onChange={handleChange}
                        placeholder="Ingrese la conclusión del analisis."
                    />
                </FormGroup>

                <SubtituloForm subtitulo={"Pretenciones"} icon={FaMagnifyingGlass} />
                <FormGroup className="mb-3">
                    <FormLabel>Pretenciones de la Persona a Evaluar*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="pretencionesEvaluar"
                        value={formData.pretencionesEvaluar}
                        onChange={handleChange}
                        placeholder="Describa las pretenciones de la persona evaluada."
                    />
                </FormGroup>
            </>
    );
};

export default ComponenteDatosInforme;
