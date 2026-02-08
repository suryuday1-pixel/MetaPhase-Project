import { Calendar, Clock, Shield } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 to-white pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Metaphase Diagnostics Now in New Chandigarh
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Led by <strong>Dr. Vikas N Dubey, MD (KEM, Mumbai)</strong>,a
              seasoned professional with
              <strong> 10+ years of experience. Dr. Dubey</strong> previously
              served as lab head at
              <strong> Pathkind Diagnostics</strong> and <strong>SRL </strong>
              managing multiple labs across various states
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg"
              >
                Book Test Online
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
              >
                Schedule Home Visit
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fast Results</p>
                  <p className="text-sm text-gray-600">24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Certified Lab</p>
                  <p className="text-sm text-gray-600">ISO Accredited</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Easy Booking</p>
                  <p className="text-sm text-gray-600">Online & Phone</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Metaphase.jpeg"
                alt="Medical Laboratory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-600">
                    100%
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Accuracy Rate</p>
                  <p className="text-sm text-gray-600">
                    Trusted by 50,000+ patients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
