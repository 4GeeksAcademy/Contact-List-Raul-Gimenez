import { putData, getData } from "../services/fetch";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function ModifyModal({ toModify, id, updateContactList }) {
    return (
        <div>
            <div
                className="modal fade"
                id={`mod-modal-id-${id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ContactForm modType="Modify" modId={id} updateContactList={updateContactList}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
