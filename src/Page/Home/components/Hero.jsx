import img from '../../../../public/20241005_144927.png';

const Hero = () => {
    return (
        <div>
            <div className="header">
                <div className="hero-section bg-gray-100 min-h-[500px]">
                    <div className="container mx-auto flex items-center justify-between h-full">
                        <div className="hero-writen-section w-2/5">
                            <div className="heading mb-6">
                                <h3 className="text-lg font-medium">WELCOME TO MY WORLD</h3>
                                <h1 className="text-5xl font-bold mb-5">
                                    Hi. I am <span className="text-red-500">Sakib Hasan</span> a Pro Developer.
                                </h1>
                                <p className="text-lg text-gray-600">
                                    I am a professional <span className="font-bold">Web Developer</span>. With 12 years of experience in Frontend development, you will stick with my services forever.
                                </p>
                            </div>
                            <div className="icon-section mt-16">
                                <div className="flex justify-between items-start w-full">
                                    {/* Follow With Me */}
                                    <div className="link-icon ">
                                        <h3 className="text-lg font-semibold">Follow With Me</h3>
                                        <div className="flex mt-2">
                                            <button className="bg-white shadow-md rounded-full p-2 mx-1 hover:bg-red-500 transition-colors">
                                                <i className="fab fa-facebook-f text-gray-800"></i>
                                            </button>
                                            <button className="bg-white shadow-md rounded-full p-2 mx-1 hover:bg-red-500 transition-colors">
                                                <i className="fab fa-twitter text-gray-800"></i>
                                            </button>
                                            <button className="bg-white shadow-md rounded-full p-2 mx-1 hover:bg-red-500 transition-colors">
                                                <i className="fab fa-youtube text-gray-800"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Best Skill On */}
                                    <div className="unlink-icon">
                                        <h3 className="text-lg font-semibold">Best Skill On</h3>
                                        <div className="flex mt-2">
                                            <button className="bg-white shadow-md rounded-full p-2 mx-1 hover:bg-red-500 transition-colors">
                                                <i className="fab fa-github text-gray-800"></i>
                                            </button>
                                            <button className="bg-white shadow-md rounded-full p-2 mx-1 hover:bg-red-500 transition-colors">
                                                <i className="fab fa-twitter text-gray-800"></i>
                                            </button>
                                            <button className="bg-white shadow-md rounded-full p-2 mx-1 hover:bg-red-500 transition-colors">
                                                <i className="fab fa-instagram text-gray-800"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start pr-24">
                            <div className="hero-img-section w-96 flex justify-start">
                                <img
                                    src={img}
                                    alt="Hero"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
