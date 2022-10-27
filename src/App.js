import './App.css';
import styled from 'styled-components'
import Navbar from './Components/screens/Navbar';
import Statistics from './Components/screens/Statistics';
import SellingProducts from './Components/screens/SellingProducts';

function App() {
  return (
        <Container>
            <Navbar/>
            <Statistics/>
            <SellingProducts/>
        </Container>
  );
}

export default App;
const Container = styled.div`
    display: flex;
`;
