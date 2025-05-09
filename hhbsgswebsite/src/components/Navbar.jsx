import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-800">
            Brand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">About</a>
            <a href="#" className="text-gray-600 hover:text-black">Services</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-600 focus:outline-none">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <a href="#" className="block text-gray-600 hover:text-black">Home</a>
          <a href="#" className="block text-gray-600 hover:text-black">About</a>
          <a href="#" className="block text-gray-600 hover:text-black">Services</a>
          <a href="#" className="block text-gray-600 hover:text-black">Contact</a>
        </div>
      )}
    </nav>
  );
}
