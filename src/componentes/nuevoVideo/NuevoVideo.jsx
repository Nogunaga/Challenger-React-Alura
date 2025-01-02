import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  width: 100vw;
  margin: 40px auto;
  padding: 20px;
  background-color: #236b81;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #21a1f1;
  }
`;

const Formulario = ({ agregarVideo }) => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [enlace, setEnlace] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const categorias = [
    { value: "Taijutsu", label: "Taijutsu" },
    {
      value: "Técnicas de los cinco elementos",
      label: "Técnicas de los cinco elementos",
    },
    { value: "Estilos de lucha ninja", label: "Estilos de lucha ninja" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!titulo) newErrors.titulo = "El título es requerido";
    if (!categoria) newErrors.categoria = "La categoría es requerida";
    if (!enlace) newErrors.enlace = "El enlace es requerido";
    if (!descripcion) newErrors.descripcion = "La descripción es requerida";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const nuevoVideo = { titulo, categoria, enlace, descripcion };
      agregarVideo(nuevoVideo);
      // Redirigir al Banner
      navigate("/");
    }
  };

  return (
    <FormContainer>
      <h1>Nuevo Video</h1>
      <Form onSubmit={handleSubmit}>
        <Label>Título:</Label>
        <Input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ingrese el título del video"
        />
        {errors.titulo && <p style={{ color: "red" }}>{errors.titulo}</p>}
        <Label>Categoría:</Label>
        <Select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </Select>
        {errors.categoria && <p style={{ color: "red" }}>{errors.categoria}</p>}
        <Label>Enlace del video (URL):</Label>
        <Input
          type="url"
          value={enlace}
          onChange={(e) => setEnlace(e.target.value)}
          placeholder="Ingrese el enlace del video"
        />
        {errors.enlace && <p style={{ color: "red" }}>{errors.enlace}</p>}
        <Label>Descripción del video:</Label>
        <Textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ingrese la descripción del video"
        />
        {errors.descripcion && (
          <p style={{ color: "red" }}>{errors.descripcion}</p>
        )}
        <Button type="submit">Guardar</Button>
      </Form>
    </FormContainer>
  );
};

export default Formulario;
