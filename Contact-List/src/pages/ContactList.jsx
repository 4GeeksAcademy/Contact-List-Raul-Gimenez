import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";

export default function ContactList () {
const user0 = {
    name: "Raul Gimenez Murga",
    address: "C/Pintor Mariano Cruz, 4, 6, Quart de Poblet (46930)",
    number: "+34 653 61 61 67",
    email: "raulgimenezmurga@gmail.com",
    imgUrl: "https://yt3.googleusercontent.com/1SFBG2eSQQbPSqyUkfHQCYO0y34qpWlKh2fVwsXv_vaa0dwLStb9YoqQFEs348INFKRcJ5DoQEw=s900-c-k-c0x00ffffff-no-rj"
}

    return (
        <div className="row">
            <Navbar/>
            <div className="row justify-content-center mt-5">
                <ul className="list-group list-group col-10 just shadow-lg mb-5">
                    <ContactCard 
                        name={user0.name}
                        number={user0.number}
                        address={user0.address}
                        email={user0.email}
                        imgUrl={user0.imgUrl}
                    />
                    <ContactCard 
                        name={user0.name}
                        number={user0.number}
                        address={user0.address}
                        email={user0.email}
                        imgUrl={user0.imgUrl}
                    />
                    <ContactCard 
                        name={user0.name}
                        number={user0.number}
                        address={user0.address}
                        email={user0.email}
                        imgUrl={user0.imgUrl}
                    />
                    <ContactCard 
                        name={user0.name}
                        number={user0.number}
                        address={user0.address}
                        email={user0.email}
                        imgUrl={user0.imgUrl}
                    />
                    
                </ul>
            </div>
        </div>

    )
}