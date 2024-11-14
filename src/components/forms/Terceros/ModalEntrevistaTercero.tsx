import React from "react";
import { FaUser, FaAlignJustify, FaUserShield } from "react-icons/fa6";
import { SubtituloForm } from "eco-unp/ui";
import { Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import { IconBaseProps } from "react-icons";
import { relative } from "path";
import { FormularioEntrevistaTerceros } from "../formularioEntrevistaTerceros";
import { useState } from "react";

export function ModalRegistroAnalista(row: any) {
  const [text, setText] = useState("");
  return (
    <>
    <FormularioEntrevistaTerceros></FormularioEntrevistaTerceros>
    </>

  );
}
