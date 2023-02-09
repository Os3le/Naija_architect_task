import Nav from './Nav';
import Navbottom from './Navbottom';
import Banner from './Banner';
import Populargames from './Populargames';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { useState , useEffect } from 'react';


function App() {
  const [popularGames , setPopularGames] = useState([]);
  const [popularGames2 , setPopularGames2] = useState(popularGames);
  const getGames = async()=>{
    const data =  await fetch('https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter');
    const games = await data.json();
    setPopularGames(games);
    setPopularGames2(games);
  }
  useEffect(()=>{ getGames()},[])
    const [searchcheckVal , setSearchcheckval] = useState(false)
    function toggleSearch(){setSearchcheckval(searchcheckVal===true?false:true)}
    function saveSearchParam(e){
      setPopularGames2(popularGames2.filter(eachGame => eachGame.GameDescription.toLowerCase().includes(e.target.value.toLowerCase())|
                                                        eachGame.Group.toLowerCase().includes(e.target.value.toLowerCase())|
                                                        eachGame.Subject.toLowerCase().includes(e.target.value.toLowerCase())       
      ))
      if(e.target.value === "")setPopularGames2(popularGames)
    }

  
  return (
    <div className='app'>
    <Nav/>
    <Navbottom
    searchVal={searchcheckVal}
    toggleSearch={toggleSearch}
    saveSearchParam={saveSearchParam}
    />
    <Banner/>
    <Populargames
    popularGames2={popularGames2}
    />
    <Newsletter/>
    <Footer/>
    </div>
  );
}

export default App;
