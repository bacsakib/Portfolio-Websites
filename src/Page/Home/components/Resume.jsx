

const Resume = () => {
    return (
        <div>
            <section className="my-resume py-20">
                <div className="text-center">
                    <h3 className="text-red-500">7+ YEARS OF EXPERIENCE</h3>
                    <h1 className="text-4xl font-bold mb-10">My Resume</h1>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-4 p-5 bg-white shadow rounded-lg">
                            <h4 className="text-lg font-semibold">Educations</h4>
                        </div>
                        <div className="col-4 p-5 bg-white shadow rounded-lg">
                            <h4 className="text-lg font-semibold">Professional Skills</h4>
                        </div>
                        <div className="col-4 p-5 bg-white shadow rounded-lg">
                            <h4 className="text-lg font-semibold">Experience</h4>
                        </div>
                        <div className="col-4 p-5 bg-white shadow rounded-lg">
                            <h4 className="text-lg font-semibold">Interview</h4>
                        </div>
                    </div>

                    <div className="education-details mt-10">
                        <h2 className="text-xl font-bold">Education Quality (2010 TO 2023)</h2>
                        <div className="grid grid-cols-2 gap-10 mt-5">
                            <div className="col-2 p-5 bg-white shadow rounded-lg">
                                <h2 className="text-lg font-semibold">BSc in Computer Science</h2>
                                <p className="font-semibold">Daffodil University (2018 - 2022)</p>
                                <p className="text-red-500">3.50/4</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque consequuntur deleniti sed cumque reiciendis s fuga.</p>
                            </div>
                            <div className="col-2 p-5 bg-white shadow rounded-lg">
                                <h2 className="text-lg font-semibold">MSc in Software Engineering</h2>
                                <p className="font-semibold">Daffodil University (2022 - 2024)</p>
                                <p className="text-red-500">3.20/4</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque consequuntur deleniti sed cumque reiciendis s fuga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;