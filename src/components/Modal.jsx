const Modal = ({ contact }) => {

    // const { country, phone } = contact
    console.log(contact);

    return (
        <div>
            {contact.map(add => <>
                <h1>{add.country.name}</h1>
                <h1>{add.phone}</h1>
                <hr />
            </>)}
        </div>
    );
};

export default Modal;