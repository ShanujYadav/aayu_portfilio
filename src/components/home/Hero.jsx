import React from 'react';
import profile from '../../assets/profile.JPG';

const Hero = () => {
    return (
        <section className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row w-full px-4 md:px-8">
                <div className="w-full md:w-3/5 flex flex-col justify-center items-start pt-0 md:pt-0 mb-6 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words leading-tight">
                        Hi, I'm Ayushi
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 text-justify">
                        Post graduated in the marketing field and innovative Digital Marketing leader with 2+ years of experience. Result-oriented and collaborative professional bringing expertise in brand management and social media engagement.
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-500 text-white py-2 px-5 rounded-md hover:bg-pink-600 transition duration-300 mb-8"
                    >
                        View Resume
                    </a>
                </div>
                <div className="w-full md:w-2/5 flex items-center justify-center mt-6 md:mt-0 mb-8 md:mb-0">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
