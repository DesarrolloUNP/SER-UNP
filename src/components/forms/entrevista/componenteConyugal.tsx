import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { HiUsers } from "react-icons/hi2";

interface ComponenteConyugalProps {
    formData: {
        nombreConyuge:string,
        apellidoConyuge:string,
        tipoIdConyuge:string,
        noIdConyuge:string,
        telConyuge:string,
        celConyuge:string,
        departamentoConyuge:string,
        municipioConyuge:string,
        direccionConyuge:string,
        ocupacionConyuge:string,
        empresaConyuge:string,
        causaMuerteConyuge:string,
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

export const ComponenteConyugal: React.FC<ComponenteConyugalProps> = ({ formData, handleChange }) => (
    <>
        <SubtituloForm subtitulo="Datos personales del cónyuge o compañero" icon={HiUsers} />
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="nombreConyuge">
                    <Form.Label>Nombre de cónyuge</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="nombreConyuge"
                        value={formData.nombreConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el nombre del cónyuge"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="apellidoConyuge">
                    <Form.Label>Apellidos de cónyuge</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="apellidoConyuge"
                        value={formData.apellidoConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa los apellidos del cónyuge"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="tipoIdConyuge">
                    <Form.Label>Tipo de Identificación</Form.Label>
                    <Form.Select
                        required
                        name="tipoIdConyuge"
                        value={formData.tipoIdConyuge}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona el tipo de Id</option>
                        <option value="cedula">Cédula</option>
                        <option value="pasaporte">Tarjeta de identidad</option>
                        <option value="pasaporte">Pasaporte</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={4}>
                <Form.Group controlId="noIdConyuge">
                    <Form.Label>Número de Identificación</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="noIdConyuge"
                        value={formData.noIdConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el No de Id"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group controlId="telConyuge">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="telConyuge"
                        value={formData.telConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el teléfono"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>   
        </Row>
        <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="celConyuge">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="celConyuge"
                        value={formData.celConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el nombre del cónyuge"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="departamentoConyuge">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="departamentoConyuge"
                        value={formData.departamentoConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el país"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="municipioConyuge">
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="municipioConyuge"
                        value={formData.municipioConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el departamento"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="direccionConyuge">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="direccionConyuge"
                        value={formData.direccionConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el municipio"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="ocupacionConyuge">
                    <Form.Label>Ocupación</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="ocupacionConyuge"
                        value={formData.ocupacionConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa la ocupación"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="empresaConyuge">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="empresaConyuge"
                        value={formData.empresaConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa la empresa"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
        <Form.Group controlId="causaMuerteConyuge">
            <Form.Label>Causa de muerte (Si aplica)</Form.Label>
            <Form.Control
                as="textarea"
                name="causaMuerteConyuge"
                value={formData.causaMuerteConyuge}
                onChange={handleChange}
                placeholder="Ingresa una descripción (máximo 100 caracteres)"
                maxLength={100}
                rows={1}
            />
            <Form.Text muted>
                {100 - formData.causaMuerteConyuge.length} caracteres restantes
            </Form.Text>
            <Form.Control.Feedback type="invalid">
                Este campo debe tener máximo 100 caracteres.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
    </>
); 

