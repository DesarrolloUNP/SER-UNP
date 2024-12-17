import { SubtituloForm } from "eco-unp/Ui";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { Historial } from '../configForm'
import { fetchDepartamentos, fetchMunicipios } from "../../../../services/ubicacion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface HistorialProps {
    historial: Historial[];
    handleHistorialChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddHistorial: () => void;
    handleRemoveHistorial: (index: number) => void;
}

const HistorialInfo: React.FC<HistorialProps> = ({ historial, handleHistorialChange, handleAddHistorial, handleRemoveHistorial }) => {

    const [departamentos, setDepartamentos] = useState<{ id: number; name: string }[]>([]);
    const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState<string>("");

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

    const handleDepartamentoChange = (index: any, e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedDepartamento(value);
        handleHistorialChange(index, e);
    };


    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Información de la actividad y/o función" icon={IoMdListBox} />
                <Button
                    variant="primary"
                    onClick={handleAddHistorial}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar actividad
                </Button>
            </div>

            {historial.length > 0 && historial.map((actividad, index) => (
                <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                    <Button
                        variant="link"
                        onClick={() => handleRemoveHistorial(index)}
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

                    <Col md={12} className="mb-3">
                        <Form.Group controlId={`entidad-${index}`}>
                            <Form.Label>Entidad/Organización</Form.Label>
                            <Form.Control
                                type="text"
                                name="entidad"
                                value={actividad.entidad}
                                onChange={(e) => handleHistorialChange(index, e)}
                                placeholder="Ingresar la Entidad u Organización"
                            />
                            <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId={`entidad-${index}`}>
                                <Form.Label>Departamento</Form.Label>
                                <Form.Select
                                    name="departamento"
                                    value={actividad.departamento}
                                    onChange={(e) => handleDepartamentoChange(index, e)}
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
                            <Form.Group controlId={`municipio-${index}`}>
                                <Form.Label>Ciudad/Municipio</Form.Label>
                                <Form.Select
                                    required
                                    name="municipio"
                                    value={actividad.municipio}
                                    onChange={(e) => handleHistorialChange(index, e)}
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
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId={`cargo-${index}`}>
                                <Form.Label>Cargo/Función/Labor</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cargo"
                                    value={actividad.cargo}
                                    onChange={(e) => handleHistorialChange(index, e)}
                                    placeholder="Ingresa la función"
                                />
                                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Form.Label>Periodo</Form.Label>
                                    <DatePicker
                                        selected={actividad.fechaInicial}
                                        onChange={(dates) => {
                                            const [start, end] = dates as [Date, Date];
                                            if (start) {
                                                handleHistorialChange(index, {
                                                    target: { name: "fechaInicial", value: start },
                                                } as React.ChangeEvent<any>);
                                            }
                                            if (end) {
                                                handleHistorialChange(index, {
                                                    target: { name: "fechaFinal", value: end },
                                                } as React.ChangeEvent<any>);
                                            }
                                        }}
                                        startDate={actividad.fechaInicial}
                                        endDate={actividad.fechaFinal}
                                        selectsRange
                                        placeholderText="Selecciona un rango de fechas"
                                        className="form-control"
                                    />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Col md={12}>
                        <Form.Group controlId={`observaciones-${index}`}>
                            <Form.Label>Observaciones</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="observaciones"
                                value={actividad.observaciones}
                                onChange={(e) => handleHistorialChange(index, e)}
                                placeholder="Ingresa una descripción"
                                maxLength={200}
                                rows={2}
                            />
                            <Form.Text muted>
                                {200 - actividad.observaciones.length} caracteres restantes
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Este campo es obligatorio y debe tener máximo 400 caracteres.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </div>
            ))}
        </>
    );
};

export default HistorialInfo;