import Container from '../../components/Container/container';
import pikachu from '../../assets/icons/pikachu.svg';
import { ButtonCustomer } from './styles';
import Paragraph from '../../components/paragraph';

const Home = () => {
  return (
    <>
      <Container />
      <div
        style={{
          position: 'absolute',
          width: '793px',
          height: '680px',
          left: '648px',
          top: '160px',
        }}
      >
        <img alt="pikachu" src={pikachu} />
      </div>
      <Paragraph />
      <ButtonCustomer>Veja os Pokemons</ButtonCustomer>
    </>
  );
};
export default Home;
