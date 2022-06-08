import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Contacts from './pages/Contacts';
import DetailsPokemons from './pages/DetailsPokemons';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contacts />} />
        <Route path="/lista-pokemon" element={<Pokemons />} />
        <Route path="/detalhe" element={<DetailsPokemons />} />
      </Routes>
    </>
  );
}
export default App;
