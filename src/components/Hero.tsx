import { useState, useEffect } from 'react';
import Logo from './Logo';

const languages = [
  'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'मराठी', 'ગુજરાતી', 'ಕನ್ನಡ', 'മലയാളം',
  'ଓଡ଼ିଆ', 'ਪੰਜਾਬੀ', 'অসমীয়া', 'اردو', 'संस्कृत', 'कोंकणी', 'नेपाली', 'বোডো'
];

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0B0B0F] overflow-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size="md" />
            <span className="text-xl font-semibold text-white">VidyaVaani</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</a>
            <a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a>
            <button className="px-5 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-5 h-0.5 bg-white transition-all"></div>
            <div className="w-5 h-0.5 bg-white transition-all"></div>
            <div className="w-5 h-0.5 bg-white transition-all"></div>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              <a href="#problem" className="block text-gray-400 hover:text-white transition-colors py-2">Problem</a>
              <a href="#solution" className="block text-gray-400 hover:text-white transition-colors py-2">Solution</a>
              <a href="#impact" className="block text-gray-400 hover:text-white transition-colors py-2">Impact</a>
              <button className="w-full px-5 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-8">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-sm text-orange-400 font-medium">MSDE × NCVET Initiative</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Training content
            <br />
            that speaks
            <br />
            <span className="text-orange-500">{languages[currentLang]}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            Breaking language barriers in vocational education. Our AI-powered localization engine makes skill training accessible across all 22+ Indian languages, supporting MSDE's vision of inclusive skilling.
          </p>


          <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">10x</div>
              <div>Faster</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">70%</div>
              <div>Cost Saved</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">22+</div>
              <div>Languages</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative bg-[#13131A] border border-white/10 p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-1">English Input</div>
                    <div className="text-white">Learn welding safety procedures</div>
                  </div>
                </div>

                <div className="border-l-2 border-orange-500/30 pl-4 ml-1 space-y-3">
                  <div className="text-orange-400 text-sm font-mono">AI Processing...</div>

                  <div className="bg-white/5 p-3 border-l-2 border-orange-500">
                    <div className="text-gray-400 text-xs mb-1">Hindi</div>
                    <div className="text-white text-sm">वेल्डिंग सुरक्षा प्रक्रियाएं सीखें</div>
                  </div>

                  <div className="bg-white/5 p-3 border-l-2 border-blue-500">
                    <div className="text-gray-400 text-xs mb-1">Tamil</div>
                    <div className="text-white text-sm">வெல்டிங் பாதுகாப்பு நடைமுறைகளைக் கற்றுக்கொள்ளுங்கள்</div>
                  </div>

                  <div className="bg-white/5 p-3 border-l-2 border-green-500">
                    <div className="text-gray-400 text-xs mb-1">Bengali</div>
                    <div className="text-white text-sm">ওয়েল্ডিং নিরাপত্তা পদ্ধতি শিখুন</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span>Processing in real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
