import { SubtituloForm } from "eco-unp/ui";
import { ChangeEvent } from "react";
import { IoWomanSharp, IoManSharp } from "react-icons/io5";
import { Row, Col, Form, Button } from "react-bootstrap";
import { factorDiferencialOptions, familiaOrigen } from "./configForm";
import { ImManWoman } from "react-icons/im";
import { FaTrash } from "react-icons/fa6";

interface familiaOrigenProps {
    familiares: familiaOrigen[];
    handleFliaOrigenChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddFliaOrigen: () => void;
    handleRemoveFliaOrigen: (index: number) => void;
}

export const ComponenteFliaOrigen: React.FC<familiaOrigenProps> = ({ familiares, handleFliaOrigenChange, handleAddFliaOrigen, handleRemoveFliaOrigen }) => {

    const getSubFactors = (factor: string) => {
        const foundFactor = factorDiferencialOptions.find(f => f.label === factor);
        return foundFactor ? foundFactor.subFactors : [];
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Padres y hermanos/as" icon={ImManWoman} />
                <Button
                    variant="primary"
                    onClick={handleAddFliaOrigen}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar familiar
                </Button>
            </div>

            {familiares.length > 0 && familiares.map((familiar, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                    <Button
                        variant="link"
                        onClick={() => handleRemoveFliaOrigen(index)}
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
                        <Col md={4}>
                        <Form.Group controlId={`tipo-${index}`}>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select
                                name="tipo"
                                value={familiar.tipo}
                                onChange={(e) => handleFliaOrigenChange(index, e)}
                            >
                                <option value="">Selecciona el familiar</option>
                                <option value="Padre">Padre</option>
                                <option value="Madre">Madre</option>
                                <option value="Hermano/a">Hermano/a</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`nombres-${index}`}>
                                <Form.Label>Nombres familiar</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombres"
                                    value={familiar.nombres}
                                    onChange={(e) => handleFliaOrigenChange(index, e)}
                                    placeholder="Ingresa Nombres"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId={`apellidos-${index}`}>
                                <Form.Label>Apellidos familiar/a</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="apellidos"
                                    value={familiar.apellidos}
                                    onChange={(e) => handleFliaOrigenChange(index, e)}
                                    placeholder="Ingresa Apellidos"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId={`ocupacion-${index}`}>
                                <Form.Label>Ocupación</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ocupacion"
                                    value={familiar.ocupacion}
                                    onChange={(e) => handleFliaOrigenChange(index, e)}
                                    placeholder="Ingresa ocupacion"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId={`numeroContacto-${index}`}>
                                <Form.Label>Número de contacto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="numeroContacto"
                                    value={familiar.numeroContacto}
                                    onChange={(e) => handleFliaOrigenChange(index, e)}
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
                                    value={familiar.factorDiferencial}
                                    onChange={(e) => handleFliaOrigenChange(index, e)}
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
                                    value={familiar.subfactorDifrencial}
                                    onChange={(e) => handleFliaOrigenChange(index, e)}
                                    disabled={!getSubFactors(familiar.factorDiferencial).length}
                                >
                                    <option value="">Selecciona un subfactor</option>
                                    {getSubFactors(familiar.factorDiferencial).map(subFactor => (
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
                                value={familiar.causaMuerte}
                                onChange={(e) => handleFliaOrigenChange(index, e)}
                                placeholder="Ingresa una descripción (máximo 100 caracteres)"
                                maxLength={100}
                                rows={1}
                            />
                            <Form.Text muted>
                                {100 - familiar.causaMuerte.length} caracteres restantes
                            </Form.Text>
                        </Form.Group>
                    </Row>
                </div>
            ))}

        </>
    );
};

export default ComponenteFliaOrigen;