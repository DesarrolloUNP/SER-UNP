import { SubtituloForm } from "eco-unp/Ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { factorDiferencialOptions, Hijo } from '../configForm';

interface HijosInfoProps {
    hijos: Hijo[];
    handleHijoChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddHijo: () => void;
    handleRemoveHijo: (index: number) => void;
}

const HijosInfo: React.FC<HijosInfoProps> = ({ hijos, handleHijoChange, handleAddHijo, handleRemoveHijo }) => {

    const getSubFactors = (factor: string) => {
        const foundFactor = factorDiferencialOptions.find(f => f.label === factor);
        return foundFactor ? foundFactor.subFactors : [];
    };

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
                        <FaTrash size={16} color="red" />
                    </Button>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId={`nombres-${index}`}>
                                <Form.Label>Nombres hijo/a</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombres"
                                    value={hijo.nombres}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Ingresa Nombres"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId={`apellidos-${index}`}>
                                <Form.Label>Apellidos hijo/a</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="apellidos"
                                    value={hijo.apellidos}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Ingresa Apellidos"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group controlId={`edad-${index}`}>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="edad"
                                    value={hijo.edad}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Ingresa Edad"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`actividad-${index}`}>
                                <Form.Label>Actividad</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="actividad"
                                    value={hijo.actividad}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Ingresa Actividad"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`numeroContacto-${index}`}>
                                <Form.Label>Número de contacto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="numeroContacto"
                                    value={hijo.numeroContacto}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    placeholder="Ingresa número de contacto"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId={`factorDiferencial-${index}`}>
                                <Form.Label>Factor Diferencial</Form.Label>
                                <Form.Select
                                    name="factorDiferencial"
                                    value={hijo.factorDiferencial}
                                    onChange={(e) => handleHijoChange(index, e)}
                                >
                                    <option value="">Selecciona un factor</option>
                                    {factorDiferencialOptions.map(factor => (
                                        <option key={factor.label} value={factor.label}>
                                            {factor.label}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId={`subfactorDifrencial-${index}`}>
                                <Form.Label>Subfactor</Form.Label>
                                <Form.Select
                                    name="subfactorDifrencial"
                                    value={hijo.subfactorDifrencial}
                                    onChange={(e) => handleHijoChange(index, e)}
                                    disabled={!getSubFactors(hijo.factorDiferencial).length}
                                >
                                    <option value="">Selecciona un subfactor</option>
                                    {getSubFactors(hijo.factorDiferencial).map(subFactor => (
                                        <option key={subFactor} value={subFactor}>
                                            {subFactor}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group controlId="causaMuerte">
                            <Form.Label>Causa de muerte (Si aplica)</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="causaMuerte"
                                value={hijo.causaMuerte}
                                onChange={(e) => handleHijoChange(index, e)}
                                placeholder="Ingresa una descripción (máximo 100 caracteres)"
                                maxLength={100}
                                rows={1}
                            />
                            <Form.Text muted>
                                {100 - hijo.causaMuerte.length} caracteres restantes
                            </Form.Text>
                        </Form.Group>
                    </Row>
                </div>
            ))}

        </>
    );
};

export default HijosInfo;







