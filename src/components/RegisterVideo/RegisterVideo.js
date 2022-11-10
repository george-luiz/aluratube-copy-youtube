import React from "react";
import { StyledRegisterVideo } from "./style.js";

function useForm(propsDoForm) {
  // Criando um Hook personalizado.
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange(event) {
      const value = event.target.value;
      const name = event.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
        setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "Frost punk", url: "https://youtube..." },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  //[x]Falta o botão para adicionar
  //[x]abrir o Modal
  //Controlar o state
  // -> Formulario.

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {/* Ternario se for true aparece se não for false não aparece */}
      {/* Operador ternario */}
      {/* Operador de curto circuito */}
      {formVisivel === true ? (
        <form
          onSubmit={(event) => {
            event.preventDefault(); // evita o comportamento padrão do formulario de se autoCarregar
            console.log(formCadastro.values);
            setFormVisivel(false); 
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              X
            </button>
            <input
              placeholder="Titulo do video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="Url"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
