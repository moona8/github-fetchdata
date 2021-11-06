import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const removeExtraSpaces = (text) => text.trim();

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    // "   " -> ""
    // "  user name  " -> "user name"
    

    if (removeExtraSpaces(user) !== "" && pass !== "") {
      const currentUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = { user, pass };
      currentUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(currentUsers));
      localStorage.setItem("login", JSON.stringify(newUser));
      setUser("");
      setPass("");
      history.push("/dashboard");
    } else {
      alert("Please provide required credentails!");
    }

    // const items = {
    //   user: user,
    //   pass: pass,
    // };
    // if (localStorage.getItem("data") == null) {
    //   localStorage.setItem("data", JSON.stringify([items]));
    // } else {
    //   const old_val = JSON.parse(localStorage.getItem("data"));

    //   old_val.push(items);
    //   localStorage.setItem("data", JSON.stringify(old_val));

    // }
    // setUser("");
    //   setPass("");
  };
  const foo=()=>{
    history.push("/")
}
  return (<div>
      <div className="container text-center align-middle"  >
<br/>
<br/>
<br/>
<br/>
 <div className="row">
<div className="col">
    <form onSubmit={handleFormSubmit}>
       <h1> SignUp Page</h1>
<br/>
<br/>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <br />
      <button class="btn btn-secondary" type="submit">SignUp</button>
      
      <br />
      <br />
      
    <p>Free <b><span class="btn btn-secondary-lg" onClick={foo}>SignIn</span></b></p>
    </form>
    </div>
</div>
</div>
    


{/* <div className="container text-center align-middle"  >
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
</div> */}
</div>
  );
};
export default SignUp;
