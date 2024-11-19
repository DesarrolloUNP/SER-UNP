import React, { ChangeEvent } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from 'eco-unp/ui';
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

interface ComponenteInfoEntrevistaProps {
    formData: {
        tipoEntrevista: string;
        fechaHora: string;
        numeroIdentificacion: string;
        calidad: string;
        primerNombre: string;
        segundoNombre: string;
        primerApellido: string;
        segundoApellido: string;
        direccion: string;
        departamento: string;
        municipio: string;
        telefonoOrigen: string;
        telefonoDestino: string;
        amenazas: string;
        desplazamientos: string;
        actividades: string;
        conductas: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteInfoEntrevista: React.FC<ComponenteInfoEntrevistaProps> = ({ formData, handleChange }) => (
    <>
        {/* Selector de tipo de entrevista y campo de fecha y hora en el mismo renglón */}
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="tipoEntrevista">
                    <Form.Label>Tipo de Entrevista</Form.Label>
                    <Form.Select
                        required
                        name="tipoEntrevista"
                        value={formData.tipoEntrevista}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione el tipo de entrevista</option>
                        <option value="personal">Personal</option>
                        <option value="telefonica">Telefónica</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="fechaHora">
                    <Form.Label>Fecha y Hora</Form.Label>
                    <Form.Control
                        required
                        type="datetime-local"
                        name="fechaHora"
                        value={formData.fechaHora}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Col>
        </Row>

        {/* Campos condicionales justo debajo de tipo de entrevista y fecha y hora */}
        {formData.tipoEntrevista === "personal" && (
            <>
                <SubtituloForm subtitulo="Para las entrevistas realizadas personalmente:" icon={FaMapMarkedAlt} />
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                                placeholder="Dirección"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="departamento">
                            <Form.Label>Departamento</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="departamento"
                                value={formData.departamento}
                                onChange={handleChange}
                                placeholder="Departamento"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="municipio">
                            <Form.Label>Municipio</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="municipio"
                                value={formData.municipio}
                                onChange={handleChange}
                                placeholder="Municipio"
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </>
        )}

        {formData.tipoEntrevista === "telefonica" && (
            <>
                <SubtituloForm subtitulo="Para las entrevistas realizadas telefónicamente:" icon={FaPhoneAlt} />
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="telefonoOrigen">
                            <Form.Label>Número de Teléfono de Origen</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="telefonoOrigen"
                                value={formData.telefonoOrigen}
                                onChange={handleChange}
                                placeholder="Teléfono de Origen"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="telefonoDestino">
                            <Form.Label>Número de Teléfono de Destino</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="telefonoDestino"
                                value={formData.telefonoDestino}
                                onChange={handleChange}
                                placeholder="Teléfono de Destino"
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </>
        )}

        {/* Campos comunes para identificación y nombres */}
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="numeroIdentificacion">
                    <Form.Label>Número de Identificación</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="numeroIdentificacion"
                        value={formData.numeroIdentificacion}
                        onChange={handleChange}
                        placeholder="Número de Identificación"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="calidad">
                    <Form.Label>En su calidad de</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="calidad"
                        value={formData.calidad}
                        onChange={handleChange}
                        placeholder="Calidad"
                    />
                </Form.Group>
            </Col>
        </Row>

        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="primerNombre">
                    <Form.Label>Primer Nombre del Entrevistado</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="primerNombre"
                        value={formData.primerNombre}
                        onChange={handleChange}
                        placeholder="Primer Nombre"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="segundoNombre">
                    <Form.Label>Segundo Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="segundoNombre"
                        value={formData.segundoNombre}
                        onChange={handleChange}
                        placeholder="Segundo Nombre"
                    />
                </Form.Group>
            </Col>
        </Row>

        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="primerApellido">
                    <Form.Label>Primer Apellido del Entrevistado</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="primerApellido"
                        value={formData.primerApellido}
                        onChange={handleChange}
                        placeholder="Primer Apellido"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="segundoApellido">
                    <Form.Label>Segundo Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="segundoApellido"
                        value={formData.segundoApellido}
                        onChange={handleChange}
                        placeholder="Segundo Apellido"
                    />
                </Form.Group>
            </Col>
        </Row>

        {/* Campos de amenazas, desplazamientos, actividades y conductas */}
        <FormGroup className="mb-3">
            <FormLabel>¿Conoce de situaciones de amenazas?</FormLabel>
            <FormControl
                as="textarea"
                rows={3}
                name="amenazas"
                value={formData.amenazas}
                onChange={handleChange}
                placeholder="Describa las amenazas conocidas"
            />
        </FormGroup>

        <FormGroup className="mb-3">
            <FormLabel>Describa los desplazamientos</FormLabel>
            <FormControl
                as="textarea"
                rows={3}
                name="desplazamientos"
                value={formData.desplazamientos}
                onChange={handleChange}
                placeholder="Describa los desplazamientos realizados"
            />
        </FormGroup>

        <FormGroup className="mb-3">
            <FormLabel>Indique las actividades específicas</FormLabel>
            <FormControl
                as="textarea"
                rows={3}
                name="actividades"
                value={formData.actividades}
                onChange={handleChange}
                placeholder="Indique las actividades específicas realizadas"
            />
        </FormGroup>

        <FormGroup className="mb-3">
            <FormLabel>Refiera conductas inapropiadas</FormLabel>
            <FormControl
                as="textarea"
                rows={3}
                name="conductas"
                value={formData.conductas}
                onChange={handleChange}
                placeholder="Describa conductas inapropiadas si existen"
            />
        </FormGroup>
    </>
);

export default ComponenteInfoEntrevista;
