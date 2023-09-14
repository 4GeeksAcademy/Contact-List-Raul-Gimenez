import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";
import DeleteModal from "../components/DeleteModal";
import ModifyModal from "../components/ModifyModal";
import { getData, putData } from "../services/fetch";
import { useEffect, useState } from "react";

export default function ContactsList() {
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

  const handleDeleteContact = (id) => {
    const newContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(newContactList);
    putData(newContactList);
  };

  if (isLoading) {
    return (
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

    if (!contactList?.length) {
        return (
            <div className="row">
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <ul className="list-group list-group col-10 just shadow-lg mb-5">
                        <ContactCard
                            fullName="Example Name"
                            phoneNumber="000-00-00-00"
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
              {contactList.map((contact) => {
                return(
                  <>
                    <ContactCard
                      key={contact.id}
                      id={contact.id}
                      fullName={contact.fullName}
                      phoneNumber={contact.phoneNumber}
                      address={contact.address}
                      email={contact.email}
                      imgUrl={contact.avatarURL || "https://yt3.googleusercontent.com/1SFBG2eSQQbPSqyUkfHQCYO0y34qpWlKh2fVwsXv_vaa0dwLStb9YoqQFEs348INFKRcJ5DoQEw=s900-c-k-c0x00ffffff-no-rj"}
                      itsExampleContact={false}
                      toDelete={()=>handleDeleteContact(contact.id)}
                    />
                    <DeleteModal toDelete={()=>handleDeleteContact(contact.id)} id={contact.id}/>
                  </>
                )
              })}
            </ul> 
          </div>
        </div>
      );
    }