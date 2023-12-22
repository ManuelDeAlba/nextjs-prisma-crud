import Link from "next/link";

function NotFound(){
    return(
        <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Not Found</h1>
                <Link href="/" className="text-slate-400 text-xl mt-5">Tasks</Link>
            </div>
        </section>
    )
}

export default NotFound;