const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<h1>Catálogo de Heróis</h1><p>Seja bem-vindo ao site de catálogo de heróis da Marvel e DC!</p> <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC</a></li><hr><ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Spider-Man">Homem-Aranha</a></li>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>`);
});

app.get("/marvel", (req, res) => {
  res.send(`<h1>Marvel</h1><p>Marvel é uma das maiores empresas do mundo na atualidade por ser dona de algumas das maiores franquias de super-herois da história</p>
            <ul><li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Spider-Man">Homem-Aranha</a></li>
            </ul><a href="/">Voltar para página inicial</a>`);
});

app.get("/dc", (req, res) => {
  res.send(`<h1>DC</h1><p>DC é um estúdio de quadrinhos e produção de entretenimento americano</p>
            <ul><li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul><a href="/">Voltar para página inicial</a>`
  );
});

app.get("/personagem/:empresa/:nome", (req,res) => {
  const empresa = req.params.empresa;
  const nome = req.params.nome;
  res.send(`O nome desse personagem é, ${nome} e ele pertence a ${empresa}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
