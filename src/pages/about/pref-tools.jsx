export default function PreferredTools() {
    return (
        <section 
            className="flex flex-col min-h-[90vh]  "
            aria-labelledby="preferred-tools-title"
        >
            <header>
                <h2 id="preferred-tools-title" className="leading-none">
                    Preferred Tools
                </h2>
            </header>

            <div className="grid md:grid-cols-3 md:py-12 py-8 ">
                
                <section aria-labelledby="uiux-heading" className="md:space-y-6 space-y-4">
                    <h3 id="uiux-heading">UI/UX</h3>
                </section>

                <section aria-labelledby="frontend-support-heading" className="md:space-y-6 space-y-4 ">
                    <h3 id="frontend-support-heading">Frontend Support</h3>
                </section>

                <section aria-labelledby="frontend-support-heading" className="md:space-y-6 space-y-4 ">
                    <h3 id="frontend-support-heading">Productivity</h3>
                </section>

            </div>
            <div className="flex flex-col items-end ">
                <p>*Growing a toolkit that fits, one step at a time.</p>
            </div>
        </section>
    );
}
