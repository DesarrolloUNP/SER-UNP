import { SubtituloForm } from "eco-unp/ui";
import React, { useState } from "react";
import { Card, Form, Row, Col, Button, CardHeader } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { RiSearchEyeFill, RiReservedFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface Seccion {
  fechaConsulta: string;
  fechaRespuesta: string;
  resultadosObtenidos: string;
  archivo?: File | null;
  autores: string;
  titulo: string;
  ano: string;
  publicacion: string;
}

const FormularioInformacion: React.FC = () => {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const navigate = useNavigate();

  const addSection = () => {
    setSecciones([
      ...secciones,
      {
        fechaConsulta: "",
        fechaRespuesta: "",
        resultadosObtenidos: "",
        archivo: null,
        autores: "",
        titulo: "",
        ano: "",
        publicacion: "",
      },
    ]);
  };

  const handleChange = (
    index: number,
    campo: keyof Seccion,
    valor: string | File | null
  ) => {
    const seccionesActualizadas = secciones.map((seccion, i) =>
      i === index ? { ...seccion, [campo]: valor } : seccion
    );
    setSecciones(seccionesActualizadas);
  };

  const handleDelete = (index: number) => {
    const seccionesActualizadas = secciones.filter((_, i) => i !== index);
    setSecciones(seccionesActualizadas);
  };

  const handleSubmit = () => {
    console.log("Formulario enviado:", secciones);
    alert("Formulario enviado");
    setTimeout(() => {
      navigate("/");
    });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <button className="custom-btn-dark" onClick={addSection}>
          Añadir Fuente
        </button>
      </div>

      {secciones.map((seccion, index) => (
        <Card key={index} className="mb-3">
          
          <Button
            variant="link"
            onClick={() => handleDelete(index)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "0",
              background: "transparent",
              border: "none",
            }}
          >
            <FaTrash size={16} color="red" />
          </Button>
          <Card.Body>
            <Form>
              <SubtituloForm
                subtitulo={`Información Sobre la Fuente N° ${index+1}`}
                icon={RiSearchEyeFill}
              />
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Fecha de Consulta</Form.Label>
                    <Form.Control
                      type="date"
                      value={seccion.fechaConsulta}
                      onChange={(e) =>
                        handleChange(index, "fechaConsulta", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Fecha de Respuesta</Form.Label>
                    <Form.Control
                      type="date"
                      value={seccion.fechaRespuesta}
                      onChange={(e) =>
                        handleChange(index, "fechaRespuesta", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Resultados Obtenidos</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={seccion.resultadosObtenidos}
                  onChange={(e) =>
                    handleChange(index, "resultadosObtenidos", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Adjuntar Archivo</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(
                      index,
                      "archivo",
                      e.target.files ? e.target.files[0] : null
                    )
                  }
                />
              </Form.Group>
              <SubtituloForm
                subtitulo="Datos para Citas APA"
                icon={RiReservedFill}
              />
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Autor / Fuente</Form.Label>
                    <Form.Control
                      type="text"
                      value={seccion.autores}
                      onChange={(e) =>
                        handleChange(index, "autores", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                      type="text"
                      value={seccion.titulo}
                      onChange={(e) =>
                        handleChange(index, "titulo", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Año</Form.Label>
                    <Form.Control
                      type="string"
                      value={seccion.ano}
                      onChange={(e) =>
                        handleChange(index, "ano", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Publicación</Form.Label>
                    <Form.Control
                      type="text"
                      value={seccion.publicacion}
                      onChange={(e) =>
                        handleChange(index, "publicacion", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            
          </Card.Body>
        </Card>
      ))}
      {secciones.length > 0 && (
        <div className="d-flex justify-content-end mb-3">
          <button className="custom-btn-dark" onClick={handleSubmit}>
            Enviar Todo
          </button>
        </div>
      )}
    </div>
  );
};

export default FormularioInformacion;
