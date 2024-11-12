import { SubtituloForm } from "eco-unp/ui";
import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { RiUserLocationFill } from "react-icons/ri";

interface UbicacionFechaProps {
    formData: { departamento: string; ciudad: string; direccion: string; fechaHora: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UbicacionFecha: React.FC<UbicacionFechaProps> = ({ formData, handleChange }) => (
    <>
    <SubtituloForm subtitulo="Ubicación y fecha" icon={RiUserLocationFill} />
    <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="departamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    placeholder="Ingresa el departamento"
                />
                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="ciudad">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    placeholder="Ingresa la ciudad"
                />
                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
            </Form.Group>
        </Col>
    </Row>
    <Row className="mb-3">
        <Col md={6}>
            <Form.Group controlId="direccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Ingresa la dirección"
                />
                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
            </Form.Group>
        </Col>
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
                <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
            </Form.Group>
        </Col>
    </Row>
    </>
);
export default UbicacionFecha;

