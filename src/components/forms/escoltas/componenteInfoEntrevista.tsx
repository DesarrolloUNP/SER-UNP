import React, { ChangeEvent, useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from 'eco-unp/ui';
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import CamposRurales from "../../../shared/camposRurales";
import CamposUrbanos from "../../../shared/camposUrbanos";
import { fetchDepartamentos, fetchMunicipios } from "../../../services/ubicacion";

interface ComponenteInfoEntrevistaProps {
    formData: {
        tipoEntrevista: string;
        fechaHora: string;
        numeroIdentificacion: string;
        calidad: string;
        primerNombre: string;
        segundoNombre: string;
        primerApellido: string;
        segundoApellido: string;
        departamento: string;
        municipio: string;
        zona: string;
        ruralFields: any;
        urbanaFields: any;
        telefonoOrigen: string;
        telefonoDestino: string;
        amenazas: string;
        desplazamientos: string;
        actividades: string;
        conductas: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
}

const ComponenteInfoEntrevista: React.FC<ComponenteInfoEntrevistaProps> = ({ formData, handleChange, handleFieldChange }) => {
    const [zona, setZona] = useState<string>(formData.zona);
    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState<string>("");

    const handleZonaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setZona(selectedValue);
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



    return (

        <>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="tipoEntrevista">
                        <Form.Label>Tipo de Entrevista</Form.Label>
                        <Form.Select
                            required
                            name="tipoEntrevista"
                            value={formData.tipoEntrevista}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione el tipo de entrevista</option>
                            <option value="personal">Personal</option>
                            <option value="telefonica">Telefónica</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="fechaHora">
                        <Form.Label>Fecha y Hora</Form.Label>
                        <Form.Control
                            required
                            type="datetime-local"
                            name="fechaHora"
                            value={formData.fechaHora}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            {formData.tipoEntrevista === "personal" && (
                <>
                    <SubtituloForm subtitulo="Para las entrevistas realizadas personalmente:" icon={FaMapMarkedAlt} />
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group controlId="departamento">
                                <Form.Label>Departamento</Form.Label>
                                <Form.Select
                                    required
                                    name="departamento"
                                    value={formData.departamento}
                                    onChange={handleDepartamentoChange}
                                >
                                    <option value="">Seleccione un departamento</option>
                                    {departamentos.map((dep) => (
                                        <option key={dep.id} value={dep.id}>
                                            {dep.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="municipio">
                                <Form.Label>Municipio</Form.Label>
                                <Form.Select
                                    required
                                    name="municipio"
                                    value={formData.municipio}
                                    onChange={handleChange}
                                    disabled={!municipios.length}
                                >
                                    <option value="">Seleccione un municipio</option>
                                    {municipios.map((mun) => (
                                        <option key={mun.id} value={mun.id}>
                                            {mun.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="zona">
                                <Form.Label>Zona</Form.Label>
                                <Form.Select
                                    required
                                    name="zona"
                                    value={formData.zona}
                                    onChange={handleZonaChange}
                                >
                                    <option value="">Seleccione la zona</option>
                                    <option value="rural">Rural</option>
                                    <option value="urbana">Urbana</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {zona === "rural" && (
                        <CamposRurales formData={formData.ruralFields} handleFieldChange={handleFieldChange} formDataField={'rural'} />
                    )}

                    {zona === "urbana" && (
                        <CamposUrbanos formData={formData.urbanaFields} handleFieldChange={handleFieldChange} formDataField={'urbana'}></CamposUrbanos>
                    )}

                </>
            )}

            {formData.tipoEntrevista === "telefonica" && (
                <>
                    <SubtituloForm subtitulo="Para las entrevistas realizadas telefónicamente:" icon={FaPhoneAlt} />
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="telefonoOrigen">
                                <Form.Label>Número de Teléfono de Origen</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="telefonoOrigen"
                                    value={formData.telefonoOrigen}
                                    onChange={handleChange}
                                    placeholder="Teléfono de Origen"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="telefonoDestino">
                                <Form.Label>Número de Teléfono de Destino</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="telefonoDestino"
                                    value={formData.telefonoDestino}
                                    onChange={handleChange}
                                    placeholder="Teléfono de Destino"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </>
            )}

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="numeroIdentificacion">
                        <Form.Label>Número de Identificación</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="numeroIdentificacion"
                            value={formData.numeroIdentificacion}
                            onChange={handleChange}
                            placeholder="Número de Identificación"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="calidad">
                        <Form.Label>En su calidad de</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="calidad"
                            value={formData.calidad}
                            onChange={handleChange}
                            placeholder="Calidad"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="primerNombre">
                        <Form.Label>Primer Nombre del Entrevistado</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="primerNombre"
                            value={formData.primerNombre}
                            onChange={handleChange}
                            placeholder="Primer Nombre"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="segundoNombre">
                        <Form.Label>Segundo Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="segundoNombre"
                            value={formData.segundoNombre}
                            onChange={handleChange}
                            placeholder="Segundo Nombre"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="primerApellido">
                        <Form.Label>Primer Apellido del Entrevistado</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="primerApellido"
                            value={formData.primerApellido}
                            onChange={handleChange}
                            placeholder="Primer Apellido"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="segundoApellido">
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            name="segundoApellido"
                            value={formData.segundoApellido}
                            onChange={handleChange}
                            placeholder="Segundo Apellido"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <FormGroup className="mb-3">
                <FormLabel>¿Conoce de situaciones de amenazas contra la persona beneficiaria de medidas de protección de la UNP? En caso positivo, realicé una descripción en tiempo, modo y lugar de los hechos conocidos por usted, refiriendo la fuente de información.</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="amenazas"
                    value={formData.amenazas}
                    onChange={handleChange}
                    placeholder="Describa las amenazas conocidas"
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Describa los desplazamientos que la persona beneficiaria de medidas de protección de la UNP realiza en razón a sus actividades personales y poblacional.</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="desplazamientos"
                    value={formData.desplazamientos}
                    onChange={handleChange}
                    placeholder="Describa los desplazamientos realizados"
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Indique las actividades específicas que realiza la persona beneficiaria de medidas de protección de la UNP en relación con el grupo o grupos poblacionales al que hace parte.</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="actividades"
                    value={formData.actividades}
                    onChange={handleChange}
                    placeholder="Indique las actividades específicas realizadas"
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Refiera si la persona beneficiaria de medidas de protección de la UNP realiza conductas inapropiadas que le puedan generar riesgo adicional.</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="conductas"
                    value={formData.conductas}
                    onChange={handleChange}
                    placeholder="Describa conductas inapropiadas si existen"
                />
            </FormGroup>
        </>

    );
};

export default ComponenteInfoEntrevista;
