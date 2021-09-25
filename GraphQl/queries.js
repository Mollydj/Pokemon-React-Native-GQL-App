import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
# query pokemons($limit: Int, $offset: Int) {
#     pokemons(limit: $limit, offset: $offset) {
#       count
#       next
#       previous
#       nextOffset
#       prevOffset
#       status
#       message
#       results {
#         url
#         name
#         image
#         id
#         artwork
#       }
#     }
#   }
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

export const GET_POKEMON_BY_NAME = gql`
query pokemonByName {
  pokemon_v2_pokemon(limit: 151, where: {id: {_eq: 10}}) {
    name
    id
    order
    weight
    pokemon_v2_pokemonspecy {
      evolution_chain_id
    }
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
  }
}

`;

