import Marquee from "react-fast-marquee";
import { Link } from "react-router";

import works from '../../data/AllWorks.json'

export default function Hero() {
    const workImages = works.map(p => p.snapshots[0])

    return (
        <section 
            className="flex flex-col justify-between min-h-[85vh]"
            aria-labelledby="hero-title"
        >
            <header className="flex flex-col space-y-6">
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

            <div className="grid grid-cols-2 justify-between items-end">
                
                <section aria-labelledby="works-heading" className="flex flex-col space-y-4">
                    <h4 id="works"> My Works</h4>

                    <div 
                        className="flex space-x-4 border-r border-l w-5/6"
                        aria-label="works-preview"
                    >
                        {/* <img 
                            alt="Project preview 1" 
                            className="w-60 h-36 object-cover object-center" 
                            src="https://dummyimage.com/606x366"
                        />

                         */}
                        <Marquee speed={40} pauseOnHover={true} gradient={false} gradientColor="#eaeaea" gradientWidth={35}>
                            {workImages.map((src, idx) => ( 
                                <img key={idx} src={src} alt={`work${idx + 1}`} className="mr-4 border w-60 h-36 object-cover object-center rounded" /> ))} 
                        </Marquee>
                    </div>
                </section>

                <nav aria-label="Hero navigation" className="flex space-x-6  justify-end  ">
                    <Link to="/about" className="linkto">Know More</Link>
                    <a href="#contact" className="linkto">Get in Touch</a>
                </nav>
            </div>
        </section>
    );
}
