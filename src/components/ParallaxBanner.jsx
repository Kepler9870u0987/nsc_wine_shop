import { useEffect, useState } from "react";

const ParallaxBanner = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative text-center mb-8">
            {/* Sezione con immagine e effetto parallax */}
            <div
                className="h-96 bg-cover"
                style={{
                    backgroundImage: "url('/img/banner_nsc.webp')",
                    backgroundPositionY: `${offsetY * 0.5}px`, // Effetto parallax dinamico
                }}
            >
                <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-30">
                    <h1 className="text-4xl my-12 font-bold text-white mb-4">I nostri vini</h1>
                    <p className="text-xl text-gray-100">Scopri tutti i vini che abbiamo preparato per te</p>
                </div>
            </div>
        </div>
    );
};

export default ParallaxBanner;
