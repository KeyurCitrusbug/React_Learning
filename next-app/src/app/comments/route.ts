import { NextRequest } from 'next/server'
import {comments} from './data'
export async function GET(request:NextRequest)
{
    const params=request.nextUrl.searchParams
    const query=params.get("query")
    const filteredComments=query?comments.filter(comment=>comment.text.includes(query)):comments
    return Response.json(filteredComments)
}
export async function POST(request:Request)
{
    const comment=await request.json()
    const newcomment={
        id:comments.length+1,
        text:comment.text
    }
    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}
export async function DELETE(request:Request,{params}:{params:{id:string}})
{
    const commentIndex=comments.findIndex((comment)=>comment.id===parseInt(params.id))
    comments.splice(commentIndex,1)
    return Response.json(comments)
}