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
        entidad: string;
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
                <SubtituloForm subtitulo={"SubPoblación"} icon={FaUsers} />
                <FormGroup>
                    <FormLabel>SubPoblación Objeto</FormLabel>
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

                <SubtituloForm subtitulo={"Entidad Solicitante"} icon={FaUsers} />
                <FormGroup>
                    <FormControl
                        type="text"
                        name="entidad"
                        value={formData.entidad}
                        onChange={handleChange}
                        maxLength={150}
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
                <FormGroup>
                    <FormLabel>Hechos Anteriores / Antecedentes*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="hechosAnteriores"
                        value={formData.hechosAnteriores}
                        onChange={handleChange}
                        placeholder="Describa los antecedentes o hechos anteriores."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.hechosAnteriores.length} caracteres restantes
                </Form.Text>

                <FormGroup>
                    <FormLabel>Hechos Actuales*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="hechosActuales"
                        value={formData.hechosActuales}
                        onChange={handleChange}
                        placeholder="Describa los hechos actuales."
                        maxLength={2000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {2000 - formData.hechosActuales.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Verificación"} icon={FaClipboardList} />
                <FormGroup>
                    <FormLabel>Actividades de Verificación*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="actividadesVerificacion"
                        value={formData.actividadesVerificacion}
                        onChange={handleChange}
                        placeholder="Describa las actividades de verificación realizadas."
                        maxLength={3000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {3000 - formData.actividadesVerificacion.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Conclusión del Analisis"} icon={FaUserPen} />
                <FormGroup>
                    <FormLabel>Conclusión *</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="conclusion"
                        value={formData.conclusion}
                        onChange={handleChange}
                        placeholder="Ingrese la conclusión del analisis."
                        maxLength={500}
                    />
                </FormGroup>
                <Form.Text muted>
                    {500 - formData.conclusion.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Pretenciones"} icon={FaMagnifyingGlass} />
                <FormGroup>
                    <FormLabel>Pretenciones de la Persona a Evaluar*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="pretencionesEvaluar"
                        value={formData.pretencionesEvaluar}
                        onChange={handleChange}
                        placeholder="Describa las pretenciones de la persona evaluada."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.pretencionesEvaluar.length} caracteres restantes
                </Form.Text>
            </>
    );
};

export default ComponenteDatosInforme;
