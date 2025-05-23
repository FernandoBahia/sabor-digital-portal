
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Contato</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos sempre prontos para atendê-lo. Fale conosco através de nossos canais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Informações</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Endereço</h5>
                    <p className="text-gray-600">Rua das Delícias, 123<br />Centro - São Paulo, SP<br />CEP: 01234-567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Telefone</h5>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">E-mail</h5>
                    <p className="text-gray-600">contato@saborarte.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h5>
                    <p className="text-gray-600">
                      Segunda a Quinta: 18h às 23h<br />
                      Sexta e Sábado: 18h às 00h<br />
                      Domingo: 12h às 22h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais e Ações */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Redes Sociais</h4>
              <p className="text-gray-600 mb-8">
                Siga-nos nas redes sociais e fique por dentro das novidades, promoções e eventos especiais!
              </p>

              <div className="grid gap-4">
                <a 
                  href="https://instagram.com/saborarte" 
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Instagram</h5>
                    <p className="text-gray-600">@saborarte</p>
                  </div>
                </a>

                <a 
                  href="https://facebook.com/saborarte" 
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Facebook className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Facebook</h5>
                    <p className="text-gray-600">Sabor & Arte Restaurante</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5511999999999" 
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-green-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">WhatsApp</h5>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-2xl shadow-lg text-white">
              <h4 className="text-2xl font-bold mb-4">Faça sua Reserva</h4>
              <p className="mb-6 opacity-90">
                Garante já sua mesa e viva uma experiência gastronômica inesquecível!
              </p>
              <Button 
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Reservar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
