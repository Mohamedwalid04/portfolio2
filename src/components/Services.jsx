import { FaBusinessTime, FaLaptopCode, FaShoppingCart, FaNewspaper, FaRocket, FaLayerGroup } from "react-icons/fa";
function Services() {

    const services = [
        {
            icon: <FaBusinessTime />,
            title: "Business Websites",
            content: "Professional static or dynamic websites to represent your brand or services online.",
        },
        {
            icon: <FaLaptopCode />,
            title: "Portfolio Websites",
            content: "Creative and functional personal portfolios tailored for artists, developers, and professionals.",
        },
        {
            icon: <FaShoppingCart />,
            title: "E-commerce Stores",
            content: "Custom online stores with shopping carts and payment integration like Stripe or PayPal.",
        },
        {
            icon: <FaNewspaper />,
            title: "Blog or News Platforms",
            content: "Scalable content-based platforms for blogging, news, or publishing purposes.",
        },
        {
            icon: <FaRocket />,
            title: "Landing Pages",
            content: "Conversion-optimized landing pages for products, services, or marketing campaigns.",
        },
        {
            icon: <FaLayerGroup />,
            title: "Single Page Applications (SPAs)",
            content: "Dynamic SPAs using modern frameworks like React, Vue, or Angular.",
        },
    ];
    return (
        <section id="services" className="bg-[#1b1f24] py-16 text-white">
            <p className="text-blue-400 uppercase font-semibold">services</p>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#262d34] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                            <div className="mb-4 flex justify-center text-2xl ">{service.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-lg  font-pixel text-parag">{service.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services
