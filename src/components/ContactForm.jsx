'use client'

import React, { useState } from 'react'
import { Mail, Send, AlertTriangle } from 'lucide-react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear specific field error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const errors = {}

        if (!formData.email.trim()) {
            errors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid'
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required'
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required'
        }

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateForm()

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors)
            return
        }

        setIsSubmitting(true)
        try {
            // Simulated API call - replace with actual submission logic
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Reset form after successful submission
            setFormData({
                email: '',
                subject: '',
                message: ''
            })

            // Optional: Show success message or toast notification
            alert('Message sent successfully!')
        } catch (error) {
            console.error('Submission error:', error)
            alert('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    noValidate
                >
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center"
                        >
                            <Mail className="mr-2 size-4" /> Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className={`
                shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5
                ${formErrors.email
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              `}
                            required
                        />
                        {formErrors.email && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertTriangle className="mr-1 size-4" /> {formErrors.email}
                            </p>
                        )}
                    </div>

                    {/* Subject Input */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Let us know how we can help you"
                            className={`
                block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border p-2.5
                ${formErrors.subject
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              `}
                            required
                        />
                        {formErrors.subject && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertTriangle className="mr-1 size-4" /> {formErrors.subject}
                            </p>
                        )}
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Leave a comment..."
                            className={`
                block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border p-2.5
                ${formErrors.message
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              `}
                        />
                        {formErrors.message && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertTriangle className="mr-1 size-4" /> {formErrors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
              py-3 px-5 text-sm font-medium text-center text-white 
              rounded-lg bg-primary-700 sm:w-fit 
              hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300
              dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
              flex items-center justify-center gap-2
              disabled:opacity-50 disabled:cursor-not-allowed
            "
                    >
                        {isSubmitting ? (
                            <>Sending... <Send className="size-4 animate-pulse" /></>
                        ) : (
                            <>Send message <Send className="size-4" /></>
                        )}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm