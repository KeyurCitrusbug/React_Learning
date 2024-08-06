type ParentProps={
    children:React.ReactNode
}
export const Parent=(props:ParentProps)=>{
    return <h5>{props.children}</h5>
}