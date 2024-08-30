import VisitUrl from "./visitUrl";
import { FaReact, FaNodeJs} from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill} from "react-icons/ri";
import { LiaJava } from "react-icons/lia";
import { TbBrandMysql } from "react-icons/tb";



interface CardProjects{
    name: string,
    tags: string[]
    image: string,
    description: string
}

export default function CardProject({ tags, description, name, image }: CardProjects) {

    const colorTags: { [key:string]:string} = {
        ReactJS: 'bg-react',
        NodeJS: 'bg-node',
        TailwindCss: 'bg-tailwind',
        Java: 'bg-java',
        MySql: 'bg-mysql',
        TypeScript: 'bg-typescript',
        MongoDB: 'bg-mongodb'
    }

    const iconTag: { [key: string]: React.ReactNode } = {
        ReactJS: <FaReact size={16}/>,
        NodeJS: <FaNodeJs size={16}/>,
        TailwindCss: <RiTailwindCssFill size={16}/>,
        Java: <LiaJava size={18} />,
        MySql: <TbBrandMysql size={16}/>,
        TypeScript: <SiTypescript size={16}/>,
        MongoDB: <SiMongodb size={16}/>
      };

    return(
        <div className="flex flex-col items-center justify-evenly w-[27rem] h-[33rem] bg-orange-100 rounded-md border-orange-400 border-[0.166rem] shadow-sm shadow-orange-500 gap-2">
            <div className="flex flex-row items-center justify-center pb-1 w-full border-b-[0.05rem] border-gray-400 text-center bg-orange-300">
            <h3 className="font-semibold flex">{name}</h3>    
            </div>
            <div className="mx-4 shadow-xl rounded-md">
               <img src={image} />
            </div>
            <div>
                <div className="flex w-full gap-2 p-2 rounded-b-md items-center justify-center">
                {tags.map((tag,index)=>{
                    const bgColorClass = colorTags[tag];
                   
                    return (
                        <div key={index} className={`flex flex-row ${bgColorClass} p-[0.3rem] rounded-md w-fit h-fit shadow-md items-center gap-[0.15rem]`}>
                            <span >{iconTag[tag]}</span>
                            <span className="inline-flex items-center text-sm font-normal text-black rounded-md font-oswald">{tag}</span>
                        </div>    
                    )
                })} 
               </div>
            </div>
            <div className="w-full">
                <VisitUrl deployUrl="http://localhost:5173/" githubUrl="https://github.com/LeonardoAsciutiCarmagnani"/>
            </div>
            <div className="flex justify-center items-start p-2 text-center h-fit rounded-b-lg ">
                <h2 className="font-oswald text-md text-[#171717] h-auto">{description}</h2>
            </div>
        </div>
    )
}