import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-slate-500 px-8 py-4">
            <div className="container m-auto flex justify-between">
                <Link href="/" className="text-2xl">Next.js CRUD</Link>

                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/new">New</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;