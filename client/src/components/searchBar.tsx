import { SetStateAction } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

interface SearchBarProps {
  searchValue: string
  setSearchValue: React.Dispatch<SetStateAction<string>>
}

export function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setSearchValue(e.target.value)
  }

  return (
    <Container
      className="mt-5 searchBar d-flex align-items-center justify-content-center flex-column"
      style={{ height: '10vh' }}
    >
      <Row className="w-100">
        <Col sm={4} className="mx-auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for a pokemon"
              className="me-2 rounded-pill"
              aria-label="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
