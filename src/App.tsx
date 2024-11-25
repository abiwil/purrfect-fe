import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import OrderSummaryCard from './components/OrderSummaryCard/Card';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="welcome/:userId" element={
          <div className="mt-16">
          <OrderSummaryCard />
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
