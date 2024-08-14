export default function CatchSegments({
    params,
}:{
    params:{
        slug?:string[];
    }
}
)
{
    if(params.slug?.length==2)
    {
        return <h1>URL have slug as 2 and its value as 1:- {params.slug[0]} and 2:- {params.slug[1]}</h1>
    }
    else if(params.slug?.length==1)
    {
            return <h1>URL have slug as 1 and its value as 1:- {params.slug[0]}</h1>
    }
    return <h1>Default Route of catch segments</h1>
}