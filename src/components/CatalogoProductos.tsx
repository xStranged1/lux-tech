import React, { useState } from 'react';
import { ExternalLink, Zap, TrendingUp, Package, Search } from 'lucide-react';
import panelLedTecho from '../media/PanelLedTecho.jpg';
import panelLedBellalux from '../media/PanelLedBellalux.jpg';
import panelLedPhillips from '../media/PanelLedPhillips.jpg';
import tubosLed18w from '../media/TubosLed18w.jpg';
import tuboFluorescenteT8 from '../media/TuboFluorescenteT8.jpg';

interface Producto {
  id: number;
  nombre: string;
  potencia: number;
  flujoLuminoso: number;
  precio: number;
  link: string;
  imagen: string;
  categoria: 'panel' | 'tubo';
  tipo: 'LED' | 'Fluorescente';
  marca?: string;
}

interface CatalogoProductosProps {
  darkMode?: boolean;
  filtro?: 'todos' | 'comercial' | 'industrial' | 'exterior';
}

const mapaFiltro: Record<string, (p: Producto) => boolean> = {
  todos: () => true,
  comercial: (p) => p.categoria === 'panel',
  industrial: (p) => p.categoria === 'tubo',
  exterior: () => true, // puedes ajustar el filtro para exterior si lo deseas
};

export default function CatalogoProductos({ darkMode = false, filtro = 'todos' }: CatalogoProductosProps) {
  const [busqueda, setBusqueda] = useState('');

  const productos: Producto[] = [
    {
      id: 1,
      nombre: 'Panel LED Techo 60x60 36W Luz Neutra 4000K',
      potencia: 36,
      flujoLuminoso: 4320,
      precio: 53990,
      link: 'https://www.mercadolibre.com.ar/panel-led-techo-60x60-36w-luz-neutra-4000k-osram-ledvance-color-blanco/p/MLA19914635',
      imagen: panelLedTecho,
      categoria: 'panel',
      tipo: 'LED',
      marca: 'Ledvance/Osram'
    },
    {
      id: 2,
      nombre: 'Panel LED Bellalux 60x60 36W Neutro Embutir',
      potencia: 36,
      flujoLuminoso: 2880,
      precio: 28601,
      link: 'https://www.mercadolibre.com.ar/bellalux-panel-1-220v-blanco-luz-neutra-4000k-4000-k/p/MLA19834837',
      imagen: panelLedBellalux,
      categoria: 'panel',
      tipo: 'LED',
      marca: 'Bellalux'
    },
    {
      id: 3,
      nombre: 'Panel LED Philips 60x60 36W Pack x4',
      potencia: 36,
      flujoLuminoso: 3200,
      precio: 30728.75,
      link: 'https://tiendaobjetos.com.ar/productos/pack-x4-panel-de-embutir-led-36w-60x60-signify-philips/',
      imagen: panelLedPhillips,
      categoria: 'panel',
      tipo: 'LED',
      marca: 'Philips'
    },
    {
      id: 4,
      nombre: 'Tubos LED 18W 120 Cm Etheos Directo A 220W',
      potencia: 18,
      flujoLuminoso: 1600,
      precio: 3906.07,
      link: 'https://www.mercadolibre.com.ar/tubos-led-18w-120-cm-etheos-directo-a-220w-1600-lm/p/MLA23553117',
      imagen: tubosLed18w,
      categoria: 'tubo',
      tipo: 'LED',
      marca: 'Etheos'
    },
    {
      id: 5,
      nombre: 'Tubo Fluorescente T8 18W Luz Día',
      potencia: 18,
      flujoLuminoso: 1350,
      precio: 5803.31,
      link: 'https://www.mercadolibre.com.ar/tubo-fluorescente-t8-18w-luz-dia/p/MLA23799126',
      imagen: tuboFluorescenteT8,
      categoria: 'tubo',
      tipo: 'Fluorescente',
      marca: 'Genérico'
    }
  ];

  // Aplica filtro de categoría desde arriba
  const fnFiltro = mapaFiltro[filtro] || (() => true);
  let productosFiltrados = productos.filter(fnFiltro);
  // Aplica búsqueda
  if (busqueda) {
    productosFiltrados = productosFiltrados.filter(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca?.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  const formatPrecio = (precio: number) => (
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio)
  );

  return (
    <section className={`py-8 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Barra de búsqueda */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-lg transition-colors ${darkMode ? 'bg-slate-900 border-slate-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-slate-900 placeholder-gray-400'} border focus:outline-none focus:ring-2 focus:ring-amber-500`}
            />
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <a
              key={producto.id}
              href={producto.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl overflow-hidden transition-all duration-300 ${darkMode
                ? 'bg-slate-900 border border-slate-700 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10'
                : 'bg-white border border-gray-200 hover:border-amber-500/60 shadow-lg hover:shadow-xl'}`}
            >
              {/* Imagen del producto */}
              <div className={`relative h-48 overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon');
                    if (fallback) {
                      (fallback as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback icon (oculto por defecto) */}
                <div className="fallback-icon absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                  <Package className={`w-20 h-20 ${darkMode ? 'text-slate-700' : 'text-gray-300'}`} />
                </div>
                {/* Badge de tipo */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${producto.tipo === 'LED' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>{producto.tipo}</div>
                {/* Icono de enlace externo */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-slate-900" />
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Marca */}
                {producto.marca && <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>{producto.marca}</p>}
                {/* Nombre del producto */}
                <h3 className={`text-lg font-semibold mb-3 line-clamp-2 min-h-[3.5rem] ${darkMode ? 'text-white' : 'text-slate-900'}`}>{producto.nombre}</h3>
                {/* Especificaciones */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{producto.potencia}W</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{producto.flujoLuminoso.toLocaleString('es-AR')} lm</span>
                  </div>
                </div>
                {/* Precio y CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                  <div>
                    <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{formatPrecio(producto.precio)}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Precio aproximado</p>
                  </div>
                  <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm group-hover:gap-3 transition-all">
                    Ver en ML
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Sin resultados */}
        {productosFiltrados.length === 0 && (
          <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No se encontraron productos</p>
          </div>
        )}
      </div>
    </section>
  );
}