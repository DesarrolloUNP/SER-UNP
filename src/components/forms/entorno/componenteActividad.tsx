import React, { useState, ChangeEvent } from "react";
import { Row, Col, Form, FormGroup, FormLabel, FormControl, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SubtituloForm } from "eco-unp/Ui";

interface ComponenteActividadProps {
  formData: {
    inspeccionFechaActividad: string;
    actividadDistancia: string;
  };
  handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteActividad: React.FC<ComponenteActividadProps> = ({
  formData,
  handleChange,
}) => {
  const [esZonaRural, setEsZonaRural] = useState<boolean>(false);

  const handleZonaRuralChange = () => {
    setEsZonaRural(!esZonaRural);
  };

  const handlePositiveNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value || /^\d*$/.test(value)) {
      handleChange(e);
    }
  };

  return (
    <>
      <Row className="mt-4 align-items-center">
        <Col md={10}>
          <FormLabel>
            ¿El lugar de la actividad, función o condición poblacional está ubicado en una zona rural?
          </FormLabel>
        </Col>
        <Col md={2} className="text-end">
          <Form.Check
            type="switch"
            id="zonaRuralSwitch"
            label=""
            checked={esZonaRural}
            onChange={handleZonaRuralChange}
          />
        </Col>
      </Row>

      {esZonaRural && (
        <Row>
          <Col md={6} className="mb-3">
            <SubtituloForm
              subtitulo="Fecha de realización de la inspección"
              icon={FaCalendarAlt}
            />

            <FormGroup>
              <FormLabel>Fecha</FormLabel>
              <FormControl
                type="date"
                name="inspeccionFechaActividad"
                value={formData.inspeccionFechaActividad}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6} className="mb-3">
            <SubtituloForm
              subtitulo="Distancia al casco urbano"
              icon={FaMapMarkerAlt}
            />
            <Form.Group controlId={`residencialDistancia`}>
              <FormLabel>Distancia</FormLabel>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-pv`}>
                    ¿Cuál es la distancia aproximada al casco urbano más cercano?
                  </Tooltip>
                }
              >
                <Form.Control
                  type="number"
                  name="actividadDistancia"
                  value={formData.actividadDistancia}
                  onChange={handlePositiveNumberChange}
                  placeholder="Distancia en km"
                />
              </OverlayTrigger>
            </Form.Group>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ComponenteActividad;
