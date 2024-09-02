import { FaReact, FaNodeJs, FaLinkedin  } from "react-icons/fa";
import { SiMongodb, SiKnexdotjs } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { LiaJava } from "react-icons/lia";
import { TbBrandMysql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import photo from "../assets/me-removebg-preview.png"
import Card from '../Components/card';
import { useTheme } from "../Contexts/darkthemecontext"
import DownloadButton from '../Components/download';
import Header from "../Components/header";
import logo_multipoint from "../assets/multi.jpeg"
import logo_google from "../assets/google.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import CardProject from "../Components/cardProjects";
import whiteground from "../assets/whiteground.svg"
import blackground from "../assets/background.svg"
import imgProject from "../assets/GeradorXML.png"
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";



export default function Home(){

    const { theme } = useTheme()
    const [windowWidth, _] = useState<number>(window.innerWidth)

    return(
    <div className='h-full' style={{ backgroundImage: `url(${theme === 'dark' ? blackground : whiteground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', }}>            
        <header>
            <Header/>
        </header>
        <section id="apresentation">
            <div className="flex flex-col items-center py-6 gap-y-12 mx-20 transition-opacity duration-3000" >
                <div className='flex items-center justify-center gap-x-12 w-full px-14 py-4'>
                    <img src={photo} alt="Leonardo Asciuti Carmagnani" className="rounded-full max-w-[25rem] drop-shadow-custom shadow-gray-900 dark:shadow-gray-100"/>
                    <div className='flex flex-col gap-4 items-center p-4 rounded-xl'>
                        <div>
                            <span className='flex items-center p-2 text-slate-900 dark:text-slate-100 text-xl'>Tecnólogo em análise e desenvolvimento de sistemas</span>
                            <span className='flex items-center justify-start text-slate-900 font-semibold font-os dark:text-slate-100 text-xs ml-5 gap-x-[0.3rem]'>{theme === 'light' ? <MdSchool size="30"/> : <MdSchool size="30" color='#f1f5f9'/>}SENAI ARMANDO DE ARRUDA PEREIRA</span>
                        </div>
                        <DownloadButton/>
                        <div className='flex items-center rounded-md justify-center gap-x-4 h-[3.3rem] w-[10rem] shadow-sm shadow-orange-500'>
                            <a target="_blank" href="https://github.com/LeonardoAsciutiCarmagnani"><span><FaGithub size={40} className='text-[#171515] dark:text-slate-100'/></span></a>
                            <a target="_blank" href="https://www.linkedin.com/in/leonardo-asciuti-carmagnani-4552571a2/"><span ><FaLinkedin size={40} className='text-[#0e76a8]'/></span></a>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 max-w-[85rem] px-6 py-2 mx-12 mt-12'>
                    <h2 className="text-slate-900 dark:text-slate-100 text-justify text-lg font-vast">
                        Olá! Meu nome é Leonardo Asciuti Carmagnani e tenho 20 anos. 
                        Atualmente realizo estudos voltados ao Full-stack, que é a área que tenho mais interesse.
                        Tenho mais afinidade com o Front-End, onde estudo Frameworks, bibliotecas e recursos mais avançados.
                        Durante a faculdade aprendi Java, MySql, Html, Css, Js, React Native, porém as tecnologias que mais
                        me identifico estão listadas logo abaixo, todas essas eu utilizo em projetos pessoais e tento ao máximo
                        me aprofundar.
                    </h2>   
               </div>
            </div>
        </section>
        <section id="knowledges" className='mt-14'>
            <div className='flex justify-center pb-2'>
                <h1 className="font-oswald text-2xl uppercase border-b-2 border-orange-500 text-slate-900 dark:text-slate-100">Conhecimentos</h1>
            </div>
            <div  className="flex justify-center m-2 mt-6 mb-16 transition-opacity duration-3000" >
                <div className='grid grid-rows-2 grid-cols-4 bg-orange-200 place-items-center max-w-fit gap-3 gap-y-7 p-4 rounded-xl shadow-sm shadow-orange-500 border-orange-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50'>
                    <Card icon={FaReact} name='ReactJS' content='ReactJS é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, utilizada principalmente para a construção de interfaces de usuário (UI). É uma das tecnologias mais populares no desenvolvimento de aplicações web. '/>
                    <Card icon={FaNodeJs} name='NodeJS' content='Node.js é um ambiente de execução JavaScript que permite a execução de código JavaScript no lado do servidor. Node.js é amplamente utilizado para criar aplicações de rede, como servidores web, APIs RESTful, e microserviços, devido à sua capacidade de lidar com operações assíncronas de maneira eficaz. '/>
                    <Card icon={SiMongodb} name='MongoDB' content='MongoDB é um banco de dados NoSQL orientado a documentos, conhecido por sua flexibilidade e escalabilidade. Uma das principais vantagens do MongoDB é sua capacidade de lidar com grandes volumes de dados de forma eficiente.'/>
                    <Card icon={TbBrandMysql} name='MySQL' content='MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto que utiliza o modelo de dados baseado em tabelas, com suporte a SQL (Structured Query Language) para a manipulação e consulta de dados.'/>
                    <Card icon={LiaJava} name='Java' content='Java é uma linguagem de programação de propósito geral, orientada a objetos. Java é uma linguagem fortemente tipada e oferece um sistema de tipos rigoroso que ajuda a prevenir muitos erros comuns durante o desenvolvimento. Além disso, possui um robusto sistema de gerenciamento de memória.'/>
                    <Card icon={RiTailwindCssFill} name='Tailwind' content='Tailwind CSS é um framework de CSS utilitário que permite o desenvolvimento de interfaces web de forma rápida e eficiente. A ideia central do Tailwind é fornecer uma ampla gama de classes utilitárias que podem ser combinadas diretamente no HTML para aplicar estilos.'/>
                    <Card icon={SiKnexdotjs}name='Knex' content='Knex.js é um construtor de consultas SQL para Node.js, projetado para facilitar a interação com bancos de dados relacionais. Uma das principais características do Knex é sua capacidade de suportar múltiplos bancos de dados relacionais, como PostgreSQL, MySQL, SQLite e Oracle.'/>
                    <Card icon={RiNextjsFill}name='NextJS' content='Next.js é um framework de React para construção de aplicações web modernas, com foco em renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e experiência do desenvolvedor. Uma das principais características do Next.js é o suporte nativo à renderização no lado do servidor. Isso significa que você pode gerar HTML no servidor a cada requisição.'/>
                </div>
            </div>
        </section>
        <section id="experience/certificates" className="flex justify-center gap-x-12 items-center py-2 px-8 my-16 ">
            <section id="experience" className="h-[fit] w-[25rem] grid grid-cols-3 rounded-xl place-items-start justify-items-center p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-orange-200">
                <div className="flex flex-col col-span-3 items-center justify-start space-y-2 w-full ">
                    <h1 className="text-xl font-semibold font-oswald gap-x-2 pl-2 py-[0.1rem] text-center dark:text-gray-100 border-b-2 border-orange-500 uppercase">Experiência</h1>  
                    
                
                <div className=" bg-orange-100 p-2 rounded-xl h-full items-start justify-center w-full">
                    
                    <img src={logo_multipoint} className="size-10 rounded-md border-[0.13rem]"/>
                    <p className="font-semibold text-lg font-oswald">Multipoint IT Solutions</p>
                    <p className="font-oswald font-light">São caetano do Sul, São Paulo, Brasil</p>
                
                
                    <p className="font-semibold text-lg flex font-oswald">Técnico de suporte em TI</p>
                    <p className="font-oswald font-light "> set de 2023 - o momento</p>
               
               
                    <p className="font-semibold text-lg flex font-oswald">Estagiário de sistemas</p>
                    <p className="font-oswald font-normal">Estágio</p>
                    <p className="font-oswald font-light">jun de 2023 - set de 2023</p>
                </div>
                </div>
            </section>
            <section id='certificates'>
            <div className="flex flex-col w-fit rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-orange-200" >
                <div className="flex items-end justify-center rounded-t-xl bg-transparent h-[2.3rem] ">
                    <h1 className="text-xl font-semibold uppercase border-b-2 border-orange-500 font-oswald dark:text-gray-100">Certificados</h1>
                </div>
                <div className="flex flex-col px-4 pb-4 pt-2 w-fit rounded-b-lg gap-y-2 ">     
                    <span className="font-oswald pr-6 flex items-center gap-x-2 justify-start bg-orange-100 rounded-md shadow-sm"><img src={logo_google} className="size-10"/>Build and Secure Networks in Google Cloud <span><a target="_blank" href="https://www.cloudskillsboost.google/public_profiles/1f778d86-b870-4f2f-a757-b98746ba7b0e/badges/2607372?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"><FaExternalLinkAlt size="12"/></a></span></span>
                    <span className="font-oswald pr-6 flex items-center gap-x-2 justify-start bg-orange-100 rounded-md shadow-sm"><img src={logo_google} className="size-10"/>Google Cloud Computing Foundations: Cloud Computing Fundamentals<span><a target="_blank" href="https://www.cloudskillsboost.google/public_profiles/1f778d86-b870-4f2f-a757-b98746ba7b0e/badges/2589022?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"><FaExternalLinkAlt size="12"/></a></span></span>
                    <span className="font-oswald pr-6 flex items-center gap-x-2 justify-start bg-orange-100 rounded-md shadow-sm"><img src={logo_google} className="size-10"/>Google Cloud Computinhg Foundations: Networking and security in Google Cloud<span><a target="_blank" href="https://www.cloudskillsboost.google/public_profiles/1f778d86-b870-4f2f-a757-b98746ba7b0e/badges/2607458?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"><FaExternalLinkAlt size="12"/></a></span></span>
                    <span className="font-oswald pr-6 flex items-center gap-x-2 justify-start bg-orange-100 rounded-md shadow-sm"><img src={logo_google} className="size-10"/>Perform Foundational Infrastructure Tasks in Google Cloud<span><a target="_blank" href="https://www.cloudskillsboost.google/public_profiles/1f778d86-b870-4f2f-a757-b98746ba7b0e/badges/2589313?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"><FaExternalLinkAlt size="12"/></a></span></span>
                    <span className="font-oswald pr-6 flex items-center gap-x-2 justify-start bg-orange-100 rounded-md shadow-sm"><img src={logo_google} className="size-10"/>Create and Manage Cloud Resources<span><a target="_blank" href="https://www.cloudskillsboost.google/public_profiles/1f778d86-b870-4f2f-a757-b98746ba7b0e/badges/2552160?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"><FaExternalLinkAlt size="12"/></a></span></span>                   
                </div> 
            </div>
            </section>  
        </section>
        <section id='projects'>
            <div className="w-full">
                <div className='flex justify-center pb-2'>
                    <h1 className="font-oswald text-2xl uppercase border-b-2 border-orange-500 text-slate-900 dark:text-slate-100">Projetos</h1>
                </div>
                <div className="flex items-end justify-end">
                    <Link to="/projects" className="flex justify-end font-oswald text-md uppercase text-slate-900 dark:text-slate-100 p-1 mx-8 w-fit">
                        <span className="flex flex-row-reverse items-center">
                            <span className="flex justify-end"><GoArrowUpRight size={22}/></span>Ver mais Projetos
                        </span>
                    </Link>
                </div>
                <div className="flex mx-12 mt-6 h-fit overflow-x-hidden">
                    <div className="flex-1 justify-center grid">
                        <CardProject  name="Projeto 03" tags={["NodeJS","ReactJS","TailwindCss"]} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit alias corrupti quibusdam adipisci tenetur? Enim odio dignissimos in ipsum, consectetur eius, consequuntur doloribus magni sapiente totam aut. Corporis, itaque?" image={imgProject}/>
                    </div>
                    <div className="flex-1 justify-center grid">
                        <CardProject name="Projeto 03" tags={["NodeJS","Java","MySql","Java"]} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit alias corrupti quibusdam adipisci tenetur? Enim odio dignissimos in ipsum, consectetur eius, consequuntur doloribus magni sapiente totam aut. Corporis, itaque?" image={imgProject}/>
                    </div>
                    <div className="flex-1 justify-center grid">
                        <CardProject name="Projeto 03" tags={["MongoDB","ReactJS","TailwindCss","TypeScript","Java"]} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit alias corrupti quibusdam adipisci tenetur? Enim odio dignissimos in ipsum, consectetur eius, consequuntur doloribus magni sapiente totam aut. Corporis, itaque?" image={imgProject}/>       
                    </div>
                    { windowWidth > 1620 ? (
                    <div className="flex-1 justify-center grid md:bg-none">
                        <CardProject name="Projeto 03" tags={["MongoDB","ReactJS","TailwindCss","TypeScript","Java"]} description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi impedit alias corrupti quibusdam adipisci tenetur? Enim odio dignissimos in ipsum, consectetur eius, consequuntur doloribus magni sapiente totam aut. Corporis, itaque?" image={imgProject}/>       
                    </div>): <></>}
                </div>
            </div>
        </section>
    </div>
    )
}