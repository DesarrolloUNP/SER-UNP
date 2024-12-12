import React, { ChangeEvent } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SubtituloForm } from "eco-unp/ui";

interface ComponenteResidencialProps {
  formData: {
    inspeccionFechaResidencial: string;
    residencialDistancia: string;
  };
  handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteResidencial: React.FC<ComponenteResidencialProps> = ({
  formData,
  handleChange,
}) => (
  <>
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
            name="inspeccionFechaResidencial"
            value={formData.inspeccionFechaResidencial}
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
                En caso de que la vivienda esté ubicada en zona rural, ¿cuál es
                la distancia aproximada al casco urbano más cercano?
              </Tooltip>
            }
          >
            <Form.Control
              type="number"
              name="residencialDistancia"
              value={formData.residencialDistancia}
              onChange={handleChange}
              placeholder="Distancia en km"
            />
          </OverlayTrigger>
        </Form.Group>
      </Col>
    </Row>
  </>
);

export default ComponenteResidencial;
