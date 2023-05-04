// update for password
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {

    // useState hook to observe the initial state (email) and to update the state (setEmail), the initial state is an empty string
    const [email, setEmail] = useState("")

    // use State hook to observe initial state (password) and to update the state (setPassword), the initial state is an empty string
    const [password, setPassword] = useState("")

    // useNavigate hook to navigate to another URL
    const navigate = useNavigate()

    const handleLogin = (e) => {

        // prevents automatic reloading of the page
        e.preventDefault()

        // looks at the API and compares the email address with those in the database
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())            
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    // if there is a match
                    const user = foundUsers[0]
                    // checks to make sure the password matches
                    if (password === user.password) {
                        // it sets that email/user to localStorage and stores the user.id and whether that user is an admin
                        localStorage.setItem("apply_user", JSON.stringify({
                            id: user.id,
                            admin: user.isAdmin
                        }))
                        // then navigates the user to the home page
                        navigate("/home")
                    }
                }
                else {
                    // if not, the user is alerted that they have an invalid login
                    window.alert("Invalid login")
                }
            })
    }

    // JSX to render what displays on the login URL
    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1><img src="/images/ApplYances.jpg" alt="logo"/></h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}

