"use client";
import React, { useState, useEffect, use } from 'react';

// Main App Component
const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Function to show a custom modal message instead of alert()
  const showCustomModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu on navigation
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Shared components
  const CTAButton = ({ text, onClick, primary = true }) => (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-semibold transition-all duration-300
        ${primary
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg focus:ring-indigo-400'
          : 'bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 focus:ring-indigo-200'}
        focus:outline-none focus:ring-4`}
    >
      {text}
    </button>
  );

  const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
        {title}
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        {subtitle}
      </p>
    </div>
  );

  // Header Component
  const Header = () => (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50">
      {/* Techy SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="techGridPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="rgba(129, 140, 248, 0.1)" strokeWidth="0.2"></path>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#techGridPattern)"></rect>
        {/* Subtle concentric circles for a "spark" or "spiral" feel */}
        <circle cx="50" cy="50" r="15" stroke="rgba(129, 140, 248, 0.15)" strokeWidth="0.5" fill="none"/>
        <circle cx="50" cy="50" r="30" stroke="rgba(129, 140, 248, 0.1)" strokeWidth="0.5" fill="none"/>
        <circle cx="50" cy="50" r="45" stroke="rgba(129, 140, 248, 0.05)" strokeWidth="0.5" fill="none"/>
      </svg>

      <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <img src="https://placehold.co/40x40/6366F1/FFFFFF?text=DS" alt="DevSpark Logo" className="h-10 w-10 rounded-full mr-3" />
          <span className="text-2xl font-bold text-white">DevSpark</span> {/* Changed text color */}
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => navigate('home')} className="text-gray-200 hover:text-indigo-400 cursor-pointer text-lg font-medium transition duration-300">Home</a>
          <a onClick={() => navigate('services')} className="text-gray-200 hover:text-indigo-400 cursor-pointer text-lg font-medium transition duration-300">Services</a>
          <a onClick={() => navigate('portfolio')} className="text-gray-200 hover:text-indigo-400 cursor-pointer text-lg font-medium transition duration-300">Portfolio</a>
          <a onClick={() => navigate('about')} className="text-gray-200 hover:text-indigo-400 cursor-pointer text-lg font-medium transition duration-300">About Us</a>
          <a
              href="https://wa.me/254746887291"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex items-center gap-2 p-2 bg-emerald-600 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
              title="Chat with us on WhatsApp"
              style={{ boxShadow: "0 4px 16px rgba(16, 185, 129, 0.25)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.999 23.003L2.73 17.65a8.97 8.97 0 01-1.34-4.887C1.39 6.84 6.84 1.39 13.007 1.39c3.08 0 5.96 1.2 8.16-3.393s3.39 5.08 3.39 8.16a8.97 8.97 0 01-1.34 4.887L23.003 23.003l-5.353-1.73a9.003 9.003 0 01-4.887 1.34c-6.16 0-11.61-5.45-11.61-11.61a8.97 8.97 0 011.34-4.887L.999 0 .999 23.003zM13.007 3.39c-5.06 0-9.21 4.15-9.21 9.21 0 1.95.6 3.76 1.63 5.25L3.447 21.55l3.227-1.047a7.22 7.22 0 004.887 1.34h.01c5.06 0 9.21-4.15 9.21-9.21s-4.15-9.21-9.21-9.21zM17.007 15.61c-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07" />
              </svg>
              <span className="text-white font-semibold text-lg">Whatsapp Us</span>
            </a>
          <CTAButton text="Get a Quote" onClick={() => navigate('contact')} primary={true} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 hover:text-indigo-400 focus:outline-none"> {/* Changed text color */}
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg py-4 relative z-10"> {/* Changed background color */}
          <a onClick={() => navigate('home')} className="block px-6 py-3 text-gray-200 hover:bg-gray-700 font-medium transition duration-300">Home</a>
          <a onClick={() => navigate('services')} className="block px-6 py-3 text-gray-200 hover:bg-gray-700 font-medium transition duration-300">Services</a>
          <a onClick={() => navigate('portfolio')} className="block px-6 py-3 text-gray-200 hover:bg-gray-700 font-medium transition duration-300">Portfolio</a>
          <a onClick={() => navigate('about')} className="block px-6 py-3 text-gray-200 hover:bg-gray-700 font-medium transition duration-300">About Us</a>
          <div className="px-6 py-3">
            <CTAButton text="Get a Quote" onClick={() => navigate('contact')} />
          </div>
        </div>
      )}
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">DevSpark</h3>
          <p className="text-gray-400">Igniting your digital presence with custom web and mobile solutions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a onClick={() => navigate('home')} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition duration-300">Home</a></li>
            <li><a onClick={() => navigate('services')} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition duration-300">Services</a></li>
            <li><a onClick={() => navigate('portfolio')} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition duration-300">Portfolio</a></li>
            <li><a onClick={() => navigate('about')} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition duration-300">About Us</a></li>
            <li>
              <a
                href="https://wa.me/254746887291"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex items-center gap-2 px-3 py-2 w-auto bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
                title="Chat with us on WhatsApp"
                style={{ boxShadow: "0 4px 16px rgba(16, 185, 129, 0.25)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.999 23.003L2.73 17.65a8.97 8.97 0 01-1.34-4.887C1.39 6.84 6.84 1.39 13.007 1.39c3.08 0 5.96 1.2 8.16-3.393s3.39 5.08 3.39 8.16a8.97 8.97 0 01-1.34 4.887L23.003 23.003l-5.353-1.73a9.003 9.003 0 01-4.887 1.34c-6.16 0-11.61-5.45-11.61-11.61a8.97 8.97 0 011.34-4.887L.999 0 .999 23.003zM13.007 3.39c-5.06 0-9.21 4.15-9.21 9.21 0 1.95.6 3.76 1.63 5.25L3.447 21.55l3.227-1.047a7.22 7.22 0 004.887 1.34h.01c5.06 0 9.21-4.15 9.21-9.21s-4.15-9.21-9.21-9.21zM17.007 15.61c-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07" />
                </svg>
                <span className="text-white font-semibold text-lg">Whatsapp Us</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@devspark.com</p>
          <p className="text-gray-400">Phone: +254 758 712537</p>
          <p className="text-gray-400">Address: Global Trade Center, Westlands, Nairobi</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <form onSubmit={(e) => { e.preventDefault(); showCustomModal('Thanks for subscribing!'); }}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button type="submit" className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-8">
        &copy; {new Date().getFullYear()} DevSpark. All rights reserved.
      </div>
    </footer>
  );

  // Home Page Component
  const HomePage = () => (
    <div className="pt-20"> {/* Padding top to account for fixed header */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden rounded-b-2xl">
        <div className="absolute inset-0 z-0">
          {/* Techy Spiral SVG Background */}
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(129, 140, 248, 0.05)" />
                <stop offset="50%" stopColor="rgba(129, 140, 248, 0.15)" />
                <stop offset="100%" stopColor="rgba(129, 140, 248, 0.25)" />
              </linearGradient>
            </defs>
            {/* Concentric circles radiating outwards */}
            <circle cx="50" cy="50" r="10" stroke="url(#spiralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse-slow"/>
            <circle cx="50" cy="50" r="25" stroke="url(#spiralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse-slow delay-100"/>
            <circle cx="50" cy="50" r="40" stroke="url(#spiralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse-slow delay-200"/>
            <circle cx="50" cy="50" r="55" stroke="url(#spiralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse-slow delay-300"/>
            <circle cx="50" cy="50" r="70" stroke="url(#spiralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse-slow delay-400"/>
            <circle cx="50" cy="50" r="85" stroke="url(#spiralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse-slow delay-500"/>

            {/* Diagonal lines for a grid/circuit board effect */}
            <path d="M0 0 L100 100 M0 100 L100 0" stroke="rgba(129, 140, 248, 0.05)" strokeWidth="0.2"/>
            <path d="M25 0 L100 75 M0 75 L75 0" stroke="rgba(129, 140, 248, 0.05)" strokeWidth="0.2"/>
            <path d="M50 0 L100 50 M0 50 L50 0" stroke="rgba(129, 140, 248, 0.05)" strokeWidth="0.2"/>
            <path d="M75 0 L100 25 M0 25 L25 0" stroke="rgba(129, 140, 248, 0.05)" strokeWidth="0.2"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Ignite Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
            Custom Web & Mobile Development, Automation, and Support for Visionary Businesses.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
            <CTAButton text="Get a Free Quote" onClick={() => navigate('contact')} primary={true} />
            <CTAButton text="View Our Work" onClick={() => navigate('portfolio')} primary={false} />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Our Services"
            subtitle="From strategic planning and user experience design to development, testing, and rollout, we challenge assumptions to deeply understand your business and deliver solutions that drive real results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Custom Software */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-start hover:shadow-2xl transition-shadow border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Custom Software</h3>
              <p className="text-gray-700 mb-4">Transform complex ideas into powerful digital products, apps, and business systems. We leverage deep experience and best practices to build robust solutions that scale with your business.</p>
              <ul className="mb-4 space-y-1 text-gray-600 text-sm">
                <li>• Web & Mobile Apps</li>
                <li>• Cloud & Enterprise Systems</li>
                <li>• DevOps & Automation</li>
                <li>• Business Analysis</li>
                <li>• Quality Assurance & Testing</li>
                <li>• Ongoing Support & Maintenance</li>
              </ul>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">End-to-End Delivery</span>
            </div>
            {/* Product Design */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-start hover:shadow-2xl transition-shadow border-t-4 border-pink-400">
              <div className="bg-pink-100 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Product Design</h3>
              <p className="text-gray-700 mb-4">We help you truly listen to your users and craft memorable digital experiences. Our design process is iterative, collaborative, and focused on real-world impact.</p>
              <ul className="mb-4 space-y-1 text-gray-600 text-sm">
                <li>• User Research & Insights</li>
                <li>• Prototyping & Wireframing</li>
                <li>• Continuous UX Improvement</li>
                <li>• Design Sprints & Workshops</li>
                <li>• Accessibility & Usability Audits</li>
              </ul>
              <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">Human-Centered</span>
            </div>
            {/* Data & Analytics */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-start hover:shadow-2xl transition-shadow border-t-4 border-indigo-500">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18M9 17V9m4 8V5m4 12v-6" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Data & Analytics</h3>
              <p className="text-gray-700 mb-4">Empower your organization to make smarter, data-driven decisions. We turn raw data into actionable insights and help you build a culture of continuous improvement.</p>
              <ul className="mb-4 space-y-1 text-gray-600 text-sm">
                <li>• Data Science & Machine Learning</li>
                <li>• Business Intelligence Dashboards</li>
                <li>• Analytics Consulting & Advisory</li>
                <li>• Data Engineering & Integration</li>
                <li>• Reporting Automation</li>
              </ul>
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Insight-Driven</span>
            </div>
          </div>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-2 text-emerald-700">Why Partner With Us?</h4>
            <p className="text-gray-700 text-lg">We go beyond code. Our team becomes your strategic partner, challenging assumptions, sharing expertise, and supporting you at every stage. Let’s build something remarkable together.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Why Choose DevSpark?"
            subtitle="Experience the difference of a partnership built on innovation, quality, and dedicated support."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              title="Custom-Coded Excellence"
              description="We don't use templates. Every line of code is custom-written for peak performance and unique design."
            />
            <FeatureCard
              icon="M13 10V3L4 14h7v7l9-11h-7z"
              title="Agile & Efficient"
              description="Our agile development process ensures flexibility, transparency, and timely delivery of your project."
            />
            <FeatureCard
              icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9H3m9-9a9 9 0 00-9-9m9 9V3m0 18V3"
              title="Ongoing Partnership"
              description="Beyond launch, we provide continuous maintenance, feature updates, and security monitoring."
            />
            <FeatureCard
              icon="M5 3v4M3 5h4M6 17v4M17 3h4M19 6h-4M18 9h.01M18 12h.01M18 15h.01M18 18h.01"
              title="Mobile-First Approach"
              description="Your digital solution will look and perform flawlessly on every device, from mobile to desktop."
            />
            <FeatureCard
              icon="M9.75 17L9 20l-2-2m2-10V7m0-3h.01M6 16.01V16c0-1.1.9-2 2-2h3.5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1 .45-1 1v.01M12 21a9 9 0 100-18 9 9 0 000 18z"
              title="Transparent Communication"
              description="We keep you informed every step of the way, ensuring clarity and collaboration."
            />
            <FeatureCard
              icon="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
              title="Dedicated Support"
              description="Our team is always ready to assist, providing timely bug fixes and security monitoring."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Let's build something amazing together. Contact us today for a free consultation.</p>
          <CTAButton text="Start Your Project" onClick={() => navigate('contact')} primary={true} />
          </div>
      </section>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/254758712537"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 sm:bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
        title="Chat with us on WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(16, 185, 129, 0.25)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.999 23.003L2.73 17.65a8.97 8.97 0 01-1.34-4.887C1.39 6.84 6.84 1.39 13.007 1.39c3.08 0 5.96 1.2 8.16-3.393s3.39 5.08 3.39 8.16a8.97 8.97 0 01-1.34 4.887L23.003 23.003l-5.353-1.73a9.003 9.003 0 01-4.887 1.34c-6.16 0-11.61-5.45-11.61-11.61a8.97 8.97 0 011.34-4.887L.999 0 .999 23.003zM13.007 3.39c-5.06 0-9.21 4.15-9.21 9.21 0 1.95.6 3.76 1.63 5.25L3.447 21.55l3.227-1.047a7.22 7.22 0 004.887 1.34h.01c5.06 0 9.21-4.15 9.21-9.21s-4.15-9.21-9.21-9.21zM17.007 15.61c-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07" />
        </svg>
      </a>
    </div>
  );

  const ServiceCard = ({ icon, title, description, onClick }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="p-4 bg-indigo-100 rounded-full mb-6">
        <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      {onClick && (
        <button
          onClick={onClick}
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300 flex items-center"
        >
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      )}
    </div>
  );

  const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="p-4 bg-indigo-100 rounded-full mb-6">
        <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  // Services Page Component
  const ServicesPage = () => (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Our Comprehensive Services"
            subtitle="From concept to launch and beyond, we're your partner in digital innovation."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Web Development */}
            <ServiceDetailCard
              title="Custom-Coded Website Development"
              description="We build bespoke, high-performance websites from the ground up, ensuring unique design and optimal functionality. Our focus is on creating mobile-responsive, SEO-friendly sites that convert visitors into customers."
              features={[
                "One-page & Multi-page sites",
                "Mobile-responsive design",
                "Custom UI/UX development",
                "CMS integration (if needed)",
                "E-commerce solutions"
              ]}
              icon="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />

            {/* Mobile App Development */}
            <ServiceDetailCard
              title="iOS & Android Mobile App Development"
              description="Transform your ideas into engaging mobile applications for both iOS and Android platforms. We specialize in creating intuitive user experiences and robust, scalable backends."
              features={[
                "Native & Cross-platform apps",
                "MVP (Minimum Viable Product) development for startups",
                "UI/UX design for mobile",
                "App store submission guidance",
                "Performance optimization"
              ]}
              icon="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />

            {/* Backend & Automation */}
            <ServiceDetailCard
              title="Backend API Development & Automation"
              description="Power your applications with secure, scalable, and efficient backend APIs. We also develop custom business tools and automation scripts to streamline your operations."
              features={[
                "Custom API development (REST, GraphQL)",
                "Database design & management",
                "Automation scripts for repetitive tasks",
                "Third-party API integrations (e.g., payment gateways, CRMs)",
                "Cloud infrastructure setup"
              ]}
              icon="M10 19l-2 2m0 0l-2-2m2 2v-8m10-4l2-2m0 0l2 2m-2-2V5m-3 10h.01M6 10h.01"
            />

            {/* Maintenance & Support */}
            <ServiceDetailCard
              title="Maintenance & Ongoing Support"
              description="Our partnership extends beyond launch. We provide continuous maintenance, security monitoring, and feature updates to ensure your digital products remain robust and competitive."
              features={[
                "Monthly feature updates",
                "Proactive bug fixes & troubleshooting",
                "Security monitoring & vulnerability patching",
                "Performance monitoring & optimization",
                "Technical support & consultation"
              ]}
              icon="M10.325 4.317c.515-1.33 1.958-2.217 3.515-2.217h.005c1.416 0 2.739.66 3.44 1.737M14.25 18v2.25c0 .294.236.53.53.53h.94c.294 0 .53-.236.53-.53V18m-8.775-2.217a3.375 3.375 0 00-.727-.585M13.5 18H8.25m0 0a3.375 3.375 0 00-.727-.585M13.5 18v.375a.375.375 0 01-.375.375H9.75a.375.375 0 01-.375-.375V18m3.75-1.5V12m0 0a3 3 0 00-3-3m3 3a3 3 0 01-3-3m-3 3H12m0 0a3 3 0 013-3m-3 3h3.75M9.75 8.25H21V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6.75m10.5 0h.008v.008h-.008V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </div>
        </div>
      </section>
    </div>
  );

  const ServiceDetailCard = ({ icon, title, description, features }) => (
    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <div className="p-4 bg-indigo-100 rounded-full mr-4">
          <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <CTAButton text="Get a Quote for this Service" onClick={() => navigate('contact')} />
      </div>
    </div>
  );

  // Portfolio Page Component
  const PortfolioPage = () => {
    const projects = [
      {
        id: 1,
        title: "E-commerce Platform Redesign",
        category: "Web Development",
        image: "https://placehold.co/600x400/6366F1/FFFFFF?text=E-commerce+Redesign",
        description: "A complete overhaul of an existing e-commerce platform, focusing on improved user experience, mobile responsiveness, and faster loading times. Resulted in a 25% increase in conversion rates.",
        technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
        link: "#" // Placeholder for actual case study link
      },
      {
        id: 2,
        title: "Fitness Tracking Mobile App",
        category: "Mobile App Development",
        image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Fitness+App",
        description: "Developed a cross-platform mobile application for fitness enthusiasts, featuring workout tracking, personalized plans, and social sharing. Achieved 10,000+ downloads in the first month.",
        technologies: ["React Native", "Firebase", "Express.js"],
        link: "#"
      },
      {
        id: 3,
        title: "Automated Inventory Management",
        category: "Automation & APIs",
        image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Inventory+Automation",
        description: "Implemented an automated inventory management system integrated with existing sales and shipping APIs, reducing manual data entry by 80% and improving accuracy.",
        technologies: ["Python", "AWS Lambda", "REST APIs"],
        link: "#"
      },
      {
        id: 4,
        title: "Custom CRM for Small Business",
        category: "Custom Business Tools",
        image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Custom+CRM",
        description: "Built a tailored CRM system to manage client relationships, sales pipelines, and project tracking for a growing consulting firm, significantly improving their workflow efficiency.",
        technologies: ["Vue.js", "Node.js", "PostgreSQL"],
        link: "#"
      },
      {
        id: 5,
        title: "Real-time Chat Application",
        category: "Web Development",
        image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Chat+App",
        description: "Developed a secure, real-time chat application for internal team communication, featuring file sharing and notification systems.",
        technologies: ["React", "Socket.IO", "Express.js"],
        link: "#"
      },
      {
        id: 6,
        title: "Healthcare Appointment Booking App",
        category: "Mobile App Development",
        image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Healthcare+App",
        description: "Created a user-friendly mobile app for patients to book, manage, and reschedule appointments with healthcare providers, reducing no-shows by 15%.",
        technologies: ["Flutter", "Firebase", "Cloud Functions"],
        link: "#"
      },
    ];

    return (
      <div className="pt-20 bg-gray-50 min-h-screen">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Our Work: Projects That Spark Success"
              subtitle="Explore our diverse portfolio of custom web and mobile solutions that have driven real results for our clients."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton text="Discuss Your Project" onClick={() => navigate('contact')} />
            </div>
          </div>
        </section>
      </div>
    );
  };

  const PortfolioCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/333333?text=Image+Unavailable"; }} />
      <div className="p-6">
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">{project.category}</span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{tech}</span>
          ))}
        </div>
        <a href={project.link} className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300 flex items-center">
          View Case Study
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  );

  // About Us Page Component
  const AboutPage = () => (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="About DevSpark: Igniting Innovation Together"
            subtitle="We are a passionate team dedicated to crafting exceptional digital experiences and empowering businesses through technology."
          />

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              At DevSpark, our mission is to transform visionary ideas into impactful digital realities. We are committed to delivering custom-coded, high-quality web and mobile solutions that not only meet but exceed our clients' expectations, driving their growth and success in the digital landscape.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ValueCard
                icon="M9.75 17L9 20l-2-2m2-10V7m0-3h.01M6 16.01V16c0-1.1.9-2 2-2h3.5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1 .45-1 1s.45 1 1 1h.5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1 .45-1 1v.01M12 21a9 9 0 100-18 9 9 0 000 18z"
                title="Innovation"
                description="We constantly explore new technologies and creative approaches to deliver cutting-edge solutions."
              />
              <ValueCard
                icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                title="Quality"
                description="We are relentless in our pursuit of excellence, ensuring every line of code meets the highest standards."
              />
              <ValueCard
                icon="M13 10V3L4 14h7v7l9-11h-7z"
                title="Collaboration"
                description="We believe in strong partnerships, working closely with clients to achieve shared goals."
              />
              <ValueCard
                icon="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9H3m9-9a9 9 0 00-9-9m9 9V3m0 18V3"
                title="Transparency"
                description="Open communication and clear processes are at the heart of every project."
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMemberCard
                name="Jane Doe"
                role="CEO & Lead Developer"
                image="https://placehold.co/150x150/6366F1/FFFFFF?text=JD"
                bio="With over 15 years of experience, Jane leads our technical vision and ensures every project aligns with our clients' strategic goals."
              />
              <TeamMemberCard
                name="John Smith"
                role="Head of UI/UX Design"
                image="https://placehold.co/150x150/6366F1/FFFFFF?text=JS"
                bio="John crafts intuitive and beautiful user experiences, making sure our applications are not just functional but also a joy to use."
              />
              <TeamMemberCard
                name="Emily White"
                role="Mobile App Specialist"
                image="https://placehold.co/150x150/6366F1/FFFFFF?text=EW"
                bio="Emily is our expert in bringing mobile ideas to life, developing robust and scalable iOS and Android applications."
              />
            </div>
          </div>

          <TestimonialsSection />
        </div>
      </section>
    </div>
  );

  const ValueCard = ({ icon, title, description }) => (
    <div className="flex items-start p-6 rounded-lg bg-gray-50 shadow-sm">
      <div className="p-3 bg-indigo-100 rounded-full mr-4">
        <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
        </svg>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  const TeamMemberCard = ({ name, role, image, bio }) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/CCCCCC/333333?text=Profile"; }} />
      <h4 className="text-xl font-bold text-gray-900 mb-1">{name}</h4>
      <p className="text-indigo-600 font-medium mb-3">{role}</p>
      <p className="text-gray-700 text-sm">{bio}</p>
    </div>
  );

  // Testimonials Section (can be used on Home or About page)
  const TestimonialsSection = () => {
    const testimonials = [
      {
        quote: "DevSpark transformed our online presence. Their custom website development was top-notch, and the team was incredibly responsive and professional throughout the entire process.",
        author: "Sarah Chen",
        title: "CEO, Innovate Corp.",
        logo: "https://placehold.co/80x40/E0E7FF/4F46E5?text=Client+A"
      },
      {
        quote: "The mobile app DevSpark built for us exceeded all expectations. It's intuitive, fast, and has significantly improved our customer engagement. Their support is outstanding!",
        author: "Mark Johnson",
        title: "Founder, FitLife Apps",
        logo: "https://placehold.co/80x40/E0E7FF/4F46E5?text=Client+B"
      },
      {
        quote: "Their expertise in automation and API integration saved us countless hours. DevSpark delivered a solution that perfectly streamlined our complex workflows.",
        author: "David Lee",
        title: "Operations Director, Global Logistics",
        logo: "https://placehold.co/80x40/E0E7FF/4F46E5?text=Client+C"
      }
    ];

    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Hear directly from businesses that have achieved success with DevSpark."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between h-full">
      <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <img src={testimonial.logo} alt={`${testimonial.author} company logo`} className="h-12 w-auto mr-4 rounded-md object-contain" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x40/CCCCCC/333333?text=Logo"; }} />
        <div>
          <p className="font-bold text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );

  // Contact Page Component
  const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const text = `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;
      const url = `https://wa.me/254758712537?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    };

    return (
      <div className="pt-20 bg-gray-50 min-h-screen">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <SectionTitle
              title="Get in Touch with DevSpark"
              subtitle="Ready to start your next project or have a question? We'd love to hear from you."
            />

            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Interested Service</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="web-development">Website Development</option>
                      <option value="mobile-app-development">Mobile App Development</option>
                      <option value="backend-automation">Backend API & Automation</option>
                      <option value="maintenance-support">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Tell us about your project or question..."
                      required
                    ></textarea>
                  </div>
                  <CTAButton text="Send Message" primary={true} type="submit" />
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6 text-gray-700 text-lg">
                  <div className="flex items-center">
                    <svg className="h-7 w-7 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>info@devspark.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-7 w-7 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>+254 758 712-537</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-7 w-7 text-indigo-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Chiromo Lane, Westlands, Nairobi</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.792v.058a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.86 8.163 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.015-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.116-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.701.111 2.504.327 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-indigo-600 transition duration-300">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.772.132 4.922.382 4.231.668c-.69.286-1.293.73-1.821 1.259-.529.529-.973 1.132-1.259 1.821-.286.69-.536 1.54-.668 2.828-.058 1.289-.072 1.699-.072 4.95 0 3.251.014 3.66.072 4.949.132 1.288.382 2.138.668 2.828.286.689.73 1.292 1.259 1.821.529.529 1.132.973 1.821 1.259.69.286 1.54.536 2.828.668 1.289.058 1.699.072 4.95.072 3.251 0 3.66-.014 4.949-.072 1.288-.132 2.138-.382 2.828-.668.689-.286 1.292-.73 1.821-1.259.529-.529.973-1.132 1.259-1.821.286-.69.536-1.54.668-2.828.058-1.289.072-1.699.072-4.95 0-3.251-.014-3.66-.072-4.949-.132-1.288-.382-2.138-.668-2.828-.286-.69-.73-1.292-1.259-1.821-.529-.529-1.132-.973-1.821-1.259-.69-.286-1.54-.536-2.828-.668C15.66 2.014 15.25 2 12 2zm0 2.16c3.2 0 3.585.016 4.85.071 1.17.06 1.805.337 2.22.492.217.076.477.16.713.295.236.135.42.3.643.528.223.226.398.47.533.706.135.236.219.496.295.713.156.416.433 1.05.492 2.22.058 1.265.071 1.65.071 4.85s-.014 3.585-.072 4.85c-.06 1.17-.337 1.805-.492 2.22-.076.217-.16.477-.295.713-.135.236-.3.42-.528.643-.226.223-.47.398-.706.533-.236.135-.496.219-.713.295-1.17.156-1.805.433-2.22.492-1.265.058-1.65.071-4.85.071s-3.585-.014-4.85-.072c-1.17-.06-1.805-.337-2.22-.492-.217-.076-.477-.16-.713-.295-.236-.135-.42-.3-.643-.528-.223-.226-.398-.47-.533-.706-.135-.236-.219-.496-.295-.713-.156-.416-.433-1.05-.492-2.22-.058-1.265-.071-1.65-.071-4.85s.014-3.585.072-4.85c.06-1.17.337-1.805.492-2.22.076-.217.16-.477.295-.713.135-.236.3-.42.528-.643.223-.226.47-.398.706-.533.135-.236.219-.496.295-.713.156-.416.433-1.05.492-2.22.058-1.265.071-1.65.071-4.85zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Custom Modal Component
  const CustomModal = ({ show, message, onClose }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
          <p className="text-gray-700 mb-6">{message}</p>
          <CTAButton text="Close" onClick={onClose} />
        </div>
      </div>
    );
  };

  // Main render logic based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-inter antialiased text-gray-800">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          /* New animation for the spiral background */
          @keyframes pulse-slow {
            0% { opacity: 0.1; }
            50% { opacity: 0.25; }
            100% { opacity: 0.1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          .animate-pulse-slow.delay-100 { animation-delay: 0.1s; }
          .animate-pulse-slow.delay-200 { animation-delay: 0.2s; }
          .animate-pulse-slow.delay-300 { animation-delay: 0.3s; }
          .animate-pulse-slow.delay-400 { animation-delay: 0.4s; }
          .animate-pulse-slow.delay-500 { animation-delay: 0.5s; }
        `}
      </style>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CustomModal show={showModal} message={modalMessage} onClose={closeModal} />
    </div>
  );
};

export default Home;
