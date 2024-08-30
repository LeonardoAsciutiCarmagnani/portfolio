import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";


interface VisitUrlInterface {
    deployUrl: string
    githubUrl: string
}

export default function VisitUrl({deployUrl, githubUrl}:VisitUrlInterface){

    return(
        <div className="bg-orange-500 w-fit p-2 shadow-md rounded-br-full rounded-tr-full">
            <div className="flex items-center justify-center gap-2">
                <a href={githubUrl}><span>{<FaGithub size={25}/>}</span></a>
                <a href={deployUrl}><span>{<IoOpenOutline size={23}/>}</span></a>
            </div>
        </div>
    )
}