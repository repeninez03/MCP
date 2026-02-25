import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Coffee } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-orange-400 font-semibold tracking-wide uppercase text-sm">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Visit Us Today</h2>
            <p className="text-slate-400 text-lg mb-10">
              We're locateded at Fais on Weno, Chuuk FM. Stop by for repairs, gas, or just to say hello and grab a coffee.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-slate-400">Weno, Chuuk FM</p>
                  <p className="text-slate-500 text-sm mt-1">Near the main road just across I-Solutions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-slate-400">+691 330 2343</p>
                  <p className="text-slate-500 text-sm mt-1">email: microenterprise@gmail.com </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Opening Hours</h3>
                  <p className="text-slate-400">Monday - Friday: 8:00 AM - 5:30 PM</p>
                  <p className="text-slate-400">Saturday: 8:00 AM - 4:00 PM Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
              <div className="text-center p-8">
                <MapPin className="mx-auto text-slate-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-slate-300 mb-2">Map Location</h3>
                <p className="text-slate-500">
                  (Map integration would go here)
                  <br />
                  Weno, Chuuk FM
                </p>
              </div>
            </div>
            
            {/* Coffee Invite Overlay */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-6 right-6 bg-orange-500 p-6 rounded-2xl shadow-lg flex items-center gap-4"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <Coffee className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Coffee's on us!</h4>
                <p className="text-orange-100 text-sm">Come by for a chat and a fresh cup.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
