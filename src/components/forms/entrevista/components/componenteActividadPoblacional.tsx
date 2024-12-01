import { SubtituloForm } from 'eco-unp/ui';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FaMountainCity } from "react-icons/fa6";
import { fetchDepartamentos, fetchMunicipios } from '../../../../services/ubicacion';
import CamposRurales from '../../../../shared/camposRurales';
import CamposUrbanos from '../../../../shared/camposUrbanos';

interface ActividadPoblacionalProps {
    formData: {
        ubicacionActividadaPoblacional: string;
        cargo: string;
        observacionesActividadPoblacional: string;
        departamentoActividadPoblacional: string;
        municipioActividadPoblacional: string;
        ruralActividadPoblacionalFields: {};
        urbanaActividadPoblacionalFields: {};
        telefonoActividadPoblacional: string
    };
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}

export const ActividadPoblacional: React.FC<ActividadPoblacionalProps> = ({ formData, handleChange, handleFieldChange }) => {

    const [ubicacionActividadaPoblacional, setUbicacion] = useState<string>(formData.ubicacionActividadaPoblacional);
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
        <SubtituloForm subtitulo="Actividad y/o función (poblacional programa UNP)" icon={FaMountainCity} />
        <Row className="mb-3">
            <Col md={4}>
                <Form.Group controlId="departamentoActividadPoblacional">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Select
                        name="departamentoActividadPoblacional"
                        value={formData.departamentoActividadPoblacional}
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
                <Form.Group controlId="municipioActividadPoblacional">
                    <Form.Label>Ciudad/Municipio</Form.Label>
                    <Form.Select
                        required
                        name="municipioActividadPoblacional"
                        value={formData.municipioActividadPoblacional}
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
                <Form.Group controlId="ubicacionActividadaPoblacional">
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Select
                        required
                        name="ubicacionActividadaPoblacional"
                        value={ubicacionActividadaPoblacional}
                        onChange={handleUbicacionChange}
                    >
                        <option value="">Selecciona la ubicación</option>
                        <option value="ruralActividadPoblacional">Rural</option>
                        <option value="urbanaActividadPoblacional">Urbana</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        {ubicacionActividadaPoblacional === "ruralActividadPoblacional" && (
            <CamposRurales formData={formData.ruralActividadPoblacionalFields} handleFieldChange={handleFieldChange} formDataField={'ruralActividadPoblacional'} />
        )}
        {ubicacionActividadaPoblacional === "urbanaActividadPoblacional" && (
            <CamposUrbanos formData={formData.urbanaActividadPoblacionalFields} handleFieldChange={handleFieldChange} formDataField={'urbanaActividadPoblacional'} />
        )}
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="cargo">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control
                        type="text"
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        placeholder="Ingresa el cargo"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="telefonoActividadPoblacional">
                    <Form.Label>Número de contacto</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefonoActividadPoblacional"
                        value={formData.telefonoActividadPoblacional}
                        onChange={handleChange}
                        placeholder="Ingresa el teléfono"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Form.Group controlId="observacionesActividadPoblacional">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control
                    as="textarea"
                    name="observacionesActividadPoblacional"
                    value={formData.observacionesActividadPoblacional}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={400}
                    rows={4}
                />
                <Form.Text muted>
                    {400 - formData.observacionesActividadPoblacional.length} caracteres restantes
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio y debe tener máximo 400 caracteres.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    </>)


}