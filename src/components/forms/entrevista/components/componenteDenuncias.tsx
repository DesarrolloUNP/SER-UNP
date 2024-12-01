import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { Denuncias } from '../configForm';

interface DenunciasProps {
    denuncias: Denuncias[];
    handleDenunciasChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddDenuncias: () => void;
    handleRemoveDenuncias: (index: number) => void;
}

const DenunciasInfo: React.FC<DenunciasProps> = ({ denuncias, handleDenunciasChange, handleAddDenuncias, handleRemoveDenuncias }) => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Denuncias y/o quejas" icon={FaBalanceScale} />
                <Button
                    variant="primary"
                    onClick={handleAddDenuncias}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar proceso
                </Button>
            </div>

            {denuncias.length > 0 && denuncias.map((denuncia, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                    <Button
                        variant="link"
                        onClick={() => handleRemoveDenuncias(index)}
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
                            <Form.Group controlId={`entidad-${index}`}>
                                <Form.Label>Entidad/Unidad Judicial/autoridad/ONG</Form.Label>
                                <Form.Select
                                    name="entidad"
                                    value={denuncia.entidad}
                                    onChange={(e) => handleDenunciasChange(index, e)}
                                >
                                    <option value="">Selecciona la entidad</option>
                                    <option value="Fiscalía">Fiscalía</option>
                                    <option value="Policía Nacional">Policía Nacional</option>
                                    <option value="Inspección de policía">Inspección de policía</option>
                                    <option value="Procuraduría">Procuraduría</option>
                                    <option value="Personería">Personería</option>
                                    <option value="Defensoría">Defensoría</option>
                                    <option value="Alcaldía">Alcaldía</option>
                                    <option value="Gobernación">Gobernación</option>
                                    <option value="Organización No Gubernamental">Organización No Gubernamental</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId={`fecha-${index}`}>
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    name="fecha"
                                    value={denuncia.fecha}
                                    onChange={(e) => handleDenunciasChange(index, e)}
                                    placeholder="Ingresa la fecha"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group controlId={`delito-${index}`}>
                                <Form.Label>Número de proceso</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="numeroProceso"
                                    value={denuncia.numeroProceso}
                                    onChange={(e) => handleDenunciasChange(index, e)}
                                    placeholder="Ingresa el número"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`delito-${index}`}>
                                <Form.Label>Delito</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="delito"
                                    value={denuncia.delito}
                                    onChange={(e) => handleDenunciasChange(index, e)}
                                    placeholder="Ingresa el delito"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`estado-${index}`}>
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    name="estado"
                                    value={denuncia.estado}
                                    onChange={(e) => handleDenunciasChange(index, e)}
                                >
                                    <option value="">Selecciona el estado</option>
                                    <option value="Asignación">Asignación</option>
                                    <option value="Revisión inicial">Revisión inicial</option>
                                    <option value="Investigación">Investigación</option>
                                    <option value="Evaluación">Evaluación</option>
                                    <option value="Resolución">Resolución</option>
                                    <option value="Notificación">Notificación</option>
                                    <option value="Seguimiento">Seguimiento</option>
                                    <option value="Archivo">Archivo</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col md={12}>
                        <Form.Group controlId={`observaciones-${index}`}>
                            <Form.Label>Observaciones</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="observaciones"
                                value={denuncia.observaciones}
                                onChange={(e) => handleDenunciasChange(index, e)}
                                placeholder="Ingresa una descripción"
                                maxLength={200}
                                rows={2}
                            />
                            <Form.Text muted>
                                {200 - denuncia.observaciones.length} caracteres restantes
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </div>
            ))}

        </>
    );
};

export default DenunciasInfo;