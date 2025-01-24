'use client'
import React, { useState } from 'react'

const SendWishesForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    wishes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // Allow only digits for the whatsapp field
    if (name === 'whatsapp' && !/^\d*$/.test(value)) {
      return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', whatsapp: '', wishes: '' })
      } else {
        alert('Failed to send your message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='p-3 md:p-0 font-cormorant'>
      <form
        onSubmit={handleSubmit}
        className='space-y-3 w-full md:w-1/2 rounded-tr-none rounded-bl-none rounded-tl-[50px] rounded-br-[50px] text-black mx-auto bg-white p-1 shadow-md space-y-4'
      >
        <div className='border-2 border-black rounded-tr-none rounded-bl-none rounded-tl-[50px] rounded-br-[50px]'>
          <div className='py-5 px-7'>
            <div className='text-3xl text-center'>Send us your Wishes</div>
            <div>
              <input
                placeholder='Your Name'
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
              />
            </div>

            <div>
              <input
                placeholder='Your Whatsapp No.'
                type='text'
                id='whatsapp'
                name='whatsapp'
                value={formData.whatsapp}
                onChange={handleChange}
                required
                pattern='\d*'
                maxLength={15}
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
              />
            </div>

            <div>
              <textarea
                placeholder='Your Wishes'
                id='wishes'
                name='wishes'
                value={formData.wishes}
                onChange={handleChange}
                required
                className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
              />
            </div>
            <div className='h-2' />
            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md focus:outline-none ${
                isSubmitting
                  ? 'bg-gray-400'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white flex items-center justify-center`}
            >
              {isSubmitting ? 'Sending ...' : 'Send'}
            </button>

            {isSuccess && (
              <div className='text-green-500 text-center mt-4'>
                Your message has been sent!
              </div>
            )}

            <div className='text-center py-6'>
              You will Receive Automated Wish Confirmation via WhatsApp. <br />
              <br /> Only your Name & Wish will be displayed above.{' '}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SendWishesForm
