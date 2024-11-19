import React from 'react';
import { Form } from 'react-bootstrap';

export const RelacionFamiliar: React.FC<{ formData: any, handleChange: any }> = ({ formData, handleChange }) => (
    <>
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