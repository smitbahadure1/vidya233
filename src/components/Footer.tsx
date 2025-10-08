import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo size="md" />
              <span className="text-xl font-bold text-white">VidyaVaani</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Breaking language barriers. Building skill equity.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@vidyavaani.com" className="text-gray-400 hover:text-white transition-colors">support@vidyavaani.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner Inquiry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2025 VidyaVaani. Making Skill India multilingual.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
