function Form() {
    return (
        <>
            <h1 className="p-10 text-2xl text-secondary text-center">Contact Us</h1>
            <form className="flex flex-col items-center gap-5 md:max-w-screen-lg mx-auto">
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">

                    <input placeholder="Name" type="text" name="fName"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                    <input placeholder="Email" type="email" name="email"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                </div>
                <div className="flex flex-col w-[85%] gap-5 md:flex-row md:justify-between">
                    <input placeholder="Phone" type="number" name="phone"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                    <input placeholder="Website(optional)" type="text" name="website"
                        className="border-secondary rounded border-b-2 focus:outline-none w-[100%]"
                    />
                </div>
                <textarea rows={10} cols={10}
                    className="border-secondary rounded border-2 focus:outline-none w-[85%]"
                    placeholder="I would like a free a proposal to grow my Revenue online......"

                >

                </textarea>
                <button type="submit" className="text-primary bg-[#FF7F00] px-8 py-3 text-xl rounded-lg">
                    Get Free Proposal
                </button>
            </form>
        </>
    );
}

export default Form;