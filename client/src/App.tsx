import React, { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import NavigationBar from './components/navigationBar'
import PokemonCardList from './pages/pokemonCardList'
import Favorite from './pages/favoritePage'
import { SearchBar } from './components/searchBar'

const queryClient = new QueryClient()

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router basename="/project2">
          <NavigationBar />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Routes>
            <Route
              path="/"
              element={<PokemonCardList searchValue={searchValue} />}
            />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App
