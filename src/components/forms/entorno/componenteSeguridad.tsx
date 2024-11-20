import React, { ChangeEvent } from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

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
        <div className="mb-4 p-3 border rounded shadow-sm">
            <FormLabel className="d-block mb-2">
                <strong>Mencione las barreras físicas y/o naturales. *</strong>
            </FormLabel>
            <FormGroup className="mb-3">
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="barrerasFisicasResidencia"
                    value={formData.barrerasFisicasResidencia}
                    onChange={handleChange}
                    placeholder="Descripción de las barreras en residencia"
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="barrerasFisicasActividad"
                    value={formData.barrerasFisicasActividad}
                    onChange={handleChange}
                    placeholder="Descripción de las barreras en actividad o función"
                />
            </FormGroup>
        </div>

        <div className="mb-4 p-3 border rounded shadow-sm">
            <FormLabel className="d-block mb-2">
                <strong>Describa cómo es el control para el ingreso al sitio, (Cuenta con seguridad personal, portero. Vigilante, recepcionista, entre otros).</strong>
            </FormLabel>
            <FormGroup className="mb-3">
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="controlIngresoResidencia"
                    value={formData.controlIngresoResidencia}
                    onChange={handleChange}
                    placeholder="Descripción del control en residencia"
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="controlIngresoActividad"
                    value={formData.controlIngresoActividad}
                    onChange={handleChange}
                    placeholder="Descripción del control en actividad o función"
                />
            </FormGroup>
        </div>

        <div className="mb-4 p-3 border rounded shadow-sm">
            <FormLabel className="d-block mb-2">
                <strong>Describa las medidas técnicas de seguridad que se pueden evidenciar en el sitio (sistema de alarma, circuito cerrado de televisión, etc.)  o ninguna de ellas.</strong>
            </FormLabel>
            <FormGroup className="mb-3">
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="medidasTecnicasResidencia"
                    value={formData.medidasTecnicasResidencia}
                    onChange={handleChange}
                    placeholder="Descripción de medidas en residencia"
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="medidasTecnicasActividad"
                    value={formData.medidasTecnicasActividad}
                    onChange={handleChange}
                    placeholder="Descripción de medidas en actividad o función"
                />
            </FormGroup>
        </div>

        <div className="mb-4 p-3 border rounded shadow-sm">
            <FormLabel className="d-block mb-2">
                <strong>Relacione los puntos de apoyo ubicados en cercanías* (hospitales, bomberos, fuerza pública, entre otros) o ninguna de ellas.</strong>
            </FormLabel>
            <FormGroup className="mb-3">
                <FormLabel>Observaciones Residencia</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="puntosApoyoResidencia"
                    value={formData.puntosApoyoResidencia}
                    onChange={handleChange}
                    placeholder="Descripción de puntos de apoyo en residencia"
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Observaciones de la actividad, función o condición poblacional programa UNP</FormLabel>
                <FormControl
                    as="textarea"
                    rows={3}
                    name="puntosApoyoActividad"
                    value={formData.puntosApoyoActividad}
                    onChange={handleChange}
                    placeholder="Descripción de puntos de apoyo en actividad o función"
                />
            </FormGroup>
        </div>

        <div className="mb-4 p-3 border rounded shadow-sm">
            <FormLabel className="d-block mb-2">
                <strong>Análisis de los desplazamientos, entorno residencial y de la actividad, función o condición programa UNP</strong>
            </FormLabel>
            <FormGroup>
                <FormControl
                    as="textarea"
                    rows={5}
                    name="analisisDesplazamientos"
                    value={formData.analisisDesplazamientos}
                    onChange={handleChange}
                    placeholder="Ingrese el análisis detallado aquí"
                />
            </FormGroup>
        </div>
    </>
);

export default ComponenteSeguridad;
