import {
  Activity,
  Heart,
  Droplet,
  Microscope,
  Beaker,
  Pill,
} from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Complete Blood Count",
    description:
      "Comprehensive analysis of blood cells including RBC, WBC, platelets, and hemoglobin levels.",
    tests: "15+ parameters",
    time: "24 hours",
  },
  {
    icon: Heart,
    title: "Lipid Profile",
    description:
      "Assess your cholesterol levels and cardiovascular health with detailed lipid analysis.",
    tests: "8 parameters",
    time: "24 hours",
  },
  {
    icon: Activity,
    title: "Thyroid Function",
    description:
      "Evaluate thyroid hormone levels (T3, T4, TSH) to diagnose thyroid disorders.",
    tests: "3 parameters",
    time: "48 hours",
  },
  {
    icon: Beaker,
    title: "Liver Function Test",
    description:
      "Comprehensive liver health assessment including enzymes, proteins, and bilirubin.",
    tests: "12 parameters",
    time: "24 hours",
  },
  {
    icon: Microscope,
    title: "Diabetes Screening",
    description:
      "Monitor blood glucose levels with HbA1c, fasting, and post-prandial tests.",
    tests: "5 parameters",
    time: "24 hours",
  },
  {
    icon: Pill,
    title: "Vitamin Profile",
    description:
      "Check vitamin D, B12, and other essential vitamins for optimal health.",
    tests: "8 parameters",
    time: "48 hours",
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Diagnostic Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of blood tests and diagnostic services with
            state-of-the-art technology and experienced professionals.
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {service.tests}
                  </span>
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 md:p-8 text-white">
          <h1 className="text-lg md:text-2xl font-bold mb-4 text-center">
            Choose From a Range Of Highly Affordable Metaphase Packages.
          </h1>

          {/* MOBILE SAFE SCROLL */}
          <div className="w-full overflow-x-auto">
            <table className="min-w-[900px] w-full bg-white text-gray-800 text-[11px] md:text-sm border-collapse">
              {/* HEADER */}
              <thead className="bg-lime-400 text-black font-extrabold uppercase">
                <tr>
                  <th className="border border-blue-500 px-2 py-2 text-center">
                    TEST NAME (PARAMETER)
                  </th>
                  {[
                    "Screen",
                    "Basic",
                    "Advance",
                    "Super",
                    "Complete",
                    "Premium",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border border-blue-500 px-2 py-2 text-center whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* BODY – FULL DATA */}
              <tbody>
                {[
                  ["Complete Blood Count", 1, 1, 1, 1, 1, 1],
                  ["Blood Film (PBF)", 0, 0, 1, 1, 1, 1],
                  ["Renal Profile", 0, 1, 1, 1, 1, 1],
                  ["Thyroid Profile", 0, 1, 1, 1, 1, 1],
                  ["Lipid Profile", 0, 1, 1, 1, 1, 1],
                  ["Liver Function Test", 0, 1, 1, 1, 1, 1],
                  ["Sugar", 1, 1, 1, 1, 1, 1],
                  ["Urine Routine", 1, 1, 1, 1, 1, 1],
                  ["Electrolyte Study", 0, 0, 1, 1, 1, 1],
                  ["Calcium", 0, 0, 1, 1, 1, 1],
                  ["HbA1c", 0, 0, 1, 1, 1, 1],
                  ["Vitamin D", 0, 0, 0, 1, 1, 1],
                  ["Vitamin B12", 0, 0, 0, 1, 1, 1],
                  ["ESR", 0, 0, 0, 1, 1, 1],
                  ["Iron Studies", 0, 0, 0, 0, 1, 1],
                  ["CRP", 0, 0, 0, 0, 0, 1],
                  ["Amylase", 0, 0, 0, 0, 0, 1],
                  ["Lipase", 0, 0, 0, 0, 0, 1],
                  ["TSH", 1, 0, 0, 0, 0, 0],
                  ["Cholesterol", 1, 0, 0, 0, 0, 0],
                  ["SGOT (AST)", 1, 0, 0, 0, 0, 0],
                  ["SGPT (ALT)", 1, 0, 0, 0, 0, 0],
                  ["Creatinine", 1, 0, 0, 0, 0, 0],
                  ["Uric Acid", 1, 0, 0, 0, 0, 0],
                ].map((row, i) => (
                  <tr key={i}>
                    {/* LEFT COLUMN FIX */}
                    <td className="border border-blue-500 px-2 py-1 text-center font-semibold uppercase break-words">
                      {row[0]}
                    </td>

                    {row.slice(1).map((v, j) => (
                      <td
                        key={j}
                        className="border border-blue-500 text-center font-bold text-green-600"
                      >
                        {v ? "✓" : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              {/* FOOTER */}
              <tfoot className="bg-lime-400 font-extrabold uppercase">
                <tr>
                  <td className="border border-blue-500 px-2 py-2 text-center">
                    OFFER PRICE ₹
                  </td>
                  {["549", "1199", "1499", "1799", "2199", "2599"].map((p) => (
                    <td key={p} className="border border-blue-500 text-center">
                      {p}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-50"
            >
              Consult Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
