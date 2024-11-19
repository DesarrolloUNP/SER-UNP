import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import { PersonasAcargo } from './configForm'

interface PersonasCargoInfoProps {
    personasCargo: PersonasAcargo[];
    handlePersonaAcargoChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddPersonaAcargo: () => void;
    handleRemovePersonaAcargo: (index: number) => void;
}

const PersonasCargoInfo: React.FC<PersonasCargoInfoProps> = ({ personasCargo, handlePersonaAcargoChange, handleAddPersonaAcargo, handleRemovePersonaAcargo }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Personas a cargo" icon={FaUsersLine} />
                <Button
                    variant="primary"
                    onClick={handleAddPersonaAcargo}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar Persona
                </Button>
            </div>

            {personasCargo.length > 0 && personasCargo.map((persona, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                    <Button
                        variant="link"
                        onClick={() => handleRemovePersonaAcargo(index)}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            padding: "0",
                            background: "transparent",
                            border: "none",
                        }}
                    >
                        <FaTrash size={20} color="red" />
                    </Button>

                    <Row>
                        <Col md={3}>
                            <Form.Group controlId={`nombre-${index}`}>
                                <Form.Label>Nombres y Apellidos</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={persona.nombres}
                                    onChange={(e) => handlePersonaAcargoChange(index, e)}
                                    placeholder="Nombres y Apellidos"
                                />
                                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId={`edad-${index}`}>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="edad"
                                    value={persona.edad}
                                    onChange={(e) => handlePersonaAcargoChange(index, e)}
                                    placeholder="Edad"
                                />
                                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId={`parentesco-${index}`}>
                                <Form.Label>Parentesco</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="parentesco"
                                    value={persona.parentesco}
                                    onChange={(e) => handlePersonaAcargoChange(index, e)}
                                    placeholder="Parentesco"
                                />
                                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId={`residencia-${index}`}>
                                <Form.Label>Residencia</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="residencia"
                                    value={persona.residencia}
                                    onChange={(e) => handlePersonaAcargoChange(index, e)}
                                    placeholder="Lugar de residencia"
                                />
                                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
            ))}
        </>
    );
};

export default PersonasCargoInfo;