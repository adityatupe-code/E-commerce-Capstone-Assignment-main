
import Homepage from './Components/Homepage/Homepage.jsx'
import DataProvider from './Detail/DataProvider.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Productdetailonc from './Components/productdetailonc.jsx';
// components
import Header from './Components/header/Header.jsx'
import Cart from './Components/cart/cart.jsx';
function App() {
  
  return (
    <DataProvider>
     ,<BrowserRouter>
    <Header/>
    <div style={{marginTop:55}}>
      <Routes>
      <Route path= '/' element={ <Homepage/>} />
      <Route path= '/product/:id' element={  <Productdetailonc/>} />
      <Route path='/cart' element={<Cart/>}>

      </Route>
   
     
    </Routes>
    </div>
   
    </BrowserRouter>
   </DataProvider>
  )
}

export default App
