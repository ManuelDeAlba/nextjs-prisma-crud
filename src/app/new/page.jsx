"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewPage({ params }) {
    const router = useRouter();

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json())
                .then(setTask);
        }
    }, [params]);

    const handleSubmit = async e => {
        e.preventDefault();

        if (!params.id) {
            // Agregar tarea
            const res = await fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            const newTask = await res.json();
            console.log(newTask);
        } else {
            // Editar tarea
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            const newTask = await res.json();
            console.log(newTask);
        }

        router.push("/");
        router.refresh();
    };

    const handleInput = e => {
        setTask(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const deleteTask = async () => {
        const res = await fetch(`/api/tasks/${params.id}`,{
            method: "DELETE"
        })
        const data = await res.json();
        console.log(data);

        router.push("/");
        router.refresh();
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl m-4">New Task</h1>
            <form
                className="bg-slate-800 p-10 max-w-96"
                onSubmit={handleSubmit}
            >
                <label className="font-bold text-sm">
                    Titulo:
                    <input
                        name="title"
                        className="border border-gray-400 p-2 mb-2 w-full outline-none text-black"
                        type="text"
                        placeholder="Título"
                        value={task.title}
                        onInput={handleInput}
                    />
                </label>

                <label className="font-bold text-sm">
                    Descripción:
                    <textarea
                        name="description"
                        className="border border-gray-400 p-2 mb-2 w-full outline-none text-black"
                        cols="30"
                        rows="3"
                        placeholder="Descripción"
                        value={task.description}
                        onInput={handleInput}
                    ></textarea>
                </label>

                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        value={!params.id ? "Agregar" : "Editar"}
                    />

                    {params.id && (
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={deleteTask}
                        >
                            Borrar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default NewPage;
