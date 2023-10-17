import React, { useState } from 'react';
import sendDataToServer from '../lib/api';


const formVal = {
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
} //rewireor rewrite this codes
const initState = { values: formVal };

function Form() {

    const [state, setState] = useState(initState);
    const { values } = state;
    function handleChange({ target }) {

        setState((prev) => ({
            ...prev, values: {
                ...prev.values,
                [target.name]: target.value
            }
        }))
    }
    const handleSubmit = async (event)=> {
        event.preventDefault();
        try{
            const response = await sendDataToServer(values);
            console.log(response)
        }
        catch(error){
            console.error('Error:', error)
        }
        console.log(values)
    }


return (
    <>
        <h1 className="p-10 text-2xl text-secondary text-center">Contact Us</h1>
        <form className="flex flex-col items-center gap-5 md:max-w-screen-lg mx-auto" 
         onSubmit={handleSubmit}>
            <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">

                <input placeholder="Full Name" type="text" name="name" value={values.name}
                onChange={handleChange}
                    className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                />
                <input placeholder="Email" type="email" name="email" value={values.email} 
                onChange={handleChange}
                    className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                />
            </div>
            <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">
                <input placeholder="Phone" type="number" name="phone" value={values.phone}
                onChange={handleChange}
                    className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                />
                <input placeholder="Website(optional)" type="text" name="website" value={values.website}
                    onChange={handleChange}
                    className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                />
            </div>
            <textarea rows={10} cols={10} name="message"value={values.message} onChange={handleChange}
                className="border-secondary rounded border-2 focus:outline-none w-[85%]"
                placeholder="I would like a free a proposal"

            >
            </textarea>
            <button type="submit" className="text-primary bg-[#FF7F00] px-8 py-3 text-xl rounded-lg"
            >
                Get Free Proposal
            </button>
        </form>
    </>
);
}

export default Form;