import { prisma } from "@/db"
import { redirect } from "next/navigation"
import Link from "next/link"
import { type } from "os"

async function createTodo(data: FormData){
    "use server"
    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length === 0){ throw new Error("Invalid title") }

    await prisma.todo.create({ data: { title, complete: false}})
    redirect("/")

    console.log("heyaaaaaaa")
}

export default function somePage() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl"> Add todo </h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input type="text" name="title" className="border border-white bg-transparent text-white px-2 py-1 rounded hover:bg-slate-700 outline-none"/>
        
        <div className="flex gap-1 justify-end">
            <Link href=".." className="border border-white text-white px-2 py-1 rounded hover:bg-slate-700 outline-none"> Cancel </Link>
            <button type="submit" className="border border-white text-white px-2 py-1 rounded hover:bg-slate-700 outline-none"> Create </button>
        </div>
      </form>
    </>
  );
}
