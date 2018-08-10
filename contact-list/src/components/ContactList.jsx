import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
    state = {  }
    render() { 
        return ( 
            <ul className='ui relaxed divided list selection'>
                <ContactItem
                    login='l1'
                    name='n1'
                    department='d1'
                />
                <ContactItem
                    login='l2'
                    name='n2'
                    department='d2'
                />
                <ContactItem
                    login='l3'
                    name='n3'
                    department='d3'
                />
            </ul>
         );
    }
}
 
export default ContactList;