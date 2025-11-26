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

            <div className="grid md:grid-cols-2 md:py-16 py-8">
                
                <section aria-labelledby="uiux-heading" className="md:space-y-6 space-y-4">
                    <h3 id="uiux-heading">UI/UX</h3>
                    <ul className="list-disc list-inside">
                        <li>Prefer Figma as the main design tool</li>
                        <li>Design responsive and user-friendly app or web interfaces</li>
                        <li>Conduct user surveys and competitor analysis</li>
                        <li>Create Lo-Fi wireframes and interactive prototypes</li>
                        <li>Run usability testing and ensure design accessibility</li>
                        <li>Receptive to feedback in collaborative work</li>
                    </ul>
                </section>

                <section aria-labelledby="frontend-support-heading" className="md:space-y-6 space-y-4 md:pt-32 pt-8">
                    <h3 id="frontend-support-heading">Frontend Support</h3>
                    <ul className="list-disc list-inside">
                        <li>Prefer React & Tailwind for front-end development</li>
                        <li>Collaborate using Git for version control</li>
                        <li>Align and structure functional UI layouts</li>
                        <li>Develop responsive interface designs</li>
                        <li>Research and apply suitable UI libraries</li>
                        <li>Seek guidance in team collaboration</li>
                    </ul>
                </section>

            </div>
        </section>
    );
}
