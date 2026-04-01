import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import roomImg from '../assets/thumb-1920-1068590.jpg';

// ─── Reusable InputField ──────────────────────────────────────────────────────
const InputField = ({ label, type = 'text', className = '' }) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <label className="text-sm text-gray-500">
      {label} <span className="text-gray-400">*</span>
    </label>
    <input
      type={type}
      className="border-b border-gray-300 py-2.5 focus:border-gray-900 outline-none transition-colors duration-200 text-gray-900 bg-transparent text-[15px]"
    />
  </div>
);

// ─── Phone Field with Globe + Chevron ─────────────────────────────────────────
const PhoneField = () => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-gray-500">
      Phone Number <span className="text-gray-400">*</span>
    </label>
    <div className="flex items-center border-b border-gray-300 focus-within:border-gray-900 transition-colors duration-200 py-2.5 gap-1">
      <button
        type="button"
        className="flex items-center gap-0.5 text-gray-500 hover:text-gray-700 shrink-0 transition-colors"
      >
        <Globe className="w-[18px] h-[18px]" />
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
      <input
        type="tel"
        className="w-full outline-none text-gray-900 bg-transparent text-[15px] ml-1"
      />
    </div>
  </div>
);

// ─── Arched Image ─────────────────────────────────────────────────────────────
const ArchImage = () => (
  <div className="relative flex items-center justify-center w-full">
    {/* Soft oval background blob */}
    <div
      className="absolute rounded-full bg-gray-100"
      style={{
        width: '78%',
        height: '72%',
        top: '14%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
      }}
    />
    {/* Arch frame */}
    <div
      className="relative z-10 overflow-hidden shadow-2xl bg-white"
      style={{
        borderRadius: '9999px 9999px 12px 12px',
        width: 'min(400px, 90%)',
        aspectRatio: '4 / 5',
      }}
    >
      <img
        src={roomImg}
        alt="Luxury Interior"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

// ─── Main ContactSection ───────────────────────────────────────────────────────
export default function ContactSection() {
  return (
    <section className="bg-white min-h-screen py-16 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

        {/* Left: Arched Image */}
        <div className="w-full lg:w-[44%] flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px]">
            <ArchImage />
          </div>
        </div>

        {/* Right: Header + Form */}
        <div className="w-full lg:w-[56%]">
          <header className="mb-10">
            <h1 className="text-[2.6rem] md:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-5">
              Do you have any questions or comments? We are happy to help you!
            </h1>
            <p className="text-gray-500 leading-relaxed text-[15px] max-w-lg">
              Are you interested in our services or would you like to receive more information
              about certain matters? We are happy to answer all your questions! Contact us
              below and we will get back to you as soon as possible.
            </p>
          </header>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-0">
            {/* Row 1: Voornaam + Achternaam */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              <InputField label="First Name" />
              <InputField label="Last Name" />
            </div>

            {/* Row 2: Email + Telefoonnummer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-6">
              <InputField label="Email" type="email" />
              <PhoneField />
            </div>

            {/* Row 3: Textarea */}
            <div className="flex flex-col gap-1 mb-9">
              <label className="text-sm text-gray-500">Comment or question</label>
              <textarea
                placeholder="Enter your message here"
                rows={1}
                className="border-b border-gray-300 py-2.5 focus:border-gray-900 outline-none transition-colors duration-200 text-gray-900 placeholder-gray-300 resize-none bg-transparent text-[15px]"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-[#c2a28a] hover:bg-[#b08d73] active:bg-[#9e7a62] text-white px-11 py-3 rounded-full transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg tracking-wide"
              >
                Send
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
