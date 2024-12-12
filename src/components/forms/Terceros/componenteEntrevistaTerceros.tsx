import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  CardHeader,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import {
  RiUserLocationFill,
  RiNewspaperFill,
  RiCellphoneFill,
  RiSearchEyeFill,
} from "react-icons/ri";

import CamposRurales from "../../../shared/camposRurales";
import CamposUrbanos from "../../../shared/camposUrbanos";
import {
  fetchDepartamentos,
  fetchMunicipios,
} from "../../../services/ubicacion";
import UbicacionFechaTerceros from "../Terceros/componenteUbicacionTerceros";
import { FaSheetPlastic, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

// Define las interfaces
interface FormData {
  ubicacion: string;

  departamento: string;
  ciudad: string;
  ruralFields: {
    centroPoblado: string;
    corregimiento: string;
    indicaciones: string;
    vereda: string;
  };
  urbanaFields: {
    nombreBarrio: string;
    viaPrincipal: string;
    numeroViaPrincipal: string;
    letraPrincipal: string;
    esBis: boolean;
    cuadrantePrincipal: string;
    numeroViaSecundaria: string;
    letraSecundaria: string;
    cuadranteSecundario: string;
    numeroPlaca: string;
    complemento: string;
    indicaciones: string;
  };
}

interface Seccion {
  formData: FormData;
  fechaHoraEntrevista: string;

  tipoEntrevista: string;
  direccion?: string;
  telefonoOrigen?: string;
  telefonoDestino?: string;
  archivo?: File | null;
  nombreEntrevistado: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  rol: string;
  sinopsis: string;
  firmaNombreEntrevistado: string;
  firmaIdentificacionEntrevistado: string;
  firmaNombreAnalista: string;
  firmaIdentificacionAnalista: string;
}

const EntrevistasTerceros: React.FC = () => {
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [departamentos, setDepartamentos] = useState<
    { id: number; name: string }[]
  >([]);
  const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartamentosData = async () => {
      try {
        const data = await fetchDepartamentos();
        setDepartamentos(data);
      } catch (error) {
        console.error("Error al obtener departamentos:", error);
      }
    };
    fetchDepartamentosData();
  }, []);

  const fetchMunicipiosData = async (departamentoId: string) => {
    try {
      const data = await fetchMunicipios(departamentoId);
      setMunicipios(data);
    } catch (error) {
      console.error("Error al obtener municipios:", error);
    }
  };

  const addSection = () => {
    setSecciones([
      ...secciones,
      {
        formData: {
          ubicacion: "",

          departamento: "",
          ciudad: "",
          ruralFields: {
            centroPoblado: "",
            corregimiento: "",
            vereda: "",
            indicaciones: "",
          },
          urbanaFields: {
            nombreBarrio: "",
            viaPrincipal: "",
            numeroViaPrincipal: "",
            letraPrincipal: "",
            esBis: false,
            cuadrantePrincipal: "",
            numeroViaSecundaria: "",
            letraSecundaria: "",
            cuadranteSecundario: "",
            numeroPlaca: "",
            complemento: "",
            indicaciones: "",
          },
        },
        fechaHoraEntrevista: "",

        tipoEntrevista: "",
        nombreEntrevistado: "",
        tipoIdentificacion: "",
        numeroIdentificacion: "",
        rol: "",
        sinopsis: "",
        firmaNombreEntrevistado: "",
        firmaIdentificacionEntrevistado: "",
        firmaNombreAnalista: "",
        firmaIdentificacionAnalista: "",
      },
    ]);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;

    setSecciones((prevSecciones) =>
      prevSecciones.map((seccion, i) =>
        i === index
          ? {
            ...seccion,
            [name]: value, // Actualiza el campo correspondiente por el nombre del input
          }
          : seccion
      )
    );
  };

  const handleChangeUbicacion = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSecciones((prevSecciones) =>
      prevSecciones.map((seccion, i) =>
        i === index
          ? {
            ...seccion,
            formData: {
              ...seccion.formData,
              [name]: value,
            },
          }
          : seccion
      )
    );
  };

  const handleFieldChange = (
    index: number,
    e: React.ChangeEvent<any>,
    location: string
  ) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setSecciones((prevSecciones) =>
      prevSecciones.map((seccion, i) =>
        i === index
          ? {
            ...seccion,
            formData: {
              ...seccion.formData,
              [location + "Fields"]: {
                ...(seccion.formData as any)[location + "Fields"],
                [name]: fieldValue,
              },
            },
          }
          : seccion
      )
    );
  };

  const handleDelete = (index: number) => {
    setSecciones(secciones.filter((_, i) => i !== index));
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
          Añadir Entrevista
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
            <Row className="mb-3">
              <SubtituloForm
                subtitulo={`Datos de la entrevista N°${index + 1}`}
                icon={FaSheetPlastic}
              />

              <Col md={6}>
                <Form.Group controlId={`fechaHoraEntrevista-${index}`}>
                  <Form.Label> Fecha de la Entrevista</Form.Label>
                  <FormControl
                    type="datetime-local"
                    name="fechaHoraEntrevista"
                    value={seccion.fechaHoraEntrevista}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId={`tipoEntrevista-${index}`}>
                  <Form.Label>Tipo de Entrevista</Form.Label>
                  <Form.Select
                    name="tipoEntrevista"
                    value={seccion.tipoEntrevista}
                    onChange={(e) => handleChange(e, index)} // Actualiza el tipo de entrevista
                  >
                    <option value="">Seleccione...</option>
                    <option value="personal">Entrevista Personal</option>
                    <option value="telefonica">Entrevista Telefónica</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            {seccion.tipoEntrevista === "personal" && (
              <UbicacionFechaTerceros
                formData={{
                  ubicacionTercero: seccion.formData.ubicacion,

                  departamentoTercero: seccion.formData.departamento,
                  ciudadTercero: seccion.formData.ciudad,
                  ruralFieldsTercero: seccion.formData.ruralFields,
                  urbanaFieldsTercero: seccion.formData.urbanaFields,
                }}
                handleChange={(e) => handleChangeUbicacion(index, e)}
                handleFieldChange={(e, location) =>
                  handleFieldChange(index, e, location)
                }
              />
            )}
            {seccion.tipoEntrevista === "telefonica" && (
              <Row>
                <SubtituloForm
                  subtitulo="Detalles de la Entrevista Telefónica"
                  icon={RiCellphoneFill}
                />
                <Col md={6}>
                  <Form.Group controlId={`telefonoOrigen-${index}`}>
                    <Form.Label>Número de Teléfono Origen</Form.Label>
                    <Form.Control
                      type="text"
                      name="telefonoOrigen"
                      value={seccion.telefonoOrigen}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId={`telefonoDestino-${index}`}>
                    <Form.Label>Número Teléfono Destino</Form.Label>
                    <Form.Control
                      type="text"
                      name="telefonoDestino"
                      value={seccion.telefonoDestino}
                      onChange={(e) => handleChange(e, index)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}
            <SubtituloForm
              subtitulo="Detalles de la Entrevista"
              icon={RiNewspaperFill}
            />
            <Row>
              <Col md={6}>
                <Form.Group controlId="nombreEntrevistado">
                  <Form.Label>Nombre de la Persona Entrevistada</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombreEntrevistado"
                    value={seccion.nombreEntrevistado}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="tipoIdentificacion">
                  <Form.Label>Tipo de Identificación</Form.Label>
                  <Form.Select
                    name="tipoIdentificacion"
                    value={seccion.tipoIdentificacion}
                    onChange={(e) => handleChange(e, index)}
                  >
                    <option value="">Seleccione...</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cédula de Extranjería</option>
                    <option value="PAS">Pasaporte</option>
                    <option value="NIT">NIT</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="numeroIdentificacion">
                  <Form.Label>Número de Identificación</Form.Label>
                  <Form.Control
                    type="text"
                    name="numeroIdentificacion"
                    value={seccion.numeroIdentificacion}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="rol">
                  <Form.Label>En su Calidad De</Form.Label>
                  <Form.Control
                    type="text"
                    name="rol"
                    value={seccion.rol}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group controlId="sinopsis">
                  <Form.Label>Sinopsis de la Información</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="sinopsis"
                    value={seccion.sinopsis}
                    onChange={(e) => handleChange(e, index)}
                    maxLength={1500}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="firmaNombreEntrevistado">
                  <Form.Label>Firma de la Persona Entrevistada</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="firmaNombreEntrevistado"
                    value={seccion.firmaNombreEntrevistado}
                    onChange={(e) => handleChange(e, index)}
                    maxLength={1500}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="firmaNombreAnalista">
                  <Form.Label>Firma del Analista</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="firmaNombreAnalista"
                    value={seccion.firmaNombreAnalista}
                    onChange={(e) => handleChange(e, index)}
                    maxLength={1500}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="firmaIdentificacionEntrevistado">
                  <Form.Label>
                    Documento de Identidad del Entrevistado
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="firmaIdentificacionEntrevistado"
                    value={seccion.firmaIdentificacionEntrevistado}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="firmaIdentificacionAnalista">
                  <Form.Label>Documento de Identidad del Analista</Form.Label>
                  <Form.Control
                    type="text"
                    name="firmaIdentificacionAnalista"
                    value={seccion.firmaIdentificacionAnalista}
                    onChange={(e) => handleChange(e, index)}
                  />
                </Form.Group>
              </Col>
            </Row>
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

export default EntrevistasTerceros;
