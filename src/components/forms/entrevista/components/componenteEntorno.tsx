import { SubtituloForm } from 'eco-unp/Ui';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { MdOutlineSportsHandball } from "react-icons/md";

export const Entorno: React.FC<{ formData: any, handleChange: any }> = ({ formData, handleChange }) => (
    <>
    <SubtituloForm subtitulo="Actividades de esparcimiento, culturales y de recreación" icon={MdOutlineSportsHandball} />
        <Row className="mb-3">
            <Form.Group controlId="observacionesEntorno">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control
                    as="textarea"
                    required
                    name="observacionesEntorno"
                    value={formData.observacionesEntorno}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción de las actividades"
                    maxLength={400}
                    rows={4}
                />
                <Form.Text muted>
                    {400 - formData.observacionesEntorno.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>

    </>
);