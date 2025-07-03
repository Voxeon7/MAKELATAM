import React, { useState, useEffect } from 'react';
import { Star, Check, Shield, Mail, CreditCard, Sparkles, Palette, Gift, Users, ArrowRight, Heart, Eye, Zap, BookOpen, Award, Clock, Target, ChevronDown, Play, GraduationCap, TrendingUp, UserCheck } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Ana Carolina",
      location: "São Paulo, Brasil",
      text: "Finalmente encontré productos que realmente me quedan bien. La guía me ahorró cientos de dólares.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mariana Silva", 
      location: "Ciudad de México, México",
      text: "Como consultora de imagen, esta guía se convirtió en mi herramienta indispensable.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Fernanda Costa",
      location: "Buenos Aires, Argentina", 
      text: "Nunca más compré un labial que no uso. La organización por paletas es perfecta.",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Ahorra Dinero",
      description: "Evita compras equivocadas y productos que no usarás nunca más"
    },
    {
      icon: Clock,
      title: "Ahorra Tiempo",
      description: "Encuentra productos perfectos sin buscar por horas en tiendas"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Productos testados y compatibles con tu paleta personal"
    }
  ];

  const included = [
    {
      title: "Guía Principal Completa",
      description: "Más de 400 productos de maquillaje organizados por paleta de colores: bases, labiales, rubores, iluminadores, sombras y más. Todo lo que necesitas para crear looks perfectos.",
      highlight: "Valor: $97",
      icon: BookOpen,
      image: "/B1.png"
    },
    {
      title: "Bonus #1: Guía Especializada de Bases",
      description: "Aprende a elegir la base perfecta para tu subtono de piel. Incluye técnicas de aplicación y combinaciones ideales - nunca más te equivoques con tu base.",
      highlight: "Valor: $47",
      icon: Palette,
      image: "/B2.png"
    },
    {
      title: "Bonus #2: Actualizaciones Trimestrales por 1 Año",
      description: "Mantente al día con las últimas tendencias y lanzamientos. Recibirás actualizaciones cada 3 meses con nuevos productos y técnicas sin costo adicional.",
      highlight: "Valor: $97",
      icon: Gift,
      image: "/B3.png"
    },
    {
      title: "Bonus #3: Soporte Personalizado VIP",
      description: "Acceso directo a nuestro equipo de expertos en coloración personal. Resuelve todas tus dudas por email con respuesta garantizada en 24 horas.",
      highlight: "Valor: $67",
      icon: Mail,
      image: null
    }
  ];

  const expertCredentials = [
    {
      icon: GraduationCap,
      title: "Certificación Internacional",
      description: "Especialista certificada en Coloración Personal y Análisis de Imagen"
    },
    {
      icon: TrendingUp,
      title: "+12 Años de Experiencia",
      description: "Más de una década transformando la imagen de mujeres profesionales"
    },
    {
      icon: UserCheck,
      title: "+5,000 Clientas Atendidas",
      description: "Miles de mujeres han transformado su relación con el maquillaje"
    },
    {
      icon: Award,
      title: "Reconocimiento Internacional",
      description: "Consultora de imagen para marcas de belleza y revistas especializadas"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo recibo la guía después del pago?",
      answer: "Inmediatamente después de confirmar tu pago, recibirás por email las credenciales de acceso al área de miembros exclusiva donde podrás descargar tu guía completa y todos los bonos incluidos."
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer: "Aceptamos tarjeta de crédito (Visa, Mastercard, American Express) con opción de hasta 3 cuotas sin interés, y también transferencia bancaria. Todos los pagos son procesados de forma 100% segura."
    },
    {
      question: "¿La guía realmente se actualiza?",
      answer: "¡Absolutamente! Durante todo el año de tu compra, recibirás actualizaciones trimestrales con nuevos productos, tendencias y lanzamientos del mercado, completamente gratis."
    },
    {
      question: "¿Qué pasa si tengo dudas después de la compra?",
      answer: "Tendrás acceso completo a nuestro soporte personalizado por email. Nuestro equipo especializado en coloración personal responderá todas tus preguntas en un máximo de 24 horas."
    },
    {
      question: "¿La guía funciona para todas las edades?",
      answer: "Sí, nuestra metodología de paletas estacionales funciona para mujeres de todas las edades. Los principios de coloración personal son universales y atemporales."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-transparent to-amber-100/30"></div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className={`text-center space-y-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Header Content */}
            <div className="space-y-12">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full px-6 py-3 border border-rose-200/50">
                <Sparkles className="w-5 h-5 text-rose-600" />
                <span className="text-sm font-medium text-rose-700 tracking-wide">Guía Exclusiva y Personalizada</span>
              </div>
              
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
                  Descubre los
                  <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                    Maquillajes Perfectos
                  </span>
                  <span className="block text-4xl lg:text-5xl text-gray-700 mt-4 font-light">
                    para Tu Paleta de Colores
                  </span>
                </h1>

                {/* Product Showcase - Updated with new image */}
                <div className="relative max-w-lg mx-auto">
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-3xl blur opacity-20"></div>
                    <div className="relative">
                      <img 
                        src="/maquiagem_cartela_de_cores_coloracao_pessoal.png" 
                        alt="Guía Profesional de Maquillaje - Paletas Estacionales" 
                        className="rounded-2xl w-full shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900">4.9</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">+2.847 clientas satisfechas</p>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-4 shadow-xl text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">+400</div>
                      <div className="text-xs font-medium opacity-90">Productos</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Más de 400 productos cuidadosamente organizados por paletas estacionales. 
                  <span className="font-medium text-gray-800"> Nunca más desperdicies dinero en compras equivocadas.</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-8">
              <button className="group bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:from-rose-700 hover:via-pink-700 hover:to-amber-700 text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                <span className="flex items-center justify-center space-x-3">
                  <span>Descubrir Mi Paleta Perfecta</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span>Pago 100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Acceso Inmediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section - NEW with 26.png */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            {/* Problem Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative max-w-md w-full">
                <img 
                  src="/26.png" 
                  alt="Problema: Falta de maquillajes para tu paleta de colores" 
                  className="rounded-2xl w-full shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Problem Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                  ¿Te Sientes Perdida al Elegir Maquillaje?
                </h2>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p className="font-light">
                    <span className="font-semibold text-rose-600">El 87% de las mujeres</span> compra productos 
                    de maquillaje que nunca usa porque no sabe cuáles son los correctos para su paleta de colores.
                  </p>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50">
                    <h3 className="font-bold text-gray-900 mb-4 text-xl">Los problemas más comunes:</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprar bases que no combinan con tu subtono</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Labiales que te hacen ver pálida o apagada</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Sombras que no resaltan tus ojos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Gastar dinero en productos equivocados</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - NEW with espanhol.png */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            {/* Solution Content */}
            <div className="space-y-8 text-center lg:text-left lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 border border-emerald-200/50">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700 tracking-wide">La Solución Definitiva</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                  Tu Guía Personalizada de Maquillaje
                </h2>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p className="font-light">
                    Imagina tener <span className="font-semibold text-emerald-600">acceso instantáneo</span> a más de 
                    400 productos de maquillaje perfectamente organizados según tu paleta de colores personal.
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg border border-emerald-100/50">
                    <h3 className="font-bold text-gray-900 mb-4 text-xl">Con esta guía conseguirás:</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Elegir productos perfectos en segundos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Ahorrar cientos de dólares en compras equivocadas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Lucir radiante con cada look que crees</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Sentirte segura con tus decisiones de belleza</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Image */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative max-w-md w-full">
                <img 
                  src="/espanhol.png" 
                  alt="Solución: Guía completa de maquillaje por paletas estacionales" 
                  className="rounded-2xl w-full shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                
                {/* Floating Success Badge */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">2024</div>
                    <div className="text-xs font-medium opacity-90">Actualizado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8 mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              ¿Por Qué Elegir Esta Guía?
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Transforma tu experiencia de compra y descubre una nueva forma de relacionarte con el maquillaje
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center p-10 bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside Content Preview Section - NEW with espanhol_(2).png */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 border border-blue-200/50">
              <Eye className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 tracking-wide">Vista Previa Exclusiva</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Mira Cómo Está Organizada Tu Guía
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Cada producto está perfectamente categorizado y etiquetado para que encuentres exactamente lo que necesitas
            </p>
          </div>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            {/* Preview Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative max-w-lg w-full">
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100/50">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-3xl blur opacity-20"></div>
                  <div className="relative">
                    <img 
                      src="/espanhol_(2).png" 
                      alt="Vista previa del contenido de la guía - Organización por categorías" 
                      className="rounded-2xl w-full shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Floating Organization Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs font-medium opacity-90">Organizado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                  Organización Inteligente por Categorías
                </h3>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p className="font-light">
                    Cada sección está diseñada para que encuentres rápidamente lo que buscas, 
                    sin perder tiempo navegando por productos que no te sirven.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="font-bold text-gray-900">Índice Detallado</span>
                    </div>
                    <p className="text-sm text-gray-600">Navegación rápida por páginas</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-bold text-gray-900">Etiquetas de Paleta</span>
                    </div>
                    <p className="text-sm text-gray-600">Identificación visual inmediata</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-bold text-gray-900">Marcas Premium</span>
                    </div>
                    <p className="text-sm text-gray-600">Solo las mejores opciones</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100/50">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="font-bold text-gray-900">Fácil Búsqueda</span>
                    </div>
                    <p className="text-sm text-gray-600">Encuentra productos en segundos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8 mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Historias de Transformación
            </h2>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-600 font-light">(+2.847 evaluaciones verificadas)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-light">{testimonial.location}</p>
                    <div className="flex space-x-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed text-lg font-light">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section - Mobile Optimized */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Tu Paquete Completo de Transformación
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed px-2">
              Un sistema completo valorado en <span className="font-bold text-gray-900">$308</span>, 
              diseñado para revolucionar tu relación con el maquillaje
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {included.map((item, index) => (
              <div key={index} className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl border border-gray-100/50 transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-6 md:space-y-0 md:flex md:items-start md:justify-between md:gap-8">
                  {/* Content Section */}
                  <div className="flex-1 space-y-4 md:space-y-0 md:flex md:items-start md:space-x-6">
                    {/* Image/Icon */}
                    <div className="flex justify-center md:justify-start">
                      {item.image ? (
                        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-8 h-8 md:w-10 md:h-10 text-rose-600" />
                        </div>
                      )}
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Value Badge */}
                  <div className="flex justify-center md:justify-end md:flex-shrink-0">
                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl px-4 py-2 md:px-6 md:py-3 border border-emerald-200/50 inline-block">
                      <span className="text-lg md:text-xl font-bold text-emerald-700 whitespace-nowrap">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value Summary - Mobile Optimized */}
          <div className="mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-rose-200/50 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                Valor Total del Paquete Completo
              </h3>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-2">
                $308
              </div>
              <p className="text-base md:text-lg text-gray-600 font-light px-2">
                Todo lo que necesitas para dominar el arte del maquillaje personalizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - NEW with 12.png */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 border border-purple-200/50">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-purple-700 tracking-wide">Marcas Premium Incluidas</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Trabajamos con las Mejores Marcas
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Más de 2024 productos actualizados de las marcas más reconocidas del mercado internacional
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-2xl w-full">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-3xl blur opacity-20"></div>
                <div className="relative">
                  <img 
                    src="/12.png" 
                    alt="Marcas premium incluidas: MAC, Dior, Chanel, Rare Beauty, NARS y más" 
                    className="rounded-2xl w-full shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              {/* Floating Brand Count Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs font-medium opacity-90">Marcas</div>
                </div>
              </div>

              {/* Floating Update Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-xl text-white">
                <div className="text-center">
                  <div className="text-xl font-bold">2024</div>
                  <div className="text-xs font-medium opacity-90">Actualizado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marcas Premium</h3>
              <p className="text-gray-600 font-light">Solo incluimos productos de marcas reconocidas mundialmente</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Siempre Actualizado</h3>
              <p className="text-gray-600 font-light">Nuevos lanzamientos y tendencias cada trimestre</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600 font-light">Productos testados y aprobados por expertos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Offer Section - Fully Mobile Optimized */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            
            {/* Main Title Section - Mobile Optimized */}
            <div className="text-center space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold leading-tight px-2">
                ¡Transforma tu Relación con el Maquillaje Hoy!
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl text-rose-100 leading-relaxed font-light max-w-4xl mx-auto px-4">
                Únete a miles de mujeres que ya lograron resultados increíbles con este paquete exclusivo.
              </p>
            </div>
            
            {/* Main Offer Container - Mobile First Design */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 border border-white/20 shadow-2xl">
              
              {/* Mobile Layout: Stacked Vertically */}
              <div className="space-y-8 lg:hidden">
                
                {/* Image Section - Mobile */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <img 
                      src="/oferta-imagem-mockup-site-7-2-d951rxnRwOTwe45e.png" 
                      alt="Guía de Maquillaje 2025 - Actualización Trimestral" 
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>

                {/* Price Section - Mobile */}
                <div className="text-center space-y-4">
                  <p className="text-base text-rose-200 font-light">Valor Total del Paquete:</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="line-through text-rose-200 text-2xl font-light">$308</span>
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold text-yellow-300 drop-shadow-lg animate-pulse">$12</div>
                        <div className="text-sm text-yellow-200 font-medium mt-1">o 3 cuotas de $4.00</div>
                      </div>
                    </div>
                    <div className="bg-red-500/20 border border-red-300/30 rounded-xl px-3 py-2 inline-block">
                      <p className="text-sm md:text-base font-bold text-yellow-300">
                        96% de descuento - Solo por Tiempo Limitado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits List - Mobile */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-3 py-3 border border-white/20">
                    <Check className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-sm font-semibold">¡Ahorra $296 con esta oferta especial!</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-3 py-3 border border-white/20">
                    <Check className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-sm font-semibold">Menos que un labial de marca</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-3 py-3 border border-white/20">
                    <Check className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-sm font-semibold">Acceso inmediato a todos los recursos</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-3 py-3 border border-white/20">
                    <Shield className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span className="text-sm font-semibold">30 días de garantía incondicional</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-3 py-3 border border-white/20">
                    <Gift className="w-5 h-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm font-semibold">Bonos exclusivos valorados en $211</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-3 py-3 border border-white/20">
                    <Users className="w-5 h-5 text-pink-300 flex-shrink-0" />
                    <span className="text-sm font-semibold">Soporte VIP personalizado incluido</span>
                  </div>
                </div>
                
                {/* CTA Button - Mobile */}
                <div className="space-y-4">
                  <button className="group w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-amber-400/20 animate-pulse"></div>
                    <span className="relative flex items-center justify-center space-x-2">
                      <Check className="w-5 h-5" />
                      <span>¡OBTÉN TU TRANSFORMACIÓN!</span>https://pay.kiwify.com/zdRY0u2
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  {/* Trust Seals - Mobile */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="grid grid-cols-1 gap-3 text-center text-xs">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-amber-300 fill-current" />
                          <Star className="w-3 h-3 text-amber-300 fill-current" />
                          <Star className="w-3 h-3 text-amber-300 fill-current" />
                          <Star className="w-3 h-3 text-amber-300 fill-current" />
                          <Star className="w-3 h-3 text-amber-300 fill-current" />
                        </div>
                        <span className="font-semibold">+2.847 Mujeres Transformadas</span>
                      </div>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Shield className="w-4 h-4 text-emerald-300" />
                          <span className="font-semibold">Pago 100% Seguro</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">30</span>
                          </div>
                          <span className="font-semibold">Garantía de 30 Días</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout: Side by Side */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                
                {/* Left Side - Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative max-w-md">
                    <img 
                      src="/oferta-imagem-mockup-site-7-2-d951rxnRwOTwe45e.png" 
                      alt="Guía de Maquillaje 2025 - Actualización Trimestral" 
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Right Side - Offer Content */}
                <div className="space-y-10">
                  
                  {/* Price Section - Desktop */}
                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-rose-200 font-light">Valor Total del Paquete:</p>
                      <div className="flex items-center justify-center space-x-4">
                        <span className="line-through text-rose-200 text-3xl font-light">$308</span>
                        <div className="text-center">
                          <div className="text-6xl font-bold text-yellow-300 drop-shadow-lg animate-pulse">$12</div>
                          <div className="text-sm text-yellow-200 font-medium">o 3 cuotas de $4.00</div>
                        </div>
                      </div>
                      <div className="bg-red-500/20 border border-red-300/30 rounded-2xl px-4 py-2 inline-block">
                        <p className="text-lg font-bold text-yellow-300">
                          96% de descuento - Solo por Tiempo Limitado
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List - Desktop */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                      <Check className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                      <span className="text-base font-semibold">¡Ahorra $296 con esta oferta especial!</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                      <Check className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                      <span className="text-base font-semibold">Menos que un labial de marca</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                      <Check className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                      <span className="text-base font-semibold">Acceso inmediato a todos los recursos</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                      <Shield className="w-6 h-6 text-blue-300 flex-shrink-0" />
                      <span className="text-base font-semibold">30 días de garantía incondicional</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                      <Gift className="w-6 h-6 text-amber-300 flex-shrink-0" />
                      <span className="text-base font-semibold">Bonos exclusivos valorados en $211</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                      <Users className="w-6 h-6 text-pink-300 flex-shrink-0" />
                      <span className="text-base font-semibold">Soporte VIP personalizado incluido</span>
                    </div>
                  </div>
                  
                  {/* CTA Button - Desktop */}
                  <div className="text-center space-y-6">
                    <button className="group w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold py-5 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-amber-400/20 animate-pulse"></div>
                      <span className="relative flex items-center justify-center space-x-3">
                        <Check className="w-6 h-6" />
                        <span>¡OBTÉN TU TRANSFORMACIÓN!</span>https://pay.kiwify.com/zdRY0u2
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    {/* Trust Seals - Desktop */}
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                        <div className="flex flex-col items-center space-y-1">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-amber-300 fill-current" />
                            <Star className="w-4 h-4 text-amber-300 fill-current" />
                            <Star className="w-4 h-4 text-amber-300 fill-current" />
                            <Star className="w-4 h-4 text-amber-300 fill-current" />
                            <Star className="w-4 h-4 text-amber-300 fill-current" />
                          </div>
                          <span className="font-semibold">+2.847 Mujeres Transformadas</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <Shield className="w-6 h-6 text-emerald-300" />
                          <span className="font-semibold">Pago 100% Seguro</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">30</span>
                          </div>
                          <span className="font-semibold">Garantía de 30 Días</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section - Laura Gómez */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full px-6 py-3 border border-rose-200/50">
              <Award className="w-5 h-5 text-rose-600" />
              <span className="text-sm font-medium text-rose-700 tracking-wide">Creado por una Experta</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Conoce a Tu Mentora en Coloración Personal
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Esta guía fue desarrollada por una de las consultoras de imagen más reconocidas de Latinoamérica
            </p>
          </div>

          {/* Expert Profile - Mobile First Design */}
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            {/* Expert Image - Mobile */}
            <div className="flex justify-center lg:order-1">
              <div className="relative max-w-md w-full">
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100/50">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-3xl blur opacity-20"></div>
                  <div className="relative">
                    <img 
                      src="/expert.png" 
                      alt="Laura Gómez - Especialista en Coloración Personal" 
                      className="rounded-2xl w-full shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                {/* Floating Achievement Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">12+</div>
                    <div className="text-xs font-medium opacity-90">Años</div>
                  </div>
                </div>

                {/* Floating Clients Badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">5K+</div>
                    <div className="text-xs font-medium opacity-90">Clientas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expert Content - Mobile */}
            <div className="space-y-8 lg:order-2">
              
              {/* Name and Title */}
              <div className="text-center lg:text-left space-y-4">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                  Laura Gómez
                </h3>
                <p className="text-xl text-rose-600 font-semibold">
                  Especialista en Coloración Personal & Consultora de Imagen
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">Evaluación 4.9/5</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Con más de <span className="font-semibold text-gray-900">12 años de experiencia profesional</span>, 
                  Laura ha transformado la relación de miles de mujeres con el maquillaje y la moda. 
                  Su metodología única combina técnicas internacionales de coloración personal con 
                  un enfoque práctico y accesible.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Reconocida por su trabajo con marcas de belleza internacionales y revistas especializadas, 
                  Laura ha dedicado su carrera a democratizar el acceso a la consultoría de imagen profesional.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {expertCredentials.map((credential, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <credential.icon className="w-6 h-6 text-rose-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 leading-tight">
                          {credential.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                          {credential.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-6 md:p-8 border border-rose-200/50">
                <div className="text-center space-y-4">
                  <div className="text-4xl text-rose-400 font-serif">"</div>
                  <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed font-light">
                    Mi misión es que cada mujer descubra su belleza única y se sienta segura 
                    al elegir productos que realmente la favorezcan. Esta guía es el resultado 
                    de años de investigación y experiencia práctica.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">L</span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">Laura Gómez</div>
                      <div className="text-sm text-gray-600">Fundadora & Consultora Principal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now below the expert section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8 mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Resolvemos todas tus dudas para que tomes la mejor decisión
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                <button
                  className="w-full text-left p-8 focus:outline-none focus:bg-gray-50 transition-colors group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 pr-8 leading-relaxed">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180 text-rose-600' : 'group-hover:text-rose-600'
                      }`} 
                    />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8">
                    <p className="text-gray-600 leading-relaxed text-lg font-light">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold">Guía Profesional de Maquillaje</h3>
              <p className="text-gray-400 font-light text-lg">Tu solución definitiva para elegir maquillaje perfecto</p>
            </div>
            
            <div className="border-t border-gray-800 pt-8 space-y-4 text-gray-400">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>Pago 100% seguro vía PerfectPay</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contacto@guiamaquillaje.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
              <div className="text-center text-sm pt-4">
                <p>© 2024 Guía Profesional de Maquillaje. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;