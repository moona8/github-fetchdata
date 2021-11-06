import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";

const GithubUserProfile = () => {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value1, setInput1] = useState("");
  const [value2, setInput2] = useState("");
  const history = useHistory();

  const onInputChange1 = (event) => {
    setInput1(event.target.value);
  };
  const onInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const onSearch = () => {
    history.push(`/dashboard?q=${value1}`);
    setLoading(true);
    const url1 = `https://api.github.com/users/${value1}`;
    fetch(url1)
      .then((res) => res.json())
      .then((res) => setUser1(res))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));

    const url2 = `https://api.github.com/users/${value2}`;
    fetch(url2)
      .then((res) => res.json())
      .then((res) => setUser2(res))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));

    const usr1 = parseInt(user1?.following) + parseInt(user1?.followers);
    const usr2 = parseInt(user2?.following) + parseInt(user2?.followers);
    console.log(usr2);
    if (usr1 > usr2) {
      alert("user1 win");
    } else alert("user2 win");
  };

  return (
      <div className="container text-center">
          <h1 className="text-center text-dark ">Search Any Github user</h1>
          {loading ? <h1>Loading....</h1> : null}

      <div className="row">
        <div className="col">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">User1</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
  value={value1} onChange={onInputChange1} placeholder="Enter Username"/>
</div>

            
            {/* <input value={value1} onChange={onInputChange1} placeholder="user1" /> */}
          {user1 && (
            <div>
              <h4>{user1?.login}</h4>
              <h4>following = {user1?.following}</h4>
              <h4>followers = {user1?.followers}</h4>
            </div>
          )}
        </div>
        <div className="col">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">User2</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
  value={value2} onChange={onInputChange2} placeholder="Enter Username"/>
</div>
            {/* <input value={value2} onChange={onInputChange2} placeholder="user2" /> */}
          {user2 && (
            <div>
              <h4>{user2?.login}</h4>
              <h4>following = {user2?.following}</h4>
              <h4>followers = {user2?.followers}</h4>
            </div>
          )}
        </div>
        <br/>
        <br/>
        <br/>
          <button  type="button" className="btn btn-secondary btn-lg btn-block" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default GithubUserProfile;
