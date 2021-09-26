import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
query pokemons {
  pokemon_v2_pokemon(limit: 151) {
    name
    id
    pokemon_v2_pokemontypes {
      id
      pokemon_v2_type {
        name
      }
    }
  }
}
`;


// pokemon_v2_pokemon(limit: 151, where: {id: {_eq: $id} }) {

export const GET_POKEMON_BY_NAME = gql`
query pokemons {
  pokemon_v2_pokemon(limit: 151, where: {id: {_eq: 10}}) {
    name
    id
    order
    weight
    height
    base_experience
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
        pokemon_v2_abilityeffecttexts {
          short_effect
          language_id
        }
      }
    }
    pokemon_v2_pokemonstats {
      pokemon_v2_stat {
        name
      }
      base_stat
    }
    pokemon_v2_pokemonspecy {
      evolution_chain_id
      pokemon_v2_evolutionchain {
        pokemon_v2_pokemonspecies {
          name
          id
        }
      }
    }
  }
  pokemon_v2_characteristic {
    pokemon_v2_characteristicdescriptions(where: {language_id: {_eq: 9}}) {
      description
    }
  }
}


`;

export const GET_POKEMON_EVOLUTION_BY_ID = gql`
query pokemons ($id: Int) {
  pokemon_v2_pokemon(limit: 151, where: {id: {_eq: $id} }) {
    id
  } 
  pokemon_v2_evolutionchain {
    pokemon_v2_pokemonspecies {
      name
      evolves_from_species_id
      forms_switchable
      id
    }
  }
}
`;