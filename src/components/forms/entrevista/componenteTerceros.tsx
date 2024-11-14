import { SubtituloForm } from "eco-unp/ui";
import React, { ChangeEvent } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaUsers, FaTrash } from "react-icons/fa6";


interface Tercero {
    fechaEntrevista: Date;
    departamento: String;
    municipio: String;
    direccion: String;
    numeroTelOrigen: Number;
    numeroTelDestino: Number;
    nombreEntrevistado: String;
    tipoIdentificacion: String;
    numeroIdentificacion: Number;
    sinopsis: String; 
    calidad: String;
}

interface TerceroInfoProps {
    entrevistas: Tercero[];
    handleTerceroChange: () => void;
    handleAddTercero: () => void;
    handleRemoveTerceros: (index: number) => void 
}

const TercerosInfo: React.FC<TerceroInfoProps> = ({ entrevistas, handleTerceroChange, handleAddTercero, handleRemoveTerceros }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <SubtituloForm subtitulo="Terceros" icon={FaUsers} />
                <Button
                    variant="primary"
                    onClick={handleAddTercero}
                    className="ml-auto"
                    style={{
                        backgroundColor: "#303D50",
                        borderColor: "#303D50",
                    }}
                >
                    Agregar Hijo
                </Button>
            </div>

            {entrevistas.length > 0 && entrevistas.map((hijo, index) => (
        </>
    )

};
