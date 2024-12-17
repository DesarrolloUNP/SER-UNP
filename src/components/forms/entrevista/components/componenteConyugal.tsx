import { SubtituloForm } from "eco-unp/Ui";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { HiUsers } from "react-icons/hi2";
import { fetchDepartamentos, fetchMunicipios } from '../../../../services/ubicacion'
import CamposRurales from "../../../../shared/camposRurales";
import CamposUrbanos from "../../../../shared/camposUrbanos";
import { ComponenteConyugalProps, factorDiferencialOptions } from "../configForm";

export const ComponenteConyugal: React.FC<ComponenteConyugalProps> = ({ formData, handleChange, handleFieldChange }) => {

    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState<string>("");
    const [ubicacionConyuge, setUbicacionConyuge] = useState<string>(formData.ubicacionConyuge);
    const [selectedFactor, setSelectedFactor] = useState<string>("");
    const [subFactors, setSubFactors] = useState<string[]>([]);

    const handleUbicacionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setUbicacionConyuge(selectedValue);
        handleChange(e);
    };

    useEffect(() => {
        const fetchDepartamentosData = async () => {
            try {
                const data = await fetchDepartamentos();
                setDepartamentos(data);
            } catch (error) {
                console.error("Error al obtener departamentos:", error);
            }
        };
        fetchDepartamentosData();
    }, []);

    useEffect(() => {
        if (selectedDepartamento) {
            const fetchMunicipiosData = async () => {
                try {
                    const data = await fetchMunicipios(selectedDepartamento);
                    setMunicipios(data);
                } catch (error) {
                    console.error("Error al obtener municipios:", error);
                }
            };
            fetchMunicipiosData();
        } else {
            setMunicipios([]);
        }
    }, [selectedDepartamento]);

    const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedDepartamento(value);
        handleChange(e);
    };

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

    return (<>
        <SubtituloForm subtitulo="Cónyuge o compañero/a" icon={HiUsers} />
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="nombreConyuge">
                    <Form.Label>Nombre de cónyuge</Form.Label>
                    <Form.Control
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
            <Col md={6}>
                <Form.Group controlId="tipoIdConyuge">
                    <Form.Label>Tipo de Identificación</Form.Label>
                    <Form.Select
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
            <Col md={6}>
                <Form.Group controlId="noIdConyuge">
                    <Form.Label>Número de Identificación</Form.Label>
                    <Form.Control
                        type="text"
                        name="noIdConyuge"
                        value={formData.noIdConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el No de Id"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>

        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="telConyuge">
                    <Form.Label>Número de contacto</Form.Label>
                    <Form.Control
                        type="text"
                        name="telConyuge"
                        value={formData.telConyuge}
                        onChange={handleChange}
                        placeholder="Ingresa el teléfono"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="departamentoConyuge">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Select
                        name="departamentoConyuge"
                        value={formData.departamentoConyuge}
                        onChange={handleDepartamentoChange}
                    >
                        <option value="">Selecciona un departamento</option>
                        {departamentos.map((dep) => (
                            <option key={dep.id} value={dep.id}>
                                {dep.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="municipioConyuge">
                    <Form.Label>Ciudad/Municipio</Form.Label>
                    <Form.Select
                        name="municipioConyuge"
                        value={formData.municipioConyuge}
                        onChange={handleChange}
                        disabled={!municipios.length}
                    >
                        <option value="">Selecciona un municipio</option>
                        {municipios.map((mun) => (
                            <option key={mun.id} value={mun.id}>
                                {mun.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="ubicacionConyuge">
                    <Form.Label>Zona</Form.Label>
                    <Form.Select
                        name="ubicacionConyuge"
                        value={ubicacionConyuge}
                        onChange={handleUbicacionChange}
                    >
                        <option value="">Selecciona la ubicación</option>
                        <option value="ruralConyugal">Rural</option>
                        <option value="urbanaConyugal">Urbana</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        {ubicacionConyuge === "ruralConyugal" && (
            <CamposRurales formData={formData.ruralConyugalFields} handleFieldChange={handleFieldChange} formDataField={'ruralConyugal'} />
        )}
        {ubicacionConyuge === "urbanaConyugal" && (
            <CamposUrbanos formData={formData.urbanaConyugalFields} handleFieldChange={handleFieldChange} formDataField={'urbanaConyugal'} />
        )}
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="ocupacionConyuge">
                    <Form.Label>Ocupación</Form.Label>
                    <Form.Control
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
            <Col md={6}>
                <Form.Group controlId="factorDiferencialConyuge">
                    <Form.Label>Factor Diferencial</Form.Label>
                    <Form.Select
                        name="factorDiferencialConyuge"
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
                <Form.Group controlId="subfactorDiferencialConyuge">
                    <Form.Label>Subfactor</Form.Label>
                    <Form.Select
                        name="subfactorDiferencialConyuge"
                        value={formData.subfactorDiferencialConyuge} 
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
    </>)
};

