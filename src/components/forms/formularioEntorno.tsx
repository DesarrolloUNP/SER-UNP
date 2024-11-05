import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, FormLabel, FormControl, Alert } from "react-bootstrap";
import { FaFileAlt, FaCalendarAlt, FaIdCard, FaGenderless, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import '../../styles/formularioEntorno.css';
import { SubtituloForm } from 'eco-unp/ui'

export const FormularioEntorno: React.FC = () => {

    const datos = {
        ordenTrabajoNo: "12345",
        fechaSolicitudUNP: { dia: "01", mes: "01", año: "2023" },
        fechaReciboER: { dia: "02", mes: "01", año: "2023" },
        fechaExpedicion: { dia: "03", mes: "01", año: "2023" },
        tipoIdentificacion: "Cédula",
        numeroIdentificacion: "987654321",
        sexo: "Masculino",
        primerNombre: "Juan",
        segundoNombre: "Carlos",
        primerApellido: "Pérez",
        segundoApellido: "González"
    };

    return (
        <div>
            <Card className="border-0 rounded-3 shadow mt-4">
                <CardHeader className="text-center bg-unp text-light rounded-3 py-3">
                    <h5>INFORMACIÓN DE LA ORDEN DE TRABAJO</h5>
                </CardHeader>
                <CardBody>
                    <Form>
                        <SubtituloForm subtitulo="Orden de trabajo" icon={FaFileAlt} />
                        <Row>
                            <Col md={12} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Orden de trabajo No.</FormLabel>
                                    <FormControl type="text" readOnly value={datos.ordenTrabajoNo} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Fecha de Solicitud en la UNP" icon={FaCalendarAlt} />
                        <Row>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Día</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaSolicitudUNP.dia} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Mes</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaSolicitudUNP.mes} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Año</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaSolicitudUNP.año} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Fecha Recibo Subdirección ER" icon={FaCalendarAlt} />
                        <Row>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Día</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaReciboER.dia} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Mes</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaReciboER.mes} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Año</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaReciboER.año} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Fecha Expedición de la Orden" icon={FaCalendarAlt} />
                        <Row>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Día</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaExpedicion.dia} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Mes</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaExpedicion.mes} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Año</FormLabel>
                                    <FormControl type="text" readOnly value={datos.fechaExpedicion.año} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Identificación" icon={FaIdCard} />
                        <Row>
                            <Col md={6} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Tipo de Identificación</FormLabel>
                                    <FormControl type="text" readOnly value={datos.tipoIdentificacion} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={6} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Número de Identificación</FormLabel>
                                    <FormControl type="text" readOnly value={datos.numeroIdentificacion} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Sexo" icon={FaGenderless} />
                        <Row>
                            <Col md={12} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Sexo</FormLabel>
                                    <FormControl type="text" readOnly value={datos.sexo} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Nombre del Evaluado" icon={FaUser} />
                        <Row>
                            <Col md={6} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Primer Nombre de la persona a evaluar</FormLabel>
                                    <FormControl type="text" readOnly value={datos.primerNombre} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={6} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Segundo Nombre</FormLabel>
                                    <FormControl type="text" readOnly value={datos.segundoNombre} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Primer Apellido de la persona a evaluar</FormLabel>
                                    <FormControl type="text" readOnly value={datos.primerApellido} className="readonly-field" />
                                </FormGroup>
                            </Col>
                            <Col md={6} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Segundo Apellido</FormLabel>
                                    <FormControl type="text" readOnly value={datos.segundoApellido} className="readonly-field" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>

            <Card className="border-0 rounded-3 shadow mt-4">
                <CardHeader className="text-center bg-unp text-light rounded-3 py-3">
                    <h5>ANÁLISIS E INSPECCIÓN</h5>
                </CardHeader>
                <CardBody>
                    <Alert variant="warning" className="shadow-sm">
                        La UNP informa que durante el desarrollo de la actuación adelantada por la Entidad podrá solicitar revocar esta autorización
                        y solicitar por escrito que las notificaciones o comunicaciones sucesivas se realicen a través de otros medios previstos en la Ley 1437 de 2011 - CPACA
                    </Alert>
                </CardBody>
            </Card>

            <Card className="border-0 rounded-3 shadow mt-4">
                <CardHeader className="text-center bg-unp text-light rounded-3 py-3">
                    <h5>RESIDENCIAL</h5>
                </CardHeader>
                <CardBody>
                    <Form>
                        <SubtituloForm subtitulo="Fecha de realización de la inspección" icon={FaCalendarAlt} />
                        <Row>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Día *</FormLabel>
                                    <FormControl type="text" placeholder="Día" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Mes *</FormLabel>
                                    <FormControl type="text" placeholder="Mes" />
                                </FormGroup>
                            </Col>
                            <Col md={4} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>Año *</FormLabel>
                                    <FormControl type="text" placeholder="Año" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <SubtituloForm subtitulo="Distancia al casco urbano" icon={FaMapMarkerAlt} />
                        <Row>
                            <Col md={12} sm={12} className="mb-3">
                                <FormGroup>
                                    <FormLabel>En caso de que la vivienda esté ubicada en zona rural, ¿cuál es la distancia aproximada al casco urbano más cercano?</FormLabel>
                                    <FormControl type="text" placeholder="Explicacion de como ingresar el dato..." />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Card className="border-0 rounded-3 shadow mt-4">
                            <CardHeader className="text-center bg-unp text-light rounded-3 py-3">
                                <h5>Actividad o función (poblacional) programa UNP</h5>
                            </CardHeader>
                            <CardBody>
                                <SubtituloForm subtitulo="Fecha de realización de la inspección" icon={FaCalendarAlt} />
                                <Row>
                                    <Col md={4} sm={12} className="mb-3">
                                        <FormGroup>
                                            <FormLabel>Día *</FormLabel>
                                            <FormControl type="text" placeholder="Día" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4} sm={12} className="mb-3">
                                        <FormGroup>
                                            <FormLabel>Mes *</FormLabel>
                                            <FormControl type="text" placeholder="Mes" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4} sm={12} className="mb-3">
                                        <FormGroup>
                                            <FormLabel>Año *</FormLabel>
                                            <FormControl type="text" placeholder="Año" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} sm={12} className="mb-3">
                                        <FormGroup>
                                            <FormLabel>En caso de que el lugar de la actividad, función o condición esté ubicado en zona rural, ¿cuál es la distancia aproximada al casco urbano más cercano?</FormLabel>
                                            <FormControl type="text" placeholder="Distancia en km" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Form>
                </CardBody>
            </Card>

            <Card className="border-0 rounded-3 shadow mt-4">
                <CardHeader className="text-center bg-unp text-light rounded-3 py-3">
                    <h5>SEGURIDAD DEL SITIO</h5>
                </CardHeader>
                <CardBody>
                    <Form>
                        <div className="mb-4 p-3 border rounded shadow-sm">
                            <FormLabel className="d-block mb-2"><strong>Mencione las barreras físicas y/o naturales *</strong></FormLabel>
                            <FormGroup className="mb-3">
                                <FormLabel>Observaciones Residencia</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción de las barreras en residencia" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción de las barreras en actividad o función" />
                            </FormGroup>
                        </div>

                        <div className="mb-4 p-3 border rounded shadow-sm">
                            <FormLabel className="d-block mb-2"><strong>Describa cómo es el control para el ingreso al sitio (seguridad personal, portero, vigilante, etc.)</strong></FormLabel>
                            <FormGroup className="mb-3">
                                <FormLabel>Observaciones Residencia</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción del control en residencia" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción del control en actividad o función" />
                            </FormGroup>
                        </div>

                        <div className="mb-4 p-3 border rounded shadow-sm">
                            <FormLabel className="d-block mb-2"><strong>Describa las medidas técnicas de seguridad en el sitio (sistema de alarma, circuito cerrado de televisión, etc.)</strong></FormLabel>
                            <FormGroup className="mb-3">
                                <FormLabel>Observaciones Residencia</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción de medidas en residencia" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción de medidas en actividad o función" />
                            </FormGroup>
                        </div>

                        <div className="mb-4 p-3 border rounded shadow-sm">
                            <FormLabel className="d-block mb-2"><strong>Relacione los puntos de apoyo ubicados en cercanías (hospitales, bomberos, fuerza pública, etc.)</strong></FormLabel>
                            <FormGroup className="mb-3">
                                <FormLabel>Observaciones Residencia</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción de puntos de apoyo en residencia" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                                <FormControl as="textarea" rows={3} placeholder="Descripción de puntos de apoyo en actividad o función" />
                            </FormGroup>
                        </div>

                        <div className="mb-4 p-3 border rounded shadow-sm">
                            <FormLabel className="d-block mb-2"><strong>Análisis de los desplazamientos, entorno residencial y de la actividad, función o CONDICIÓN programa UNP</strong></FormLabel>
                            <FormGroup>
                                <FormControl as="textarea" rows={5} placeholder="Ingrese el análisis detallado aquí" />
                            </FormGroup>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};
