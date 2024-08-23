import { Metadata } from "next";
type Props={
    params:{
        dynamicID:string
    }
}
export const generateMetadata=async({
    params,
}:Props):Promise<Metadata>=>{
    const title=await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (`Info of ${params.dynamicID}`)
        },1000)
    });
    return{
        title:`Product ${title}`
    }
}
export default function DynamicRoutesDetails({ params }: Props) {
    return (
        <h1>Example of Dynamic routes when no params are params pass:- {params.dynamicID}</h1>
    );
}