import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(){
    const tasks = await prisma.task.findMany();
    
    return NextResponse.json(tasks)
}

export async function POST(request){
    const { title, description } = await request.json();

    if(!title || !description){
        return NextResponse.json({
            message: "Datos insuficientes"
        }, { status: 500 })
    }

    const newTask = await prisma.task.create({
        data: {
            title,
            description
        }
    })

    return NextResponse.json(newTask)
}