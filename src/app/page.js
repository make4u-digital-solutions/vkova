"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tutorGenderPref, setTutorGenderPref] = useState("No Preference");
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [tutorAppSubmitted, setTutorAppSubmitted] = useState(false);
  const [admissionSubmitted, setAdmissionSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [uploadedResumeName, setUploadedResumeName] = useState("");

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSubmitted(true);
    e.target.reset();
  };

  const handleTutorSubmit = (e) => {
    e.preventDefault();
    setTutorAppSubmitted(true);
    e.target.reset();
    setUploadedResumeName("");
  };

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    setAdmissionSubmitted(true);
    e.target.reset();
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen relative selection:bg-secondary-container selection:text-on-secondary-container">
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20 mobile-header">
        <div className="h-20 max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4 mobile-header-inner">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              alt="VKOVA Official Logo"
              className="h-17 w-auto object-contain transition-transform group-hover:scale-105"
              src="/VKOVA_Logo.png"
            />
            
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              className="transition-colors text-primary font-label-md text-label-md font-bold hover:text-secondary"
              href="#hero"
            >
              Home
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
              href="#home-tuition"
            >
              Home Tuition
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
              href="#coaching"
            >
              Coaching
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
              href="#about"
            >
              About
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center justify-center bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim font-label-md text-label-md px-4 py-2.5 rounded-xl transition-all shadow-[0_1px_3px_rgba(27,42,51,0.04)] font-semibold"
              href="#request-tutor"
            >
              Request a Tutor
            </a>
            <a
              className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-4 py-2.5 rounded-xl transition-all shadow-[0_1px_3px_rgba(27,42,51,0.04)] font-semibold"
              href="#join-tutor"
            >
              Join as a Tutor
            </a>
            <a
              href="#contact"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary hover:opacity-90 transition-opacity"
              aria-label="User Profile / Contact"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-primary hover:bg-surface-container transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-3 shadow-lg">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-md text-label-md text-primary font-bold py-2 border-b border-surface-container"
              href="#hero"
            >
              Home
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary py-2 border-b border-surface-container"
              href="#home-tuition"
            >
              Home Tuition
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary py-2 border-b border-surface-container"
              href="#coaching"
            >
              Coaching Classes
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary py-2 border-b border-surface-container"
              href="#about"
            >
              About VKOVA
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary py-2 border-b border-surface-container"
              href="#contact"
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-secondary-container text-on-secondary-container font-label-md px-4 py-2.5 rounded-xl font-semibold"
                href="#request-tutor"
              >
                Request a Tutor
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-primary-container text-on-primary font-label-md px-4 py-2.5 rounded-xl font-semibold"
                href="#join-tutor"
              >
                Join as a Tutor
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <main className="w-full pt-20 bg-background mobile-main">
        <div className="flex flex-col w-full">
          {/* =========================================
              SECTION 1: HERO
          ========================================== */}
          <section
            className="w-full bg-surface-container-lowest py-20 lg:py-24 mobile-hero-section"
            id="hero"
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-20 mobile-hero-shell">
              {/* Top Grid: Copy & Hero Imagery */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mobile-hero-grid">
                <div className="lg:col-span-7 flex flex-col gap-6 mobile-hero-copy">
                  {/* <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-wide uppercase">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    Premier Educational Network • Lucknow
                  </div> */}
                  <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-primary tracking-tight leading-[1.1] font-bold">
                    Find the Right Tutor in Lucknow
                  </h1>
                  <p className="font-headline-sm text-headline-sm lg:text-headline-md text-secondary font-bold tracking-wide uppercase">
                    TUTORS AT HOME, SUCCESS EVERY TIME
                  </p>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    VKOVA connects students with verified, compassionate home tutors
                    across Lucknow and conducts rigorous, concept-focused coaching
                    classes designed for academic breakthroughs.
                  </p>

                  {/* Action Button Cluster */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2 mobile-hero-actions">
                    <a
                      className="inline-flex items-center justify-center bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-container font-label-lg text-label-lg px-7 py-3.5 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                      href="#request-tutor"
                    >
                      Request a Tutor
                    </a>
                    <a
                      className="inline-flex items-center justify-center bg-transparent text-primary hover:bg-primary-container/10 font-label-lg text-label-lg px-6 py-3.5 rounded-2xl transition-all duration-200 font-semibold"
                      href="#join-tutor"
                    >
                      Join as a Tutor
                    </a>
                    <a
                      className="inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3.5 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                      href="#coaching"
                    >
                      Enquire for Admission
                    </a>
                    <a
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-label-lg text-label-lg px-6 py-3.5 rounded-2xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                      href="https://wa.me/0000000000"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        chat
                      </span>
                      WhatsApp VKOVA
                    </a>
                  </div>

                  {/* Trust Credibility Bar */}
                  <div className="mt-4 p-4 rounded-2xl bg-surface-container-low flex flex-wrap items-center gap-4 text-on-surface mobile-trust-bar">
                    <div className="flex items-center gap-2 font-label-md text-label-md text-primary font-bold">
                      <span className="material-symbols-outlined text-secondary">
                        verified_user
                      </span>
                      <span>Classes 1st to 12th</span>
                    </div>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      CBSE Board
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      ICSE Board
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                      UP State Board
                    </span>
                  </div>
                </div>

                {/* Hero Graphic / Image */}
                <div className="lg:col-span-5 relative mobile-hero-visual">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/30">
                    <img
                      className="w-full h-[460px] object-cover object-center"
                      alt="An Indian female home tutor patiently explaining mathematics to a student"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0QebPomy7eQ7PMBJJGXiPz7tx3abSAV7T-CzywVNuAbW8JE-zmTHM4-Ubw9xkZ56im27NyDvX3SGHhjyZqwPjd5E0Jf-utrMpH90hK7F4PF3Cb8rBasJ9o7mK1BZIHtofi0TVpaWqmsr-Shmgq8rMy4vhEW6sr0mgT_C2kQ_LvfrahrQdaoYwBHPi6a9w5YIJxdWtw7rDysPfylQscE8Fi-UV_5Showh-osEVYnDKe2xvUdBXBdhp"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 backdrop-blur-md shadow-sm flex items-center justify-between gap-3 border border-white/40">
                      <div>
                        <p className="font-headline-sm text-headline-sm text-primary text-sm font-semibold">
                          Personalized Mentorship
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          1-on-1 tutoring at your home in Lucknow
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          check_circle
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Under Hero: Our Services (2 Large Cards) */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    Our Core Learning Verticals
                  </h2>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                    Tailored educational models for every scholar
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1: Home Tuition */}
                  <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">
                          home_pin
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary font-bold">
                        Home Tuition in Lucknow
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Qualified, background-verified personal mentors traveling
                        directly to your residence across all primary sectors in
                        Lucknow. Individual pace, customized study schedules, and zero
                        commute stress.
                      </p>
                      <ul className="flex flex-col gap-2 pt-2">
                        <li className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            check
                          </span>
                          Tailored 1-on-1 focus with custom speed
                        </li>
                        <li className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            check
                          </span>
                          Choice of subject specialists & verified teachers
                        </li>
                      </ul>
                    </div>
                    <a
                      className="self-start inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
                      href="#request-tutor"
                    >
                      Request Home Tutor{" "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>

                  {/* Card 2: Coaching Classes */}
                  <div className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[24px]">
                          school
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary font-bold">
                        Vkova Coaching Classes
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Modern academic batch centers equipped with smart whiteboards,
                        structured assessment modules, and small peer cohorts
                        situated at Baroli Khalilabad, Sector 12, Lucknow.
                      </p>
                      <ul className="flex flex-col gap-2 pt-2">
                        <li className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            check
                          </span>
                          Rigorous mock test series & weekly evaluations
                        </li>
                        <li className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
                          <span className="material-symbols-outlined text-secondary text-[18px]">
                            check
                          </span>
                          Affordable fee structure with master subject faculty
                        </li>
                      </ul>
                    </div>
                    <a
                      className="self-start inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
                      href="#coaching"
                    >
                      Explore Coaching Batches{" "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Who Can Use VKOVA (3 Cards) */}
              <div className="flex flex-col gap-6">
                <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                  Built For the Entire Lucknow Learning Ecosystem
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        family_restroom
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      For Parents
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Gain peace of mind with transparent tutor credentials,
                      periodic performance reports, and secure home learning
                      without travel hassles.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        auto_stories
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      For Students
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Master challenging concepts with empathetic guidance,
                      targeted question practice, and customized pace tailored to
                      your syllabus.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        co_present
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      For Tutors
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Connect with serious students in your preferred Lucknow
                      neighborhoods, establish steady earnings, and receive
                      administrative backing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              SECTION 2: HOME TUITION
          ========================================== */}
          <section className="w-full bg-[#F6F8FA] py-24" id="home-tuition">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Home Tuition
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight">
                  Home Tutors Across Lucknow
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  We help parents and students find the right home tutor, close to
                  home, matched precisely to class, board, and learning temperament.
                </p>
              </div>

              {/* 6 Clean Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      looks_one
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Classes 1st to 12th
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Foundational literacy & numeracy for primary grades through to
                    advanced board exam prep for secondary & senior secondary
                    students.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      menu_book
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    CBSE Curriculum
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    NCERT-aligned lesson architecture focusing on conceptual
                    clarity, continuous revision exercises, and exemplary sample
                    paper drills.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      history_edu
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    ICSE / ISC Board
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Rigorous coverage of extensive ICSE syllabi, in-depth English
                    language writing, applications, and science laboratory theory.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      account_balance
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    UP State Board
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Hindi and English medium tuition aligned precisely with the
                    Uttar Pradesh Madhyamik Shiksha Parishad examination framework.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      calculate
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Customized Subjects
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Need guidance solely in Physics, Pure Math, Chemistry, or
                    Accounts? Hire specialists focusing exclusively on problem
                    subjects.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      near_me
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Hyper-Local Matching
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Instant matching across Gomti Nagar, Alambagh, Indira Nagar,
                    Hazratganj, Baroli Khalilabad, and all prominent Lucknow
                    localities.
                  </p>
                </div>
              </div>

              {/* How It Works in 3 Numbered Steps */}
              <div className="p-8 lg:p-12 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col gap-8 border border-outline-variant/20">
                <div className="flex flex-col gap-2">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    How It Works
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Three simple steps to secure your dedicated home tutor
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                      01
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Post Requirement
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Tell us your student&apos;s class, board, subjects, residential
                      area, and schedule preferences through our fast request form.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                      02
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Tutor Profile Match
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      VKOVA reviews local tutors and coordinates a free or subsidized
                      demo session with the most qualified teacher.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary font-headline-sm text-headline-sm font-bold flex items-center justify-center">
                      03
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Commence Home Classes
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Confirm your satisfaction, lock in the weekly schedule, and
                      embark on structured, regular learning right at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              SECTION 3: REQUEST A TUTOR
          ========================================== */}
          <section
            className="w-full bg-surface-container-lowest py-24"
            id="request-tutor"
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Fast Matching
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Request a Tutor
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Fill in your academic requirement. Our coordinator will contact you
                  shortly with matched profiles.
                </p>
              </div>

              {/* High-fidelity Form Card */}
              <div className="w-full max-w-4xl bg-surface-container-low p-8 lg:p-10 rounded-3xl shadow-sm border border-outline-variant/20">
                {/* Interactive Simulated Success Banner */}
                {requestSubmitted && (
                  <div className="mb-8 p-6 rounded-2xl bg-tertiary-container/10 border-l-4 border-tertiary-container flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-tertiary-container font-bold">
                        Requirement Submitted Successfully!
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Our Lucknow academic counsellor will call you within 2
                        hours to confirm your tutor profile.
                      </p>
                    </div>
                  </div>
                )}

                <form
                  className="flex flex-col gap-6"
                  onSubmit={handleRequestSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Parent / Student Name
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="e.g. Ramesh Srivastava"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Mobile Number
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="+91 98765 XXXXX"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Student Class / Standard
                      </label>
                      <select
                        defaultValue="Class 9-10"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                      >
                        <option value="Class 1-5">Class 1st - 5th (Primary)</option>
                        <option value="Class 6-8">Class 6th - 8th (Middle)</option>
                        <option value="Class 9-10">
                          Class 9th - 10th (Secondary)
                        </option>
                        <option value="Class 11-12">
                          Class 11th - 12th (Senior Secondary)
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Educational Board
                      </label>
                      <select
                        defaultValue="CBSE"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                      >
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE / ISC</option>
                        <option value="UP Board">UP State Board</option>
                        <option value="Other">Other Curriculum</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Subjects Required
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="e.g. Mathematics & Science"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Location / Area in Lucknow
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="e.g. Sector 12, Baroli Khalilabad"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Tutor Gender Preference Toggle */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Preferred Tutor Preference
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["Male Tutor", "Female Tutor", "No Preference"].map(
                        (pref) => (
                          <button
                            key={pref}
                            type="button"
                            onClick={() => setTutorGenderPref(pref)}
                            className={`px-5 py-2.5 rounded-xl font-label-md text-label-md transition-colors ${
                              tutorGenderPref === pref
                                ? "bg-primary text-on-primary font-bold shadow-sm"
                                : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border border-outline-variant/30"
                            }`}
                          >
                            {pref}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Preferred Timing
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="e.g. Evening 4:00 PM - 6:00 PM"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Monthly Budget (Approx)
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="e.g. ₹3,500 - ₹5,000 / month"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Additional Note (Optional)
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                      placeholder="Specific exam targets, school name, or student's weak chapters..."
                      rows={3}
                    ></textarea>
                  </div>

                  <button
                    className="self-start inline-flex items-center justify-center bg-secondary-container hover:bg-secondary-fixed-dim text-on-secondary-container font-label-lg text-label-lg px-8 py-4 rounded-xl shadow-sm transition-all font-bold cursor-pointer hover:shadow-md"
                    type="submit"
                  >
                    Submit Requirement
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* =========================================
              SECTION 4: JOIN AS A TUTOR
          ========================================== */}
          <section className="w-full bg-[#F6F8FA] py-24" id="join-tutor">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="flex flex-col gap-3 max-w-xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Educator Community
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Join VKOVA as a Tutor
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Empowering passionate teachers and subject scholars with rewarding
                  tutoring assignments across Lucknow.
                </p>
              </div>

              {/* 3 Tutor Benefit Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      assignment_turned_in
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Verified Student Leads
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Zero cold calls. Receive pre-qualified student requirements that
                    match your exact subject mastery and target localities.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      schedule
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Flexible Timings
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Teach on your own schedule. Choose morning, afternoon, or
                    evening batches based on your availability.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      support_agent
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Full Team Support
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Dedicated administrative support for smooth scheduling,
                    transparent fee policies, and dispute mediation.
                  </p>
                </div>
              </div>

              {/* Tutor Application Form Card */}
              <div className="w-full max-w-4xl bg-surface-container-lowest p-8 lg:p-10 rounded-3xl shadow-sm border border-outline-variant/20">
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-6">
                  Tutor Application Form
                </h3>

                {/* Interactive Simulated Confirmation Badge */}
                {tutorAppSubmitted && (
                  <div className="mb-8 p-6 rounded-2xl bg-tertiary-container/10 border-l-4 border-tertiary-container flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">
                        workspace_premium
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-tertiary-container font-bold">
                        Application Received!
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Our tutor onboarding team will review your qualifications
                        and contact you for document verification.
                      </p>
                    </div>
                  </div>
                )}

                <form className="flex flex-col gap-6" onSubmit={handleTutorSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Full Name
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. Dr. Priya Verma"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Mobile Number
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="+91 94520 XXXXX"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Email Address
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="priya.verma@example.com"
                        required
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Highest Educational Qualification
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. M.Sc Physics / B.Tech"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Teaching Experience (Years)
                      </label>
                      <select
                        defaultValue="3-5 years"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                      >
                        <option value="Fresher">Fresher / Under 1 year</option>
                        <option value="1-3 years">1 - 3 Years</option>
                        <option value="3-5 years">3 - 5 Years</option>
                        <option value="5+ years">More than 5 Years</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Subjects You Teach
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. Physics, Chemistry, Mathematics"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Target Classes
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. 9th to 12th Standard"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Preferred Lucknow Areas
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. Sector 12, Baroli Khalilabad, Alambagh"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Availability Hours
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. 3 PM - 8 PM Weekdays"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Expected Fees / Hour or Month
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. ₹500/hr or ₹4,000/month"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Document Upload Box */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Upload Resume / ID Proof (Optional for initial match)
                    </label>
                    <label className="border-2 border-dashed border-outline-variant/60 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low cursor-pointer transition-colors group">
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.docx,.doc,image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setUploadedResumeName(e.target.files[0].name);
                          }
                        }}
                      />
                      <span className="material-symbols-outlined text-primary text-[32px] group-hover:scale-110 transition-transform">
                        upload_file
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">
                        {uploadedResumeName ? (
                          <span className="text-secondary font-bold">
                            Selected: {uploadedResumeName}
                          </span>
                        ) : (
                          "Click to upload PDF, DOCX, or Image (Max 5MB)"
                        )}
                      </p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Aadhaar card or degree certificate verification will
                        follow
                      </p>
                    </label>
                  </div>

                  <button
                    className="self-start inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-xl shadow-sm transition-all font-bold cursor-pointer hover:shadow-md"
                    type="submit"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* =========================================
              SECTION 5: COACHING CLASSES
          ========================================== */}
          <section
            className="w-full bg-surface-container-lowest py-24"
            id="coaching"
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Campus Learning
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Vkova Coaching Classes
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Immersive offline classroom learning with structured batches,
                  disciplined testing schedules, and mentor access.
                </p>
              </div>

              {/* Classroom Visual & Overview Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg bg-surface-container border border-outline-variant/30">
                    <img
                      className="w-full h-[400px] object-cover object-center"
                      alt="An Indian male teacher actively teaching Physics on a whiteboard in Lucknow classroom"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZGAs7mVtBUaI_pXnjy_lAd_vTRMdKwcvf5DGTqv2PJRjEm2g6jQlLx1tlw6ZbZ_Qq4xKZOa8Hyn1BQGkJGWxZFycWRL82JNiKmCz_51x82V-cbOTo7xUle2wiVbCU02A4ND81aoPe2QVsym-oidcFSNw7cLFq0VKXTMdXultb5z5JvtwnaqlV1srP2A7qRrKI6gTWqbV2nejy7iLft0b2tjwVSQm0WdpmQYsNGjFVMN0VgLg1f4t"
                    />
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold shadow-md">
                      Admissions Open 2026-27
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Classes We Offer
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3.5 py-1.5 rounded-xl bg-surface-container-lowest font-label-sm text-label-sm text-on-surface border border-outline-variant/30 font-medium">
                        Class 6th to 8th (Foundation)
                      </span>
                      <span className="px-3.5 py-1.5 rounded-xl bg-surface-container-lowest font-label-sm text-label-sm text-on-surface border border-outline-variant/30 font-medium">
                        Class 9th & 10th (Board Prep)
                      </span>
                      <span className="px-3.5 py-1.5 rounded-xl bg-surface-container-lowest font-label-sm text-label-sm text-on-surface border border-outline-variant/30 font-medium">
                        Class 11th & 12th (Science/Commerce)
                      </span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-3 border border-outline-variant/20">
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Subjects We Offer
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-on-surface font-body-sm text-body-sm">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Mathematics
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Physics
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Chemistry
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Biology
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        English Grammar
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        Social Studies
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Us Card & Quick Admission Enquiry */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Visit Us Center Details */}
                <div className="lg:col-span-6 bg-surface-container-low p-8 rounded-3xl shadow-sm flex flex-col justify-between gap-6 border border-outline-variant/20">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[20px]">
                          location_on
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        Visit Our Lucknow Center
                      </h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface">
                      <strong>Address:</strong> Baroli Khalilabad, Sector 12,
                      Lucknow, Uttar Pradesh 226028
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Visiting hours: Monday to Saturday, 9:00 AM – 7:30 PM.
                      Walk-ins welcome for parent-counsellor meetups.
                    </p>

                    {/* Map View Interactive Box */}
                    <a
                      href="https://maps.google.com/?q=Baroli+Khalilabad,+Sector+12,+Lucknow,+Uttar+Pradesh+226028"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-48 rounded-2xl bg-surface-container overflow-hidden relative shadow-inner block group border border-outline-variant/40"
                    >
                      <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-primary text-[36px] group-hover:scale-110 transition-transform">
                          map
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Baroli Khalilabad, Sector 12, Lucknow
                        </span>
                        <span className="text-xs text-primary font-medium underline">
                          Open in Google Maps
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-5 py-3 rounded-xl transition-all font-semibold hover:bg-primary-container"
                      href="tel:+0000000000"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        call
                      </span>
                      Call Center
                    </a>
                    <a
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-label-md text-label-md px-5 py-3 rounded-xl transition-all font-semibold"
                      href="https://wa.me/0000000000"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                      WhatsApp Location
                    </a>
                  </div>
                </div>

                {/* Quick Admission Form */}
                <div className="lg:col-span-6 bg-surface-container-low p-8 rounded-3xl shadow-sm flex flex-col gap-6 border border-outline-variant/20">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Quick Admission Enquiry
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Reserve a demo classroom seat or request the fee structure.
                    </p>
                  </div>

                  {admissionSubmitted && (
                    <div className="p-4 rounded-xl bg-tertiary-container/10 border-l-4 border-tertiary-container text-tertiary-container text-sm font-semibold">
                      Enquiry received! We look forward to welcoming you at our
                      center.
                    </div>
                  )}

                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleAdmissionSubmit}
                  >
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Student Name
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="Enter student's name"
                        required
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Contact Phone
                        </label>
                        <input
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                          placeholder="+91 94520 XXXXX"
                          required
                          type="tel"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Class / Target Grade
                        </label>
                        <select
                          defaultValue="Class 10"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        >
                          <option value="Class 9">Class 9th</option>
                          <option value="Class 10">Class 10th</option>
                          <option value="Class 11">Class 11th</option>
                          <option value="Class 12">Class 12th</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Stream / Subject Focus
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                        placeholder="e.g. Science (PCM / PCB) or Commerce"
                        type="text"
                      />
                    </div>
                    <button
                      className="mt-2 inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl shadow-sm transition-all font-bold cursor-pointer hover:shadow-md"
                      type="submit"
                    >
                      Enquire for Admission
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              SECTION 6: ABOUT & FOUNDER
          ========================================== */}
          <section className="w-full bg-[#F6F8FA] py-24" id="about">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Institution Heritage
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  About VKOVA
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Built with an uncompromising vision: making high-caliber
                  education personalized, accountable, and locally accessible
                  across Lucknow.
                </p>
              </div>

              {/* 3 Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      shield
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Unquestioned Trust
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Every home tutor is thoroughly vetted for academic credentials
                    and background security before they enter your home.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      grade
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Rigorous Quality
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    We track syllabus completion milestones and student score
                    improvements through regular feedback touchpoints.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4 border border-outline-variant/20">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      psychology
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Personal Attention
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    No student gets left behind in massive crowded halls. We
                    cultivate patience, curiosity, and question-asking habits.
                  </p>
                </div>
              </div>

              {/* About Founder Profile Card */}
              <div className="w-full bg-surface-container-lowest p-8 lg:p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8 lg:gap-12 border border-outline-variant/20">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface-container flex items-center justify-center shrink-0 overflow-hidden shadow-sm border-2 border-primary/20">
                  <span className="material-symbols-outlined text-primary text-[64px]">
                    person
                  </span>
                </div>
                <div className="flex flex-col gap-3 text-center md:text-left">
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                    Leadership Message
                  </span>
                  <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                    [Founder Name]
                  </h3>
                  <p className="font-label-md text-label-md text-primary font-semibold">
                    Founder & Academic Director, VKOVA Educational Institute
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed italic">
                    &ldquo;Education is fundamentally a bond of trust between mentor
                    and student. We founded VKOVA in Lucknow so that no parent
                    feels helpless navigating their child&apos;s academic
                    challenges, and every deserving tutor finds a respectable
                    platform to teach.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================
              SECTION 7: CONTACT
          ========================================== */}
          <section
            className="w-full bg-surface-container-lowest py-24"
            id="contact"
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                  Reach Out
                </span>
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                  Contact VKOVA
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Have queries regarding home tutoring or classroom admissions? Get
                  in touch with our team today.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Contact Information Block */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 border border-outline-variant/30">
                      <span className="material-symbols-outlined text-[24px]">
                        call
                      </span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        Phone Support
                      </p>
                      <a
                        className="font-headline-sm text-headline-sm text-primary font-bold hover:text-secondary transition-colors"
                        href="tel:+0000000000"
                      >
                        +91 94520 XXXXX
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Mon–Sat, 8:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-[#25D366] shrink-0 border border-outline-variant/30">
                      <span className="material-symbols-outlined text-[24px]">
                        chat
                      </span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        WhatsApp Desk
                      </p>
                      <a
                        className="font-headline-sm text-headline-sm text-primary font-bold hover:text-secondary transition-colors"
                        href="https://wa.me/0000000000"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Chat Instantly
                      </a>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Quick responses for requirements & demos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 border border-outline-variant/30">
                      <span className="material-symbols-outlined text-[24px]">
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        Official Email
                      </p>
                      <p className="font-headline-sm text-headline-sm text-primary font-bold">
                        contact@vkova.in
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        For institutional enquiries and partnerships
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary shrink-0 border border-outline-variant/30">
                      <span className="material-symbols-outlined text-[24px]">
                        pin_drop
                      </span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        Address
                      </p>
                      <p className="font-body-md text-body-md text-on-surface font-semibold">
                        Baroli Khalilabad, Sector 12
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Lucknow, Uttar Pradesh 226028
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Message Form Card */}
                <div className="lg:col-span-7 bg-surface-container-low p-8 lg:p-10 rounded-3xl shadow-sm border border-outline-variant/20">
                  <h3 className="font-headline-md text-headline-md text-primary font-bold mb-6">
                    Send Us a Direct Message
                  </h3>

                  {contactSubmitted && (
                    <div className="mb-6 p-4 rounded-xl bg-tertiary-container/10 border-l-4 border-tertiary-container text-tertiary-container text-sm font-semibold">
                      Message sent! Our support representative will respond
                      shortly.
                    </div>
                  )}

                  <form
                    className="flex flex-col gap-6"
                    onSubmit={handleContactSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Your Name
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                          placeholder="Name"
                          required
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Your Mobile
                        </label>
                        <input
                          className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                          placeholder="+91 94520 XXXXX"
                          required
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Inquiry Subject
                      </label>
                      <select
                        defaultValue="Home Tuition Inquiry"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                      >
                        <option value="Home Tuition Inquiry">
                          Looking for Home Tutor
                        </option>
                        <option value="Coaching Admission">
                          Coaching Class Admission
                        </option>
                        <option value="Tutor Job Inquiry">Joining as Tutor</option>
                        <option value="General Query">General Query</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Message
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                        placeholder="Describe your query..."
                        required
                        rows={4}
                      ></textarea>
                    </div>
                    <button
                      className="self-start inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-xl shadow-sm transition-all font-bold cursor-pointer hover:shadow-md"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FLOATING ACTION TRIGGERS */}
      <aside
        aria-label="Quick Contact Triggers"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        <a
          aria-label="Call Support"
          className="flex items-center gap-2 bg-surface-container-lowest text-primary hover:bg-surface-container-high hover:text-on-surface px-4 py-3 rounded-full shadow-[0_4px_12px_rgba(27,42,51,0.08)] transition-all border border-outline-variant/30 hover:scale-105"
          href="tel:+0000000000"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span className="hidden md:inline font-label-sm text-label-sm font-semibold">
            Call Us
          </span>
        </a>
        <a
          aria-label="WhatsApp Instant Chat"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-[0_4px_16px_rgba(0,64,25,0.2)] transition-all hover:scale-105 font-semibold"
          href="https://wa.me/0000000000"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="hidden md:inline font-label-sm text-label-sm">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low pt-16 pb-12 border-t border-outline-variant/30 mobile-footer">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col gap-12 mobile-footer-inner">
          {/* Main Footer Multi-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Column 1: Brand & Overview (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  alt="VKOVA Official Logo"
                  className="h-16 w-auto object-contain"
                  src="/VKOVA_Logo.png"
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-sm">
                Lucknow&apos;s premier educational platform connecting students with verified, compassionate home tutors and conducting rigorous, concept-driven offline coaching classes.
              </p>
              <div className="flex flex-col gap-2 pt-2 text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                  <span>Baroli Khalilabad, Sector 12, Lucknow (UP) 226028</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                  <a href="tel:+0000000000" className="hover:text-primary transition-colors font-medium">
                    +91 94520 XXXXX
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#25D366] text-[18px]">chat</span>
                  <a
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors font-medium"
                  >
                    WhatsApp Support: Chat Instantly
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                  <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Column 2: Academic Programs */}
            <div className="flex flex-col gap-4">
              <h4 className="font-headline-sm text-base text-primary font-bold tracking-tight">
                Academic Programs
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a href="#home-tuition" className="hover:text-primary transition-colors">
                    Home Tuition (Classes 1–12)
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="hover:text-primary transition-colors">
                    Vkova Coaching Batches
                  </a>
                </li>
                <li>
                  <a href="#home-tuition" className="hover:text-primary transition-colors">
                    CBSE Curriculum
                  </a>
                </li>
                <li>
                  <a href="#home-tuition" className="hover:text-primary transition-colors">
                    ICSE & ISC Board Prep
                  </a>
                </li>
                <li>
                  <a href="#home-tuition" className="hover:text-primary transition-colors">
                    UP State Board Coaching
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="hover:text-primary transition-colors">
                    Foundation Batches (6th–8th)
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="hover:text-primary transition-colors">
                    Board Prep (9th & 10th)
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="hover:text-primary transition-colors">
                    Senior Secondary (11th & 12th)
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-headline-sm text-base text-primary font-bold tracking-tight">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a href="#hero" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Request a Home Tutor
                  </a>
                </li>
                <li>
                  <a href="#join-tutor" className="hover:text-primary transition-colors">
                    Join as a Tutor
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="hover:text-primary transition-colors">
                    Admission Enquiry
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About VKOVA
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="hover:text-primary transition-colors">
                    Center Directions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Lucknow Coverage & Support */}
            <div className="flex flex-col gap-4">
              <h4 className="font-headline-sm text-base text-primary font-bold tracking-tight">
                Lucknow Coverage
              </h4>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Baroli Khalilabad
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Sector 12 & Indiranagar
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Gomti Nagar & Ext.
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Alambagh & Ashiyana
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Hazratganj & Mahanagar
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    Jankipuram & Vikas Nagar
                  </a>
                </li>
                <li>
                  <a href="#request-tutor" className="hover:text-primary transition-colors">
                    All Lucknow Localities
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Policies */}
          <div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
              © 2026 VKOVA Educational Institute. Excellence in Personalized Learning. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 font-label-sm text-label-sm text-on-surface-variant">
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
