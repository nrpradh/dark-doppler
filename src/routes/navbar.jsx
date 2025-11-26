import { Link } from "react-router";
export default function Navbar() {
    return (
        <header >
            <div className="flex justify-between items-center ">
                <aside>
                    <Link to='/'>
                        <img alt="gallery" className="size-16  object-cover object-center" src="https://dummyimage.com/606x366"></img>
                    
                    </Link>

                </aside>
                <nav className="flex space-x-12">
                    <Link to='/about' className="linkto" >About</Link>
                    <Link to='/works' className="linkto">Works</Link>
                    <a href='#contact' className="linkto"> Contact</a>
                </nav>
            </div>
        </header>
    );
}
