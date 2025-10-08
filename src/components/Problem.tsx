import { X } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="py-32 bg-[#0B0B0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 mb-6">
            <X className="w-3.5 h-3.5 text-red-500" />
            <span className="text-sm text-red-400 font-medium">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            Most skill training is locked behind an English-only barrier
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            70% of India's workforce prefers regional languages. 90% of training content is only in English.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#13131A] border border-white/10 p-6 sm:p-10">
            <div className="mb-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">₹2,40,000</div>
              <div className="text-gray-400">Average cost to manually translate one training module into 5 languages</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-red-500" />
                <div className="text-gray-400">Takes 3-6 months per language</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-red-500" />
                <div className="text-gray-400">Requires specialized translators for technical terms</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-red-500" />
                <div className="text-gray-400">Often culturally mismatched and inconsistent</div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-lg text-white">
                Result: <span className="text-red-400 font-semibold">Millions of learners shut out</span> from opportunities
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#13131A] border border-white/10 p-6">
              <div className="text-4xl font-bold text-red-400 mb-2">70%</div>
              <div className="text-sm text-gray-400">Of workforce prefers regional languages</div>
            </div>

            <div className="bg-[#13131A] border border-white/10 p-6">
              <div className="text-4xl font-bold text-orange-400 mb-2">90%</div>
              <div className="text-sm text-gray-400">Training content only in English</div>
            </div>

            <div className="bg-[#13131A] border border-white/10 p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">22</div>
              <div className="text-sm text-gray-400">Official Indian languages underserved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
