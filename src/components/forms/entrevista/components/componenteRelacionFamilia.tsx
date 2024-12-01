import { SubtituloForm } from 'eco-unp/ui';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { FaHouseUser } from "react-icons/fa";

export const RelacionFamiliar: React.FC<{ formData: any, handleChange: any }> = ({ formData, handleChange }) => (
    <>
    <SubtituloForm subtitulo="Relación de personas con las que reside el evaluado" icon={FaHouseUser} />
        <Row className="mb-3">
            <Form.Group controlId="observaciones">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control
                    as="textarea"
                    required
                    name="observaciones"
                    value={formData.observaciones}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={400}
                    rows={4}
                />
                <Form.Text muted>
                    {400 - formData.observaciones.length} caracteres restantes
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Este campo es obligatorio y debe tener máximo 400 caracteres.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

    </>

);