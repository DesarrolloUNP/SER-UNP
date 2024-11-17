import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";

interface Hijo {
    nombre: string;
    edad: string;
    actividad: string;
    residencia: string;
}

interface HijosInfoProps {
    hijos: Hijo[];
    handleHijoChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddHijo: () => void;
    handleRemoveHijo: (index: number) => void;
}

const HijosInfo: React.FC<HijosInfoProps> = ({ hijos, handleHijoChange, handleAddHijo, handleRemoveHijo }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Hijos" icon={MdFamilyRestroom} />
                <Button
                    variant="primary"
                    onClick={handleAddHijo}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar Hijo
                </Button>
            </div>

            {hijos.length > 0 && hijos.map((hijo, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                    <Button
                        variant="link"
                        onClick={() => handleRemoveHijo(index)}
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
                                <Form.Label>Nombre del Hijo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={hijo.nombre}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Nombre del hijo"
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
                                    value={hijo.edad}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Edad"
                                />
                                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId={`actividad-${index}`}>
                                <Form.Label>Actividad</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="actividad"
                                    value={hijo.actividad}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Actividad"
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
                                    value={hijo.residencia}
                                    onChange={(e) => handleHijoChange(index, e)}
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

export default HijosInfo;






