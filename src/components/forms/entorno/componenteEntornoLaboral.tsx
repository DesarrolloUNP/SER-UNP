import React, { ChangeEvent } from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from "eco-unp/Ui";
import { FaRoadBarrier, FaRoute } from "react-icons/fa6";
import { BsFillHospitalFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";

interface ComponenteEntornoLaboralProps {
    formData: {
        barrerasFisicasActividad: string;
        controlIngresoActividad: string;
        medidasTecnicasActividad: string;
        puntosApoyoActividad: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteEntornoLaboral: React.FC<ComponenteEntornoLaboralProps> = ({ formData, handleChange }) => (
    <>
        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Mencione las barreras físicas y/o naturales"} icon={FaRoadBarrier} />
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="barrerasFisicasActividad"
                    value={formData.barrerasFisicasActividad}
                    onChange={handleChange}
                    placeholder="Descripción de las barreras en actividad o función."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.barrerasFisicasActividad.length} caracteres restantes
            </Form.Text>
        </div>

        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Describa cómo es el control para el ingreso al sitio"} icon={GiPoliceOfficerHead} />
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="controlIngresoActividad"
                    value={formData.controlIngresoActividad}
                    onChange={handleChange}
                    placeholder="Descripción del control en actividad o función."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.controlIngresoActividad.length} caracteres restantes
            </Form.Text>
        </div>

        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Describa las medidas técnicas de seguridad que se pueden evidenciar en el sitio"} icon={MdSecurity} />
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="medidasTecnicasActividad"
                    value={formData.medidasTecnicasActividad}
                    onChange={handleChange}
                    placeholder="Descripción de medidas en actividad o función."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.medidasTecnicasActividad.length} caracteres restantes
            </Form.Text>
        </div>

        <div style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Relacione los puntos de apoyo ubicados en cercanías"} icon={BsFillHospitalFill} />
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="puntosApoyoActividad"
                    value={formData.puntosApoyoActividad}
                    onChange={handleChange}
                    placeholder="Descripción de puntos de apoyo en actividad o función."
                    maxLength={800}
                />
            </FormGroup>
            <Form.Text muted>
                {800 - formData.puntosApoyoActividad.length} caracteres restantes
            </Form.Text>
        </div>
    </>
);

export default ComponenteEntornoLaboral;
