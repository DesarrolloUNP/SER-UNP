// CamposUrbanos.tsx
import React, { useEffect, useState } from 'react';
import { Col, FormGroup, FormLabel, FormControl, FormSelect, FormCheck, Row } from "react-bootstrap";
import { opcionesVia } from '../components/forms/entrevista/configForm';


interface CamposUrbanosProps {
    formData: any;
    handleFieldChange: (e: React.ChangeEvent<any>, location: string) => void;
    formDataField: string
}

const CamposUrbanos: React.FC<CamposUrbanosProps> = ({ formData, handleFieldChange, formDataField }) => {

    const [resumenDireccion, setResumenDireccion] = useState("");

    useEffect(() => {
        const fields = [
            formData.viaPrincipal,
            formData.numeroViaPrincipal, formData.letraPrincipal,
            formData.esBis ? 'Bis' : '',
            formData.cuadrantePrincipal,
            formData.numeroViaSecundaria ? `# ${formData.numeroViaSecundaria}` : '',
            formData.letraSecundaria,
            formData.cuadranteSecundario,
            formData.numeroPlaca ? `# ${formData.numeroPlaca}` : '',
            ' ',
            formData.complemento,
        ];

        const resumen = fields.filter(field => field).join(' ')
        setResumenDireccion(resumen);
    }, [formData.nombreBarrio, formData.viaPrincipal, formData.numeroViaPrincipal, formData.letraPrincipal, formData.esBis, formData.cuadrantePrincipal,
    formData.numeroViaSecundaria, formData.letraSecundaria, formData.cuadranteSecundario, formData.numeroPlaca, formData.complemento]);

    return (
        <Row>
            <Col md={3} xs={12}>
                <FormGroup>
                    <FormLabel>Vía principal</FormLabel>
                    <FormSelect
                        name="viaPrincipal"
                        value={formData?.viaPrincipal || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                    >
                        <option value="">Seleccione una vía</option>
                        {opcionesVia.map((opcion: any) => (
                            <option key={opcion.value} value={opcion.value}>
                                {opcion.label}
                            </option>
                        ))}
                    </FormSelect>
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup className="mb-3">
                    <FormLabel>Número vía</FormLabel>
                    <FormControl
                        type="text"
                        name="numeroViaPrincipal"
                        value={formData?.numeroViaPrincipal || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                        placeholder='Ej: 23'
                    />
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup >
                    <FormLabel>Letra</FormLabel>
                    <FormControl
                        type="text"
                        name="letraPrincipal"
                        value={formData?.letraPrincipal || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                        placeholder='Ej: A'
                    />
                </FormGroup>
            </Col>

            <Col md={2} className='align-self-end'>
                <FormGroup className='mb-4'>
                    <FormCheck type="checkbox" label="¿Es bis?" name="esBis" onChange={(e) => handleFieldChange(e, formDataField)}
                        value={formData?.esBis || false} />
                </FormGroup>
            </Col>

            <Col md={3}>
                <FormGroup className="mb-3">
                    <FormLabel>Cardinalidad</FormLabel>
                    <FormSelect value={formData?.cuadrantePrincipal || ""} onChange={(e) => handleFieldChange(e, formDataField)}
                        name="cuadrantePrincipal">
                        <option value="">Seleccione la cardinalidad</option>
                        <option value="Norte">Norte</option>
                        <option value="Sur">Sur</option>
                        <option value="Este">Este</option>
                        <option value="Oeste">Oeste</option>
                    </FormSelect>
                </FormGroup>
            </Col>

            <Col className='col-md-auto text-center align-self-center'>
                <div className='mt-3 p-1'>
                    <b>#</b>
                </div>
            </Col>

            <Col md={2}>
                <FormGroup className="mb-3">
                    <FormLabel>Número uno</FormLabel>
                    <FormControl
                        type="text"
                        value={formData?.numeroViaSecundaria || ""} onChange={(e) => handleFieldChange(e, formDataField)}
                        placeholder='Ej: 13'
                        name="numeroViaSecundaria"
                    />
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup className="mb-3">
                    <FormLabel>Letra</FormLabel>
                    <FormControl
                        type="text"
                        value={formData?.letraSecundaria || " "}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                        name="letraSecundaria"
                        placeholder='Ej: C'
                    />
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup className="mb-3">
                    <FormLabel>Cardinalidad </FormLabel>
                    <FormSelect value={formData?.cuadranteSecundario || ""} onChange={(e) => handleFieldChange(e, formDataField)}
                        name="cuadranteSecundario">
                        <option value="">Seleccione la cardinalidad</option>
                        <option value="Norte">Norte</option>
                        <option value="Sur">Sur</option>
                        <option value="Este">Este</option>
                        <option value="Oeste">Oeste</option>
                    </FormSelect>
                </FormGroup>
            </Col>

            <Col className='col-md-auto text-center align-self-center'>
                <div className='mt-3 p-1'>
                    <b>-</b>
                </div>
            </Col>

            <Col md={2}>
                <FormGroup className="mb-3">
                    <FormLabel>Número dos</FormLabel>
                    <FormControl
                        type="text"
                        name="numeroPlaca"
                        value={formData?.numeroPlaca || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                        placeholder='Ej: 25' />
                </FormGroup>
            </Col>

            <Col md={3} style={{ paddingRight: '7px' }}>
                <FormGroup className="mb-3">
                    <FormLabel>Complemento</FormLabel>
                    <FormControl
                        type="text"
                        name="complemento"
                        value={formData?.complemento || ""}
                        onChange={(e) => handleFieldChange(e, formDataField)}
                        placeholder='Ej: Casa 3'
                    />
                </FormGroup>
            </Col>

            <Col md={4}>
                <FormGroup className="mb-3">
                    <FormLabel>Barrio / Sector</FormLabel>
                    <FormControl type="text" value={formData?.nombreBarrio || ""} onChange={(e) => handleFieldChange(e, formDataField)}
                        name= "nombreBarrio"
                    placeholder="Ej: Mi barrio"
                    />
                </FormGroup>
            </Col>

            <Col md={8}>
                <FormGroup className="mb-2">
                    <FormLabel>Resumen de dirección </FormLabel>
                    <FormControl type="text" className='bg-body-secondary' value={resumenDireccion} disabled />
                </FormGroup>
            </Col>

            <Col md={12}>
                <FormGroup className="mb-2">
                    <FormLabel>Indicaciones del lugar de domicilio</FormLabel>
                    <FormControl type="text" value={formData?.indicaciones || ""} onChange={(e) => handleFieldChange(e, formDataField)}
                        name="indicaciones" />
                </FormGroup>
            </Col>
        </Row>
    );
};

export default CamposUrbanos;
