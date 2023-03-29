import { Component } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Assets/Components/Nav-bar/Nav-bar";
import MainPage from "./Assets/Pages/Main-page";
import AddItem from "./Assets/Components/backend/addFileItem";

class App extends Component {
  render() {
    return(
      <div>
          <BrowserRouter> 
            <NavBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/add" element={<AddItem />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
      </div>
    )
  }
}

export default App