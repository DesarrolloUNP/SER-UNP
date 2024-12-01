import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";

interface ArchivoProps {
    archivos: { archivo: File | null }[];
    handleArchivoChange: (index: number, e: ChangeEvent<any>) => void;
    handleAddArchivo: () => void;
    handleRemoveArchivo: (index: number) => void;
}

const ArchivosInfo: React.FC<ArchivoProps> = ({ archivos, handleArchivoChange, handleAddArchivo, handleRemoveArchivo }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Archivos Adjuntos" icon={IoDocumentAttach} />
                <Button
                    variant="primary"
                    onClick={handleAddArchivo}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar Archivo
                </Button>
            </div>

            {archivos.length > 0 &&
                archivos.map((item, index) => (
                    <div key={index} className="mb-3 p-3 border border-gray-300 rounded-3" style={{ position: "relative" }}>
                        <Button
                            variant="link"
                            onClick={() => handleRemoveArchivo(index)}
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

                        <Row className="mb-3">
                            <Col md={12}>
                                <Form.Group controlId={`archivo-${index}`}>
                                    <Form.Label>Archivo</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => handleArchivoChange(index, e)}
                                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                    />
                                    <Form.Control.Feedback type="invalid">Este campo es obligatorio.</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                ))}
        </>
    );
};

export default ArchivosInfo;
