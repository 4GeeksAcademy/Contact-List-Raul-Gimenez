import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";
import { getData } from "../services/fetch";
import { useEffect, useState } from "react"

export default function ContactList({ data }) {
    const user0 = {
        name: "Raul Gimenez Murga",
        address: "C/Pintor Mariano Cruz, 4, 6, Quart de Poblet (46930)",
        number: "+34 653 61 61 67",
        email: "raulgimenezmurga@gmail.com",
        imgUrl: "https://yt3.googleusercontent.com/1SFBG2eSQQbPSqyUkfHQCYO0y34qpWlKh2fVwsXv_vaa0dwLStb9YoqQFEs348INFKRcJ5DoQEw=s900-c-k-c0x00ffffff-no-rj"
    }

    const [contactList, setContactList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData()
            .then((res) => {
                if (res === null) {
                    setContactList([]);
                } else {
                    const dataArray = Object.values(res);
                    setContactList(dataArray);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos", err);
                setIsLoading(false);
            });
    }, []);


    if (isLoading) {
        return (
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    if (!contactList?.length) {
        return (
            <div className="row">
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <ul className="list-group list-group col-10 just shadow-lg mb-5">
                        <ContactCard
                            name="Example Name"
                            number="000-00-00-00"
                            address="C/Example, Number 0"
                            email="Examplemail@examplemail.com"
                            imgUrl="https://yt3.googleusercontent.com/1SFBG2eSQQbPSqyUkfHQCYO0y34qpWlKh2fVwsXv_vaa0dwLStb9YoqQFEs348INFKRcJ5DoQEw=s900-c-k-c0x00ffffff-no-rj"
                            itsExampleContact={true}
                        />
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="row">
            <Navbar />
            <div className="row justify-content-center mt-5">
                <ul className="list-group list-group col-10 just shadow-lg mb-5">
                    {   
                        contactList.map((contact) => {
                            return (
                                <ContactCard
                                    fullName={contact.fullName}
                                    phoneNumber={contact.phoneNumber}
                                    address={contact.address}
                                    email={contact.email}
                                    imgUrl={contact.avatarURL || "https://yt3.googleusercontent.com/1SFBG2eSQQbPSqyUkfHQCYO0y34qpWlKh2fVwsXv_vaa0dwLStb9YoqQFEs348INFKRcJ5DoQEw=s900-c-k-c0x00ffffff-no-rj"}
                                    itsExampleContact={false}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}