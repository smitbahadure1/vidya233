import { Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Multi-format support',
    desc: 'Translates text, audio, video, and assessment materials'
  },
  {
    title: 'Domain-specific accuracy',
    desc: 'Incorporates industry and skill-related terminology banks'
  },
  {
    title: 'Cultural adaptation',
    desc: 'Content adapted to regional contexts and learner needs'
  },
  {
    title: 'Speech accessibility',
    desc: 'Speech-to-text and text-to-speech for differently-abled learners'
  },
  {
    title: 'LMS integration',
    desc: 'APIs for NCVET, MSDE platforms, and partner systems'
  },
  {
    title: 'AI feedback loops',
    desc: 'Continuously improves translation quality through ML'
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-32 bg-[#13131A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-sm text-orange-400 font-medium">The Solution</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            AI-powered localization that understands context, culture, and industry
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            VidyaVaani doesn't just translate words. It adapts meaning, tone, and examples for each language and region, supporting NCVET's vision of inclusive vocational education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#13131A] p-8 hover:bg-[#1A1A22] transition-colors group">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-1 group-hover:border-orange-500 transition-colors">
                  <div className="w-2 h-2 bg-orange-500" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">{feature.title}</div>
                  <div className="text-sm text-gray-400">{feature.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0B0B0F] border border-white/10 p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">How it works</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-orange-500 font-bold text-xl">01</div>
                  <div>
                    <div className="text-white font-semibold mb-1">Upload content</div>
                    <div className="text-sm text-gray-400">PDFs, videos, audio files, or text documents</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-orange-500 font-bold text-xl">02</div>
                  <div>
                    <div className="text-white font-semibold mb-1">AI processes</div>
                    <div className="text-sm text-gray-400">Translates, localizes, and adapts to regional context</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-orange-500 font-bold text-xl">03</div>
                  <div>
                    <div className="text-white font-semibold mb-1">Deploy instantly</div>
                    <div className="text-sm text-gray-400">Integrate directly into your LMS or download files</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#13131A] border border-white/10 p-6">
              <div className="text-gray-400 text-sm mb-3">Example: Carpentry Course</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">English</span>
                  <span className="text-white">1 module</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">हिंदी, தமிழ், বাংলা</span>
                  <span className="text-orange-500 font-semibold">3 languages</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Time saved</span>
                  <span className="text-green-500 font-semibold">5 months</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Cost reduction</span>
                  <span className="text-green-500 font-semibold">₹1,80,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
