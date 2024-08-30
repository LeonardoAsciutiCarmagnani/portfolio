interface CardProps{
    icon: React.ElementType,
    content: string,
    name: string
}

export default function Card({ icon: Icon, content, name }: CardProps) {


    return(
        <div className="w-[17rem] h-[22rem] flex flex-col justify-start bg-orange-300 items-center rounded-lg pt-4 border-[0.166rem] border-gray-500 shadow-sm shadow-orange-500 ">
            <div className="flex flex-col items-center justify-center pb-2 w-full border-b-[0.05rem] border-gray-900 text-center">
                <Icon className='size-18 text-gray-900 text-icon-size'/>
                <h3 className="font-semibold">{name}</h3>   
            </div>
            <div className="flex justify-center items-start p-2 text-center border-2 h-full bg-orange-100 rounded-b-lg ">
                <h2 className="font-oswald text-xl text-[#171717]">{content}</h2>
            </div>
        </div>
    )
}