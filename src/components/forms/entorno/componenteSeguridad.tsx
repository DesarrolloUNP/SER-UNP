import React, { ChangeEvent } from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { SubtituloForm } from "eco-unp/ui";
import { FaRoadBarrier, FaRoute } from "react-icons/fa6";
import { BsFillHospitalFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";

interface ComponenteSeguridadProps {
    formData: {
        barrerasFisicasResidencia: string;
        barrerasFisicasActividad: string;
        controlIngresoResidencia: string;
        controlIngresoActividad: string;
        medidasTecnicasResidencia: string;
        medidasTecnicasActividad: string;
        puntosApoyoResidencia: string;
        puntosApoyoActividad: string;
        analisisDesplazamientos: string;
    };
    handleChange: (e: ChangeEvent<any>) => void;
}

const ComponenteSeguridad: React.FC<ComponenteSeguridadProps> = ({ formData, handleChange }) => (
    <>
        <div className="mb-4 border rounded shadow-sm mt-3" style={{ padding: "0 15px 15px 15px" }}>
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

        <div className="mb-4 border rounded shadow-sm" style={{ padding: "0 15px 15px 15px" }}>
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

        <div className="mb-4 border rounded shadow-sm" style={{ padding: "0 15px 15px 15px" }}>
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

        <div className="mb-4 border rounded shadow-sm" style={{ padding: "0 15px 15px 15px" }}>
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

        <div className="mb-4 border rounded shadow-sm" style={{ padding: "0 15px 15px 15px" }}>
            <SubtituloForm subtitulo={"Análisis de los desplazamientos, entorno residencial y de la actividad, función o condición programa UNP"} icon={FaRoute} />
            <FormGroup>
                <FormControl
                    as="textarea"
                    rows={5}
                    name="analisisDesplazamientos"
                    value={formData.analisisDesplazamientos}
                    onChange={handleChange}
                    placeholder="Ingrese el análisis detallado aquí."
                    maxLength={1500}
                />
            </FormGroup>
            <Form.Text muted>
                {1500 - formData.analisisDesplazamientos.length} caracteres restantes
            </Form.Text>
        </div>
    </>
);

export default ComponenteSeguridad;
