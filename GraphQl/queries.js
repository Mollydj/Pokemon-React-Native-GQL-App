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
     		height
      	weight
      	order
      	is_default
      	base_experience
        abilities {
        ability {
          name
        }
        is_hidden
        slot
      }
        types {
          slot
          type{
						name
          }
        }
        stats {
          base_stat
          effort
          stat {
						name
          }
        }
        sprites 
      {
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


export const GET_MOVE_DETAILS = gql`
query pokemon($move: String!) {
  move(move: $move) {
    message
    status
    response
    params
  }
  }
`;

export const GET_EVOLUTION_DETAILS = gql`
    query evolutionChain($id: String!) {
    evolutionChain(id: $id) {
      response
    }
    }
`;

