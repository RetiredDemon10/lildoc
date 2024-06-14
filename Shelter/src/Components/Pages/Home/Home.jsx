import React from 'react'
import Location from '../../Location/Location'
import Searchbar from '../../Searchbar/Searchbar'
import Hero from '../../Hero/Hero'
import Featured from '../../Featured/Featured'
import Cta from '../../Cta/Cta'
import Counter from '../../Tools/Counter/Counter'
import See from '../../Tools/Counter/See'
import Liii from '../../Listing/Liii'
import Feet from '../../common/Feet'
import Vid from '../../vid/Vid'







const Home = () => {
  return (
   <div>
      <Searchbar/>
      <Hero/>
      <Featured/>
      <br></br>
      <br></br>
      <div class="animate__animated animate__bounce animate__delay-2s"><h1>Our Listings</h1></div>
      
      <Liii/>
      
      <br></br>
      <Vid/>
    
      <Counter/>
      <br></br>
      <Location/>
      
     
      {/* <See /> */}

      <Cta/>
      
      <Feet/>
  </div>


  )
}

export default Home