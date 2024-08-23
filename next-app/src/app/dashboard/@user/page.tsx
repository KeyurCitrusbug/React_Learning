import { Metadata } from "next";
type Props={
    params?:string
}
export const generateMetadata=async({
    params,
}:Props):Promise<Metadata>=>{
    const title=await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ('Demo')
        },1000)
    });
    return{
        title:`Product ${title}`
    }
}
export default function userdasboard()
{
    return <><h3>User Container of dashboard</h3></>
}
