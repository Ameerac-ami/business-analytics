import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/screens/Navbar';
import Statistics from './Components/screens/Statistics';
import SellingProducts from './Components/screens/SellingProducts';
import HotSelling from './Components/screens/HotSelling';
import Settings from './Components/screens/Settings';
import Orders from './Components/screens/Orders';
import Payments from './Components/screens/Payments';
import Products from './Components/screens/Products';

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route
                    path='/'
                    element= {
                        <Container>
                            <Navbar/>
                            <Statistics/>
                            <SellingProducts/>
                        </Container>
                    }
                />
                {/* <Route path='/settings' element={<Settings/>} /> */}
                <Route path='/products' element={<Products/>} />
                <Route path='/hotselling' element={<HotSelling/>} />
                <Route path='/manageorder' element={<Orders/>} />
                <Route path='/payments' element={<Payments/>} />
                <Route path='/settings' element={<Settings/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
const Container = styled.div`
    display: flex;
`;
