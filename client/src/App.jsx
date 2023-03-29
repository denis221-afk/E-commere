import { Component } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Assets/Components/Nav-bar/Nav-bar";
import MainPage from "./Assets/Pages/Main-page";

class App extends Component {
  render() {
    return(
      <div>
          <BrowserRouter> 
            <NavBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

export default App