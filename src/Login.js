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
            <img alt=""></img> 
             <div className="loginContainer">
            
             {hasAccount ? (
                         <>
                            <label>UserName</label>
                 <input type="text" autoFocus required value={displayname} onChange={(e)=>setDisplayName(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>

                            <label>Email</label>
                 <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>

                 <label>Password</label>
                 <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                            <button onClick={handleRegister}>Sign Up</button>
                            <p>Already have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </div>
                         </>
                     ) : ( 
                        <>
                            <label>Username</label>
                 <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>

                 <label>Password</label>
                 <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Dont have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
                            </div>
                         </>
                     )}
                 
             </div>
        
         </section>
     )
 }
 export default Login;