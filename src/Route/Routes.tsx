import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/home';
import Projects from '../Pages/projects';
import NotFoundPage from '../Pages/notfound';

export default function _Routes(){

    return(
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}