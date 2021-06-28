import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
        id
        artwork
      }
    }
  }
`;

export const GET_POKEMON_BY_NAME = gql`
    query pokemon($name: String!) {
    pokemon(name: $name) {
        id
        name
        sprites {
        front_default
        }
        moves {
        move {
            name
        }
        }
        types {
        type {
            name
        }
        }
    }
    }
`;