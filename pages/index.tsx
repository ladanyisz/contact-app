import Head from 'next/head';
import { Fragment, useContext, useEffect, useState } from 'react';
import Contacts from '../components/Contacts/contacts';
import Loading from '../components/Loading/loading';
import ContactsContext from '../context/ContactsContext';

import {prisma} from '../db';


export async function getServerSideProps() {
    const contacts = await prisma.contact.findMany();
    
    return {
        props: {
            contacts: contacts,
        },
    };
}

export default function Home(props) {
    const contactCtx = useContext(ContactsContext);
    const [contacts, setContacts] = useState(props.contacts);

    useEffect(() => {
        contactCtx.setUpContacts(contacts);
        
    }, [contacts]);


    return (
        <Fragment>
            <Head>
                <title>Contact App</title>
                <meta
                    name='description'
                    content='Contact app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Loading loading={contactCtx.loading} />

            <main className='main'>
                <div className='top'></div>
                <div className='top'></div>
                <div className='top'></div>

                <Contacts />
            </main>

            <footer></footer>
        </Fragment>
    );
}
