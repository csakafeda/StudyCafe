import React, { useState } from "react";
import backgroundImage from "../../pictures/coffee_beans.jpg";
import ContactForm from "./ContactForm";
import AboutUsSection from "./AboutUsSection";

const Home: React.FC = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleContactButtonClick = () => {
        setShowContactForm(true);
    };

    const handleCloseForm = () => {
        setShowContactForm(false);
    };

    return (
        <div className="bg-gray-100 flex flex-col min-h-screen justify-between">
            <div
                className="bg-image-container"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "50vh",
                }}
            >
                <div className="py-20 px-4 text-center">
                    <h1 className="text-4xl font-bold text-white tracking-wider">
                        Welcome to Study Cafe
                    </h1>
                    <p className="mt-2 text-white text-lg">
                        Serving the finest coffee since 2023
                    </p>
                </div>
            </div>
            <AboutUsSection />

            <div className="fixed bottom-4 right-4">
                {showContactForm ? (
                    <ContactForm onClose={handleCloseForm} />
                ) : (
                    <button
                        className="bg-sand text-white font-semibold py-5 px-6 rounded"
                        onClick={handleContactButtonClick}
                    >
                        Contact us
                    </button>
                )}
            </div>

            <div className="w-full text-center bg-camel static bottom-0">
                <p className="text-sm text-sand">
                    {new Date().getFullYear()} Study Cafe&copy;. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Home;