import React, { useState, useEffect, useMemo } from 'react';
import { Badge } from './ui/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import products from './products.json';
import Filtri from './Filtri';
import BestSellerCard from './BestSellerCard';  // Import the new BestSellerCard component

const WineCatalog = () => {
    const [wines, setWines] = useState([]);
    const [filteredWines, setFilteredWines] = useState([]);

    const getInitialFilters = () => ({
        category: 'all',
        priceRange: [0, 1000],
        onSale: false,
        types: {
            red: false,
            white: false,
            rose: false,
            champagne: false
        }
    });

    const [filters, setFilters] = useState(getInitialFilters());

    useEffect(() => {
        const formattedProducts = products.map((product, index) => ({
            id: index + 1,
            name: product.name,
            type: product.category,
            year: product.year,
            producer: product.producer,
            region: product.region,
            price: parseFloat(product.price),
            bestSeller: product.on_sale === "yes",
            image: product.image || 'https://www.signorvino.com/dw/image/v2/BLCF_PRD/on/demandware.static/-/Sites-SGV_EC_COM/default/dwbac52f09/images/VFB006782017-F.png?sw=250',
        }));
        setWines(formattedProducts);
        setFilteredWines(formattedProducts);
    }, []);

    const sortedAndFilteredWines = useMemo(() => {
        let result = filteredWines.filter(wine => {
            const typeSelected = Object.values(filters.types).some(v => v);
            const matchesType = !typeSelected || filters.types[wine.type];
            const inPriceRange = wine.price >= filters.priceRange[0] && wine.price <= filters.priceRange[1];
            const matchesSale = !filters.onSale || wine.bestSeller;

            return matchesType && inPriceRange && matchesSale;
        });

        return result;
    }, [filteredWines, filters]);

    const toggleTypeFilter = (type) => {
        setFilters(prev => ({
            ...prev,
            types: {
                ...prev.types,
                [type]: !prev.types[type]
            }
        }));
    };

    const toggleSaleFilter = () => {
        setFilters(prev => ({
            ...prev,
            onSale: !prev.onSale
        }));
    };

    const resetFilters = () => {
        setFilters(getInitialFilters());
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Best Sellers Section with Decorative Border and Subtle Background */}
            <section className="mb-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">I Più Venduti</h2>
                    <span className="text-sm text-gray-500">
                        {wines.filter(wine => wine.bestSeller).length} Vini in Evidenza
                    </span>
                </div>
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="relative"
                    >
                        {wines
                            .filter(wine => wine.bestSeller)
                            .map(wine => (
                                <SwiperSlide key={wine.id} className="flex justify-center items-center">
                                    <BestSellerCard wine={wine} />
                                </SwiperSlide>
                            ))
                        }
                        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-900 transition-colors" />
                        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-900 transition-colors" />
                    </Swiper>
                </div>
            </section>

            {/* All Wines Section with Clean, Minimalist Design */}
            <section className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Tutti i Vini
                    </h2>
                    <span className="text-sm text-gray-500">
                        {sortedAndFilteredWines.length} Vini Trovati
                    </span>
                </div>

                {/* Filters with top and bottom margin, sticky positioning */}
                <Filtri
                    className="my-8 sticky top-0 z-10 bg-white rounded-lg py-4 mb-16 shadow-sm"
                    filters={filters}
                    toggleTypeFilter={toggleTypeFilter}
                    toggleSaleFilter={toggleSaleFilter}
                    resetFilters={resetFilters}
                />

                {sortedAndFilteredWines.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
                        {sortedAndFilteredWines.map(wine => (
                            <ProductCard key={wine.id} wine={wine} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-lg">
                        Nessun vino trovato con questi filtri.
                    </div>
                )}
            </section>
        </div>
    );
};

// ProductCard component with modified design for best sellers
const ProductCard = ({ wine, isBestSeller = false }) => {
    const getWineBackgroundColor = (type) => {
        switch (type) {
            case 'red': return 'bg-red-800';
            case 'white': return 'bg-yellow-700';
            case 'rose': return 'bg-pink-700';
            case 'champagne': return 'bg-gray-700';
            default: return 'bg-gray-700';
        }
    };

    if (isBestSeller) {
        return (
            <article
                className={`p-5 min-h-[14.5rem] max-w-[24rem] w-full rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer relative overflow-hidden flex ${getWineBackgroundColor(wine.type)}`}
            >
                {/* Immagine del vino a sinistra */}
                <div className="w-1/2 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-white/30 rounded-full blur-xl" />
                    <img
                        src={wine.image}
                        alt={wine.name}
                        className="relative z-10 max-w-full max-h-full object-contain"
                    />
                </div>

                {/* Informazioni a destra */}
                <div className="w-1/2 pl-4 flex flex-col justify-between">
                    <h1 className="text-2xl text-gray-100 leading-snug mb-4">
                        {wine.name}
                    </h1>

                    <div className="flex-grow flex flex-col justify-center">
                        <div className="mb-2">
                            <p className="text-base">{wine.producer}</p>
                            <p className="font-bold text-base">{wine.region}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <span className="p-2 pl-0 font-bold text-sm">{wine.year}</span>
                        <span className="p-2 px-4 bg-gray-200 rounded-md text-sm hover:bg-orange-600 cursor-pointer hover:text-white text-black">
                            {wine.price}€
                        </span>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <div
            className="product-card bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl w-[138px]"
            style={{ height: '224px' }}
        >
            <div className="relative w-16 h-16 mb-3 mx-auto flex-grow flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full ${getWineBackgroundColor(wine.type)} opacity-80`} />
                <img
                    src={wine.image}
                    alt={wine.name}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[150%] max-h-[150%] object-contain rounded-full"
                />
            </div>

            <h3 className="text-center text-sm font-semibold mb-1">{wine.name}</h3>

            <p className="text-gray-600 text-center text-xs mb-2">{wine.year} | {wine.producer}</p>

            <div className="flex justify-between items-center w-full mt-auto">
                <p className="text-sm font-bold text-gray-900">{wine.price}€</p>
                <Badge className="w-fit p-1 text-xs rounded-lg text-white bg-gray-800">
                    {wine.type.charAt(0).toUpperCase()}
                </Badge>
            </div>
        </div>
    );
};

export default WineCatalog;