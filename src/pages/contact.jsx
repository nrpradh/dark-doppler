import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center min-h-[90vh]"
            aria-labelledby="contact-title"
        >
            <header>
                <h2 id="contact-title" className="leading-none">
                    Let&apos;s Connect!
                </h2>
            </header>

            {/* VISUAL / HERO */}
            <figure className="pt-12">
                <img 
                    src="https://dummyimage.com/800x300"
                    alt="Decorative banner for contact section"
                    className="img-preview"
                />
                <figcaption className="sr-only">
                    Contact section visual
                </figcaption>
            </figure>

            {/* CONTACT INFO */}
            <address className="flex flex-col items-center not-italic py-8 space-y-8">
                
                {/* EMAIL */}
                <p className="flex items-center space-x-2 text-lg">
                    <MdEmail className="size-7" aria-hidden="true" />
                    <a 
                        href="mailto:nathanrprad@gmail.com" 
                        className="hover:underline font-dm-sans-regular  md:text-xl mb-2"
                    >
                        nathanrprad@gmail.com
                    </a>
                </p>

                {/* SOCIAL LINKS */}
                <ul className="flex justify-between w-full max-w-xl md:space-x-20 space-x-12">
                    <li>
                        <a 
                            href="https://github.com/nrpradh" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                        >
                            <FaGithub className="size-6" aria-hidden="true" />
                            <FaDribbble className="size-6" aria-hidden="true" />
                            <span>nrpradh</span>
                        </a>
                    </li>


                    <li>
                        <a 
                            href="https://linkedin.com/in/nathanrpradhana" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                        >
                            <FaLinkedin className="size-7" aria-hidden="true" />
                            <span>nathanrpradhana</span>
                        </a>
                    </li>
                </ul>
            </address>

        </section>
    );
}
