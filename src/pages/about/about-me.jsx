// import AboutPfp from '../../assets/personal/thepfp.png'

export default function AboutMe() {
    return ( 
        <section className="flex flex-col  justify-between min-h-[80vh] ">


                <div className="flex space-x-8 mt-6 ">
                    <div>

                        <img 
                            alt="about-me-pfp" 
                            className=" object-cover object-center" 
                            // src="../../assets/personal/thepfp.png"
                            src="https://dummyimage.com/640x320"
                        />
                    </div>
                    <div className="mr-20">
                        <p>Currently a 3rd-year informatics student with a passion for UI/UX and frontend development.</p>
                        <p>I design intuitive interfaces and prototypes in Figma, collaborating with teams to create engaging, user-focused experiences</p>

                    </div>


                </div>
                <h1 id="hero-title" className="leading-none">
                    Nathan R. Pradhana
                </h1>
        </section>
        );
}