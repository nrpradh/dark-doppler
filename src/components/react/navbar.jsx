export default function Navbar() {
    return (
        <header >
            <div className="flex justify-between items-center px-4">
                <aside>
                    <img alt="gallery" className="size-16  object-cover object-center" src="https://dummyimage.com/606x366"></img>

                </aside>
                <nav className="flex space-x-6">
                    <a className=" hover:text-gray-900">About</a>
                    <a className=" hover:text-gray-900">Works</a>
                    <a className=" hover:text-gray-900">Contact</a>
                </nav>
            </div>
        </header>
    );
}
