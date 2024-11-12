import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaClipboardUser } from "react-icons/fa6";

interface ComponenteBiograficoProps {
    formData: {
        primerNombre: string;
        segundoNombre: string;
        primerApellido: string;
        SegundoApellido: string;
        tipoId: string;
        noId: string;
        sexo: string;
        fechaNacimiento: string;
        edad: any;
        pais: string;
        departamentoNacimiento: string;
        municipio: string;
        estadoCivil: string;
        nivelAcademico: string;
        tipoSangre: string;
        rh: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteBiografico: React.FC<ComponenteBiograficoProps> = ({ formData, handleChange }) => (
    <>
        <SubtituloForm subtitulo="Datos personales del evaluado" icon={FaClipboardUser} />
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="primerNombre">
                    <Form.Label>Primer nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="primerNombre"
                        value={formData.primerNombre}
                        onChange={handleChange}
                        placeholder="Ingresa el primer nombre"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="segundoNombre">
                    <Form.Label>Segundo Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="segundoNombre"
                        value={formData.segundoNombre}
                        onChange={handleChange}
                        placeholder="Ingresa el segundo nombre"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="primerApellido">
                    <Form.Label>Primer apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="primerApellido"
                        value={formData.primerApellido}
                        onChange={handleChange}
                        placeholder="Ingresa el primer apellido"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="SegundoApellido">
                    <Form.Label>Segundo Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="SegundoApellido"
                        value={formData.SegundoApellido}
                        onChange={handleChange}
                        placeholder="Ingresa el segundo apellido"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="tipoId">
                    <Form.Label>Tipo de Identificación</Form.Label>
                    <Form.Select
                        required
                        name="tipoId"
                        value={formData.tipoId}
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
                <Form.Group controlId="noId">
                    <Form.Label>Número de Identificación</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="noId"
                        value={formData.noId}
                        onChange={handleChange}
                        placeholder="Ingresa el No de Id"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={4}>
                <Form.Group controlId="sexo">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select
                        required
                        name="sexo"
                        value={formData.sexo}
                        onChange={handleChange}
                        aria-label="Selecciona el sexo"
                    >
                        <option value="">Selecciona el sexo</option>
                        <option value="cedula">Masculino</option>
                        <option value="pasaporte">Femenino</option>
                        <option value="pasaporte">No binario</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="pais">
                    <Form.Label>País de nacimiento</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                        placeholder="Ingresa el país"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={4}>
                <Form.Group controlId="departamentoNacimiento">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="departamentoNacimiento"
                        value={formData.departamentoNacimiento}
                        onChange={handleChange}
                        placeholder="Ingresa el departamento"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
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
                        placeholder="Ingresa el municipio"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
        <Col md={3}>
                <Form.Group controlId="fechaNacimiento">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        placeholder="Ingresa la fecha y la hora"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={3}>
                <Form.Group controlId="edad">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleChange}
                        placeholder="Ingresa la edad"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={3}>
            <Form.Group controlId="tipoSangre">
                    <Form.Label>Tipo de sangre</Form.Label>
                    <Form.Select
                        required
                        name="tipoSangre"
                        value={formData.tipoSangre}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona el Tipo</option>
                        <option value="cedula">A</option>
                        <option value="pasaporte">B</option>
                        <option value="pasaporte">AB</option>
                        <option value="pasaporte">O</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={3}>
            <Form.Group controlId="rh">
                    <Form.Label>RH</Form.Label>
                    <Form.Select
                        required
                        name="rh"
                        value={formData.rh}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona el RH</option>
                        <option value="cedula">Positivo</option>
                        <option value="pasaporte">Negativo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="estadoCivil">
                    <Form.Label>Estado civil</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="estadoCivil"
                        value={formData.estadoCivil}
                        onChange={handleChange}
                        placeholder="Ingresa el estado civil"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="nivelAcademico">
                    <Form.Label>Nivel académico</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="nivelAcademico"
                        value={formData.nivelAcademico}
                        onChange={handleChange}
                        placeholder="Ingresa el nivel académico"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
    </>
);

export default ComponenteBiografico;




