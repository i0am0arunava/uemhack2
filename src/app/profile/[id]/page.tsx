export default function userProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>hellow to Next</h1>
            <p className="text-4xl"> ProfilePage<span className="bg-orange-500 p-2 rounded ml-4">{params.id}</span></p>
        </div>
    )
}