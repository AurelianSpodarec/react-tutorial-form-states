import { useEffect, useState } from "react";

function BasicIndex() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")

    function handleFirstNameChange(event:any) {
        setFirstName(event.target.value);
    };
    
    function handleLastNameChange(event:any) {
        setLastName(event.target.value);
    };

    function handleGenderChange(event:any) {
        setGender(event.target.value);
    };

    function minTwo() {

    }

    function postDataRequest() {

    }

    function onSubmit() {
        const newData = {
            first_name: firstName,
            last_name: lastName,
            gender: gender
        }
    }

    useEffect(() => {
        console.log("---------------------------")
        console.log("First Name:", firstName)
        console.log("Last Name:", lastName)
        console.log("Gender:", gender)
    }, [firstName, lastName, gender])
    
    return (
        <section style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid black" }}> 
            <header>
                <h2>Noob</h2>
            </header>

            <form onSubmit={onSubmit}>

                <div>
                    <input type="text" placeholder="First Name" onChange={handleFirstNameChange} name="firstName"/>
                    <input type="text" placeholder="Last Name" onChange={handleLastNameChange} name="secondname" />
                </div>

                <select></select>

                <div>
                    <label>
                        <input type="radio" name="gender" value="Male" onChange={handleGenderChange} checked={gender === 'Male'} /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Female" onChange={handleGenderChange} checked={gender === 'Female'} /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Other" onChange={handleGenderChange} checked={gender === 'Other'} /> Other
                    </label>
                </div>

                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default BasicIndex;