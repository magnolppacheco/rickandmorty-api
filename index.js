const express = require("express");
const cors = require("cors");

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const personagens = [
  {
    id: 1,
    nome: "Morty",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    idade: 16,
  },
  {
    id: 2,
    nome: "Rick",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    idade: 55,
  },
];

//Rota de Get All
app.get("/personagens/todos-personagens", (req, res) => {
  res.send(personagens);
});

//Rota de Get pelo id
app.get("/personagens/personagem/:id", (req, res) => {
  const ParametroID = Number(req.params.id);
  const PersonagemEscolhido = personagens.find(
    (personagens) => personagens.id === ParametroID
  );
  res.send(PersonagemEscolhido);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
