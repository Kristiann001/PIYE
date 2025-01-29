import { BrowserRouter , Routes , Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Propertypage from "./pages/Propertypage"
import Getaway from "./pages/Getaway"
import Booknow from "./pages/Booknow"
import Nopage from "./pages/Nopage"
import Bnbprices from "./prices/bnbprices"
import Getawayprices from "./prices/getawayprices"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage />} />
      <Route path="/about" element = {<Aboutpage />} />
      <Route path="/properties" element = {<Propertypage />} />
      <Route path="/getaway" element = {<Getaway />} />
      <Route path="/booknow" element = {<Booknow />} />
      <Route path="/bnbprices" element = {<Bnbprices />} />
      <Route path="/getawayprices" element = {<Getawayprices />} />
      <Route path="*" element = {<Nopage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

