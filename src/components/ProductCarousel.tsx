
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Pescada Amarela",
      descricao: "Peixe de água salgada, saboroso e versátil para diversos preparos culinários",
      preco: "R$ 49,90/kg",
      imagem: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      nome: "Salmão Fresco",
      descricao: "Rico em ômega 3, ideal para preparos crus como sushi ou grelhados",
      preco: "R$ 89,90/kg",
      imagem: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      nome: "Camarão Rosa",
      descricao: "Fresco e selecionado, perfeito para moquecas, risotos e outros pratos especiais",
      preco: "R$ 95,90/kg",
      imagem: "https://images.unsplash.com/photo-1565280654386-36c3ea205191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      nome: "Polvo Limpo",
      descricao: "Já limpo e pronto para preparo, ideal para saladas e pratos mediterrâneos",
      preco: "R$ 75,90/kg",
      imagem: "https://images.unsplash.com/photo-1565843714144-d5a504320191?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      nome: "Ostras Frescas",
      descricao: "Ostras frescas da região, perfeitas para consumo in natura ou gratinadas",
      preco: "R$ 36,90/dúzia",
      imagem: "https://images.unsplash.com/photo-1627891079554-64206a399f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      nome: "Lula Limpa",
      descricao: "Lula já limpa e pronta para seu preparo favorito, fresca e de alta qualidade",
      preco: "R$ 42,90/kg",
      imagem: "https://images.unsplash.com/photo-1585545335512-777bba540557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % produtos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + produtos.length) % produtos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-2">Nossos Produtos</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Conheça nossa seleção de peixes frescos e frutos do mar direto do mar para sua mesa
      </p>
      
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-blue-100">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {produtos.map((produto) => (
            <div key={produto.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2">
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <span className="text-sm font-semibold text-blue-700 mb-2">Produto selecionado</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                    {produto.nome}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {produto.descricao}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
                    <div>
                      <span className="block text-sm text-gray-500">Preço</span>
                      <span className="text-2xl font-bold text-blue-700">
                        {produto.preco}
                      </span>
                    </div>
                    <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
                    <div>
                      <span className="block text-sm text-gray-500">Disponibilidade</span>
                      <span className="flex items-center text-green-600">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Em estoque
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium px-8 py-2.5">
                      Encomendar agora
                    </Button>
                    <div className="text-sm text-gray-500">
                      <span className="block">Compra mínima pode ser aplicada</span>
                      <span>Entregas para Florianópolis e região</span>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={prevSlide}
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-400 shadow-lg z-10 w-12 h-12 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-blue-700" />
      </Button>
      
      <Button
        onClick={nextSlide}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-400 shadow-lg z-10 w-12 h-12 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-blue-700" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {produtos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-700 scale-125' 
                : 'bg-gray-300 hover:bg-blue-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
