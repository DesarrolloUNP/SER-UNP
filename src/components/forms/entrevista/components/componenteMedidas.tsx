import { SubtituloForm } from "eco-unp/Ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FaShield, FaBuildingShield, FaFileShield } from "react-icons/fa6";

interface MedidasProps {
    formData: {
        tieneMedidasCautelares: boolean,
        medidasCautelares: string,
        tieneMedidasEspeciales: boolean,
        medidasEspeciales: string,
        entidadSeguridad: string,
        conoceMedidasAutoproteccion: boolean,
        aplicaMedidasAutoproteccion: boolean,
        entregaFolletoAutoproteccion: boolean,
        observacionesAutoproteccion: string
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const Medidas: React.FC<MedidasProps> = ({ formData, handleChange }) => {

    return (
        <>
            <SubtituloForm subtitulo="Medidas cautelares o provisionales " icon={FaShield} />
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿El evaluado cuenta con medidas cautelares o provisionales?</span>
                <Form.Group controlId="tieneMedidasCautelares">
                    <Form.Check
                        type="switch"
                        id="tieneMedidasCautelares"
                        checked={formData.tieneMedidasCautelares}
                        onChange={handleChange}
                        name="tieneMedidasCautelares"
                        label={
                            <>
                                {formData.tieneMedidasCautelares ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            {formData.tieneMedidasCautelares ? (<>
                <Row className="mb-3">
                    <Form.Group controlId="medidasCautelares">
                        <Form.Label>¿Cuáles?</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="medidasCautelares"
                            value={formData.medidasCautelares}
                            onChange={handleChange}
                            placeholder="Ingresa una descripción"
                            maxLength={500}
                            rows={3}
                        />
                        <Form.Text muted>
                            {500 - formData.medidasCautelares.length} caracteres restantes
                        </Form.Text>
                    </Form.Group>
                </Row></>) : (<></>)}
            <SubtituloForm subtitulo="Medidas especiales de protección o seguridad" icon={FaBuildingShield} />
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿El evaluado cuenta con medidas especiales de protección o seguridad?</span>
                <Form.Group controlId="tieneMedidasEspeciales">
                    <Form.Check
                        type="switch"
                        id="tieneMedidasEspeciales"
                        checked={formData.tieneMedidasEspeciales}
                        onChange={handleChange}
                        name="tieneMedidasEspeciales"
                        label={
                            <>
                                {formData.tieneMedidasEspeciales ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            {formData.tieneMedidasEspeciales ? (<><Row className="mb-3">
                <Form.Group controlId="medidasCautelares">
                    <Form.Label>¿Cuáles?</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="medidasCautelares"
                        value={formData.medidasCautelares}
                        onChange={handleChange}
                        placeholder="Ingresa una descripción"
                        maxLength={1000}
                        rows={5}
                    />
                    <Form.Text muted>
                        {1000 - formData.medidasCautelares.length} caracteres restantes
                    </Form.Text>
                </Form.Group>
            </Row>
                <Col md={12} className="mb-3">
                    <Form.Group controlId="entidadSeguridad">
                        <Form.Label>Entidad de seguridad del Estado</Form.Label>
                        <Form.Control
                            type="text"
                            name="entidadSeguridad"
                            value={formData.entidadSeguridad}
                            onChange={handleChange}
                            placeholder="Ingresa la entidad"
                        />
                    </Form.Group>
                </Col></>) : (<></>)}
            <SubtituloForm subtitulo="Acta de entrega de medidas de autoprotección" icon={FaFileShield} />
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿El evaluado conoce las medidas básicas de seguridad/autoprotección?</span>
                <Form.Group controlId="conoceMedidasAutoproteccion">
                    <Form.Check
                        type="switch"
                        id="conoceMedidasAutoproteccion"
                        checked={formData.conoceMedidasAutoproteccion}
                        onChange={handleChange}
                        name="conoceMedidasAutoproteccion"
                        label={
                            <>
                                {formData.conoceMedidasAutoproteccion ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }} className="mb-3">
                <span>¿El evaluado aplica las medidas básicas de seguridad/autoprotección?</span>
                <Form.Group controlId="aplicaMedidasAutoproteccion">
                    <Form.Check
                        type="switch"
                        id="aplicaMedidasAutoproteccion"
                        checked={formData.aplicaMedidasAutoproteccion}
                        onChange={handleChange}
                        name="aplicaMedidasAutoproteccion"
                        label={
                            <>
                                {formData.aplicaMedidasAutoproteccion ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems:'center', marginRight:'1rem' }} className="mb-3">
                <span style={{textAlign:'justify'}}>Se hizo entrega del folleto de Seguridad Preventiva, la cual contiene las recomendaciones de autoprotección, en cada uno de los entornos, con el fin de ser aplicadas y socializadas en forma permanente por parte del evaluado (a) y su familia, para minimizar vulnerabilidades y neutralizar posibles hechos en contra de su seguridad e integridad personal.</span>
                <Form.Group controlId="entregaFolletoAutoproteccion">
                    <Form.Check
                        type="switch"
                        id="entregaFolletoAutoproteccion"
                        checked={formData.entregaFolletoAutoproteccion}
                        onChange={handleChange}
                        name="entregaFolletoAutoproteccion"
                        label={
                            <>
                                {formData.entregaFolletoAutoproteccion ? " Sí" : " No"}
                            </>
                        }
                    />
                </Form.Group>
            </div>
            <Row className="mb-3">
                <Form.Group controlId="observacionesAutoproteccion">
                    <Form.Label>Observaciones</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="observacionesAutoproteccion"
                        value={formData.observacionesAutoproteccion}
                        onChange={handleChange}
                        placeholder="Ingresa una descripción"
                        maxLength={1000}
                        rows={5}
                    />
                    <Form.Text muted>
                        {1000 - formData.observacionesAutoproteccion.length} caracteres restantes
                    </Form.Text>
                </Form.Group>
            </Row>
        </>)

}

export default Medidas;