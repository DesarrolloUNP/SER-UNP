import React, { ChangeEvent } from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from "eco-unp/Ui";
import { FaRoadBarrier, FaRoute } from "react-icons/fa6";
import { BsFillHospitalFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";

interface ComponenteEntornoResidenciaProps {
    formData: {
        barrerasFisicasResidencia: string;
        controlIngresoResidencia: string;
        medidasTecnicasResidencia: string;
        puntosApoyoResidencia: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteEntornoResidencia: React.FC<ComponenteEntornoResidenciaProps> = ({ formData, handleChange }) => (
    <>
        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Mencione las barreras físicas y/o naturales"} icon={FaRoadBarrier} />
            <FormGroup>
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="barrerasFisicasResidencia"
                    value={formData.barrerasFisicasResidencia}
                    onChange={handleChange}
                    placeholder="Descripción de las barreras en residencia."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.barrerasFisicasResidencia.length} caracteres restantes
            </Form.Text>
        </div>

        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Describa cómo es el control para el ingreso al sitio"} icon={GiPoliceOfficerHead} />
            <FormGroup>
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="controlIngresoResidencia"
                    value={formData.controlIngresoResidencia}
                    onChange={handleChange}
                    placeholder="Descripción del control en residencia (cuenta con seguridad personal, portero, vigilante, recepcionista, entre otros)."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.controlIngresoResidencia.length} caracteres restantes
            </Form.Text>
        </div>

        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Describa las medidas técnicas de seguridad que se pueden evidenciar en el sitio"} icon={MdSecurity} />
            <FormGroup>
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="medidasTecnicasResidencia"
                    value={formData.medidasTecnicasResidencia}
                    onChange={handleChange}
                    placeholder="Descripción de medidas en residencia (sistema de alarma, circuito cerrado de televisión, etc.) o ninguna de ellas."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.medidasTecnicasResidencia.length} caracteres restantes
            </Form.Text>
        </div>

        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Relacione los puntos de apoyo ubicados en cercanías"} icon={BsFillHospitalFill} />
            <FormGroup>
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="puntosApoyoResidencia"
                    value={formData.puntosApoyoResidencia}
                    onChange={handleChange}
                    placeholder="Descripción de puntos de apoyo en residencia (hospitales, bomberos, fuerza pública, entre otros) o ninguna de ellas."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.puntosApoyoResidencia.length} caracteres restantes
            </Form.Text>
        </div>
    </>
);

export default ComponenteEntornoResidencia;
