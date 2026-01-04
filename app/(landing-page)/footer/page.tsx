import { Award, Factory, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 pr-8">
            <div className="flex items-center text-white mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg mr-3">
                <Factory className="h-5 w-5 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter">PureDrop<span className="text-blue-600">.</span></span>
            </div>
            <p className="max-w-md mb-8 text-sm leading-relaxed text-slate-500">
              PureDrop Industries is a next-generation contract manufacturer for the dairy and functional beverage sectors. We are committed to sustainable practices and technological leadership.
            </p>
             <div className="flex space-x-4 opacity-40">
               {/* Mock Social Icons */}
               <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
               <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
               <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
             </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Accreditations</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-blue-600" /> ISO 22000:2018</li>
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-blue-600" /> FSSC 22000</li>
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-blue-600" /> HACCP & GMP</li>
              <li className="flex items-center"><Award className="w-4 h-4 mr-3 text-blue-600" /> FDA Registered</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact HQ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group cursor-pointer">
                <MapPin className="w-5 h-5 mr-3 text-slate-600 group-hover:text-blue-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">Industrial Park, Sector 7,<br />Springfield, IL 62704</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Phone className="w-5 h-5 mr-3 text-slate-600 group-hover:text-blue-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center group cursor-pointer">
                <Mail className="w-5 h-5 mr-3 text-slate-600 group-hover:text-blue-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">contracts@puredrop.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 text-xs font-medium tracking-wide flex flex-col md:flex-row justify-between items-center text-slate-600">
          <p>© 2024 PureDrop Industries Ltd.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Slavery Statement</a>
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookies</a>
          </div>
        </div>
      </footer>
  )
}
