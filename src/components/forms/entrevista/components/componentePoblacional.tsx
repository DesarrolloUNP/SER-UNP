import { SubtituloForm } from "eco-unp/ui";
import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaUsersLine, FaUsersRectangle } from "react-icons/fa6";
import { factorDiferencialOptions } from "../configForm";
import { GrupoPoblacional } from "../../../../shared/poblaciones";

interface GrupoPoblacionalProps {
    formData: {
        poblacion: string,
        subpoblacion: string,
        factorDiferencial: string,
        subfactorDiferencial: string,
        observacionesDiferenciales: string,
    };
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}

const GrupoPoblacionalInfo: React.FC<GrupoPoblacionalProps> = ({ formData, handleChange, handleFieldChange }) => {

    const [selectedFactor, setSelectedFactor] = useState<string>("");
    const [subFactors, setSubFactors] = useState<string[]>([]);
    const [selectedGroup, setSelectedGroup] = useState<string>("");
    const [subGroups, setSubGroups] = useState<string[]>([]);

    const handleFactorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const factor = e.target.value;
        setSelectedFactor(factor);
        const foundFactor = factorDiferencialOptions.find(f => f.label === factor);
        setSubFactors(foundFactor ? foundFactor.subFactors : []);
    };

    const handleSubFactorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const subFactor = e.target.value;
        handleChange(e);
    };

    const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const Group = e.target.value;
        setSelectedGroup(Group);
        const foundGroup = GrupoPoblacional.find(f => f.poblacion === Group);
        setSubGroups(foundGroup ? foundGroup.subpoblacion : []);
    };

    const handleSubGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const subGroup = e.target.value;
        handleChange(e);
    };

    return (
        <>
            <SubtituloForm subtitulo="Grupo de población objeto al que pertenece" icon={FaUsersLine} />
            <Col className="mb-3">
                <Col md={12} className="mb-3">
                    <Form.Group controlId="poblacion">
                        <Form.Label>Población</Form.Label>
                        <Form.Select
                            name="poblacion"
                            value={selectedGroup}
                            onChange={handleGroupChange}
                            className="custom-select" /* Clase personalizada */
                        >
                            <option value="">Selecciona un grupo</option>
                            {GrupoPoblacional.map(group => (
                                <option key={group.poblacion} value={group.poblacion}>
                                    {group.poblacion}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={12}>
                    <Form.Group controlId="subpoblacion">
                        <Form.Label>Subpoblación</Form.Label>
                        <Form.Select
                            name="subpoblacion"
                            value={formData.subpoblacion}
                            onChange={handleSubGroupChange}
                            disabled={!subGroups.length}
                            className="custom-select" /* Clase personalizada */
                        >
                            <option value="">Selecciona un subgrupo</option>
                            {subGroups.map(subGroup => (
                                <option key={subGroup} value={subGroup}>
                                    {subGroup}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Col>
            <SubtituloForm subtitulo="Factor diferencial" icon={FaUsersRectangle} />
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="factorDiferencial">
                        <Form.Label>Factor Diferencial</Form.Label>
                        <Form.Select
                            name="factorDiferencial"
                            value={selectedFactor}
                            onChange={handleFactorChange}
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
                    <Form.Group controlId="subfactorDiferencial">
                        <Form.Label>Subfactor</Form.Label>
                        <Form.Select
                            name="subfactorDiferencial"
                            value={formData.subfactorDiferencial}
                            onChange={handleSubFactorChange}
                            disabled={!subFactors.length}
                        >
                            <option value="">Selecciona un subfactor</option>
                            {subFactors.map(subFactor => (
                                <option key={subFactor} value={subFactor}>
                                    {subFactor}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Form.Group controlId="observacionesDiferenciales">
                    <Form.Label>Observaciones</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="observacionesDiferenciales"
                        value={formData.observacionesDiferenciales}
                        onChange={handleChange}
                        placeholder="Ingresa una descripción"
                        maxLength={1500}
                        rows={5}
                    />
                    <Form.Text muted>
                        {1500 - formData.observacionesDiferenciales.length} caracteres restantes
                    </Form.Text>
                </Form.Group>
            </Row>
        </>
    );
};

export default GrupoPoblacionalInfo;