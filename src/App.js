import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Briefcase, Calendar, Award, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';

// Main App Component
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // New state for dark mode

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#resume', label: 'Resume' },
        { href: '#services', label: 'Services' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];
    
    // Smooth scrolling for navigation
    const handleScrollTo = (e, target) => {
        e.preventDefault();
        const targetElement = document.querySelector(target);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    // Scroll-triggered animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
    
    // Data
    const personalInfo = {
        name: "Vishal Yadav",
        dob: "9 Jan, 1998",
        phone: "8866070855",
        email: "yadavishal28@gmail.com",
        degree: "Bachelor of Engineering",
        freelance: "Available",
        city: "Surat, Gujarat, India",
    };

    const services = [
        { title: "Logo Design", description: "Creating unique symbols or wordmarks that represent a company to build brand recognition." },
        { title: "Brand Identity", description: "A comprehensive visual system representing a brand across all touchpoints, including logos, color palettes, and fonts." },
        { title: "Banner Ads", description: "Digital advertisements for websites, apps, and social media to promote products, services, or events." },
        { title: "Advertising Design", description: "Creating compelling visuals that sell products, services, or ideas by driving action." },
        { title: "Exhibition Banner", description: "Large-format graphics designed to stand out at trade shows, conferences, and events." },
        { title: "Podcast Covers", description: "Visually striking thumbnails for podcasts that reflect their theme and content." },
        { title: "Social Media Graphics", description: "Tailored visuals for platforms like Instagram, Twitter, and LinkedIn to engage users." },
        { title: "Brochure Design", description: "Multi-fold marketing materials that provide information about a company, product, or service." },
        { title: "Business Cards", description: "Compact, portable marketing tools for networking events, client meetings, and professional exchanges." },
        { title: "Blog Hero Images", description: "Striking visuals placed at the top of a blog post to provide context and grab attention." },
        { title: "Case Study Design", description: "Structuring and visually presenting customer success stories to communicate business impact." },
        { title: "Stationery", description: "Designing cohesive and professional letterheads, envelopes, and other office materials." },
    ];
    
    const projects = [
        { title: "", category: "Brand Identity", img: `../2.png` },
        { title: "", category: "Advertising Design", img: `../6.png` },
        { title: "", category: "Social Media Graphics", img: `../canopy.png` },
        { title: "", category: "Exhibition Banner", img: `../g2.png` },
        { title: "", category: "Brochure Design", img: `../g5.png` },
        { title: "", category: "Podcast Covers", img: `../brochure mock up.png` },
        { title: "", category: "Podcast Covers", img: `../PSD 01.png` },
        { title: "", category: "Podcast Covers", img: `../PSD 02.png` },
        { title: "", category: "Podcast Covers", img: `../PSD 03.png` },
        { title: "", category: "Podcast Covers", img: `../PSD 04.png` },
    ];

    const resume = {
        education: [
            {
                degree: "Bachelor of Engineering in Electronics & Communication",
                years: "2016 - 2020",
                institution: "Gujarat Technological University"
            },
            {
                degree: "12th (Higher Secondary Examination)",
                years: "2014 - 2016",
                institution: "Gujarat Secondary and Higher Secondary Education Board"
            },
            {
                degree: "10th (Secondary School Examination)",
                years: "2013 - 2014",
                institution: "Gujarat Secondary and Higher Secondary Education Board"
            }
        ]
    };

    return (
        <div className={`${isDarkMode ? 'dark bg-gray-900 text-gray-200' : 'bg-white text-gray-700'} font-sans leading-relaxed transition-colors duration-300`}>
            {/* Header */}
            <header className={`${isDarkMode ? 'bg-gray-900/80 border-gray-700/80' : 'bg-white/80 border-gray-200/80'} backdrop-blur-sm sticky top-0 z-50 border-b`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl font-bold tracking-tight`}>
                            VISHAL.
                        </a>
                        <nav className="hidden md:flex items-center space-x-10">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className={`${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} text-sm font-medium transition-colors duration-300`}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={() => setIsDarkMode(!isDarkMode)} 
                                className={`${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-300`}
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} md:hidden border-t`}>
                        <nav className="flex flex-col items-center space-y-4 py-4">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className={`${isDarkMode ? 'text-gray-100 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'} text-lg font-medium transition-colors duration-300`}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} absolute inset-0 z-0 overflow-hidden`}>
                        <div className={`absolute w-96 h-96 ${isDarkMode ? 'bg-blue-800 opacity-30' : 'bg-blue-200 opacity-50'} rounded-full -top-20 -left-20 filter blur-3xl animate-blob`}></div>
                        <div className={`absolute w-96 h-96 ${isDarkMode ? 'bg-gray-700 opacity-30' : 'bg-gray-200 opacity-50'} rounded-full -bottom-20 -right-10 filter blur-3xl animate-blob animation-delay-2000`}></div>
                        <div className={`absolute w-72 h-72 ${isDarkMode ? 'bg-blue-700 opacity-20' : 'bg-blue-100 opacity-40'} rounded-full bottom-20 left-20 filter blur-3xl animate-blob animation-delay-4000`}></div>
                    </div>
                    
                    <div className="relative z-10 p-4">
                        <h1 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} bg-transparent text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4`}>
                            <span className="block animate-fade-in-up" style={{animationDelay: '0.2s'}}>I'm Vishal Yadav.</span>
                            <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} block animate-fade-in-up`} style={{animationDelay: '0.4s'}}>A Creative Designer.</span>
                        </h1>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up`} style={{animationDelay: '0.6s'}}>
                            A sarcastic creative designer who believes that DESIGN has feelings :)
                        </p>
                        <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                            <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                View My Work
                            </a>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>
                            <ChevronDown className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} w-8 h-8 animate-bounce`} />
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-20 md:py-32`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-5 gap-12 items-center">
                            <div className="md:col-span-2" data-animate>
                                <div className="relative">
                                    <img 
                                        src="../pf-vishal.jpeg"
                                        alt="Vishal Yadav" 
                                        className="rounded-lg shadow-2xl w-full object-cover h-[700px]"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/f1f5f9/475569?text=Image+Not+Found'; }}
                                    />
                                    <div className={`absolute -bottom-4 -right-4 w-full h-full border-4 ${isDarkMode ? 'border-blue-700' : 'border-blue-500'} rounded-lg -z-10 transform translate-x-4 translate-y-4`}></div>
                                </div>
                            </div>
                            <div className="md:col-span-3" data-animate style={{transitionDelay: '200ms'}}>
                                <h2 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl md:text-4xl font-bold mb-4`}>About Me</h2>
                                <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} text-lg mb-6 font-medium`}>Creative Designer & Visual Storyteller</p>
                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                    From making insurance look conversational, to giving fashion brands their attitude and kitchen appliances their role, I have engaged in almost everything: sportswear, B2B, D2C, and more. I thrive on turning complex ideas into simple, beautiful, and intuitive designs.
                                </p>
                                <div className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8`}>
                                    <div className="flex items-center space-x-3"><Calendar className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} /><p><strong>DOB:</strong> {personalInfo.dob}</p></div>
                                    <div className="flex items-center space-x-3"><Phone className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} /><p><strong>Phone:</strong> {personalInfo.phone}</p></div>
                                    <div className="flex items-center space-x-3"><Mail className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} /><p><strong>Email:</strong> {personalInfo.email}</p></div>
                                    <div className="flex items-center space-x-3"><Award className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} /><p><strong>Degree:</strong> {personalInfo.degree}</p></div>
                                    <div className="flex items-center space-x-3"><Briefcase className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} /><p><strong>Freelance:</strong> <span className="text-green-500 font-semibold">{personalInfo.freelance}</span></p></div>
                                    <div className="flex items-center space-x-3"><MapPin className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} /><p><strong>City:</strong> {personalInfo.city}</p></div>
                                </div>
                                <a href="/vishal-yadav-resume.pdf" download className={`${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'} bg-transparent border-2 font-bold py-3 px-8 rounded-full transition-all duration-300`}>
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resume Section */}
                <section id="resume" className={`${isDarkMode ? 'bg-gray-900' : 'bg-slate-50'} py-20 md:py-32`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16" data-animate>
                            <h2 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl md:text-4xl font-bold`}>My Resume</h2>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg mt-2 max-w-3xl mx-auto`}>A journey of experience, expertise, and education, where achievements unfold and skills shine.</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <h3 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-2xl font-semibold mb-8 text-center`} data-animate>Education</h3>
                            <div className={`${isDarkMode ? 'border-blue-700/30' : 'border-blue-500/30'} relative border-l-2`}>
                                {resume.education.map((item, index) => (
                                    <div key={index} className="mb-10 ml-8" data-animate style={{transitionDelay: `${index * 150}ms`}}>
                                        <span className={`absolute flex items-center justify-center w-8 h-8 ${isDarkMode ? 'bg-blue-600 ring-gray-900' : 'bg-blue-600 ring-slate-50'} rounded-full -left-4 ring-8`}>
                                            <Award className="w-4 h-4 text-white" />
                                        </span>
                                        <h4 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} flex items-center mb-1 ml-7 text-lg font-semibold`}>{item.degree}</h4>
                                        <time className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} block mb-2 text-sm ml-4 font-normal leading-none`}>{item.years}</time>
                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-base font-normal`}>{item.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Services Section */}
                <section id="services" className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-20 md:py-32`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16" data-animate>
                            <h2 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl md:text-4xl font-bold`}>My Services</h2>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg mt-2 max-w-3xl mx-auto`}>Crafting visual solutions that communicate, engage, and inspire.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className={`${isDarkMode ? 'bg-gray-700 border-gray-600/80 hover:shadow-blue-900/50 hover:border-blue-600' : 'bg-white border-gray-200/80 hover:shadow-xl hover:border-blue-300'} p-6 rounded-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`} data-animate style={{transitionDelay: `${index * 50}ms`}}>
                                    <h3 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} text-xl font-bold mb-3`}>{service.title}</h3>
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className={`${isDarkMode ? 'bg-gray-900' : 'bg-slate-50'} py-20 md:py-32`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16" data-animate>
                            <h2 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl md:text-4xl font-bold`}>My Projects</h2>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg mt-2 max-w-3xl mx-auto`}>A selection of my work that showcases my passion for design.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg" data-animate style={{transitionDelay: `${index * 100}ms`}}>
                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                        <p className="text-blue-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-20 md:py-32`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12" data-animate>
                            <h2 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-3xl md:text-4xl font-bold`}>Contact Me</h2>
                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg mt-2 max-w-3xl mx-auto`}>Have a project in mind? Let's talk. I'm available for freelance work.</p>
                        </div>
                        <div className="max-w-lg mx-auto text-center" data-animate style={{transitionDelay: '200ms'}}>
                             <div className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8`}>
                                <div className="flex items-center space-x-3">
                                    <Mail className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                                    <a href={`mailto:${personalInfo.email}`} className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>{personalInfo.email}</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                                    <a href={`tel:${personalInfo.phone}`} className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>{personalInfo.phone}</a>
                                </div>
                            </div>
                            <a href={`mailto:${personalInfo.email}`} className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-block shadow-lg hover:shadow-xl">
                                Say Hello
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-700/80' : 'bg-slate-50 border-gray-200/80'} py-8 border-t`}>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} container mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
                    <p>&copy; {new Date().getFullYear()} Vishal Yadav. All Rights Reserved.</p>
                    <p className="text-sm mt-1">Designed & Built with ❤️</p>
                </div>
            </footer>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
                
                html {
                    scroll-behavior: smooth;
                }

                .font-sans {
                    font-family: 'Poppins', sans-serif;
                }

                /* Initial state for scroll animations */
                [data-animate] {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }

                /* Visible state for scroll animations */
                [data-animate].is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Hero text animation */
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* New Blob Animation */
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: -2s;
                }
                .animation-delay-4000 {
                    animation-delay: -4s;
                }
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.2);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.8);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }

            `}</style>
        </div>
    );
}
