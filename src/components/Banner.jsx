import { useRef } from "react";

const Banner = () => {
    const bannerRef = useRef(null);

    return (
        <div ref={bannerRef} className="relative text-center mb-8">
            {/* Sezione con immagine statica */}
            <div
                className="h-96 bg-cover"
                style={{
                    backgroundImage: "url('/img/banner_nsc.webp')",
                    backgroundPosition: "center", // Posizione fissa per immagine statica
                }}
            >
                <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-15">
                </div>
            </div>
        </div>
    );
};

export default Banner;
