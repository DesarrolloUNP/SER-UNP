import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import HijosInfo from "./components/componenteHijos";
import ComponenteBiografico from "./components/componenteBiografico";
import { InfoLaboral } from "./components/componenteLaboral";
import { ComponenteConyugal } from "./../entrevista/components/componenteConyugal";
import { ComponenteFliaOrigen } from "./components/componentePadres";
import { camposForm, denuncias, desplazamientos, familiares, hijos, historialActividadPoblacional, personasCargo, steps } from "./configForm";
import { datosOrden } from "../entorno/formularioEntorno";
import InformacionOrdenTrabajo from "../../../shared/informacionOrdenTrabajo";
import ExpandableCard from "../../../shared/tarjetaExpandible";
import PersonasCargoInfo from "./components/componentePersonasAcargo";
import { Paginador } from "../../../shared/paginadorFormulario";
import { RelacionFamiliar } from "./components/componenteRelacionFamilia";
import { ActividadPoblacional } from "./components/componenteActividadPoblacional";
import HistorialInfo from "./components/componenteHistorial";
import InfoGeneral from "./components/componenteInfoGeneral";
import DatosNotificacion from "./components/componenteNotificacion";
import GrupoPoblacionalInfo from "./components/componentePoblacional";
import Medidas from "./components/componenteMedidas";
import RutasInfo from "./components/componenteDesplazamientos";
import { Entorno } from "./components/componenteEntorno";
import DenunciasInfo from "./components/componenteDenuncias";
import { RelatoHechos } from "./components/componenteRelatoHechos";
import ArchivosInfo from "./components/componenteAdjuntos";
import { useNavigate } from "react-router-dom"; 

export {
    React, useEffect, useState,
    Form, Button, Card,
    HijosInfo, ComponenteBiografico, InfoLaboral, ComponenteConyugal, ComponenteFliaOrigen,
    camposForm, denuncias, desplazamientos, familiares, hijos, historialActividadPoblacional, personasCargo, steps,
    datosOrden, InformacionOrdenTrabajo, ExpandableCard, PersonasCargoInfo, Paginador, RelacionFamiliar,
    ActividadPoblacional, HistorialInfo, InfoGeneral, DatosNotificacion, GrupoPoblacionalInfo, Medidas,
    RutasInfo, Entorno, DenunciasInfo, RelatoHechos, ArchivosInfo, useNavigate
};
