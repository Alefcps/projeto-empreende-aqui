import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Receipt from './pages/Receipt';

function  RoutesApp(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recebimento' element={<Receipt/>}/>
        </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;