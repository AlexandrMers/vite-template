import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Component1 from 'components/Component1'
import Orders from 'components/Orders'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component1 />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
