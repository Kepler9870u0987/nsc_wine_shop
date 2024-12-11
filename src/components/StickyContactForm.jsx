import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

const StickyContactForm = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scroll verso il basso e oltre 100px
            setIsSticky(true);
        } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
            // Scroll verso l'alto o sotto la soglia
            setIsSticky(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`transition-transform duration-300 ${isSticky
                    ? "fixed top-16 right-8 w-80 bg-white shadow-lg z-50"
                    : "relative"
                }`}
        >
            <ContactForm />
        </div>
    );
};

export default StickyContactForm;
