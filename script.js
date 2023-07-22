class PokemonTable {
  constructor(json) {
    this.json = json;
    this.resultado = document.querySelector(".resultado");
    this.table = this.criarTabela();

    this.colors = {
      health: "#22c55e",
      attack: "#b91c1c",
      defense: "#ffee00",
    };

    this.carregarElementos();
  }

  criarTabela() {
    return document.createElement("table");
  }

  carregarElementos() {
    for (const pokemon of this.json.pokedex) {
      const tr = this.criarLinhaPokemon(pokemon);
      this.table.appendChild(tr);
    }

    this.resultado.appendChild(this.table);
  }

  criarLinhaPokemon(pokemon) {
    const tr = document.createElement("tr");
    const img = this.criarImagemPokemon(pokemon.img);
    img.height = 95;

    for (const key in pokemon) {
      const td = document.createElement("td");

      if (key === "img") {
        td.appendChild(img);
      } else {
        td.innerHTML = pokemon[key];
      }

      if (this.colors[key]) {
        td.style.color = this.colors[key];
      }

      tr.appendChild(td);
    }

    return tr;
  }

  criarImagemPokemon(src) {
    const img = document.createElement("img");
    img.src = src;
    return img;
  }
}

axios("pokemon.json").then((resposta) => new PokemonTable(resposta.data));
