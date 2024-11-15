import React from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl, Card, CardHeader, CardBody } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { SubtituloForm } from 'eco-unp/ui';

const ComponenteActividad: React.FC = () => (
    <>
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
    </>
);

export default ComponenteActividad;
