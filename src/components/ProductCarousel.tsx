
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const produtos = [
    {
      id: 1,
      nome: "Risotto de Camarão",
      descricao: "Risotto cremoso com camarões frescos, temperos especiais e um toque de limão siciliano",
      preco: "R$ 89,90",
      imagem: "https://images.unsplash.com/photo-1563379091339-03246963d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      nome: "Salmão Grelhado",
      descricao: "Filé de salmão grelhado com crosta de ervas, acompanhado de legumes da estação",
      preco: "R$ 79,90",
      imagem: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      nome: "Picanha Premium",
      descricao: "Picanha premium na brasa, acompanhada de farofa especial da casa e vinagrete",
      preco: "R$ 95,90",
      imagem: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      nome: "Pasta alla Carbonara",
      descricao: "Massa artesanal com molho carbonara tradicional, bacon e queijo parmesão",
      preco: "R$ 65,90",
      imagem: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      nome: "Paella Valenciana",
      descricao: "Paella tradicional espanhola com frutos do mar, açafrão e arroz bomba",
      preco: "R$ 120,90",
      imagem: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      nome: "Tiramisu da Casa",
      descricao: "Sobremesa italiana clássica com café espresso, mascarpone e cacau em pó",
      preco: "R$ 32,90",
      imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
    <div className="relative max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {produtos.map((produto) => (
            <div key={produto.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 bg-white">
                {/* Image */}
                <div className="relative h-80 md:h-96">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {produto.nome}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {produto.descricao}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-amber-600">
                      {produto.preco}
                    </span>
                    <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Pedir Agora
                    </Button>
                  </div>
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-amber-200 hover:border-amber-400 shadow-lg z-10 w-12 h-12 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-amber-600" />
      </Button>
      
      <Button
        onClick={nextSlide}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-amber-200 hover:border-amber-400 shadow-lg z-10 w-12 h-12 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-amber-600" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {produtos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-amber-600 scale-125' 
                : 'bg-gray-300 hover:bg-amber-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
