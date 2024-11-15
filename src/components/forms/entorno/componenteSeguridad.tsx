import React from "react";
import { Card, CardHeader, CardBody, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

const ComponenteSeguridad: React.FC = () => (
    <>
        <Form>
            <div className="mb-4 p-3 border rounded shadow-sm">
                <FormLabel className="d-block mb-2"><strong>Mencione las barreras físicas y/o naturales *</strong></FormLabel>
                <FormGroup className="mb-3">
                    <FormLabel>Observaciones Residencia</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción de las barreras en residencia" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción de las barreras en actividad o función" />
                </FormGroup>
            </div>

            <div className="mb-4 p-3 border rounded shadow-sm">
                <FormLabel className="d-block mb-2"><strong>Describa cómo es el control para el ingreso al sitio (seguridad personal, portero, vigilante, etc.)</strong></FormLabel>
                <FormGroup className="mb-3">
                    <FormLabel>Observaciones Residencia</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción del control en residencia" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción del control en actividad o función" />
                </FormGroup>
            </div>

            <div className="mb-4 p-3 border rounded shadow-sm">
                <FormLabel className="d-block mb-2"><strong>Describa las medidas técnicas de seguridad en el sitio (sistema de alarma, circuito cerrado de televisión, etc.)</strong></FormLabel>
                <FormGroup className="mb-3">
                    <FormLabel>Observaciones Residencia</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción de medidas en residencia" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción de medidas en actividad o función" />
                </FormGroup>
            </div>

            <div className="mb-4 p-3 border rounded shadow-sm">
                <FormLabel className="d-block mb-2"><strong>Relacione los puntos de apoyo ubicados en cercanías (hospitales, bomberos, fuerza pública, etc.)</strong></FormLabel>
                <FormGroup className="mb-3">
                    <FormLabel>Observaciones Residencia</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción de puntos de apoyo en residencia" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Observaciones de la actividad, función o CONDICIÓN poblacional programa UNP</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Descripción de puntos de apoyo en actividad o función" />
                </FormGroup>
            </div>

            <div className="mb-4 p-3 border rounded shadow-sm">
                <FormLabel className="d-block mb-2"><strong>Análisis de los desplazamientos, entorno residencial y de la actividad, función o CONDICIÓN programa UNP</strong></FormLabel>
                <FormGroup>
                    <FormControl as="textarea" rows={5} placeholder="Ingrese el análisis detallado aquí" />
                </FormGroup>
            </div>
        </Form>
    </>
);

export default ComponenteSeguridad;
