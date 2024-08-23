export default function DashboardLayout({
    children,
    user,
    analytics
}:{
    children:React.ReactNode
    user:React.ReactNode
    analytics:React.ReactNode
})
{
    return (
        <>
        {children}
        <div style={{display:"flex"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div>{user}</div>
                <div>{analytics}</div>
            </div>
        </div>
        </>
    )
}