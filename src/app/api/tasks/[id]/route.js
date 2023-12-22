import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }){
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return NextResponse.json(task);
}

export async function PUT(request, { params }){
    const { title, description } = await request.json();

    if(!title || !description){
        return NextResponse.json({
            message: "Datos insuficientes"
        }, { status: 500 })
    }

    const updatedTask = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title,
            description
        }
    })

    return NextResponse.json(updatedTask);
}

export async function DELETE(request, { params }){
    try{
        const deletedTask = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
    
        return NextResponse.json(deletedTask);
    } catch(error){
        return NextResponse.json(error.message);
    }
}