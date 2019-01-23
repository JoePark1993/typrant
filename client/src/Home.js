import React, {Component} from 'react';

import HomeHero from './HomeComponents/HomeHero';
import HomePlans from './HomeComponents/HomePlans';

class Home extends Component{
  render(){
    return(
      <div>
      <HomeHero />

      <HomePlans />
      </div>
    )
  }
}




export default Home;
