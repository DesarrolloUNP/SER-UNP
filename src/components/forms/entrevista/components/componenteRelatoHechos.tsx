import { SubtituloForm } from 'eco-unp/Ui';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaUsers, FaUserShield, FaUserPlus } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { RiUserReceived2Fill, RiUserStarFill } from "react-icons/ri";

export const RelatoHechos: React.FC<{ formData: any, handleChange: any }> = ({ formData, handleChange }) => (
    <>
        <SubtituloForm subtitulo="Parte introductoria" icon={BsFillFileEarmarkPersonFill} />
        <Row className="mb-3">
            <Form.Group controlId="parteIntroductoria">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Se debe especificar el lugar donde se realiza la entrevista, el nombre completo y la identificación de la persona evaluada, así como su condición o grupo poblacional al que pertenece. También se debe indicar si ocupa algún cargo público o privado.</Form.Label>
                <Form.Control
                    as="textarea"
                    name="parteIntroductoria"
                    value={formData.parteIntroductoria}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.parteIntroductoria.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <SubtituloForm subtitulo="Variables generadoras de riesgo" icon={FaUsers} />
        <Row className="mb-3">
            <Form.Group controlId="variablesRiesgo">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Factores específicos relacionados con la persona evaluada, como su visibilidad, el escenario en el que participa, su liderazgo, la forma en que realiza sus actividades, toma de decisiones. También se deben considerar otras actividades de índole social, política, humanitaria, entre otras, que puedan influir en su nivel de riesgo.</Form.Label>
                <Form.Control
                    as="textarea"
                    name="variablesRiesgo"
                    value={formData.variablesRiesgo}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.variablesRiesgo.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <SubtituloForm subtitulo="Relato de los hechos ocurridos" icon={BiSolidUserDetail} />
        <Row className="mb-3">
            <Form.Group controlId="relatoHechos">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Detallar las amenazas, atentados, constreñimientos u otros eventos relevantes, describiéndolos con precisión circunstancias de tiempo, modo, lugar, y mencionando los presuntos autores y personas o autoridades que conocieron los hechos. Es importante aclarar si se realizó alguna denuncia relacionada con estos hechos y si tiene hipótesis de la razón de los hechos ocurridos.</Form.Label>
                <Form.Control
                    as="textarea"
                    name="relatoHechos"
                    value={formData.relatoHechos}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.relatoHechos.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <SubtituloForm subtitulo="Antecedentes de riesgo o amenazas" icon={RiUserReceived2Fill} />
        <Row className="mb-3">
            <Form.Group controlId="antecedentesRiesgo">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Descripción de hechos ocurridos en el pasado que puedan tener alguna relación con los hechos actuales. </Form.Label>
                <Form.Control
                    as="textarea"
                    name="antecedentesRiesgo"
                    value={formData.antecedentesRiesgo}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.antecedentesRiesgo.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <SubtituloForm subtitulo="Vulnerabilidad" icon={FaUserShield} />
        <Row className="mb-3">
            <Form.Group controlId="vulnerabilidad">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Indique las circunstancias propias de la persona evaluada que, debido a su situación socioeconómica, física, mental, cultural o por su condición de edad, género, etnia, entre otros factores, se encuentra en una situación de desventaja o mayor riesgo frente a la protección de sus derechos. </Form.Label>
                <Form.Control
                    as="textarea"
                    name="vulnerabilidad"
                    value={formData.vulnerabilidad}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.vulnerabilidad.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <SubtituloForm subtitulo="Aspectos adicionales" icon={FaUserPlus} />
        <Row className="mb-3">
            <Form.Group controlId="aspectosAdicionales">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Otros aspectos relevantes para la evaluación o revaluación de riesgo individual. </Form.Label>
                <Form.Control
                    as="textarea"
                    name="aspectosAdicionales"
                    value={formData.aspectosAdicionales}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.aspectosAdicionales.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <SubtituloForm subtitulo="Petición y consentimiento" icon={RiUserStarFill} />
        <Row className="mb-3">
            <Form.Group controlId="peticionEvaluado">
                <Form.Label style={{ textAlign: 'justify' }}>
                    Petición especial del evaluado. </Form.Label>
                <Form.Control
                    as="textarea"
                    name="peticionEvaluado"
                    value={formData.peticionEvaluado}
                    onChange={handleChange}
                    placeholder="Ingresa una descripción"
                    maxLength={1500}
                    rows={4}
                />
                <Form.Text muted>
                    {1500 - formData.peticionEvaluado.length} caracteres restantes
                </Form.Text>
            </Form.Group>
        </Row>
        <div style={{ display: 'flex', gap: '2rem',alignItems:'center', marginRight:'1rem'  }} className="mb-3">
            <span>Se deja constancia que la presente entrevista es leída y firmada por la persona a evaluar estando de acuerdo con la información plasmada.</span>
            <Form.Group controlId="constanciaEvaluado">
                <Form.Check
                    type="switch"
                    id="constanciaEvaluado"
                    checked={formData.constanciaEvaluado}
                    onChange={handleChange}
                    name="constanciaEvaluado"
                    label={
                        <>
                            {formData.constanciaEvaluado ? " Sí" : " No"}
                        </>
                    }
                />
            </Form.Group>
        </div>
    </>

);