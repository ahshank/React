import { useState } from "react"

export default function Form () {

    let[formData, setFormdata] = useState({
        fullName: "",
        userName:"",
    });

        let handleInputchange = (event) => {
            setFormdata((currData) => {
                return{...currData,[event.target.name]: event.target.value};

            });
        };


        let handleSubmit = (event) => {
            event.preventDefault();
            setFormdata({
                fullName: "",
                userName:"",
            })

        };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="Enter your name" value={formData.fullName} id="fullName" name="fullName" onChange={handleInputchange}/>
        <br />
        <br />

        <label htmlFor="userName">User Name</label>
        <input type="text" placeholder="Enter your username" value={formData.userName} id="userName" name="userName" onChange={handleInputchange}/>
        <br />
        <br />

        <button>Submit</button>
    </form>
    )
}