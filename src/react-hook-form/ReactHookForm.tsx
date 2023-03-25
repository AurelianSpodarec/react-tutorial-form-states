import { useForm } from 'react-hook-form';

function ReactHookForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            eyeColor: ""
        }
    });

    function onSubmit(data:{}) {
        console.log(data)
    }

    return (
        <section style={{ marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid black" }}> 
            <header>
                <h2>react-hook-form</h2>
            </header>

            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                
                <div>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            id="firstName"
                            type="text" 
                            placeholder="First Name" 
                            {...register('firstName', { 
                                required: true, 
                                minLength: 2 
                            })} 
                        />
                        {errors.firstName && <p>First name is required. Needs to be 2 letters more</p>}
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            id="firstName"
                            type="text" 
                            placeholder="Last Name" 
                            {...register('lastName')} 
                        />
                    </div>                    
                </div>                

                <br/>

                <div>
                <label>
                    Choose your Eye Color:
                    <select {...register("eyeColor")}>
                        <option value="">Select Eye Color</option>
                        <option value="male">Brown</option>
                        <option value="female">Blue</option>
                        <option value="green">Green</option>
                        <option value="gray">Gray</option>
                        <option value="hazel">Hazel</option>
                        <option value="amber">Amber</option>
                        <option value="red">Red</option>
                        <option value="violet">Violet</option>
                    </select>
                </label>
                </div>

                <br/>

                <div>
                <fieldset>
                    <legend>Choose your Gender:</legend>

                    <input type="radio" id="male" value="male" {...register("gender", { required: true })} />
                    <label htmlFor="male">Male</label><br />

                    <input type="radio" id="female" value="female" {...register("gender", { required: true })} />
                    <label htmlFor="female">Female</label><br />

                    <input type="radio" id="other" value="other" {...register("gender", { required: true })} />
                    <label htmlFor="other">Other</label>

                    {errors.gender && <p>First name is required.</p>}
                </fieldset>
                </div>

                <br/>
                
                <div>
                <label>
                    Age: 
                    <input type="number" {...register("age", { min: 18 })} />
                    {errors.age && <p>You must be over 18years old</p>}
                </label>
                </div>

                <br/>

                <div>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </section>
    )
}

export default ReactHookForm;