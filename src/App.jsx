import './App.css'
import About from './pages/about/About'
import Prdoucts from './pages/Products/Products'
import LayOut from './pages/layOut/layOut'
import { Routes, Route } from 'react-router-dom'
import Slug from './pages/Slug/Slug'
function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut >
          <Prdoucts />  
        </LayOut>} />
        <Route path="/about" element={<LayOut>
          <About />
        </LayOut>} />

        <Route path="/products" element={<LayOut>
          <Prdoucts />
        </LayOut>} />

        <Route path="/Slug/:id" element={<LayOut>
          <Slug />
        </LayOut>} />
      </Routes>
    </div>  
    </>
  )
}

export default App
