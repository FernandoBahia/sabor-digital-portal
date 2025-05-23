
import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MapSection = () => {
  const [showMap, setShowMap] = useState(false);
  const [mapboxToken, setMapboxToken] = useState("");

  const restaurantAddress = "Rua das Delícias, 123, Centro - São Paulo, SP";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantAddress)}`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossa <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Localização</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre-nos no coração da cidade, em um ambiente acolhedor e de fácil acesso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informações de Localização */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Endereço Completo</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {restaurantAddress}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-800">Como Chegar:</h5>
                <ul className="text-gray-600 space-y-2">
                  <li>• Metro: Estação Sé (Linha Azul) - 5 min caminhando</li>
                  <li>• Ônibus: Linhas 107, 205, 309 - Ponto em frente</li>
                  <li>• Carro: Estacionamento conveniado na Rua Paralela</li>
                  <li>• Uber/99: Procure por "Sabor & Arte Restaurante"</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open(googleMapsUrl, '_blank')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Navigation className="h-5 w-5" />
                <span>Abrir no Google Maps</span>
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => setShowMap(!showMap)}
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                {showMap ? 'Ocultar Mapa' : 'Ver Mapa Interativo'}
              </Button>
            </div>
          </div>

          {/* Mapa Interativo ou Placeholder */}
          <div className="relative">
            {!showMap ? (
              /* Map Placeholder */
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-12 text-center border-2 border-dashed border-amber-200">
                <MapPin className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Mapa Interativo</h4>
                <p className="text-gray-600 mb-6">
                  Clique no botão abaixo para visualizar nossa localização no mapa interativo
                </p>
                <Button 
                  onClick={() => setShowMap(true)}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full"
                >
                  Ativar Mapa
                </Button>
              </div>
            ) : (
              /* Map Configuration */
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100">
                {!mapboxToken ? (
                  <div className="text-center space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">Configurar Mapa</h4>
                    <p className="text-gray-600">
                      Para exibir o mapa interativo, insira seu token do Mapbox:
                    </p>
                    <div className="space-y-4">
                      <Input 
                        placeholder="Insira seu token do Mapbox"
                        value={mapboxToken}
                        onChange={(e) => setMapboxToken(e.target.value)}
                        className="border-amber-200 focus:border-amber-400"
                      />
                      <p className="text-sm text-gray-500">
                        Obtenha seu token gratuito em{" "}
                        <a 
                          href="https://mapbox.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:underline"
                        >
                          mapbox.com
                        </a>
                      </p>
                      <Button 
                        onClick={() => window.open(googleMapsUrl, '_blank')}
                        variant="outline"
                        className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                      >
                        Ou abrir no Google Maps
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Aqui seria renderizado o mapa do Mapbox */
                  <div className="h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                    <p className="text-gray-600">Mapa será carregado aqui com o token fornecido</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
