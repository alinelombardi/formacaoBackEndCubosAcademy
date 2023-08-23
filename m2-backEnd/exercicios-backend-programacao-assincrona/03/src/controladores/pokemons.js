const { listarPokemons, detalharPokemon } = require('utils-playground')

const mostrarPokemons = async (require, response) => {
    const pokemons = await listarPokemons(1);
    return response.status(200).json(pokemons)
};

const exibirPokemon = async (require, response) => {
    const { informacao } = require.params;
    const pokemon = await detalharPokemon(informacao);

    const mostrar = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species
    };
    
    return response.status(200).json(mostrar)

};

module.exports = { mostrarPokemons, exibirPokemon };