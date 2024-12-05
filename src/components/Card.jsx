import React from 'react';
import { Wine, Calendar, Award } from 'lucide-react';

const Card = () => {
    const sectionData = [
        {
            title: 'Servizi',
            description: 'Un viaggio sensoriale attraverso vini accuratamente selezionati',
            icon: Wine,
            accent: 'red'
        },
        {
            title: 'Eventi',
            description: 'Esperienze esclusive e appuntamenti dedicati agli amanti del vino',
            icon: Calendar,
            accent: 'amber'
        },
        {
            title: 'Enoteca',
            description: 'Etichette rare e preziose, un patrimonio enologico unico',
            icon: Award,
            accent: 'purple'
        }
    ];

    return (
        <main className="mt-16 mb-[352px] min-h-[calc(100vh-64px-352px)] bg-gray-50">
            <div className="h-full w-full flex items-center justify-center py-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                        {sectionData.map((section, index) => {
                            const Icon = section.icon;
                            const accentColor = {
                                text: `text-${section.accent}-900`,
                                border: `border-${section.accent}-200`,
                                bg: `bg-${section.accent}-50`
                            };

                            return (
                                <div
                                    key={index}
                                    className={`
                                        group relative p-8 
                                        border border-neutral-200 rounded-2xl
                                        transition-all duration-500 ease-in-out
                                        hover:shadow-xl hover:border-neutral-300
                                        overflow-hidden
                                        cursor-pointer
                                        bg-white
                                        w-full max-w-sm
                                    `}
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 
                                        transition-opacity duration-500 
                                        bg-gradient-to-br from-transparent via-white to-transparent">
                                    </div>

                                    <div className="relative z-10 space-y-6 text-center">
                                        <div className={`
                                            mx-auto inline-flex items-center justify-center
                                            w-20 h-20 rounded-full 
                                            border-2 ${accentColor.border}
                                            transition-all duration-500
                                            group-hover:rotate-6
                                            group-hover:scale-110
                                        `}>
                                            <Icon className={`w-10 h-10 ${accentColor.text}`} strokeWidth={1.5} />
                                        </div>

                                        <div className="space-y-4">
                                            <h2 className={`
                                                text-2xl font-light tracking-tight
                                                ${accentColor.text}
                                                transition-colors duration-300
                                            `}>
                                                {section.title}
                                            </h2>
                                            <p className="text-neutral-600 text-base leading-relaxed
                                                opacity-80 group-hover:opacity-100 
                                                transition-opacity duration-300">
                                                {section.description}
                                            </p>
                                        </div>

                                        <div className="pt-2">
                                            <span className={`
                                                inline-flex items-center 
                                                text-sm font-medium
                                                ${accentColor.text}
                                                group-hover:underline
                                                transition-all duration-300
                                            `}>
                                                Scopri
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 ml-1 
                                                        transition-transform duration-300 
                                                        group-hover:translate-x-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Card;