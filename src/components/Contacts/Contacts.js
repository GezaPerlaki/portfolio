import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { send } from 'emailjs-com';
import { useForm } from 'react-hook-form';
import './Contacts.css';

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm(); /*
  const [toSend, setToSend] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    description: '',
  });*/

  const onSubmit = (data, e) => {
    {
      /*e.preventDefault();*/
    }
    console.log(data, e);

    send('service_ID', 'template_ID', data, 'userRzCsq6fAAumDGDbktguyv')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch(err => {
        console.log('FAILED...', err);
        setSuccessMessage('Email küldése sikertelen!');
      });
    e.target.reset();
  };
  /*
  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };*/

  return (
    <div id='contacts' className='contacts'>
      <div className='text-center'>
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe you project needs and I'll
          contact you as soon as possible.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-12'>
              {/* NAME INPUT */}
              <div className='text-center'>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  placeholder='Name'
                  /* value={toSend.name}
                  onChange={handleChange}*/
                  {...register('name', {
                    required: 'Please enter your name',
                    maxLength: {
                      value: 20,
                      message:
                        'Please enter a name with fewer than 20 characters',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              {errors.name && (
                <span className='error-message'>{errors.name.message}</span>
              )}
              {/* PHONE INPUT */}
              <div className='text-center'>
                <input
                  className='form-control'
                  type='text'
                  name='phone'
                  placeholder='Phone Number'
                  /* value={toSend.phone}
                  onChange={handleChange}*/
                  {...register('phone', {
                    required: 'Please add your phone number',
                  })}
                />
                <div className='line'></div>
              </div>
              {errors.phone && (
                <span className='error-message'>{errors.phone.message}</span>
              )}
              {/* EMAIL INPUT */}
              <div className='text-center'>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  placeholder='Your email'
                  /*  value={toSend.email}
                  onChange={handleChange}*/
                  {...register('email', {
                    required: 'Please add your email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid Email',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              {errors.email && (
                <span className='error-message'>{errors.email.message}</span>
              )}
              {/* SUBJECT INPUT */}
              <div className='text-center'>
                <input
                  className='form-control'
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  /*  value={toSend.subject}
                  onChange={handleChange}*/
                  {...register('subject', {
                    required: 'OOPS, you forget to add the subject.',
                  })}
                />
                <div className='line'></div>
              </div>

              {errors.subject && (
                <span className='error-message'>{errors.subject.message}</span>
              )}
            </div>

            <div className='col-md-6 col-12'>
              {/* DESCRIPTION */}
              <div className='text-center'>
                <textarea
                  className='form-control'
                  type='text'
                  placeholder='Please describe shortly you project...'
                  name='description'
                  /*  value={toSend.description}
                  onChange={handleChange}*/
                  {...register('description', {
                    required: 'Please describe shortly your project needs...',
                  })}
                ></textarea>

                <div className='line'></div>
              </div>
              {errors.description && (
                <span className='error-message'>
                  {errors.description.message}
                </span>
              )}
              <button className='btn-main-offer contact-btn' type='submit'>
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
