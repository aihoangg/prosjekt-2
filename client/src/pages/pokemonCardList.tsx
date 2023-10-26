import data from '../../public/fullpokemon.json'
import PokemonCardInList from '../components/pokemonCardInList'
import './pokemonCardList.css'
// import { useQuery } from '@apollo/client'
// import { gql } from '../__generated__/'
import './pokemonCardList.css'

// const CARDS = gql(`
// query GetCards {
//   cards {
//     id
//     name
//     image
//   }
// }
// `)

// const TestCards = () => {
//   const { loading, error, data } = useQuery(CARDS)
//   if (loading) return 'Loading...'
//   if (error) return `Error! ${error.message}`
//   console.log(CARDS)
//   console.log(JSON.stringify(data))
//   return
// }

// console.log('mips')
// TestCards()

interface PokemonCardProps {
  id: string
  name: string
  image: string
}
interface PokemonCardListProps {
  searchValue: string
}

type PokemonData = {
  id: string
  name: string
  image: string
}[]

const pokemonData = data as PokemonData

function PokemonCardList({ searchValue }: PokemonCardListProps) {
  const filteredPokemonData = searchValue
    ? pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : pokemonData
  return (
    <div>
      <div className="cardList">
        {filteredPokemonData
          .slice(0, 100)
          .map((pokemonCard: PokemonCardProps) => (
            <PokemonCardInList
              key={pokemonCard.id}
              pokemonName={pokemonCard.name}
              pokemonImage={pokemonCard.image + '/low.png'}
            />
          ))}
      </div>
    </div>
  )
}
export default PokemonCardList
