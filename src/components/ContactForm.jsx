'use client'

import React, { useState } from 'react'
import { Mail, Send, AlertTriangle, ExternalLink } from 'lucide-react'

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
            errors.email = 'Email è richiesta'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email non valida'
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Oggetto è richiesto'
        }

        if (!formData.message.trim()) {
            errors.message = 'Messaggio è richiesto'
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
            alert('Messaggio inviato con successo!')
        } catch (error) {
            console.error('Errore durante l\'invio:', error)
            alert('Impossibile inviare il messaggio. Riprova.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleEmailDirectOpen = () => {
        const mailtoLink = `mailto:?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
        window.open(mailtoLink, '_blank');
    }

    return (
        <section className="w-full">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900">
                    Contattaci
                </h2>
                <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
                    Hai bisogno di assistenza? Vuoi inviare un feedback? Compila il modulo qui sotto.
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
                            className="block mb-2 text-sm font-medium text-gray-900 flex items-center"
                        >
                            <Mail className="mr-2 size-4" /> La tua email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="nome@azienda.com"
                            className={`
                shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5
                ${formErrors.email
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
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
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Oggetto
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="In cosa possiamo aiutarti?"
                            className={`
                block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border p-2.5
                ${formErrors.subject
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
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
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Il tuo messaggio
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Lascia un commento..."
                            className={`
                block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border p-2.5
                ${formErrors.message
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'}
              `}
                        />
                        {formErrors.message && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertTriangle className="mr-1 size-4" /> {formErrors.message}
                            </p>
                        )}
                    </div>

                    {/* Button Container */}
                    <div className="space-y-4">
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                w-full py-3 px-5 text-sm font-medium text-center text-white 
                rounded-lg bg-black sm:w-full
                hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300
                flex items-center justify-center gap-2
                disabled:opacity-50 disabled:cursor-not-allowed
              "
                        >
                            {isSubmitting ? (
                                <>Invio in corso... <Send className="size-4 animate-pulse" /></>
                            ) : (
                                <>Invia messaggio <Send className="size-4" /></>
                            )}
                        </button>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm