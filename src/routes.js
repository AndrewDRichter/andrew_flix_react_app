import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies/:id' element={<Movies />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;