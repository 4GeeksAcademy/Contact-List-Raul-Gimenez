export default function ContactCard (contact) {
    console.log("this is the contact", contact)
    return (
        <li className="list-group-item row d-flex ps-5 py-3">
            <div className="col-3">
                <div className="ratio ratio-1x1">
                    <img className="rounded-circle" src="https://www.cesurformacion.com/uploads/media/16-9-large/02/2302-que-es-la-imagen-personal.png?v=1-0" alt="" />
                </div>
            </div>
            <div className="col-6 ms-2 row">
                <h1 className="fw-bold">{contact.name}</h1>
                <p className="mb-0"><i className="fa-solid fa-phone me-3"></i>{contact.number}</p>
                <p className="mb-0"><i className="fa-solid fa-envelope me-3"></i>{contact.email}</p>
                <p className="mb-0"><i className="fa-solid fa-location-dot me-3"></i>{contact.address}</p>
            </div>
            <div className="col-2 row">
                <div className="col-6 text-black"><button className="mt-3 btn fs-4 fa-solid fa-pencil"></button></div>
                <div className="col-6 text-black"><button className="mt-3 btn fs-4 fa-solid fa-trash-can"></button></div>
            </div>
        </li>
    )
}