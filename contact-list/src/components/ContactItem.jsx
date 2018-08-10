import React, { Component } from 'react';

class ContactItem extends Component {

    render() { 
        const {login, name, department} = this.props;
        return ( 
            <li className='item'>
                <div className='content'>
                    <h4 className='header'>{name}</h4>
                    <div className='description'>{department}</div>
                </div>
            </li>
         );
    }
}
 
export default ContactItem;
