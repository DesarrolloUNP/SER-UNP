import React, { ChangeEvent, useEffect, useRef } from "react";
import { Form, Col, FormGroup, FormLabel, FormControl, FormSelect } from "react-bootstrap";
import { FaUserShield, FaHouseUser } from "react-icons/fa";
import { SubtituloForm } from "eco-unp/ui";
import { FaMagnifyingGlass, FaScaleBalanced, FaUserTag } from "react-icons/fa6";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";

interface ComponenteDatosInforme2Props {
    formData: {
        evaluacionesRiesgoAnteriores: string;
        sugerenciasRecomendaciones: string;
        medidasProteccionVigentes: string;
        medidasEmergencia: string;
        contextoOrdenPublico: string;
        nucleoFamiliar: string;
        informesRiesgoDefensoria: string;
        medidasCautelares: string;
        factorDiferencialGenero: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteDatosInforme2: React.FC<ComponenteDatosInforme2Props> = ({ formData, handleChange }) => {

    return (
            <>
                <SubtituloForm subtitulo={"Evaluaciones Anteriores"} icon={FaUserShield} />
                <FormGroup>
                    <FormLabel>Evaluaciones de Riesgo Anteriores</FormLabel>
                    <FormControl
                        type="text"
                        name="evaluacionesRiesgoAnteriores"
                        value={formData.evaluacionesRiesgoAnteriores}
                        onChange={handleChange}
                        readOnly
                        style={{
                            backgroundColor: "#f5f5f5",
                            color: "#6c757d",
                            resize: "none",
                            overflow: "hidden",
                        }}
                    />
                </FormGroup>

                <SubtituloForm subtitulo={"Medidas de Proteccion"} icon={FaUserShield} />
                <FormGroup>
                    <FormLabel>Recomendaciones de Medidas de Protección*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="sugerenciasRecomendaciones"
                        value={formData.sugerenciasRecomendaciones}
                        onChange={handleChange}
                        placeholder="Escriba las recomendaciones."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.sugerenciasRecomendaciones.length} caracteres restantes
                </Form.Text>

                <FormGroup>
                    <FormLabel>Medidas de Protección Vigentes*</FormLabel>
                    <FormControl 
                        className="mb-3"
                        as="textarea"
                        name="medidasProteccionVigentes"
                        value={formData.medidasProteccionVigentes}
                        onChange={handleChange}
                        readOnly
                        style={{
                            backgroundColor: "#f5f5f5",
                            color: "#6c757d",
                            resize: "none",
                            overflow: "hidden",
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Medidas de Emergencia</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="medidasEmergencia"
                        value={formData.medidasEmergencia}
                        onChange={handleChange}
                        placeholder="Indique las medidas de emergencia."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.medidasEmergencia.length} caracteres restantes
                </Form.Text>
                
                <SubtituloForm subtitulo={"Contexto"} icon={FaMagnifyingGlass} />
                <FormGroup>
                    <FormLabel>Contexto Orden Público*</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="contextoOrdenPublico"
                        value={formData.contextoOrdenPublico}
                        onChange={handleChange}
                        placeholder="Describa el contexto de orden público"
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.contextoOrdenPublico.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Familia"} icon={FaHouseUser} />
                <FormGroup>
                    <FormLabel>Núcleo Familiar</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="nucleoFamiliar"
                        value={formData.nucleoFamiliar}
                        onChange={handleChange}
                        placeholder="Describa el núcleo familiar."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.nucleoFamiliar.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Informes de Riesgo / Alertas Tempranas"} icon={BsFileEarmarkSpreadsheetFill} />
                <FormGroup>
                    <FormLabel>Informes de Riesgo y Alertas Tempranas Vigentes</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="informesRiesgoDefensoria"
                        value={formData.informesRiesgoDefensoria}
                        onChange={handleChange}
                        placeholder="Escriba los informes de riesgo actuales."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.informesRiesgoDefensoria.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Medidas Cautelares"} icon={FaScaleBalanced} />
                <FormGroup>
                    <FormLabel>Medidas Cautelares</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={3}
                        name="medidasCautelares"
                        value={formData.medidasCautelares}
                        onChange={handleChange}
                        placeholder="Especifique las medidas cautelares."
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.medidasCautelares.length} caracteres restantes
                </Form.Text>

                <SubtituloForm subtitulo={"Factor Diferencial"} icon={FaUserTag} />
                <FormGroup>
                    <FormLabel>Factor Diferencial y/o de Género</FormLabel>
                    <FormControl
                        type="text"
                        name="factorDiferencialGenero"
                        value={formData.factorDiferencialGenero}
                        onChange={handleChange}
                        readOnly
                        style={{
                            backgroundColor: "#f5f5f5",
                            color: "#6c757d",
                            resize: "none",
                            overflow: "hidden",
                        }}
                    />
                </FormGroup>
            </>
    );
};

export default ComponenteDatosInforme2;
