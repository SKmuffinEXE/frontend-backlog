import React from 'react'

export default function Header({user}) {
    // const [user, setUser] = useState();
    // const [password, setPassword] = useState();
    // const [value, setValue] = useState("");

  

    // function handleChange(e){
        // e.preventDefault();
    //     fetch("http://localhost:9292/user")
    //   .then((r) => r.json())
    //   .then((data) => {
    //     const usernameChecker = data.filter((userObj) =>
    //       userObj.username.includes(e.value)
    //     );
    //     console.log(usernameChecker[0].password);
    

        // if (usernameChecker[0].password === password) {
        //   console.log("You are logged in bro!");
        // } else {
        //   console.log("Incorrect Password duuude!");
        // }

        // setUser(usernameChecker[0])
    //   });
    // console.log(e.users.value)
    // }


    return (
        <header>
            <h1>Games Backlog 🎮 </h1>
            <h3> Current User: {user.user}</h3> 
            {/* <label>Login: </label> 
            <form > 
            <select name="users" id = "users" onChange= {handleChange}>
                <option value = "" > Select User </option>
                <option value="1" > David </option>
                <option value="2"> Josh </option>
            </select>
            <button type="submit">login</button>
            </form> */}
        </header>
    )
}
