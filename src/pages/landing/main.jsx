import Hero from "./hero";
import Services from "./services";
import SelectedWorks from "./selected-works";
import Contact from "../contact";

export default function Home() {
    return ( 
        <header className="space-y-12">
            <Hero />
            <Services />
            <SelectedWorks selectedIds={[11, 10, 4]} />
            <Contact />
            {/* <h1> Welcome to my page</h1> */}
        </header>
    );
}