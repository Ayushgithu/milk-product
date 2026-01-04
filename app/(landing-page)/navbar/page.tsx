'use client';

import { ArrowRight, LucideFactory } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 supports-[backdrop-filter]:bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" >
              <div className="flex-shrink-0 flex items-center group cursor-pointer">
                <div className="bg-blue-600 p-1.5 rounded-md mr-3 group-hover:bg-blue-700 transition-all duration-300 shadow-sm shadow-blue-500/20">
                  <LucideFactory className="h-6 w-6 text-white" />
                </div>
                <span className="font-black text-xl tracking-tighter text-slate-900">PureDrop<span className="text-blue-600">.</span></span>
              </div>
            </Link>

            {/* Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-sm transition-all border ${
                      isActive(link.href)
                        ? 'text-blue-700 bg-blue-50/80 border-blue-100 font-bold'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-transparent font-medium'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="group bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 shadow-md hover:shadow-blue-500/25 flex items-center"
              >
                B2B Inquiries 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;