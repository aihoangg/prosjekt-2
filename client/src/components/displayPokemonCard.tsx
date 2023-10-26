import { CloseButton, Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
// import { Fire } from 'react-bootstrap-icons'
import './displayPokemonCard.css'

type PokemonModalProps = {
  show: boolean
  onHide: () => void
  pokemonName: string
  pokemonImage: string
  key: string
}

//display pokemon card in modal
function PokemonModal({
  show,
  onHide,
  pokemonName,
  pokemonImage,
}: PokemonModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered={true} size="sm">
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title className="modal-title">
          {' '}
          <h1>{pokemonName} </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        {/* {if image does not exist, display back card} */}
        <img src={pokemonImage} />
        <div className="textbox">
          <p> Hi, I am {pokemonName}! </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* add favourite button */}
        {/* <Button
          className="btn btn-primary btn-sm"
          variant="primary"
          onClick={onHide}
        >
          Save to favourites
        </Button> */}
        {/* <Fire size={20} /> */}
        <Button
          className="btn btn-primary btn-sm"
          variant="secondary"
          //function to save favourite pokemon here
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PokemonModal
