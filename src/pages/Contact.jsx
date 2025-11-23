import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 5; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(code);

        const canvas = document.getElementById("captchaCanvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, 150, 50);

            ctx.fillStyle = "#f3f3f3";
            ctx.fillRect(0, 0, 150, 50);

            ctx.font = "28px Arial";
            ctx.fillStyle = "#000";
            ctx.fillText(code, 20, 35);

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(Math.random() * 150, Math.random() * 50);
                ctx.lineTo(Math.random() * 150, Math.random() * 50);
                ctx.stroke();
            }
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (userCaptcha.toUpperCase() !== captcha) {
            alert("CAPTCHA salah! Silakan coba lagi.");
            generateCaptcha();
            return;
        }

        emailjs.sendForm("service_26hybx9", "template_xeqrsvd", form.current, "0byMFkC9r8X1hK5Yx").then(
            (result) => {
                console.log("SUCCESS!", result.text);
                alert("Pesan berhasil dikirim!");
            },
            (error) => {
                console.log("FAILED...", error.text);
                alert("Gagal mengirim pesan.");
            }
        );

        e.target.reset();
        generateCaptcha();
        setUserCaptcha("");
    };

    return (
        <section id="contact" className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Contact</span>
                        <span className="text-gray-800"> me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100" data-aos="fade-up">
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            {/* FORM FIELD */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium font-['Inter']">Your Name</label>
                                    <input type="text" name="name" placeholder="Enter your name" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium font-['Inter']">Your Email</label>
                                    <input type="email" name="email" placeholder="Enter your email" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium font-['Inter']">Your Message</label>
                                <textarea name="message" placeholder="Enter your message..." rows="6" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-gray-800 resize-none" required></textarea>
                            </div>

                            {/* CAPTCHA */}
                            <div className="space-y-3">
                                <label className="text-gray-700 font-medium font-['Inter']">CAPTCHA</label>

                                <canvas id="captchaCanvas" width="150" height="50" className="border border-gray-300 rounded-xl bg-gray-50"></canvas>

                                <div className="flex items-center gap-4">
                                    <input type="text" placeholder="Enter CAPTCHA" value={userCaptcha} onChange={(e) => setUserCaptcha(e.target.value)} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500" required />

                                    <button type="button" onClick={generateCaptcha} className="px-4 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition">
                                        Refresh
                                    </button>
                                </div>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-4 rounded-2xl transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
