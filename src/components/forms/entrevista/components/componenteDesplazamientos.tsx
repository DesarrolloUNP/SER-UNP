import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa";
import { Rutas } from '../configForm';

interface RutasProps {
    desplazamientos: Rutas[];
    handleRutasChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddRutas: () => void;
    handleRemoveRuta: (index: number) => void;
}

const RutasInfo: React.FC<RutasProps> = ({ desplazamientos, handleRutasChange, handleAddRutas, handleRemoveRuta }) => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Rutas" icon={FaRoute} />
                <Button
                    variant="primary"
                    onClick={handleAddRutas}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar Ruta
                </Button>
            </div>

            {desplazamientos.length > 0 && desplazamientos.map((ruta, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                    <Button
                        variant="link"
                        onClick={() => handleRemoveRuta(index)}
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
                            <Form.Group controlId={`recorrido-${index}`}>
                                <Form.Label>Recorrido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="recorrido"
                                    value={ruta.recorrido}
                                    onChange={(e) => handleRutasChange(index, e)}
                                    placeholder="Ingresa recorrido"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="horario">
                                <Form.Label>Horario</Form.Label>
                                <Form.Select
                                    name="horario"
                                    value={ruta.horario}
                                    onChange={(e) => handleRutasChange(index, e)}
                                >
                                    <option value="">Selecciona el horario</option>
                                    <option value="Matutino">Matutino</option>
                                    <option value="Vespertino">Vespertino</option>
                                    <option value="Nocturno">Nocturno</option>
                                    <option value="Matutino-Vespertino">Mixto (Matutino-Vespertino)</option>
                                    <option value="Vespertino-Nocturno">Mixto (Vespertino-Nocturno)</option>
                                    <option value="Nocturno-Matutino">Mixto (Nocturno-Matutino)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group controlId={`duracion-${index}`}>
                                <Form.Label>Duración (Horas)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="duracion"
                                    value={ruta.duracion}
                                    onChange={(e) => handleRutasChange(index, e)}
                                    placeholder="Ingresa la duración"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="frecuencia">
                                <Form.Label>Frecuencia</Form.Label>
                                <Form.Select
                                    name="frecuencia"
                                    value={ruta.frecuencia}
                                    onChange={(e) => handleRutasChange(index, e)}
                                >
                                    <option value="">Selecciona la frecuencia</option>
                                    <option value="Diaria">Diaria</option>
                                    <option value="Semanal">Semanal</option>
                                    <option value="Mensual">Mensual</option>
                                    <option value="Ocasional">Ocasional</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="medioTransporte">
                                <Form.Label>Medio de transporte</Form.Label>
                                <Form.Select
                                    name="medioTransporte"
                                    value={ruta.medioTransporte}
                                    onChange={(e) => handleRutasChange(index, e)}
                                >
                                    <option value="">Selecciona el medioTransporte</option>
                                    <option value="Diaria">Transporte público</option>
                                    <option value="Diaria">Aplicaciones de transporte</option>
                                    <option value="Semanal">Medio aéreo</option>
                                    <option value="Semanal">Automóvil</option>
                                    <option value="Mensual">Bicicleta</option>
                                    <option value="Motocicleta">Motocicleta</option>
                                    <option value="Medio fluvial">Medio fluvial</option>
                                    <option value="Tracción animal">Tracción animal</option>
                                    <option value="Peatonal">Peatonal</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col md={12}>
                        <Form.Group controlId={`puntosVulnerabilidad-${index}`}>
                            <Form.Label>Puntos de posibles vulnerabilidades</Form.Label>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id={`tooltip-pv-${index}`}>Vías en construcción, en mal estado, posibles presencia de actores ilegales en la zona, vías alternas a la vía principal que puedan representan riesgo, recorrido incluye transitar por zonas rurales o semirrurales,poco transitadas, entre otros.</Tooltip>}
                            >
                                <Form.Control
                                    as="textarea"
                                    name="puntosVulnerabilidad"
                                    value={ruta.puntosVulnerabilidad}
                                    onChange={(e) => handleRutasChange(index, e)}
                                    placeholder="Ingresa posibles puntos de vulnerabilidad"
                                    maxLength={500}
                                    rows={3}
                                />
                            </OverlayTrigger>
                            <Form.Text muted>
                                {500 - ruta.puntosVulnerabilidad.length} caracteres restantes
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </div>
            ))}

        </>
    );
};

export default RutasInfo;