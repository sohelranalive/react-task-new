import { useEffect, useState } from 'react';
import Modal from './Modal';
import { Button } from 'react-bootstrap';

const Problem2 = () => {

    const [contact, setContact] = useState([])



    // const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(true)

    const handleContactDisplay = (value) => {

        // setIsModalOpen(!isModalOpen)

        if (value == 'all') {
            fetch('https://contact.mediusware.com/api/contacts/')
                .then(res => res.json())
                .then(data => {
                    setContact(data.results)
                })
            return;
        }

        if (value == 'us') {
            fetch('https://contact.mediusware.com/api/country-contacts/us/')
                .then(res => res.json())
                .then(data => {
                    setContact(data.results)
                })
            return;
        }

    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={() => handleContactDisplay('all')} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button onClick={() => handleContactDisplay('us')} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

                {isModalOpen && <Modal contact={contact}></Modal>}
            </div>
        </div>
    );
};

export default Problem2;