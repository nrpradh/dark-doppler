import AboutMe from "./about-me";
import PreferredTools from "./pref-tools";
import Contact from "../contact";

export default function About() {
    return ( 
        <header className="space-y-12">
            <AboutMe />
            <PreferredTools/>
            <Contact />
            {/* <h1> Welcome to my page</h1> */}
        </header>
    );
}