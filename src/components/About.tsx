import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2787&auto=format&fit=crop"
                alt="Mechanic working"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl">
                  J
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Meet Joe</h4>
                  <p className="text-sm text-slate-500">Master Welder</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                "Whether it's a broken gate or a custom BBQ stove, I'll fix it right up for you ;)"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Your One-Stop Shop on Weno
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Micro Enterprises Inc., we are dedicated to keeping our community moving safely. 
              Located in the heart of Weno, Chuuk, we provide essential services that make your car life easier.
            </p>
            
            <div className="space-y-4">
              {[
                "Cheapest gas prices on the island",
                "Expert safety inspections and repairs",
                "Custom metal fabrication and welding",
                "Friendly service with a smile"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="italic text-slate-600">
                "Come by if you need your car checked up or come by for coffee if you have any more questions."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
