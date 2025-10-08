import { TrendingUp } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-[#0B0B0F] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-green-500" />
            <span className="text-sm text-green-400 font-medium">Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            Real results from training providers using VidyaVaani
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#13131A] border border-white/10 p-10">
            <div className="text-sm text-gray-400 mb-4">Traditional Translation</div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Time</span>
                  <span className="text-red-400 font-bold">4-6 months</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-red-500 w-11/12"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Cost</span>
                  <span className="text-red-400 font-bold">₹2,40,000</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-red-500 w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Languages</span>
                  <span className="text-red-400 font-bold">2-3</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-red-500 w-1/4"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#13131A] border border-orange-500/30 p-10">
            <div className="text-sm text-orange-400 mb-4">With Arcane.AI</div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Time</span>
                  <span className="text-green-400 font-bold">2-3 days</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-green-500 w-1/12"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Cost</span>
                  <span className="text-green-400 font-bold">₹72,000</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-green-500 w-1/3"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Languages</span>
                  <span className="text-green-400 font-bold">22+</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-green-500 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#13131A] border border-white/10 p-8 text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">10x</div>
            <div className="text-gray-400">Faster localization</div>
          </div>

          <div className="bg-[#13131A] border border-white/10 p-8 text-center">
            <div className="text-5xl font-bold text-green-500 mb-2">70%</div>
            <div className="text-gray-400">Cost savings</div>
          </div>

          <div className="bg-[#13131A] border border-white/10 p-8 text-center">
            <div className="text-5xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-gray-400">Accessibility coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
