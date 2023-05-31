import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemons, setPokemons }) {
  const initialFormValues = {
    name: "",
    hp: "",
    frontURL: "",
    backURL: "",
  };

  const [formData, setFormData] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPokemon = {
      name: formData.name,
      hp: parseInt(formData.hp),
      sprites: {
        front: formData.frontURL,
        back: formData.backURL,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((resp) => resp.json())
      .then((newPokemon) => setPokemons([...pokemons, newPokemon]));

    setFormData(initialFormValues);
  };
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleInputChange}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontURL"
            onChange={handleInputChange}
            value={formData.frontURL}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backURL"
            onChange={handleInputChange}
            value={formData.backURL}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
