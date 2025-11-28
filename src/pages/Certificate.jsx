import React from "react";

const certificates = [
    {
        title: "Laboratory Assistant: Programming",
        issuer: "Forum Asisten",
        year: "2025",
        credentialUrl: "https://forumasisten.or.id/sertifikat/2901780122c5efa6e6c/show",
    },
    {
        title: "Laboratory Assistant: Web Programming",
        issuer: "Forum Asisten",
        year: "2025",
        credentialUrl: "https://forumasisten.or.id/sertifikat/39317511252d680f935/show",
    },
    {
        title: "Laboratory Assistant: Advanced Programming",
        issuer: "Forum Asisten",
        year: "2025",
    },
    {
        title: "Code Generation and Optimization Using IBM Granite",
        issuer: "IBM, Hacktiv8",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1DOc5Qd518RZNcmmZJZu2KMn9PbRnsLtf/view?usp=sharing",
    },
    {
        title: "Workshop Full Stack Developer HIMASI x BPC Amikom",
        issuer: "HIMASI x BPC Amikom",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1KsYEpeYrGSXXKjwnbjGQBt1aTGhydO22/view?usp=sharing",
    },
    {
        title: 'Seminar Inovasi Teknologi "Pemanfaatan AI PC Untuk Creator dan Gamer"',
        issuer: "AMD",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/121g7uiIsBYLM0-u8Z5r9-CTW0wKVMmXB/view?usp=sharing",
    },
    {
        title: "Seminar Nasional Informatika 2025",
        issuer: "MSV Cinema, Universitas Amikom Yogyakarta",
        year: "2025",
        credentialUrl: "https://drive.google.com/file/d/1fdw94rSwWXatKyb_tw_DueBwH-rdvbAt/view?usp=sharing",
    },
];

export default function Certificate() {
    return (
        <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-6 font-['Poppins']" data-aos="fade-down">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Certificate</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
                </div>

                <div className="grid gap-6 md:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
                    {certificates.map((certificate, index) => (
                        <article key={certificate.title} className="bg-white rounded-2xl shadow-lg shadow-purple-100/50 border border-purple-50 p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center justify-between">
                                <h2 className="text-1xl font-semibold text-gray-800 font-['Inter']">{certificate.title}</h2>
                                <span className="text-sm px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-medium font-['Inter']">{certificate.year}</span>
                            </div>
                            <p className="text-sm text-gray-500 font-semibold font-['Inter']">{certificate.issuer}</p>
                            <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold font-['Inter']">
                                View Credential
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10m0-10h10v10" />
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
