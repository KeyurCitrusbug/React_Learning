type ChildProps={
    children:string
}
export const Child=(props:ChildProps)=>{
    return <p>{props.children}</p>
}