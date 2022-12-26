import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Footer, Header, Home, ProductDetails, Sidebar} from './constant'

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
