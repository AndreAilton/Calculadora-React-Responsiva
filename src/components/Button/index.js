import React from "react";
import {Button} from "./styled";


export default function index({Nome, onClick}) {
  return (
      <Button onClick={onClick}>{Nome}</Button>
  );
}
