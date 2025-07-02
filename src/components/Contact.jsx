import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(null);
    const [text, setText] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("pending")
        emailjs.sendForm(
            'service_p9gxn8o',     // e.g., service_ab12345
            'template_a71p8ob',    // e.g., template_xxyz
            form.current,
            'b_Nb8Hr-VMJ_nfvFs'      // e.g., aBcdEfGhI123456
        ).then(
            () => {
                setStatus("success")
                setText('✅ Message sent successfully!');
                form.current.reset();
            },
            () => {
                setText('❌ Failed to send. Please try again.');
            }
        ).finally(() => setStatus(null))
    };

    return (
        <section id='contact' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='space-y-4'>
                    <h2 className='text-5xl'>Get in touch</h2>
                    <p className="font-pixel text-parag text-2xl">
                        Have a project in mind or want to collaborate? Fill out the form or reach me directly.
                    </p>
                    <div className='flex gap-1'>
                        <span className='text-2xl'><FaPhoneAlt /></span>
                        <a href='tel:+201151530638'>+20 115 153 0638</a>
                    </div>
                    <div className='flex gap-1'>
                        <span className='text-2xl'><MdEmail /></span>
                        <a href="mailto:mohamedwalidsamir@gmail.com">mohamedwalidsamir@gmail.com</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="max-w-sm  mx-auto space-y-4">
                    <input type="text" name="title" placeholder="Your Subject" required className="w-full p-2 border rounded" />
                    <input type="text" name="from_name" placeholder="Your Name" required className="w-full p-2 border rounded" />
                    <input type="email" name="reply_to" placeholder="Your Email" required className="w-full p-2 border rounded" />
                    <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded h-32" />
                    <div className='flex justify-end'>
                        {
                            status === "pending" && <button class="space-x-3 p-2 rounded-md font-pixel text-2xl transition-all bg-cyan-700 cursor-pointer disabled:opacity-70" disabled>
                                Processing…
                            </button>
                        }
                        {
                            status === "success" && <button className="space-x-3 p-2 rounded-md font-pixel text-2xl transition-all bg-cyan-700 " disabled>
                                Success
                            </button>
                        }
                        {
                            status === null && <button type="submit" className="space-x-3 p-2 rounded-md font-pixel text-2xl transition-all bg-cyan-700 cursor-pointer left-0 hover:bg-cyan-900 group">
                                Send
                            </button>
                        }
                    </div>

                    {text && <p className="mt-2 text-sm">{text}</p>}
                </form>
            </div>
            <hr className=''></hr>
            <div className='flex items-center justify-between'>
                <div className='size-14 rounded-full'>
                    <img className='rounded-full' src="/photo_2025-06-30_16-22-36.jpg" alt="Mohamed-Walid" />
                </div>
                <div className='text-2xl flex items-center gap-2'>
                    <a href='https://www.facebook.com/Mohamed.Walid348/' target="_blank" className='text-blue-400'>
                        <FaFacebook />
                    </a>
                    <a href='https://wa.me/201151530638' target="_blank" className='text-green-400'>
                        <FaWhatsapp />
                    </a>
                    <a href='www.linkedin.com/in/mohamed-walid-012aa62b6' target="_blank" className='text-blue-400'>
                        <FaLinkedin />
                    </a>
                    <a href='https://github.com/Mohamedwalid04' target="_blank" className='text-orange-400'>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact
