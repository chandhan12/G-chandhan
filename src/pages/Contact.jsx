import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If form is valid, send the email
      window.location.href = `mailto:${formData.email}?subject=Message from ${formData.name}&body=${formData.message}`;
    }
  };

  return (
    <div>
       <div>
      <h2 className='text-3xl font-semibold text-white m-2 mb-4'>Contact</h2>
      <div className='h-1 w-20 m-2 mt-5 rounded-2xl bg-yellow-500'></div>
      </div>
    <div className="  p-6">
     

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="flex md:flex-row flex-col justify-start gap-6">
            <div className="flex flex-col"> 
          <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="md:w-136 p-2 w-full bg-[rgba(69,69,69,0.6)] h-8 rounded-lg focus:ring-1 focus:ring-yellow-600 focus:outline-none"
              placeholder="Full Name"
            />

            {errors.name && <p className="text-red-500 text-sm m-2">{errors.name}</p>}
            </div>
          
            <div className="flex flex-col">
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="md:w-136 w-full p-2 bg-[rgba(69,69,69,0.6)] h-8 rounded-lg focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                placeholder="Email"
              />

            {errors.email && <p className="text-red-500 text-sm m-2">{errors.email}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 bg-[rgba(69,69,69,0.6)]  rounded-lg focus:ring-1 focus:ring-yellow-600 focus:outline-none"
              placeholder="Your message"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="block text-center text-md px-2 py-1 font-medium cursor-pointer h-auto w-auto  rounded-lg transition duration-300 bg-yellow-500 text-stone-700 hover:opacity-95 "
          >
            Send Message
          </button>
        </form>
      
    </div>
    </div>
  );
};

export default Contact;
