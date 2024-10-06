

const DoSection = () => {
    return (
        <div>
            <section className="what-i-do py-20">
                <div className="container mx-auto text-center">
                    <h3 className="text-red-500">FEATURE</h3>
                    <h1 className="text-4xl font-bold mb-10">What I Do</h1>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="col-3 p-5 bg-white shadow rounded-lg">
                            <i className="fa-solid fa-bars text-4xl text-red-500 mb-4"></i>
                            <h2 className="text-lg font-semibold">Web Development</h2>
                            <p>Lorem ipsum dolor sit amet or aspe quo in nih, modi veniam voluptatu velit temporibus officiis.</p>
                        </div>
                        <div className="col-3 p-5 bg-white shadow rounded-lg">
                            <i className="fa-brands fa-wordpress-simple text-4xl" style={{ color: "#1b345f" }}></i>
                            <h2 className="text-lg font-semibold">WordPress Dev.</h2>
                            <p>Lorem ipsum dolor sit amet is an perferendis quo eniam voluptatum velit temporibus officiis.</p>
                        </div>
                        <div className="col-3 p-5 bg-white shadow rounded-lg">
                            <i className="fa-solid fa-chart-simple text-4xl" style={{ color: "#56a451" }}></i>
                            <h2 className="text-lg font-semibold">Digital Marketing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exs officiis.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DoSection;