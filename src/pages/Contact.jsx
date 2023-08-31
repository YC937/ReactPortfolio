import React from 'react'

const handleFormSubmit = (e) => {
  e.preventDefault();
  alert("Thank you for contacting me. I will contact you as soon as possible")
}

export default function Contact() {
  return (
  <section className='columns is-centered contact mt-3'>
    <div className='column is-half'>
      <h1 className='title has-text-centered has-text-white'>Contact Me</h1>
      <form className='form' onSubmit={handleFormSubmit}>
        <div className='field'>
          <label className='label has-text-white'>Name</label>
          <div className='control'>
            <input className='input' type='text' placeholder=''></input>
          </div>
        </div>

        <div className='field'>
          <label className='label has-text-white'>Email</label>
          <div className='control'>
            <input className='input' type='text' placeholder=''></input>
          </div>
        </div>

        <div className='field'>
          <label className='label has-text-white'>Message</label>
          <div className='control'>
            <textarea className='textarea' placeholder='How can I help you?'></textarea>
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control is-fullwidth'>
            <button className='button is-fullwidth'>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </section>
  )
}
