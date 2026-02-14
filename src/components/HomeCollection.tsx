import { Home, Clock, ShieldCheck, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Convenient & Safe",
    description:
      "Sample collection at your doorstep at your preferred time slot.",
  },
  {
    icon: ShieldCheck,
    title: "Trained Professionals",
    description:
      "Certified phlebotomists with years of experience and safety protocols.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose from morning, afternoon, or evening slots 7 days a week.",
  },
  {
    icon: CheckCircle,
    title: "Same Accuracy",
    description:
      "Home collection samples are processed with the same standards as lab visits.",
  },
];

const steps = [
  {
    number: "1",
    title: "Book Online",
    description:
      "Select your test and preferred time slot through our website or call us.",
  },
  {
    number: "2",
    title: "Confirmation",
    description:
      "Receive confirmation with preparation guidelines via SMS and email.",
  },
  {
    number: "3",
    title: "Sample Collection",
    description:
      "Our phlebotomist visits your home at the scheduled time for collection.",
  },
  {
    number: "4",
    title: "Get Results",
    description: "Receive detailed reports online within 24-48 hours.",
  },
];

export default function HomeCollection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home-collection"
      className="py-20 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Home Sample Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get lab-quality diagnostic tests done from the comfort of your home
            with our professional home collection service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Home Sample Collection"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Home Collection?
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={scrollToContact}
              className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg w-full shadow-lg"
            >
              Schedule Home Visit
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
