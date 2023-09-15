import { putData, getData } from "../services/fetch";
import { useEffect, useState } from "react";
import getLastId from "../utils/utils";
import { Link } from "react-router-dom";

export default function ContactForm({ modType, modId, updateContactList }) {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [avatarURL, setAvatarURL] = useState("")
    const [contactList, setContactList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
            .then((res) => {
                if (res === null) {
                    setContactList([]);
                } else {
                    setContactList(res);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos", err);
                setIsLoading(false);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName || !phoneNumber || !email || !address) {
            return alert("formulario incorrecto, rellene todos los campos necesarios");
        }

        if (modType === "Modify") {
            const updatedContactList = contactList.map((contact) =>
                contact.id === modId
                    ? {
                          id: modId,
                          fullName,
                          phoneNumber,
                          email,
                          address,
                          avatarURL,
                      }
                    : contact
            );

            try {
                const res = await putData(updatedContactList);
                console.log("Datos modificados correctamente", res);
                alert("Datos modificados correctamente");
                setFullName("");
                setAddress("");
                setEmail("");
                setPhoneNumber("");
                setAvatarURL("");
                updateContactList(updatedContactList)
            } catch (err) {
                console.error("Error al modificar datos", err);
            }
        
        
        } else {
            const lastId = getLastId(contactList);

            const formData = {
                id: lastId,
                fullName,
                phoneNumber,
                email,
                address,
                avatarURL,
            };

            const updatedContactList = [...contactList, formData];

            try {
                const res = await putData(updatedContactList);
                console.log("Datos enviados correctamente", res);
                alert("Datos enviados correctamente");
                setFullName("");
                setAddress("");
                setEmail("");
                setPhoneNumber("");
                setAvatarURL("");
                updateContactList(updatedContactList)
            } catch (err) {
                console.error("Error al enviar datos", err);
            }
        }
    };

    if (isLoading) {
        return (
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        )
    }


    return (


        <div className={`row align-items-center justify-content-center ${modType !== "Modify" ? "vh-100" : "vh-75"} text-center`}>
            <h1>{modType} contact</h1>
            <form className="shadow-lg rounded w-75 h-75 p-5 text-start" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        maxLength={50}
                        minLength={2}
                        pattern="^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="numberInput" className="form-label">
                        Phone number
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="numberInput"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        pattern="^[+]?[\d\s\- ]+$"
                        minLength={9}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="addressInput"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="AvatarInput" className="form-label d-flex">
                        Avatar URL <i className="ms-auto me-0 form-text">Not required</i>
                    </label>
                    <input
                        type="url"
                        className="form-control"
                        id="AvatarInput"
                        value={avatarURL}
                        onChange={(e) => setAvatarURL(e.target.value)}
                        placeholder="http://example.com/example000"
                    />
                </div>
                {
                    modType !== "Modify" ?
                        (<div className="d-block container mt-5">
                            <button type="submit" className="btn btn-primary row">
                                Save contact
                            </button>
                            <Link to="/" className="form-text row">
                                Go back to contact page.
                            </Link>
                        </div>)
                        :
                        (<div className="d-flex justify-content-end mt-5 border-top">
                            <button type="button" className="btn btn-secondary mt-2 me-2" data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary mt-2" data-bs-dismiss="modal">
                                Save changes
                            </button>
                        </div>)
                }
            </form>
        </div>
    );
}