function AboutPage(){
    return(
        <main className="container m-auto">
            <h1 className="text-3xl text-center m-4">About the project</h1>
            <p>CRUD and API using Next.js & Prisma</p>

            <h2 className="text-2xl mt-4">Routes</h2>
            <div className="m-4">
                <h2 className="text-xl mb-2">API</h2>
                <ul>
                    <li className="list-disc list-inside">/api/tasks</li>
                    <li className="list-disc list-inside">/api/tasks/[id]</li>
                </ul>
            </div>

            <div className="m-4">
                <h2 className="text-xl mb-2">App</h2>
                <ul>
                    <li className="list-disc list-inside">/</li>
                    <li className="list-disc list-inside">/new</li>
                    <li className="list-disc list-inside">/tasks/edit/[id]</li>
                    <li className="list-disc list-inside">/about</li>
                </ul>
            </div>
        </main>
    )
}

export default AboutPage;