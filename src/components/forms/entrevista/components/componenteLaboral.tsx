import { SubtituloForm } from 'eco-unp/Ui';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FaBuildingUser } from "react-icons/fa6";
import { fetchDepartamentos, fetchMunicipios } from '../../../../services/ubicacion';
import CamposRurales from '../../../../shared/camposRurales';
import CamposUrbanos from '../../../../shared/camposUrbanos';

interface LaboralProps {
    formData: { ubicacionLaboral: string; profesion: string; oficio: string; telefonoLaboral: string; observacionesLaborales: string; departamentoLaboral: string; municipioLaboral: string; ruralLaboralFields: any; urbanaLaboralFields: any };
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}

export const InfoLaboral: React.FC<LaboralProps> = ({ formData, handleChange, handleFieldChange }) => {

    const [ubicacionLaboral, setUbicacion] = useState<string>(formData.ubicacionLaboral);
    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState<string>("");

    const handleUbicacionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setUbicacion(selectedValue);
        handleChange(e);
    };

    //Departamentos y Municipios
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

    return (<>
        <SubtituloForm subtitulo="Actividad laboral y/o económica" icon={FaBuildingUser} />
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="departamentoLaboral">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Select
                        name="departamentoLaboral"
                        value={formData.departamentoLaboral}
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
            <Col md={4}>
                <Form.Group controlId="municipioLaboral">
                    <Form.Label>Ciudad/Municipio</Form.Label>
                    <Form.Select
                        required
                        name="municipioLaboral"
                        value={formData.municipioLaboral}
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
            <Col md={4}>
                <Form.Group controlId="ubicacionLaboral">
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Select
                        required
                        name="ubicacionLaboral"
                        value={ubicacionLaboral}
                        onChange={handleUbicacionChange}
                    >
                        <option value="">Selecciona la ubicación</option>
                        <option value="ruralLaboral">Rural</option>
                        <option value="urbanaLaboral">Urbana</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        {ubicacionLaboral === "ruralLaboral" && (
            <CamposRurales formData={formData.ruralLaboralFields} handleFieldChange={handleFieldChange} formDataField={'ruralLaboral'} />
        )}
        {ubicacionLaboral === "urbanaLaboral" && (
            <CamposUrbanos formData={formData.urbanaLaboralFields} handleFieldChange={handleFieldChange} formDataField={'urbanaLaboral'} />
        )}
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="profesion">
                    <Form.Label>Profesión</Form.Label>
                    <Form.Control
                        type="text"
                        name="profesion"
                        value={formData.profesion}
                        onChange={handleChange}
                        placeholder="Ingresa la profesión"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={4}>
                <Form.Group controlId="oficio">
                    <Form.Label>Oficio</Form.Label>
                    <Form.Control
                        type="text"
                        name="oficio"
                        value={formData.oficio}
                        onChange={handleChange}
                        placeholder="Ingresa la oficio"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={4}>
                <Form.Group controlId="telefonoLaboral">
                    <Form.Label>Número de contacto</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefonoLaboral"
                        value={formData.telefonoLaboral}
                        onChange={handleChange}
                        placeholder="Ingresa el teléfono"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Form.Group controlId="observacionesLaborales">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control
                    as="textarea"
                    name="observacionesLaborales"
                    value={formData.observacionesLaborales}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={400}
                    rows={4}
                />
                <Form.Text muted>
                    {400 - formData.observacionesLaborales.length} caracteres restantes
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio y debe tener máximo 400 caracteres.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    </>)


}
