import React from "react";
import { Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap";

interface CamposRuralesProps {
    formData: any;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
    formDataField: string
}

const CamposRurales: React.FC<CamposRuralesProps> = ({ formData, handleFieldChange, formDataField }) => (
    <>
        <Row className="mb-3">
            <Col md={4}>
                <FormGroup>
                    <FormLabel>Corregimiento</FormLabel>
                    <FormControl
                        type="text"
                        maxLength={100}
                        name="corregimiento"
                        value={formData?.corregimiento || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                    />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <FormLabel>Vereda</FormLabel>
                    <FormControl
                        type="text"
                        maxLength={100}
                        required
                        name="vereda"
                        value={formData?.vereda || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                    />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <FormLabel>Centro poblado</FormLabel>
                    <FormControl
                        type="text"
                        maxLength={100}
                        name="centroPoblado"
                        value={formData?.centroPoblado || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                    />
                </FormGroup>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col>
                <FormGroup>
                    <FormLabel>Indicaciones del lugar de domicilio</FormLabel>
                    <FormControl
                        type="text"
                        name="indicaciones"
                        value={formData?.indicaciones || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                    />
                </FormGroup>
            </Col>
        </Row>
    </>
);

export default CamposRurales;
