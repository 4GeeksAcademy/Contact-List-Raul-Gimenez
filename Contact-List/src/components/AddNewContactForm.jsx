export default function AddNewContactForm () {
    return (
        <div className="row align-items-center justify-content-center vh-100 text-center">
            <h1>Add new contact</h1>
            <form className="shadow-lg rounded w-75 h-75 p-5 text-start">
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="nameInput"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="numberInput" className="form-label">Phone number</label>
                    <input type="text" className="form-control" id="numberInput"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label">Address</label>
                    <input type="text" className="form-control" id="addressInput"/>
                </div>
                <div className="d-block container mt-5">
                    <button type="submit" className="btn btn-primary row ">Save contact</button>
                    <a href="" className="form-text row">Go back to contact page.</a>
                </div>
            </form>
        </div>
    )
}