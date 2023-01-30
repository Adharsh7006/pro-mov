import logo from './logo.svg';
import './App.css';
import Nova from './Nova';
import{BrowserRouter,Route,Routes} from "react-router-dom"
import Popular from './Popular';
import Banner from './Banner';
import Moviedetail from './Moviedetail';
import { createContext, useState } from 'react';
const samplecontext=createContext()


function App() {
  const [sample, setsample] = useState([])
  const[hide,sethide]=useState(false);
  const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
  
  const ComedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
 const LatestMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
  
  const PopularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
  return (
    <div className="App">
      
     <samplecontext.Provider value={{sample,setsample,hide,sethide}}>
      <BrowserRouter>
      <Nova />
      {hide === false ? <Banner />:""}
      <Routes>
    
      <Route path="/Popular" element={<Popular url={PopularMovies}/>} />
      <Route path="/Latest" element={<Popular url={LatestMovies}/>} />
      <Route path="/Comedy" element={<Popular url={ComedyMovies} />} />
      <Route path="/Moviedetail/:id" element={<Moviedetail />} />
      </Routes>
      
      </BrowserRouter> 
      </samplecontext.Provider>
      </div>
      
    
  );
}

export default App;
export {samplecontext}