import { Activity, Heart, Droplet, Microscope, Beaker, Pill } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Complete Blood Count',
    description: 'Comprehensive analysis of blood cells including RBC, WBC, platelets, and hemoglobin levels.',
    tests: '15+ parameters',
    time: '24 hours',
  },
  {
    icon: Heart,
    title: 'Lipid Profile',
    description: 'Assess your cholesterol levels and cardiovascular health with detailed lipid analysis.',
    tests: '8 parameters',
    time: '24 hours',
  },
  {
    icon: Activity,
    title: 'Thyroid Function',
    description: 'Evaluate thyroid hormone levels (T3, T4, TSH) to diagnose thyroid disorders.',
    tests: '3 parameters',
    time: '48 hours',
  },
  {
    icon: Beaker,
    title: 'Liver Function Test',
    description: 'Comprehensive liver health assessment including enzymes, proteins, and bilirubin.',
    tests: '12 parameters',
    time: '24 hours',
  },
  {
    icon: Microscope,
    title: 'Diabetes Screening',
    description: 'Monitor blood glucose levels with HbA1c, fasting, and post-prandial tests.',
    tests: '5 parameters',
    time: '24 hours',
  },
  {
    icon: Pill,
    title: 'Vitamin Profile',
    description: 'Check vitamin D, B12, and other essential vitamins for optimal health.',
    tests: '8 parameters',
    time: '48 hours',
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Diagnostic Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of blood tests and diagnostic services with state-of-the-art technology and experienced professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{service.tests}</span>
                  <span className="flex items-center gap-1">
                    <Activity size={16} />
                    {service.time}
                  </span>
                </div>
                <button
                  onClick={scrollToContact}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Book This Test
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Health Package?</h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Our healthcare experts can create a personalized testing package based on your specific health needs and medical history.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg shadow-lg"
          >
            Consult Our Experts
          </button>
        </div>
      </div>
    </section>
  );
}
