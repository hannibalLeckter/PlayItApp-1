 import React from 'react';
 import fire from './fire';
 import Music from './Music';
 import Crud from './crud';

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
                 <h2>{CurrentUser.displayName}Prueba</h2>
                 <button>Admin</button>
                 <button onClick={handleLogout}>Salir</button>
             </nav>

             <Music/>
             <Crud/>
         </section>

         
     )
 };


 export default Hero;
 