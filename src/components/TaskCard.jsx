"use client";

import { useRouter } from "next/navigation";

function TaskCard({ task }) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/tasks/edit/" + task.id);
    }

    return (
        <div className="border border-gray-600 rounded p-4 mx-4 hover:bg-slate-800 hover:cursor-pointer transition-colors" onClick={handleClick}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.createdAt.toLocaleDateString()}</p>
        </div>
    );
}

export default TaskCard;
