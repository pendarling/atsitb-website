import React from 'react';
import Mailchimp from 'react-mailchimp-form';
 
export default class EmailSignUpModal extends React.Component {
    render() {
      return (
          <div className='signup-modal' >
              <div className='signup-modal__box' >
                <img
                    className='signup-modal__exit'
                    src='/images/icons/x.png'
                    alt='exit'
                    onClick={this.props.handleClose}
                />
                <h1 className='signup-modal__title' >Join Our Email List</h1>
                <Mailchimp
                  action='https://allthatstuffinthebarn.us20.list-manage.com/subscribe/post?u=29cfc5c946dc7c2322993c0aa&amp;id=e9a36a1e23'
                  fields={[
                  {
                      name: 'EMAIL',
                      placeholder: 'Email',
                      type: 'email',
                      required: true
                  },
                  {
                      name: 'FNAME',
                      placeholder: 'Name',
                      type: 'text',
                      required: true
                  }
                  ]}
                  message={
                    {
                      sending: 'Sending...',
                      success: 'Thank you for subscribing!',
                      error: 'An unexpected internal error has occurred.',
                      empty: 'You must write an e-mail.',
                      duplicate: 'This e-mail address is already subscribed',
                      button: 'Subscribe!'
                    }
                  }
                />
              </div>
          </div>
      );
    }
  }
