import { useQuery } from '@apollo/client'
import { gql } from '../__generated__/'

const CARDS = gql(`
query GetCards {
  cards {
    id
    name
    image
  }
}
`)

const TestCards = () => {
  const { loading, error, data } = useQuery(CARDS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(CARDS)
  console.log(JSON.stringify(data))
  return
}

 const TestCard: React.FC< card: TestCard: any, }> = ({ card }) => {
   const {id, name, image, localId} = card;
};