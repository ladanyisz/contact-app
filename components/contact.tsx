import Image from "next/image";
import { IContact } from "../models/Contact";

const Contact = (props: {contact: IContact}) => {
    const contact = props.contact;
    const altMessage = "profile picture of " + contact.name;

    return (
        <div>
            <div>
                <Image src={contact.image} alt={altMessage} width="40px" height="40px" />
                <div>
                    <h3>{contact.name}</h3>
                    <span className="message">{contact.phoneNum}</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;