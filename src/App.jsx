import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import Hero from "./components/Hero";


function App() {

const [searchQuery, setSearchQuery] = useState('best sellers');

  return (

    <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Banner/>
      <Hero/>
    </div>

  );
}

export default App;

