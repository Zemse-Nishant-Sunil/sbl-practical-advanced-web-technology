import { useState } from "react";
import "./App.css";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const saveStudent = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5000/students",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email
                    })
                }
            );

            const data = await response.json();

            setMessage(data.message);

            if (response.ok) {
                setName("");
                setEmail("");
            }

        }

        catch (error) {

            setMessage("Unable to connect to server");

        }

    };


    return (

        <div className="container">

            <h1>Student Registration</h1>

            <form onSubmit={saveStudent}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">
                    Save Student
                </button>

            </form>

            <p>{message}</p>

        </div>

    );
}

export default App;