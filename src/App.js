import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Container from "@mui/material/Container";

function App() {
  return (
    // sx la style
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Form />
    </Container>
  );
}

export default App;
