import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function obtenerTareas(){
    //? 1. Obteniendo directamente desde la base de datos con prisma (para cuando el front y back están en el mismo proyecto)
    return await prisma.task.findMany();

    //? 2. Haciendo una petición HTTP a http://localhost:3000/api/tasks (no se puede usar /api/tasks porque es del lado del servidor)
    // const res = await fetch("http://localhost:3000/api/tasks");
    // return await res.json();
}

// Cada 60 segundos se refresca la memoria cache
// export const revalidate = 60;

// Para que en cada cambio, se carguen los datos actualizados
export const dynamic = 'force-dynamic';

async function Inicio(){
    const tasks = await obtenerTareas();

    return(
        <main>
            <h1 className="text-3xl m-4 text-center">Tareas</h1>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(500px,1fr))] gap-4">
                {
                    tasks.map(task => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </main>
    )
}

export default Inicio;