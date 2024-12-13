import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo"
import { datosOrden } from "../entorno/formularioEntorno"
import React, { useState, useEffect } from 'react';
import { initialRows, TableRow } from "./configForm";
import { Button, Card, Form } from "react-bootstrap";
import '../../../styles/tablaEstandar.css'
import ExpandableCard from "../../../shared/tarjetaExpandible";
import { useNavigate } from "react-router-dom";


export const FormularioEstandar: React.FC = () => {

    const [rows, setRows] = useState<TableRow[]>(initialRows);
    const navigate = useNavigate();
    
    //Algoritmos y estados
    useEffect(() => {
        const updatedRows = initialRows.map(row => {
            const escala33 = (row.escala100 * 33.33) / 100;
            const valorRelativoPonderado = ((escala33 * row.valorAbsoluto) / 3);
    
            return {
                ...row,
                escala33: parseFloat(escala33.toFixed(2)),
                valorRelativoPonderado: parseFloat(valorRelativoPonderado.toFixed(2)),
            };
        });
        setRows(updatedRows);
    }, []);

    const handleChange = (index: number, key: keyof TableRow, value: TableRow[keyof TableRow]) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                const updatedRow = { ...row, [key]: value };
                const escala33 = (updatedRow.escala100 * 33.33) / 100;
                const valorRelativoPonderado = ((escala33 * updatedRow.valorAbsoluto) / 3);
    
                return {
                    ...updatedRow,
                    escala33: parseFloat(escala33.toFixed(2)),
                    valorRelativoPonderado: parseFloat(valorRelativoPonderado.toFixed(2)),
                };
            }
            return row;
        });
        setRows(updatedRows);
    };

    const handleValorAbsolutoChange = (originalIndex: number, value: number) => {
        if (value >= 0 && value <= 3) {
            handleChange(originalIndex, 'valorAbsoluto', value);
        }
    };

    const handleFuentesInformacionChange = (originalIndex: number, value: string) => {
        handleChange(originalIndex, 'fuentesInformacion', value);
    };

    // Subtotal por sección
    const calculateSubtotal = (subseccion: string) => {
        const filteredRows = rows.filter(row => row.subseccion === subseccion);
        const subtotal = filteredRows.reduce(
            (totals, row) => {
                totals.escala100 += row.escala100;
                totals.escala33 += row.escala33;
                totals.valorAbsoluto += row.valorAbsoluto;
                totals.valorRelativoPonderado += row.valorRelativoPonderado;
                return totals;
            },
            { escala100: 0, escala33: 0, valorAbsoluto: 0, valorRelativoPonderado: 0 }
        );
        return subtotal;
    };

    // Dividir las filas por subsección
    const evaluacionDeLaAmenaza = rows
        .map((row, index) => ({ ...row, originalIndex: index }))
        .filter(row => row.subseccion === "EVALUACION DE LA AMENAZA");

    const evaluacionDelRiesgoEspecifico = rows
        .map((row, index) => ({ ...row, originalIndex: index }))
        .filter(row => row.subseccion === "EVALUACION DEL RIESGO ESPECÍFICO");

    const evaluacionDeLaVulnerabilidad = rows
        .map((row, index) => ({ ...row, originalIndex: index }))
        .filter(row => row.subseccion === "EVALUACION DE LA VULNERABILIDAD");

    //Total nivel de riesgo
    const totalValorRelativoPonderado =
        calculateSubtotal("EVALUACION DE LA AMENAZA").valorRelativoPonderado +
        calculateSubtotal("EVALUACION DEL RIESGO ESPECÍFICO").valorRelativoPonderado +
        calculateSubtotal("EVALUACION DE LA VULNERABILIDAD").valorRelativoPonderado;

    // Envio
    const handleSubmit = () => {
        console.log(rows);
        alert('Formulario enviado')
            setTimeout(() => {
                navigate("/");
            });
    };

    return (
        <>
            <InformacionOrdenTrabajo datos={datosOrden} titulo={"Estándar"} />
            <Card className="border-0 shadow mt-4 mb-4">
                <div className="table-container">
                    <table className="adjustable-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Descriptores</th>
                                <th>Observaciones</th>
                                <th>Escala 100%</th>
                                <th>Escala 33%</th>
                                <th>Valor Absoluto</th>
                                <th>Valor Relativo Ponderado</th>
                                <th>Fuentes de Información</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={8} style={{ backgroundColor: '#f4f4f4' }}>1. Evaluación de la amenaza</td>
                            </tr>
                            {evaluacionDeLaAmenaza.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.item}</td>
                                    <td>{row.descriptores}</td>
                                    <td>{row.observaciones}</td>
                                    <td style={{ textAlign: 'center' }}>{row.escala100}</td>
                                    <td style={{ textAlign: 'center' }}>{row.escala33}</td>
                                    <td>
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                value={row.valorAbsoluto}
                                                onChange={(e) => handleValorAbsolutoChange(row.originalIndex, Number(e.target.value))}
                                                placeholder="Ingresa la duración"
                                                min={0} max={3}
                                            />
                                        </Form.Group></td>
                                    <td style={{ textAlign: 'center' }}>{row.valorRelativoPonderado}</td>
                                    <td>
                                        <Form.Group style={{ width: '200px' }}>
                                            <Form.Control
                                                as="textarea"
                                                value={row.fuentesInformacion}
                                                onChange={(e) => handleFuentesInformacionChange(row.originalIndex, e.target.value)}
                                                placeholder="Ingresa las fuentes"
                                                maxLength={300}
                                                rows={10}
                                            />
                                            <Form.Text muted>
                                                {300 - row.fuentesInformacion.length} caracteres restantes
                                            </Form.Text>
                                        </Form.Group></td>
                                </tr>
                            ))}
                            <tr>
                                <td>Subtotal</td>
                                <td></td>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA AMENAZA").escala100}%</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA AMENAZA").escala33}%</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA AMENAZA").valorAbsoluto.toFixed(2)}</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA AMENAZA").valorRelativoPonderado.toFixed(2)}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={8} style={{ backgroundColor: '#f4f4f4' }}>2. Evaluación del riesgo específico</td>
                            </tr>
                            {evaluacionDelRiesgoEspecifico.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.item}</td>
                                    <td>{row.descriptores}</td>
                                    <td>{row.observaciones}</td>
                                    <td style={{ textAlign: 'center' }}>{row.escala100}</td>
                                    <td style={{ textAlign: 'center' }}>{row.escala33}</td>
                                    <td>
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                value={row.valorAbsoluto}
                                                onChange={(e) => handleValorAbsolutoChange(row.originalIndex, Number(e.target.value))}
                                                placeholder="Ingresa la duración"
                                                min={0} max={3}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>{row.valorRelativoPonderado}</td>
                                    <td>
                                        <Form.Group>
                                            <Form.Control
                                                as="textarea"
                                                value={row.fuentesInformacion}
                                                onChange={(e) => handleFuentesInformacionChange(row.originalIndex, e.target.value)}
                                                placeholder="Ingresa las fuentes"
                                                maxLength={300}
                                                rows={10}
                                            />
                                            <Form.Text muted>
                                                {300 - row.fuentesInformacion.length} caracteres restantes
                                            </Form.Text>
                                        </Form.Group>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>Subtotal</td>
                                <td></td>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DEL RIESGO ESPECÍFICO").escala100}%</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DEL RIESGO ESPECÍFICO").escala33}%</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DEL RIESGO ESPECÍFICO").valorAbsoluto.toFixed(2)}</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DEL RIESGO ESPECÍFICO").valorRelativoPonderado.toFixed(2)}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan={8} style={{ backgroundColor: '#f4f4f4' }}>3. Evaluación de la vulnerabilidad</td>
                            </tr>
                            {evaluacionDeLaVulnerabilidad.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.item}</td>
                                    <td>{row.descriptores}</td>
                                    <td>{row.observaciones}</td>
                                    <td style={{ textAlign: 'center' }}>{row.escala100}</td>
                                    <td style={{ textAlign: 'center' }}>{row.escala33}</td>
                                    <td>
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                value={row.valorAbsoluto}
                                                onChange={(e) => handleValorAbsolutoChange(row.originalIndex, Number(e.target.value))}
                                                placeholder="Ingresa la duración"
                                                min={0} max={3}
                                            />
                                        </Form.Group>
                                    </td>
                                    <td style={{ textAlign: 'center' }}>{row.valorRelativoPonderado}</td>
                                    <td>
                                        <Form.Group>
                                            <Form.Control
                                                as="textarea"
                                                value={row.fuentesInformacion}
                                                onChange={(e) => handleFuentesInformacionChange(row.originalIndex, e.target.value)}
                                                placeholder="Ingresa las fuentes"
                                                maxLength={300}
                                                rows={10}
                                            />
                                            <Form.Text muted>
                                                {300 - row.fuentesInformacion.length} caracteres restantes
                                            </Form.Text>
                                        </Form.Group>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>Subtotal</td>
                                <td></td>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA VULNERABILIDAD").escala100}%</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA VULNERABILIDAD").escala33}%</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA VULNERABILIDAD").valorAbsoluto.toFixed(2)}</td>
                                <td style={{ textAlign: 'center' }}>{calculateSubtotal("EVALUACION DE LA VULNERABILIDAD").valorRelativoPonderado.toFixed(2)}</td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Card>
            <ExpandableCard title={"Valores de referencia y resultados"}>
                <div className="results_container">
                    <div className="rangeTable_container">
                            <table className="valueTable-table">
                                <thead>
                                    <tr>
                                        <th>Rangos</th>
                                        <th>Mínimos</th>
                                        <th>Máximos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ordinario</td>
                                        <td>15</td>
                                        <td>50</td>
                                    </tr>
                                    <tr>
                                        <td>Extraordinario</td>
                                        <td>51</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td>Extremo</td>
                                        <td>81</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="totalRisk_container">
                        <h5>Total nivel de riesgo:</h5>
                        <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#007bff" }}>
                            {totalValorRelativoPonderado.toFixed(2)}
                        </span>
                    </div>
                </div>
            </ExpandableCard>
            <div className="d-flex justify-content-center my-5">
                <Button className="btn-success" onClick={handleSubmit}>
                    Enviar
                </Button>
            </div>
        </>
    )
}
