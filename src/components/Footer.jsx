import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const companyInfo = {
        name: "WineShop NSC",
        partitaIva: "01234567890",
        codiceAteco: "46.34.21",
        sede: "Via Example 123, 00100 Roma (RM)",
        pec: "wineShopNSC@pec.it",
        email: "info@wineshopnsc.it",
        telefono: "+39 06 1234 5678"
    };

    const siteMap = [
        { title: "Home", link: "/" },
        { title: "Servizi", link: "/servizi" },
        { title: "Enoteca", link: "/enoteca" },
        { title: "Eventi", link: "/eventi" },
        { title: "Contatti", link: "/contatti" }
    ];

    const legalLinks = [
        { title: "Privacy Policy", link: "/privacy" },
        { title: "Termini e Condizioni", link: "/termini" },
        { title: "Cookie Policy", link: "/cookie" }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12 px-4 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h3 className="font-bold mb-4">WineShop NSC</h3>
                    <p>{companyInfo.sede}</p>
                    <p>P.IVA: {companyInfo.partitaIva}</p>
                    <p>Cod. ATECO: {companyInfo.codiceAteco}</p>
                    <p>{companyInfo.email}</p>
                    <p>{companyInfo.telefono}</p>
                </div>

                {/* Sitemap */}
                <div>
                    <h3 className="font-bold mb-4">Sitemap</h3>
                    {siteMap.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            className="block text-gray-400 hover:text-white mb-2"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="font-bold mb-4">Legale</h3>
                    {legalLinks.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            className="block text-gray-400 hover:text-white mb-2"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center">
                    <h3 className="font-bold mb-4">Seguici</h3>
                    <div className="flex space-x-4 justify-center">
                        <FacebookIcon className="text-gray-400 hover:text-white cursor-pointer" />
                        <TwitterIcon className="text-gray-400 hover:text-white cursor-pointer" />
                        <InstagramIcon className="text-gray-400 hover:text-white cursor-pointer" />
                        <LinkedInIcon className="text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                    <div className="mt-4 text-sm text-gray-500 text-center">
                        © {new Date().getFullYear()} WineShop NSC. Tutti i diritti riservati.
                    </div>
                    <div className="text-xs text-gray-600 mt-2 text-center">
                        Design & Development by NSC Tech Solutions
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;