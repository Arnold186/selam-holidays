import React from "react";
import { Globe, DollarSign, Zap, Headphones, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Users size={28} />,
      title: "Expert Consultants",
      desc: "Passionate professionals dedicated to your unique needs.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <DollarSign size={28} />,
      title: "Best Value",
      desc: "Transparent pricing with no hidden fees and great deals.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Zap size={28} />,
      title: "Personalized",
      desc: "Tailor-made itineraries that fit your style and budget.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Headphones size={28} />,
      title: "24/7 Support",
      desc: "Always available to assist you, anytime, anywhere.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Globe size={28} />,
      title: "Local Insights",
      desc: "Deep local knowledge for authentic experiences.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: <Calendar size={28} />,
      title: "Global Reach",
      desc: "Extensive network for seamless worldwide travel.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="section-container bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Why Select Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">The Selam Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-colors"
            >
              <div className={`shrink-0 w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
