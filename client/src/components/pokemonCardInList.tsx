import { useState } from 'react'
import PokemonModal from './displayPokemonCard'
import './pokemonCardInList.css'
import type { Card } from '../__generated__/graphql'

 const TestCard: React.FC< card: TestCard: any, }> = ({ card }) => {
   const {id, name, image, localId} = card;
 };

type PokemonCardInListProps = {
  pokemonName: string
  key: string
  pokemonImage: string
}

function PokemonCardInList({
  pokemonName,
  pokemonImage,
  key,
}: PokemonCardInListProps) {
  const [imageSrc, setImageSrc] = useState(pokemonImage)
  const [showModal, setShowModal] = useState(false)

  const handleImageError = () => {
    setImageSrc('../../public/icons/backCard.png')
  }

  return (
    <div className="card">
      <img
        src={imageSrc}
        alt={pokemonName}
        onError={handleImageError}
        onClick={() => setShowModal(true)}
      />
      <PokemonModal
        show={showModal}
        onHide={() => setShowModal(false)}
        pokemonName={pokemonName}
        pokemonImage={pokemonImage}
        key={key}
      />
    </div>
  )
}

export default PokemonCardInList
