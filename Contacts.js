import React from 'react';


const Contacts = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                        <p class="card-text">{contact.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts