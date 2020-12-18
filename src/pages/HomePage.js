import React from 'react'
import HomeLanding from '../components/HomeLayout/HomeLanding';
import Particles from 'react-particles-js';

function HomePage(props){
    return(
        <div>
         
    
            {/* <Particles className="home-particles"
                params={{ 
                    particles: { 
                    number: { 
                    value: 100, 
                    density: { 
                        enable: true, 
                        value_area: 1000, 
                    } 
                }
            }}} 
            />  */}
           <HomeLanding/>
        </div>
    );
}

export default HomePage;