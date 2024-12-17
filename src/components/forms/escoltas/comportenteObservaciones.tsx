import React, { ChangeEvent } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from 'eco-unp/Ui';
import { FaCommentAlt } from "react-icons/fa";

interface ComponenteObservacionesProps {
    formData: {
        observaciones: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteObservaciones: React.FC<ComponenteObservacionesProps> = ({ formData, handleChange }) => (
    <>
        <SubtituloForm subtitulo={"Observaciones Generales"} icon={FaCommentAlt} />
        <Row>
            <Col>
                <FormGroup controlId="observaciones">
                    <FormControl
                        as="textarea"
                        rows={5}
                        name="observaciones"
                        value={formData.observaciones}
                        onChange={handleChange}
                        placeholder="Ingrese aquí sus observaciones generales"
                        maxLength={1000}
                    />
                </FormGroup>
                <Form.Text muted>
                    {1000 - formData.observaciones.length} caracteres restantes
                </Form.Text>
            </Col>
        </Row>
    </>
);

export default ComponenteObservaciones;
