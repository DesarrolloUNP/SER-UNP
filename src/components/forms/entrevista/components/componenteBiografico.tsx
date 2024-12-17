import { SubtituloForm } from "eco-unp/Ui";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { FaClipboardUser } from "react-icons/fa6";
import { fetchDepartamentos, fetchMunicipios } from "../../../../services/ubicacion";
import { escolaridad, estadoCivil } from "../configForm";

interface ComponenteBiograficoProps {
    formData: {
        fechaNacimiento: string;
        edad: any;
        nacionalidadColombiana: boolean;
        paisNacimiento: string;
        ciudadNacimiento: string;
        departamentoNacimiento: string;
        municipio: string;
        estadoCivil: string;
        nivelAcademico: string;
        tipoSangre: string;
        rh: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
    updateFormData: (field: string, value: any) => void;

}

const ComponenteBiografico: React.FC<ComponenteBiograficoProps> = ({ formData, handleChange, updateFormData }) => {

    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState<string>("");

    const calcularEdad = (fechaNacimiento: string) => {
        if (!fechaNacimiento) return "";
        const hoy = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--;
        }
        return edad >= 0 ? edad : "";
    };

    const handleFechaNacimientoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        updateFormData("fechaNacimiento", value);
        const edadCalculada = calcularEdad(value);
        updateFormData("edad", edadCalculada);
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
            <SubtituloForm subtitulo="Datos personales del evaluado" icon={FaClipboardUser} />
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿Es de nacionalidad colombiana?</span>
                <Form.Group controlId="nacionalidad">
                    <Form.Check
                        type="switch"
                        id="nacionalidadColombiana"
                        checked={formData.nacionalidadColombiana}
                        onChange={(e) => updateFormData("nacionalidadColombiana", e.target.checked)}
                        name="nacionalidadColombiana"
                        label={
                            <>

                                {formData.nacionalidadColombiana ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            <Row className="mb-3">
                {formData.nacionalidadColombiana ? (
                    <>
                        <Col md={6}>
                            <Form.Group controlId="departamentoNacimiento">
                                <Form.Label>Departamento</Form.Label>
                                <Form.Select
                                    required
                                    name="departamentoNacimiento"
                                    value={formData.departamentoNacimiento}
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
                        <Col md={6}>
                            <Form.Group controlId="municipio">
                                <Form.Label>Ciudad/Municipio</Form.Label>
                                <Form.Select
                                    required
                                    name="municipio"
                                    value={formData.municipio}
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
                    </>
                ) : (
                    <>
                        <Col md={6}>
                            <Form.Group controlId="pais">
                                <Form.Label>País de nacimiento</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="pais"
                                    value={formData.paisNacimiento}
                                    onChange={handleChange}
                                    placeholder="Ingresa el país"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es obligatorio.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="ciudadNacimiento">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="ciudad"
                                    value={formData.ciudadNacimiento}
                                    onChange={handleChange}
                                    placeholder="Ingresa la ciudad"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es obligatorio.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </>
                )}
            </Row>
            <Row className="mb-3">
                <Col md={3}>
                    <Form.Group controlId="fechaNacimiento">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleFechaNacimientoChange}
                            placeholder="Ingresa la fecha de nacimiento"
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="edad">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            readOnly
                            type="number"
                            name="edad"
                            value={formData.edad}
                            placeholder="Edad calculada"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="tipoSangre">
                        <Form.Label>Tipo de sangre</Form.Label>
                        <Form.Select
                            required
                            name="tipoSangre"
                            value={formData.tipoSangre}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona el Tipo</option>
                            <option value="cedula">A</option>
                            <option value="pasaporte">B</option>
                            <option value="pasaporte">AB</option>
                            <option value="pasaporte">O</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId="rh">
                        <Form.Label>RH</Form.Label>
                        <Form.Select
                            required
                            name="rh"
                            value={formData.rh}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona el RH</option>
                            <option value="Positivo">Positivo</option>
                            <option value="Negativo">Negativo</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Estado civil</FormLabel>
                        <FormSelect
                            name="estadoCivil"
                            value={formData.estadoCivil || ""}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona un estado</option>
                            {estadoCivil.map((opcion: any) => (
                                <option key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel>Nivel de escolaridad</FormLabel>
                        <FormSelect
                            name="nivelAcademico"
                            value={formData.nivelAcademico || ""}
                            onChange={handleChange}
                        >
                            <option value="">Selecciona un nivel</option>
                            {escolaridad.map((opcion: any) => (
                                <option key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </option>
                            ))}
                        </FormSelect>
                    </FormGroup>
                </Col>

            </Row>
        </>)

}

export default ComponenteBiografico;




