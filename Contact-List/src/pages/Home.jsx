import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";

export default function Home () {
const user0 = {
    name: "Raul Gimenez Murga",
    address: "C/Pintor Mariano Cruz, 4, 6",
    number: "+34 653 61 61 67",
    email: "raulgimenezmurga@gmail.com"
}

    return (
        <div className="row">
            <Navbar/>
            <div className="row justify-content-center mt-5">
                <ul className="list-group list-group col-10 just shadow-lg">
                    <ContactCard contact={user0}></ContactCard>
                    <ContactCard contact={user0}></ContactCard>
                    <ContactCard contact={user0}></ContactCard>
                </ul>
            </div>
        </div>

    )
}