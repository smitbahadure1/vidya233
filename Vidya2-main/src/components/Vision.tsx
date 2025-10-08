import { Target } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-32 bg-[#0B0B0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-8">
              <Target className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-sm text-orange-400 font-medium">Our Mission</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Making Skill India truly multilingual
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Arcane.AI isn't just a product. It's a movement to make vocational learning
              accessible to every Indian, in every language.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 mt-2 flex-shrink-0" />
                <div className="text-gray-400">Democratize access to quality skill training</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 mt-2 flex-shrink-0" />
                <div className="text-gray-400">Preserve and celebrate regional languages</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 mt-2 flex-shrink-0" />
                <div className="text-gray-400">Empower rural and underserved communities</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 mt-2 flex-shrink-0" />
                <div className="text-gray-400">Bridge the gap to employment opportunities</div>
              </div>
            </div>

            <button className="px-6 py-4 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
              Partner with Us
            </button>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#13131A] border border-white/10 p-8">
              <div className="text-gray-400 text-sm mb-6">22 Official Languages</div>
              <div className="space-y-2">
                {[
                  'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'मराठी', 'ગુજરાતી',
                  'ಕನ್ನಡ', 'മലയാളം', 'ଓଡ଼ିଆ', 'ਪੰਜਾਬੀ', 'অসমীয়া', 'اردو'
                ].map((lang, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5">
                    <div className="w-6 h-6 border border-orange-500/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-orange-500" />
                    </div>
                    <span className="text-white font-medium">{lang}</span>
                  </div>
                ))}
                <div className="text-gray-500 text-sm pt-4">+ 10 more languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
