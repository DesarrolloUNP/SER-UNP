import React, { ChangeEvent } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SubtituloForm } from "eco-unp/ui";

interface ComponenteActividadProps {
    formData: {
        inspeccionFecha: {
            dia: string;
            mes: string;
            año: string;
        };
        actividadDistancia: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteActividad: React.FC<ComponenteActividadProps> = ({ formData, handleChange }) => (
    <>
        <SubtituloForm subtitulo="Fecha de realización de la inspección" icon={FaCalendarAlt} />
        <Row>
            <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                    <FormLabel>Día *</FormLabel>
                    <FormControl
                        type="text"
                        name="inspeccionFecha.dia"
                        value={formData.inspeccionFecha.dia}
                        onChange={handleChange}
                        placeholder="Día"
                    />
                </FormGroup>
            </Col>
            <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                    <FormLabel>Mes *</FormLabel>
                    <FormControl
                        type="text"
                        name="inspeccionFecha.mes"
                        value={formData.inspeccionFecha.mes}
                        onChange={handleChange}
                        placeholder="Mes"
                    />
                </FormGroup>
            </Col>
            <Col md={4} sm={12} className="mb-3">
                <FormGroup>
                    <FormLabel>Año *</FormLabel>
                    <FormControl
                        type="text"
                        name="inspeccionFecha.año"
                        value={formData.inspeccionFecha.año}
                        onChange={handleChange}
                        placeholder="Año"
                    />
                </FormGroup>
            </Col>
        </Row>

        <SubtituloForm subtitulo="Distancia al casco urbano" icon={FaMapMarkerAlt} />
        <Row>
            <Col md={12} sm={12} className="mb-3">
                <FormGroup>
                    <FormLabel>
                        En caso de que el lugar de la actividad, función o condición esté ubicado en zona rural, ¿cuál es la distancia
                        aproximada al casco urbano más cercano?
                    </FormLabel>
                    <FormControl
                        type="text"
                        name="actividadDistancia"
                        value={formData.actividadDistancia}
                        onChange={handleChange}
                        placeholder="Distancia en km"
                    />
                </FormGroup>
            </Col>
        </Row>
    </>
);

export default ComponenteActividad;
