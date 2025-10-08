import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "Arcane.AI helped us deliver training in 5 languages within a week — unheard of before!",
    author: "Rajesh Kumar",
    role: "Training Partner, Skill India",
    location: "New Delhi"
  },
  {
    quote: "Learners in rural Maharashtra could finally understand our videos. That's real impact.",
    author: "Priya Deshmukh",
    role: "Vocational Educator",
    location: "Pune"
  },
  {
    quote: "The cultural adaptation is what sets this apart. It doesn't just translate, it truly localizes.",
    author: "Arjun Reddy",
    role: "EdTech Founder",
    location: "Hyderabad"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#13131A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-sm text-blue-400 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
            Educators and training providers trust Arcane.AI
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0B0B0F] border border-white/10 p-8 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="font-semibold text-white mb-1">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-400 mb-1">
                  {testimonial.role}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
