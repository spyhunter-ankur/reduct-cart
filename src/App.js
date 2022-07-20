import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter from './pages/counter';
import Home from './pages/home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;