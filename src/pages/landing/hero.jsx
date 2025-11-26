export default function Hero() {
    return (
        <section 
            className="flex flex-col justify-between min-h-[90vh]"
            aria-labelledby="hero-title"
        >
            <header className="flex flex-col space-y-4">
                <h1 id="hero-title" className="leading-none">
                    Nathan R. Pradhana
                </h1>

                <p 
                    className="flex md:flex-row flex-col space-x-6 translate-x-2"
                    aria-label="Roles"
                >
                    <h3>UI/UX</h3>
                    <h3>Frontend Support</h3>
                </p>
            </header>

            <div className="flex justify-between items-end">
                
                <section aria-labelledby="works-heading" className="flex flex-col space-y-4">
                    <h3 id="works"> Works</h3>

                    <div 
                        className="flex space-x-4"
                        aria-label="works-preview"
                    >
                        <img 
                            alt="Project preview 1" 
                            className="w-60 h-36 object-cover object-center" 
                            src="https://dummyimage.com/606x366"
                        />

                        <img 
                            alt="Project preview 2" 
                            className="w-60 h-36 object-cover object-center" 
                            src="https://dummyimage.com/606x366"
                        />

                        <img 
                            alt="Project preview 3" 
                            className="w-60 h-36 object-cover object-center" 
                            src="https://dummyimage.com/606x366"
                        />
                    </div>
                </section>

                <nav aria-label="Hero navigation" className="flex space-x-6">
                    <a href="#know-more" className="hover:underline">Know More</a>
                    <a href="#contact" className="hover:underline">Get in Touch</a>
                </nav>
            </div>
        </section>
    );
}
