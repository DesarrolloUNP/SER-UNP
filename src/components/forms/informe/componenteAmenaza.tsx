import React, { ChangeEvent } from "react";
import { Form, FormGroup, FormLabel, FormCheck, Row, Col, FormControl, FormSelect } from "react-bootstrap";
import { SubtituloForm } from "eco-unp/Ui";
import { FaUserShield, FaCommentAlt } from "react-icons/fa";

interface ComponenteAmenazaProps {
    formData: {
        fecha: string;
        zonaRiesgo: string;
        posibleAutor: {
            gao: string;
            gaor: string;
            gdo: string;
            gdco: string;
            desconocido: boolean;
            otro: string;
        };
        forma: {
            escrita: string;
            telefonica: string;
            mediosMagneticos: string;
            informacionTerceros: boolean;
            objetoSimbolico: boolean;
            verbal: boolean;
        };
        causaOMotivo: {
            laboral: boolean;
            personal: boolean;
            politico: boolean;
            economico: boolean;
            funcionPublica: boolean;
            funcionSocial: boolean;
            funcionHumanitaria: boolean;
            funcionSindical: boolean;
            ideologico: boolean;
            otras: boolean;
            cuales: string;
        };
        observaciones: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

type BooleanKeys = Exclude<keyof ComponenteAmenazaProps["formData"]["causaOMotivo"], "cuales">;

const ComponenteAmenaza: React.FC<ComponenteAmenazaProps> = ({ formData, handleChange }) => {
    return (
        <>
            <SubtituloForm subtitulo={"Características de la Amenaza"} icon={FaUserShield} />
            <Row>
                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Fecha</FormLabel>
                        <FormControl
                            type="date"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Zona de Riesgo</FormLabel>
                        <FormSelect
                            name="zonaRiesgo"
                            value={formData.zonaRiesgo}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Zona de Riesgo 1">Zona de Riesgo 1</option>
                            <option value="Zona de Riesgo 2">Zona de Riesgo 2</option>
                            <option value="Zona de Riesgo 3">Zona de Riesgo 3</option>
                            <option value="Zona de Riesgo 4">Zona de Riesgo 4</option>
                        </FormSelect>
                    </FormGroup>
                </Col>
            </Row>

            <SubtituloForm subtitulo={"Posible Autor"} icon={FaUserShield} />
            <Row>
                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Grupos Armados Organizados <br /> GAO</FormLabel>
                        <FormSelect
                            name="posibleAutor.gao"
                            value={formData.posibleAutor.gao}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Ejemplo 1">Ejemplo 1</option>
                            <option value="Ejemplo 2">Ejemplo 2</option>
                        </FormSelect>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Grupos Armados Organizados residuales <br /> GAOR - DISIDENCIA FARC</FormLabel>
                        <FormSelect
                            name="posibleAutor.gaor"
                            value={formData.posibleAutor.gaor}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Ejemplo 1">Ejemplo 1</option>
                            <option value="Ejemplo 2">Ejemplo 2</option>
                        </FormSelect>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Grupos Delictivos Organizados <br /> GDO</FormLabel>
                        <FormSelect
                            name="posibleAutor.gdo"
                            value={formData.posibleAutor.gdo}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Ejemplo 1">Ejemplo 1</option>
                            <option value="Ejemplo 2">Ejemplo 2</option>
                        </FormSelect>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Grupos Delincuencia Común Organizada <br /> GDCO</FormLabel>
                        <FormSelect
                            name="posibleAutor.gdco"
                            value={formData.posibleAutor.gdco}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Ejemplo 1">Ejemplo 1</option>
                            <option value="Ejemplo 2">Ejemplo 2</option>
                        </FormSelect>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Desconocido</FormLabel>
                        <FormCheck
                            type="checkbox"
                            name="posibleAutor.desconocido"
                            checked={formData.posibleAutor.desconocido}
                            onChange={handleChange}
                            label="Desconocido"
                        />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Otro</FormLabel>
                        <FormControl
                            type="text"
                            name="posibleAutor.otro"
                            value={formData.posibleAutor.otro}
                            onChange={handleChange}
                            placeholder="Especifique otro autor"
                        />
                    </FormGroup>
                </Col>
            </Row>

            <SubtituloForm subtitulo={"Forma"} icon={FaUserShield} />
            <Row>
                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Escrita</FormLabel>
                        <FormSelect
                            name="forma.escrita"
                            value={formData.forma.escrita}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione</option>
                            <option value="Pasquín">Pasquín</option>
                            <option value="Panfleto">Panfleto</option>
                            <option value="Sufragio">Sufragio</option>
                            <option value="Tarjeta de Condolencia">Tarjeta de Condolencia</option>
                            <option value="Otra denominación">Otra denominación</option>
                        </FormSelect>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Telefónica</FormLabel>
                        <FormSelect
                            name="forma.telefonica"
                            value={formData.forma.telefonica}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione</option>
                            <option value="Fijo">Fijo</option>
                            <option value="Celular">Celular</option>
                            <option value="Mensaje de Texto">Mensaje de Texto</option>
                        </FormSelect>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup className="mb-3">
                        <FormLabel>Medios magnéticos</FormLabel>
                        <FormSelect
                            name="forma.mediosMagneticos"
                            value={formData.forma.mediosMagneticos}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione</option>
                            <option value="Mail">Mail</option>
                            <option value="Redes Sociales">Redes Sociales</option>
                            <option value="WhatsApp">WhatsApp</option>
                        </FormSelect>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <FormGroup className="mb-3">
                        <FormLabel>Información terceros</FormLabel>
                        <FormCheck
                            type="checkbox"
                            name="forma.informacionTerceros"
                            checked={formData.forma.informacionTerceros}
                            onChange={handleChange}
                            label="Información terceros"
                        />
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup className="mb-3">
                        <FormLabel>Objeto simbólico</FormLabel>
                        <FormCheck
                            type="checkbox"
                            name="forma.objetoSimbolico"
                            checked={formData.forma.objetoSimbolico}
                            onChange={handleChange}
                            label="Objeto simbólico"
                        />
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup className="mb-3">
                        <FormLabel>Verbal</FormLabel>
                        <FormCheck
                            type="checkbox"
                            name="forma.verbal"
                            checked={formData.forma.verbal}
                            onChange={handleChange}
                            label="Verbal"
                        />
                    </FormGroup>
                </Col>
            </Row>

            <SubtituloForm subtitulo={"Causa o Motivo"} icon={FaUserShield} />
            <FormGroup className="mb-3">
                <FormLabel>Causa o Motivo</FormLabel>
                <Row>
                    {[
                        { label: "Laboral", name: "laboral" },
                        { label: "Personal", name: "personal" },
                        { label: "Político", name: "politico" },
                        { label: "Económico", name: "economico" },
                        { label: "Por función pública", name: "funcionPublica" },
                        { label: "Función social", name: "funcionSocial" },
                        { label: "Función Humanitaria", name: "funcionHumanitaria" },
                        { label: "Función Sindical", name: "funcionSindical" },
                        { label: "Ideológico", name: "ideologico" },
                        { label: "Otras", name: "otras" },
                    ].map((motivo, index) => (
                        <Col key={index} xs={12} md={3}>
                            <FormCheck
                                type="checkbox"
                                label={motivo.label}
                                name={`causaOMotivo.${motivo.name}`}
                                checked={formData.causaOMotivo[motivo.name as BooleanKeys]}
                                onChange={handleChange}
                            />
                        </Col>
                    ))}
                </Row>
                {formData.causaOMotivo.otras && (
                    <FormControl
                        type="text"
                        placeholder="Especifique cuáles"
                        name="causaOMotivo.cuales"
                        value={formData.causaOMotivo.cuales}
                        onChange={handleChange}
                        className="mt-2"
                    />
                )}
            </FormGroup>

            <div style={{display:'flex', justifyContent:'center', margin:'2rem 0'}}>
                <div className="risk_container">
                    <h5>Total nivel de riesgo:</h5>
                    <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#007bff" }}>
                        00.0
                    </span>
                </div>
            </div>

            <SubtituloForm subtitulo={"Observaciones"} icon={FaCommentAlt} />
            <FormGroup>
                <FormControl
                    as="textarea"
                    name="observaciones"
                    value={formData.observaciones}
                    onChange={handleChange}
                    placeholder="Ingrese observaciones aquí (máximo 1500 caracteres)"
                    maxLength={1500}
                    rows={5}
                />
            </FormGroup>
            <Form.Text muted>
                {1500 - formData.observaciones.length} caracteres restantes
            </Form.Text>


        </>
    );
};

export default ComponenteAmenaza;
