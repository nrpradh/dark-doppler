export default function Hero() {
    return (
        <section className="flex flex-col justify-between h-[95vh]">
            <div>
                <h1 className="leading-snug">
                    Nathan R. Pradhana
                </h1>
                <div className="flex md:flex-row flex-col space-x-6 text-5xl">
                    <h2> UI/UX</h2>
                    <h2> Frontend Support</h2>

                </div>
                
            </div>

            <div className="flex justify-between items-end">
                <div className="flex flex-col space-y-4">
                    <h3>Selected works </h3>
                    <div className="flex  space-x-4">
                        <img alt="gallery" className="w-60 h-36 object-cover object-center" src="https://dummyimage.com/606x366"></img>
                        <img alt="gallery" className="w-60 h-36 object-cover object-center" src="https://dummyimage.com/606x366"></img>
                        <img alt="gallery" className="w-60 h-36 object-cover object-center" src="https://dummyimage.com/606x366"></img>

                    </div>
                    
                </div>
                <div className="flex space-x-6">
                    <h3>Know More </h3>
                    <h3>Get in Touch </h3>
                </div>
            </div>
        </section>
    );
}
