import { motion } from 'motion/react';
import { Wrench, Fuel, Car, Disc, Hammer, Tent, Truck, Coffee } from 'lucide-react';

const services = [
  {
    title: "Auto Repair",
    description: "Complete safety checks and repairs to ensure your vehicle is road-ready and reliable.",
    icon: Wrench,
    color: "bg-blue-500"
  },
  {
    title: "Gas Station",
    description: "Fill up your tank with the cheapest gas prices on Weno. Quality fuel for less.",
    icon: Fuel,
    color: "bg-orange-500"
  },
  {
    title: "Tire Repair",
    description: "Flat tire? Worn tread? We fix and replace tires to keep you rolling safely.",
    icon: Disc,
    color: "bg-slate-700"
  },
  {
    title: "Car Wash",
    description: "Keep your ride shining with our thorough car wash services at a great price.",
    icon: Car,
    color: "bg-cyan-500"
  },
  {
    title: "Welding & Fabrication",
    description: "See Jojo for metal welding, gate repairs, and custom BBQ stoves (repair or new).",
    icon: Hammer,
    color: "bg-red-500"
  },
  {
    title: "Event Rentals",
    description: "Hosting a small gathering? We rent out tents and chairs for your special occasions.",
    icon: Tent,
    color: "bg-green-500"
  },
  {
    title: "Towing Service",
    description: "Stuck on the road? We offer reliable towing services at affordable rates.",
    icon: Truck,
    color: "bg-yellow-500"
  },
  {
    title: "Coffee & Lounge",
    description: "Waiting for your car? Come by for a fresh cup of coffee and relax in our lounge.",
    icon: Coffee,
    color: "bg-amber-700"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of automotive and general services to meet your needs. 
            Quality work at prices you can afford.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
