
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      
      {/* Produto em destaque */}
      <Card className="relative mb-8 overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-blue-100 border">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Imagem do produto */}
          <div className="h-64 md:h-auto relative">
            <img 
              src={produtos[currentIndex].imagem} 
              alt={produtos[currentIndex].nome}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black/30"></div>
          </div>
          
          {/* Detalhes do produto */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
              Produto em destaque
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
              {produtos[currentIndex].nome}
            </h3>
            <p className="text-gray-600 mb-4">
              {produtos[currentIndex].descricao}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-2xl font-bold text-blue-700">
                {produtos[currentIndex].preco}
              </span>
              <div className="flex items-center text-green-600">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Em estoque</span>
              </div>
            </div>
            <div className="mt-6">
              <Button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white">
                Encomendar agora
              </Button>
              <div className="mt-3 text-xs text-gray-500">
                Entrega para Florianópolis e região
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Navegação do carrossel */}
      <div className="flex justify-center gap-2 md:gap-4">
        <Button 
          variant="outline"
          size="icon"
          className="rounded-full border-blue-200 hover:border-blue-400 shadow-sm hover:shadow w-10 h-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 text-blue-700" />
        </Button>
        <div className="flex items-center gap-2">
          {produtos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentIndex === idx ? "bg-blue-700 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-blue-200 hover:border-blue-400 shadow-sm hover:shadow w-10 h-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 text-blue-700" />
        </Button>
      </div>
      
      {/* Produtos em grade */}
      <div className="mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-6 text-center">
          Outros produtos disponíveis
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.filter((_, idx) => idx !== currentIndex).slice(0, 3).map((produto) => (
            <Card key={produto.id} className="overflow-hidden hover:shadow-md transition-shadow border-blue-50">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg text-blue-900">{produto.nome}</h4>
                <p className="text-gray-600 text-sm mt-1 mb-3 line-clamp-2">{produto.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-700">{produto.preco}</span>
                  <div className="flex items-center text-green-600 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></div>
                    <span>Em estoque</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
            Ver todos os produtos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
