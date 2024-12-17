import { SubtituloForm } from "eco-unp/Ui";
import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { RiUserLocationFill } from "react-icons/ri";
import CamposRurales from "../../../../shared/camposRurales";
import CamposUrbanos from "../../../../shared/camposUrbanos";
import { fetchDepartamentos, fetchMunicipios } from "../../../../services/ubicacion";

interface InfoGeneralProps {
    formData: { ubicacion: string; fechaHora: string; departamento: string; ciudad: string; ruralFields: any; urbanaFields: any };
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}

const InfoGeneral: React.FC<InfoGeneralProps> = ({ formData, handleChange, handleFieldChange }) => {

    const [ubicacion, setUbicacion] = useState<string>(formData.ubicacion);
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

    return (
        <>
            <SubtituloForm subtitulo="Fecha y Ubicación" icon={RiUserLocationFill} />
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="fechaHora">
                        <Form.Label>Fecha y hora</Form.Label>
                        <Form.Control
                            required
                            type="datetime-local"
                            name="fechaHora"
                            value={formData.fechaHora}
                            onChange={handleChange}
                            placeholder="Ingresa la fecha y la hora"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="departamento">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select
                            required
                            name="departamento"
                            value={formData.departamento}
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
                    <Form.Group controlId="ciudad">
                        <Form.Label>Ciudad/Municipio</Form.Label>
                        <Form.Select
                            required
                            name="ciudad"
                            value={formData.ciudad}
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
                    <Form.Group controlId="ubicacion">
                        <Form.Label>Zona</Form.Label>
                        <Form.Select
                            required
                            name="ubicacion"
                            value={ubicacion}
                            onChange={handleUbicacionChange}
                        >
                            <option value="">Selecciona la ubicación</option>
                            <option value="rural">Rural</option>
                            <option value="urbana">Urbana</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            {ubicacion === "rural" && (
                <CamposRurales formData={formData.ruralFields} handleFieldChange={handleFieldChange} formDataField={'rural'}/>
            )}

            {ubicacion === "urbana" && (
                <CamposUrbanos formData={formData.urbanaFields} handleFieldChange={handleFieldChange} formDataField={'urbana'}></CamposUrbanos>
            )}
        </>
    );
};

export default InfoGeneral;



