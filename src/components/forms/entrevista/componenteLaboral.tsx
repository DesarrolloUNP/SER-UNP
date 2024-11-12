import { SubtituloForm } from 'eco-unp/ui';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FaBuildingUser } from "react-icons/fa6";

export const InfoLaboral: React.FC<{ formData: any, handleChange: any }> = ({ formData, handleChange }) => (
    <>
    <SubtituloForm subtitulo="Actividad laboral y/o económica" icon={FaBuildingUser} />
        <Form.Group controlId="observaciones">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
                as="textarea"
                required
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                placeholder="Ingresa una descripción (máximo 400 caracteres)"
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
    </>

);
