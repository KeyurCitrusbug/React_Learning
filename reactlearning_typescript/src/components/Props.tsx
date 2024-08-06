type PropsType={
    name:string
    unReadMessage:number
    fullName:{
        firstName:string,
        lastName:string
    },
    extraNames:{
        firstName:string,
        lastName:string
    }[]
}
export const Props=(props:PropsType)=>{
    return (
        <div>
            <h4>Welcome {props.fullName.firstName} {props.fullName.lastName}! You have {props.unReadMessage} messages</h4>
            <h4>Names Using Array:-</h4>
            {
            props.extraNames.map((item)=>
            {
                return(
                    <p key={item.firstName}>
                        First Name: {item.firstName} Last Name: {item.lastName}
                    </p>
                )
            })
            }
        </div>
    )
}