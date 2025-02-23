import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const sendEmail = async () => {
        console.log('Form Data:', formData);
        
        await emailjs.sendForm('service_bxo7nro', 'template_6tu5dos', form.current, 'Qij6stckb-V48FkN3')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }, (error) => {
            console.log('FAILED...', error);
            Swal.fire({
                title: "Error!",
                text: "Message failed to send!",
                icon: "error"
            });
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    return (
        <section className="contact bg-gray-900 text-white py-8 mt-20 min-h-screen">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="input-field field">
                            <label htmlFor="name" className="block text-sm mb-1" aria-required="true">Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                id="name"
                                name="from_name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="item dark:bg-gray-700 dark:text-gray-300 px-3 py-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-yellow-500"
                            />
                            <div className="error-txt hidden">{`Name can't be blank`}</div>
                        </div>
                        <div className="input-field field">
                            <label htmlFor="email" className="block text-sm mb-1" aria-required="true">Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                id="email"
                                name="reply_to" // Add this line
                                value={formData.email}
                                onChange={handleChange}
                                className="item dark:bg-gray-700 dark:text-gray-300 px-3 py-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-yellow-500"
                            />
                            <div className="error-txt hidden">{`Email can't be blank`}</div>
                        </div>
                        <div className="input-field field">
                            <label htmlFor="phone" className="block text-sm mb-1">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="item dark:bg-gray-700 dark:text-gray-300 px-3 py-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-yellow-500"
                            />
                            <div className="error-txt hidden">{`Phone Number can't be blank`}</div>
                        </div>
                        <div className="input-field field">
                            <label htmlFor="subject" className="block text-sm mb-1">Subject</label>
                            <input
                                type="text"
                                placeholder="Subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="item dark:bg-gray-700 dark:text-gray-300 px-3 py-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-yellow-500"
                            />
                            <div className="error-txt hidden">{`Subject can't be blank`}</div>
                        </div>
                    </div>

                    <div className="textarea-field field">
                        <label htmlFor="message" className="block text-sm mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message" // Add this line
                            rows="4"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="item dark:bg-gray-700 dark:text-gray-300 px-3 py-2 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:border-yellow-500"
                        ></textarea>
                        <div className="error-txt hidden">{`Message can't be blank`}</div>
                    </div>

                    <button type="submit" className="bg-gray-800 border-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-gray-800 py-2 px-4 w-full rounded-full">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
