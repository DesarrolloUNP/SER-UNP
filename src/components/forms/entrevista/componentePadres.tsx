import { SubtituloForm } from "eco-unp/ui";
import { ChangeEvent } from "react";
import { FaUsers } from "react-icons/fa";
import { Row, Col, Form } from "react-bootstrap";

interface ComponentePadresProps {
    formData: {
        nombrePadre: string,
        apellidoPadre: string,
        ocupacionPadre: string,
        empresaPadre: string,
        causaMuertePadre: string,
        nombreMadre: string,
        apellidoMadre: string,
        ocupacionMadre: string,
        empresaMadre: string,
        causaMuerteMadre: string,
    };
    handleChange: (e: ChangeEvent<any>) => void;
}
export const ComponentePadres: React.FC<ComponentePadresProps> = ({ formData, handleChange }) => (
    <>
    <SubtituloForm subtitulo="Padres" icon={FaUsers} />
    <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="nombrePadre">
                    <Form.Label>Nombre del Padre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="nombrePadre"
                        value={formData.nombrePadre}
                        onChange={handleChange}
                        placeholder="Ingresa el nombre del padre"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="apellidoPadre">
                    <Form.Label>Apellidos del Padre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="apellidoPadre"
                        value={formData.apellidoPadre}
                        onChange={handleChange}
                        placeholder="Ingresa los apellidos del Padre"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="ocupacionPadre">
                    <Form.Label>Ocupación</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="ocupacionPadre"
                        value={formData.ocupacionPadre}
                        onChange={handleChange}
                        placeholder="Ingresa la ocupación"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="empresaPadre">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="empresaPadre"
                        value={formData.empresaPadre}
                        onChange={handleChange}
                        placeholder="Ingresa la empresa"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
        <Form.Group controlId="causaMuertePadre">
            <Form.Label>Causa de muerte (Si aplica)</Form.Label>
            <Form.Control
                as="textarea"
                name="causaMuertePadre"
                value={formData.causaMuertePadre}
                onChange={handleChange}
                placeholder="Ingresa una descripción (máximo 100 caracteres)"
                maxLength={100}
                rows={1}
            />
            <Form.Text muted>
                {100 - formData.causaMuertePadre.length} caracteres restantes
            </Form.Text>
            <Form.Control.Feedback type="invalid">
                Este campo debe tener máximo 100 caracteres.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="nombreMadre">
                    <Form.Label>Nombre de la Madre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="nombreMadre"
                        value={formData.nombreMadre}
                        onChange={handleChange}
                        placeholder="Ingresa el nombre de la Madre"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="apellidoMadre">
                    <Form.Label>Apellidos de la Madre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="apellidoMadre"
                        value={formData.apellidoMadre}
                        onChange={handleChange}
                        placeholder="Ingresa los apellidos de la Madre"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col md={6}>
                <Form.Group controlId="ocupacionMadre">
                    <Form.Label>Ocupación</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="ocupacionMadre"
                        value={formData.ocupacionMadre}
                        onChange={handleChange}
                        placeholder="Ingresa la ocupación"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="empresaMadre">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="empresaMadre"
                        value={formData.empresaMadre}
                        onChange={handleChange}
                        placeholder="Ingresa la empresa"
                    />
                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                </Form.Group>
            </Col>
        </Row>
        <Row className="mb-3">
        <Form.Group controlId="causaMuerteMadre">
            <Form.Label>Causa de muerte (Si aplica)</Form.Label>
            <Form.Control
                as="textarea"
                name="causaMuerteMadre"
                value={formData.causaMuerteMadre}
                onChange={handleChange}
                placeholder="Ingresa una descripción (máximo 100 caracteres)"
                maxLength={100}
                rows={1}
            />
            <Form.Text muted>
                {100 - formData.causaMuerteMadre.length} caracteres restantes
            </Form.Text>
            <Form.Control.Feedback type="invalid">
                Este campo debe tener máximo 100 caracteres.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
    </>
)