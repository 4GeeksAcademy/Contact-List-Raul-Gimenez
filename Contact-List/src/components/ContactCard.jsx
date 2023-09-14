export default function ContactCard ({fullName, phoneNumber, email, address, imgUrl, itsExampleContact}) {
    if(itsExampleContact){
        return (
            <li className="list-group-item row d-flex ps-5 py-3">
                <div className="col-3">
                    <div className="ratio ratio-1x1">
                        <img className="rounded-circle" src={imgUrl} alt="" />
                    </div>
                </div>
                <div className="col-6 ms-2 row">
                    <h1 className="fw-bold">{name}</h1>
                    <p className="mb-0"><i className="fa-solid fa-phone me-3"></i>{number}</p>
                    <p className="mb-0"><i className="fa-solid fa-envelope me-3"></i>{email}</p>
                    <p className="mb-0"><i className="fa-solid fa-location-dot me-3"></i>{address}</p>
                </div>
            </li>
        )
    }
    
    return (
        <li className="list-group-item row d-flex ps-5 py-3">
            <div className="col-3">
                <div className="ratio ratio-1x1">
                    <img className="rounded-circle" src={imgUrl} alt="" />
                </div>
            </div>
            <div className="col-6 ms-2 row">
                <h1 className="fw-bold">{fullName}</h1>
                <p className="mb-0"><i className="fa-solid fa-phone me-3"></i>{phoneNumber}</p>
                <p className="mb-0"><i className="fa-solid fa-envelope me-3"></i>{email}</p>
                <p className="mb-0"><i className="fa-solid fa-location-dot me-3"></i>{address}</p>
            </div>
            <div className="col-2 row">
                <div className="col-6 text-black"><button className="mt-3 btn fs-4 fa-solid fa-pencil"></button></div>
                <div className="col-6 text-black"><button className="mt-3 btn fs-4 fa-solid fa-trash-can"></button></div>
            </div>
        </li>
    )
}