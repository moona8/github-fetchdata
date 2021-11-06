import { Alert } from "bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [userIn, setUserIn] = useState("");
  const [passIn, setPassIn] = useState("");
  const history = useHistory();

  const get = () => {
    const item = {
      user: userIn,
      pass: passIn,
    };
    let arr = JSON.parse(localStorage.getItem("users"));
    // Array.prototype.find(arr==item)
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].user == item.user && arr[i].pass == item.pass) {
            localStorage.setItem("login", "true");
            // setLogginStatus(true);
            history.push("/dashboard");
            setUserIn("");
            setPassIn("");
            console.log("user found");
        }
        else alert("not found  ")
        setUserIn("");
            setPassIn("");
        break

        
    }
  };
  const foo=()=>{
      history.push("/SiginUp")
  }
  return (
      <div className="container text-center align-middle"  >
        <br/>
        <br/>
        <br/>
        <br/>
         <div className="row">
        <div className="col">
      <form onSubmit={get}>
      <h1> SignIn Page</h1>
        <br/>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        value={userIn}
        onChange={(e) => {
            setUserIn(e.target.value);
        }}
        />
      <br />
      
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        value={passIn}
        onChange={(e) => {
            setPassIn(e.target.value);
        }}
        />
        <br/>
        <br/>
      <button  class="btn btn-secondary" type="submit">SignIn</button>
      
      <br />
      <br />
        <p>Free <b><span class="btn btn-secondary-lg" onClick={foo}>SignUp</span></b></p>
    </form>
    </div>
    </div>
    </div>
  );
};
export default SignIn;

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// const Login = () => {
//   const [login, setLogin] = useState(false);
//   const [user, setUser] = useState("");
//   const [pass, setPass] = useState("");
//   const [userIn, setUserIn] = useState("");
//   const [passIn, setPassIn] = useState("");
//   const [isLoggedIn, setLogginStatus] = useState(true);

//   const history = useHistory();
//   const onLogin = () => {
//     localStorage.setItem("login", "true");
//     history.push("/dashboard");
//     setLogin(true);
//   };

//   const onLogout = () => {
//     localStorage.removeItem("login");
//     history.replace("/");
//     setLogin(false);
//   };
//   const add = () => {
//     const items = {
//       user: user,
//       pass: pass,
//     };
//     if (localStorage.getItem("data") == null) {
//       localStorage.setItem("data", JSON.stringify([items]));
//     } else {
//       const old_val = JSON.parse(localStorage.getItem("data"));

//       old_val.push(items);
//       localStorage.setItem("data", JSON.stringify(old_val));
//       setUser("");
//         setPass("");
//     }
//   };

//   const get = () => {
//     const item = {
//       user: userIn,
//       pass: passIn,
//     };
//     let arr = JSON.parse(localStorage.getItem("data"));
//     // Array.prototype.find(arr==item)
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].user == item.user && arr[i].pass == item.pass) {
//         setLogginStatus(true);
//         setUserIn("");
//         setPassIn("");
//         console.log("user found");
//       }
//     }
//   };

//   const logout = () => {
//     setLogginStatus(false);
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {login ? (
//         <button onClick={onLogout}> Logout</button>
//       ) : (
//         <button onClick={onLogin}> Login</button>
//       )}
//       <div className="col-md-auto">
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => {
//             setUser(e.target.value);
//           }}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Password"
//           onChange={(e) => {
//             setPass(e.target.value);
//           }}
//         />
//         <br />
//         <button onClick={add}>SignUp</button>
//         <hr />
{
  /* <input
type
text
placeholder="Username"
value={userIn}
onChange={(e) => {
  setUserIn(e.target.value);
}}
/>
<br />
<input
type
text
placeholder="Password"
value={passIn}
onChange={(e) => {
  setPassIn(e.target.value);
}}
/>
<br />
<button onClick={get}>SignIn</button> */
}
//
//         <button onClick={isLoggedIn ? logout : get}>
//           {isLoggedIn === true ? "Logout" : "Login"}
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Login;
