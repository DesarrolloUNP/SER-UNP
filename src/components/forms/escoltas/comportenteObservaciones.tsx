import React, { ChangeEvent } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from 'eco-unp/ui';
import { FaCommentAlt } from "react-icons/fa";

interface ComponenteObservacionesProps {
    formData: {
        observaciones: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteObservaciones: React.FC<ComponenteObservacionesProps> = ({ formData, handleChange }) => (
    <>
        <Row className="mb-3">
            <Col>
                <FormGroup controlId="observaciones">
                    <FormLabel>Observaciones</FormLabel>
                    <FormControl
                        as="textarea"
                        rows={5}
                        name="observaciones"
                        value={formData.observaciones}
                        onChange={handleChange}
                        placeholder="Ingrese aquí sus observaciones generales"
                    />
                </FormGroup>
            </Col>
        </Row>
    </>
);

export default ComponenteObservaciones;
