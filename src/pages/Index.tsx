
import { useState } from "react";
import { MapPin, Phone, Instagram, Facebook, MessageCircle, Star, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/ProductCarousel";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-amber-100">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-amber-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Sabor & Arte
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Início
              </button>
              <button onClick={() => scrollToSection('historia')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Nossa História
              </button>
              <button onClick={() => scrollToSection('cardapio')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Cardápio
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Contato
              </button>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Reservar Mesa
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-amber-100 py-4 animate-fade-in">
              <div className="flex flex-col space-y-4 px-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">
                  Início
                </button>
                <button onClick={() => scrollToSection('historia')} className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">
                  Nossa História
                </button>
                <button onClick={() => scrollToSection('cardapio')} className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">
                  Cardápio
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-amber-600 transition-colors font-medium py-2">
                  Contato
                </button>
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-lg mt-4">
                  Reservar Mesa
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-fade-in">
              Experiência Gastronômica Única
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Onde tradição e inovação se encontram para criar momentos inesquecíveis à mesa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button 
                onClick={() => scrollToSection('cardapio')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ver Cardápio
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contato')}
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Fazer Reserva
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id="historia" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossa <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">História</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Há mais de 20 anos, o <strong>Sabor & Arte</strong> nasceu do sonho de uma família apaixonada pela gastronomia. 
                Começamos como um pequeno restaurante familiar e hoje somos referência na cidade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa filosofia sempre foi simples: ingredientes frescos, receitas tradicionais e um toque de inovação. 
                Cada prato conta uma história, cada sabor desperta uma emoção.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoje, continuamos a tradição com a mesma paixão do primeiro dia, oferecendo uma experiência única 
                que combina o melhor da culinária tradicional com toques contemporâneos.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9/5 - Mais de 2000 avaliações</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Interior do restaurante" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Produtos/Cardápio Section */}
      <section id="cardapio" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nossos <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Pratos</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada prato é uma obra de arte culinária, preparado com ingredientes selecionados e muito amor
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Contato Section */}
      <ContactSection />

      {/* Mapa Section */}
      <MapSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <ChefHat className="h-8 w-8 text-amber-400" />
            <h4 className="text-2xl font-bold">Sabor & Arte</h4>
          </div>
          <p className="text-gray-400 mb-6">
            Onde cada refeição é uma experiência inesquecível
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://instagram.com" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-amber-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://wa.me/5511999999999" className="text-gray-400 hover:text-amber-400 transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Sabor & Arte. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
