 import React from 'react';
 import fire from './fire';
 import Music from './Music';
 import Crud from './crud';
 import Side from './Sidebar';
 import {withRouter} from 'react-router-dom'; 

 const Hero = (props) =>{

    const{
        handleLogout,
        displayName
    }=props;

    const CurrentUser = fire.auth().currentUser;
    CurrentUser.updateProfile({displayName:displayName})

     return(
         <section className="hero">
             <nav>
                 <h2>{CurrentUser.displayName}</h2>
                 <button>Admin </button>
                 <button onClick={handleLogout}>Salir</button>
             </nav>
            {/*<Crud/>*/}
            <Side/>
            <Music/>
         </section>

         
     )
 };


 export default Hero;
 