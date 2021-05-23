 import React from 'react';
 import "./Login.css";

 const Login = (props) =>{

    const{
        email,
        setEmail,
        displayname,
        setDisplayName,
        password,
        setPassword,
        handleLogin,
        handleRegister,
        handleLogout,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    }=props;

     return(
         <section className="login">
             <div className="loginContainer">
                <img alt=""></img> 
             {hasAccount ? (
                         <>
                            <label>Usuario</label>
                 <input type="text" autoFocus required value={displayname} onChange={(e)=>setDisplayName(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>

                            <label>Email</label>
                 <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>

                 <label>Contraseña</label>
                 <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                            <button onClick={handleRegister}>Regístrate</button>
                            <p>¿Tienes cuenta?<span onClick={()=> setHasAccount(!hasAccount)}>Inicia sesión</span></p>
                            </div>
                         </>
                     ) : ( 
                        <>
                            <label>Usuario</label>
                 <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>

                 <label>Contraseña</label>
                 <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                            <button onClick={handleLogin}>Inicia sesión</button>
                            <p>¿No tienes cuenta?<span onClick={()=> setHasAccount(!hasAccount)}>Regístrate</span></p>
                            </div>
                         </>
                     )}
                 
             </div>
        
         </section>
     )
 }
 export default Login;