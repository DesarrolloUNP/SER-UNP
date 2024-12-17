import { SubtituloForm } from "eco-unp/Ui";
import React, { useEffect, useState } from "react";
import { Row, Col, Form, Alert } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import CamposRurales from "../../../../shared/camposRurales";
import CamposUrbanos from "../../../../shared/camposUrbanos";
import { fetchDepartamentos, fetchMunicipios } from "../../../../services/ubicacion";
import { IoNotifications } from "react-icons/io5";
import { formDataNotificacion } from "../configForm";
import { FaUserPlus } from "react-icons/fa";

interface DatosNotificacionProps {
    formData: formDataNotificacion
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}

const DatosNotificacion: React.FC<DatosNotificacionProps> = ({ formData, handleChange, handleFieldChange, }) => {

    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipiosResidencia, setMunicipiosResidencia] = useState<{ id: number; name: string }[]>([]);
    const [municipiosNotificacion, setMunicipiosNotificacion] = useState<{ id: number; name: string }[]>([]);
    const [ubicacionResidencia, setUbicacionResidencia] = useState<string>(formData.ubicacionResidenca);
    const [ubicacionNotificacion, setUbicacionNotificacion] = useState<string>(formData.ubicacionNotificacion);

    // Fetch Departamentos
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

    // Fetch Municipios de Residencia
    useEffect(() => {
        if (formData.departamentoResidencia) {
            const fetchMunicipiosData = async () => {
                try {
                    const data = await fetchMunicipios(formData.departamentoResidencia);
                    setMunicipiosResidencia(data);
                } catch (error) {
                    console.error("Error al obtener municipios de residencia:", error);
                }
            };
            fetchMunicipiosData();
        } else {
            setMunicipiosResidencia([]);
        }
    }, [formData.departamentoResidencia]);

    // Fetch Municipios de Notificación
    useEffect(() => {
        if (formData.departamentoNotificacion) {
            const fetchMunicipiosData = async () => {
                try {
                    const data = await fetchMunicipios(formData.departamentoNotificacion);
                    setMunicipiosNotificacion(data);
                } catch (error) {
                    console.error("Error al obtener municipios de notificación:", error);
                }
            };
            fetchMunicipiosData();
        } else {
            setMunicipiosNotificacion([]);
        }
    }, [formData.departamentoNotificacion]);

    // Handlers
    const handleUbicacionResidenciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUbicacionResidencia(e.target.value);
        handleChange(e);
    };

    const handleUbicacionNotificacionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUbicacionNotificacion(e.target.value);
        handleChange(e);
    };

    return (
        <>
            <SubtituloForm subtitulo="Residencia actual" icon={IoHome} />
            <Row className="mb-3">
                <Col md={4}>
                    <Form.Group controlId="departamentoResidencia">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Select
                            name="departamentoResidencia"
                            value={formData.departamentoResidencia}
                            onChange={handleChange}
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
                    <Form.Group controlId="municipioResidencia">
                        <Form.Label>Ciudad/Municipio</Form.Label>
                        <Form.Select
                            name="municipioResidencia"
                            value={formData.municipioResidencia}
                            onChange={handleChange}
                            disabled={!municipiosResidencia.length}
                        >
                            <option value="">Selecciona un municipio</option>
                            {municipiosResidencia.map((mun) => (
                                <option key={mun.id} value={mun.id}>
                                    {mun.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="ubicacionResidencia">
                        <Form.Label>Zona</Form.Label>
                        <Form.Select
                            name="ubicacionResidencia"
                            value={ubicacionResidencia}
                            onChange={handleUbicacionResidenciaChange}
                        >
                            <option value="">Selecciona la ubicación</option>
                            <option value="ruralResidencia">Rural</option>
                            <option value="urbanaResidencia">Urbana</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {ubicacionResidencia === "ruralResidencia" && (
                <CamposRurales formData={formData.ruralResidenciaFields} handleFieldChange={handleFieldChange} formDataField="ruralResidencia" />
            )}
            {ubicacionResidencia === "urbanaResidencia" && (
                <CamposUrbanos formData={formData.urbanaResidenciaFields} handleFieldChange={handleFieldChange} formDataField="urbanaResidencia" />
            )}
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="numeroContactoEvaluado">
                        <Form.Label>Número de contacto</Form.Label>
                        <Form.Control
                            type="text"
                            name="numeroContactoEvaluado"
                            value={formData.numeroContactoEvaluado}
                            onChange={handleChange}
                            placeholder="Ingresa el número de contacto"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="correoElectronicoEvaluado">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="text"
                            name="correoElectronicoEvaluado"
                            value={formData.correoElectronicoEvaluado}
                            onChange={handleChange}
                            placeholder="Ingresa el correo electrónico"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <SubtituloForm subtitulo="Notificaciones" icon={IoNotifications} />
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿El evaluado autoriza notificación a través de su correo electrónico?</span>
                <Form.Group controlId="esCorreoNotificacion">
                    <Form.Check
                        type="switch"
                        id="esCorreoNotificacion"
                        checked={formData.esCorreoNotificacion}
                        onChange={handleChange}
                        name="esCorreoNotificacion"
                        label={
                            <>
                                {formData.esCorreoNotificacion ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            <Alert variant="warning" className="shadow-sm">
                Teniendo en cuenta que la Ley 1437 de 2011 autoriza la notificación por este medio siempre y cuando se cuente con el consentimiento expreso de la persona a evaluar.
            </Alert>
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿La dirección de la residencia actual del evaluado es la misma de notificación?</span>
                <Form.Group controlId="esUbicacionNotificacion">
                    <Form.Check
                        type="switch"
                        id="esUbicacionNotificacion"
                        checked={formData.esUbicacionNotificacion}
                        onChange={handleChange}
                        name="esUbicacionNotificacion"
                        label={
                            <>
                                {formData.esUbicacionNotificacion ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            {formData.esUbicacionNotificacion ? (<></>) : (<>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="departamentoNotificacion">
                            <Form.Label>Departamento</Form.Label>
                            <Form.Select
                                name="departamentoNotificacion"
                                value={formData.departamentoNotificacion}
                                onChange={handleChange}
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
                        <Form.Group controlId="municipioNotificacion">
                            <Form.Label>Ciudad/Municipio</Form.Label>
                            <Form.Select
                                name="municipioNotificacion"
                                value={formData.municipioNotificacion}
                                onChange={handleChange}
                                disabled={!municipiosNotificacion.length}
                            >
                                <option value="">Selecciona un municipio</option>
                                {municipiosNotificacion.map((mun) => (
                                    <option key={mun.id} value={mun.id}>
                                        {mun.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="ubicacionNotificacion">
                            <Form.Label>Zona</Form.Label>
                            <Form.Select
                                name="ubicacionNotificacion"
                                value={ubicacionNotificacion}
                                onChange={handleUbicacionNotificacionChange}
                            >
                                <option value="">Selecciona la ubicación</option>
                                <option value="ruralNotificacion">Rural</option>
                                <option value="urbanaNotificacion">Urbana</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                {ubicacionNotificacion === "ruralNotificacion" && (
                    <CamposRurales formData={formData.ruralNotificacionFields} handleFieldChange={handleFieldChange} formDataField="ruralNotificacion" />
                )}
                {ubicacionNotificacion === "urbanaNotificacion" && (
                    <CamposUrbanos formData={formData.urbanaNotificacionFields} handleFieldChange={handleFieldChange} formDataField="urbanaNotificacion" />
                )}
            </>)}
            <SubtituloForm subtitulo="Persona de contacto en caso de no ubicación" icon={FaUserPlus} />
            <Row className="mb-3">
            <Col md={6}>
                    <Form.Group controlId="nombrePersonaContacto">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombrePersonaContacto"
                            value={formData.nombrePersonaContacto}
                            onChange={handleChange}
                            placeholder="Ingresa los nombres"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="apellidoPersonaContacto">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellidoPersonaContacto"
                            value={formData.apellidoPersonaContacto}
                            onChange={handleChange}
                            placeholder="Ingresa los apellidos"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
            <Col md={4}>
                    <Form.Group controlId="numeroContactoPersona">
                        <Form.Label>Número de contacto</Form.Label>
                        <Form.Control
                            type="text"
                            name="numeroContactoPersona"
                            value={formData.numeroContactoPersona}
                            onChange={handleChange}
                            placeholder="Ingresa el número de contacto"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="correoElectronicoContacto">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="text"
                            name="correoElectronicoContacto"
                            value={formData.correoElectronicoContacto}
                            onChange={handleChange}
                            placeholder="Ingresa el correo electrónico"
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId="relacionConEvaluado">
                        <Form.Label>Relación y/o parentesco</Form.Label>
                        <Form.Control
                            type="text"
                            name="relacionConEvaluado"
                            value={formData.relacionConEvaluado}
                            onChange={handleChange}
                            placeholder="Ingresa el correo electrónico"
                        />
                    </Form.Group>
                </Col>
            </Row>
        </>
    );
};


export default DatosNotificacion;