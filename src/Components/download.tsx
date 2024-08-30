import { TbFileDownload } from "react-icons/tb";

export default function DownloadButton(){

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/src/assets/curriculo.pdf'; 
        link.download = 'LeonardoAsciutiCarmagnani.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      return(<button onClick={handleDownload}
        className='w-[10rem] h-[3rem] rounded-md flex flex-row-reverse items-center justify-center font-bold shadow-orange-500 shadow-sm dark:text-slate-200'>
            Download CV 
            <span> {<TbFileDownload size="1.75rem" className='text-orange-600'/>} </span>
            </button>
      )

}