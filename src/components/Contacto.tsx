import { Mail, PhoneCall, MessageCircle } from "lucide-react";
import { Link } from "wouter";

interface ContactProps {
  darkMode: boolean;
}

export default function Contacto({ darkMode }: ContactProps) {
  const whatsappNumber = "5491122334455";
  const mensaje = encodeURIComponent("Hola! Estoy interesado en una cotización.");

  return (
    <section
      className={`relative py-24 md:py-32 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-amber-50 to-gray-100 text-slate-900"
      }`}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-32 right-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
            Hablemos
          </span>

          <h2
            className={`text-4xl md:text-6xl font-bold mt-6 mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Contactate con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Nosotros
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Estamos listos para ayudarte a iluminar tu proyecto con tecnología LED profesional y eficiente.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            <MessageCircle className="w-12 h-12 mx-auto text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Respuesta rápida y personalizada.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:tucorreo@ejemplo.com"
            className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            <Mail className="w-12 h-12 mx-auto text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Envíanos tu consulta y te responderemos en breve.
            </p>
          </a>

          {/* Llamada */}
          <a
            href="tel:+5491122334455"
            className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            <PhoneCall className="w-12 h-12 mx-auto text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Llamada Directa</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Habla con nosotros para asesoramiento inmediato.
            </p>
          </a>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <Link href="/lux-tech/cotizar">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-10 py-4 rounded-xl text-xl font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-amber-500/30 mx-auto">
              Cotizar Ahora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
