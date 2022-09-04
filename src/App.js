import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import { productInputs, userInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/users' element={<List/>}/>
    <Route path='/users/:userId' element={<Single/>}/>
    <Route path='/users/new' element={<New inputs={userInputs} title="Add New Users"/>}/>

    <Route path='/products' element={<List/>}/>
    <Route path='/products/:productId' element={<Single/>}/>
    <Route path='/products/new' element={<New inputs={productInputs} title="Add New Products"/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
