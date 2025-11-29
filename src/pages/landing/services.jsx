export default function Services() {
    return (
        <section 
            className="flex flex-col min-h-[90vh]"
            aria-labelledby="services-title"
        >
            <header>
                <h2 id="services-title" className="leading-none">
                    Services
                </h2>
            </header>

            <div className="grid md:grid-cols-2 md:py-12 py-8 ">
                
                <section aria-labelledby="uiux-heading" className="md:space-y-6 space-y-4">
                    <h3 id="uiux-heading">UI/UX</h3>
                    <ul className="list-disc list-inside">
                        <li>Design responsive, user-friendly interfaces using Figma. </li>
                        <li>Create wireframes and interactive prototypes.  </li>
                        <li>Conduct research and competitor analysis. </li>
                        <li>Run usability testing and ensure accessibility.</li>
                        <li> Collaborate with team and incorporate feedback.</li>
                    </ul>
                </section>

                <section aria-labelledby="frontend-support-heading" className="md:space-y-6 space-y-4 md:pt-20 pt-8">
                    <h3 id="frontend-support-heading">Frontend Support</h3>
                    <ul className="list-disc list-inside">
                        <li>Develop responsive interfaces with React & Tailwind.</li>
                        <li>Align and structure functional UI layouts.</li>
                        <li>Use Git for version control and team collaboration.</li>
                        <li>Apply suitable UI libraries to enhance design.  </li>
                        <li>Support web development tasks and coordinate with backend.</li>
                    </ul>
                </section>

            </div>
            
        </section>
    );
}
