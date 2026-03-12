'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInputs {
  name: string
  email: string
  guests: number
  message?: string
}

export default function RsvpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      guests: 1,
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true)
    
    try {
      // OPTION A: Log to console (for testing)
      console.log('RSVP Submission:', data)
      
      // OPTION B: Send to EmailJS (uncomment to enable)
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   { ...data, to_name: 'Unfiltered Team' },
      //   'YOUR_PUBLIC_KEY'
      // )
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto p-8 bg-stone-900/80 backdrop-blur-sm rounded-2xl border border-stone-700 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        
        <h3 className="text-2xl font-serif text-stone-100 mb-2">You're Confirmed! 🎉</h3>
        <p className="text-stone-400 mb-6">
          Thank you for RSVPing. We'll send event details to your email soon.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-pink-500 hover:bg-pink-400 text-white font-medium rounded-full transition-colors"
        >
          RSVP Another Guest
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.form
      id="rsvp"
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-md mx-auto p-6 md:p-8 bg-stone-900/80 backdrop-blur-sm rounded-2xl border border-stone-700"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif text-stone-100 mb-2">
          Reserve Your Seat
        </h3>
        <p className="text-stone-400 text-sm">
          Spaces are limited. RSVP by March 31, 2026.
        </p>
      </div>

      {/* Name Field */}
      <div className="mb-5">
        <label htmlFor="name" className="block text-stone-300 text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
          className={`w-full px-4 py-3 bg-stone-800/50 border rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 transition-all ${
            errors.name 
              ? 'border-red-500 focus:ring-red-500/50' 
              : 'border-stone-600 focus:ring-pink-500/50 focus:border-pink-500'
          }`}
          placeholder="Jane Doe"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-red-400 text-xs"
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email Field */}
      <div className="mb-5">
        <label htmlFor="email" className="block text-stone-300 text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`w-full px-4 py-3 bg-stone-800/50 border rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 transition-all ${
            errors.email 
              ? 'border-red-500 focus:ring-red-500/50' 
              : 'border-stone-600 focus:ring-pink-500/50 focus:border-pink-500'
          }`}
          placeholder="jane@example.com"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-red-400 text-xs"
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Guest Count */}
      <div className="mb-6">
        <label htmlFor="guests" className="block text-stone-300 text-sm font-medium mb-2">
          Number of Guests *
        </label>
        <select
          id="guests"
          {...register('guests', { required: 'Please select a guest count', valueAsNumber: true })}
          className="w-full px-4 py-3 bg-stone-800/50 border border-stone-600 rounded-lg text-stone-100 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all"
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num} className="bg-stone-900">
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
      </div>

      {/* Optional Message */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-stone-300 text-sm font-medium mb-2">
          Dietary Restrictions or Notes <span className="text-stone-500">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          {...register('message')}
          className="w-full px-4 py-3 bg-stone-800/50 border border-stone-600 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all resize-none"
          placeholder="Let us know if you have any special requirements..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || !isValid}
        whileHover={{ scale: isSubmitting || !isValid ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting || !isValid ? 1 : 0.98 }}
        className={`w-full py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${
          isSubmitting || !isValid
            ? 'bg-stone-700 text-stone-400 cursor-not-allowed'
            : 'bg-pink-500 hover:bg-pink-400 text-white hover:shadow-lg hover:shadow-pink-500/25'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          'Confirm RSVP →'
        )}
      </motion.button>

      {/* Privacy Note */}
      <p className="mt-4 text-center text-stone-500 text-xs">
        We respect your privacy. Your information will only be used for event coordination.
      </p>
    </motion.form>
  )
}