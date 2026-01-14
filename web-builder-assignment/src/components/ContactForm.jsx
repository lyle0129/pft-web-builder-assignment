import { useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid - handle submission
    console.log('Form submitted:', formData);
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
        <h3 className="text-xl font-serif font-light tracking-wide mb-6 text-center" style={{ color: 'var(--color-text-primary)' }}>
          Send Message
        </h3>
        
        <div>
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
            style={{
              borderColor: errors.name ? '#ef4444' : 'var(--color-charcoal)',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)'
            }}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
            style={{
              borderColor: errors.email ? '#ef4444' : 'var(--color-charcoal)',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)'
            }}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all resize-vertical"
            style={{
              borderColor: errors.message ? '#ef4444' : 'var(--color-charcoal)',
              backgroundColor: 'var(--color-bg-primary)',
              color: 'var(--color-text-primary)'
            }}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] text-sm font-medium uppercase tracking-wide transition-all duration-300 ease-out hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 touch-manipulation active:scale-95 border rounded-md"
          style={{
            backgroundColor: 'var(--color-charcoal)',
            color: 'var(--color-bg-primary)',
            borderColor: 'var(--color-charcoal)',
          }}
        >
          <Send size={16} />
          Send
        </button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Success icon and message */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <h3 
                className="text-2xl font-serif font-semibold"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Message Sent Successfully!
              </h3>
              <p 
                className="text-base"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={closeModal}
                className="mt-6 px-8 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 ease-out hover:opacity-90 rounded-md"
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-bg-primary)',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
