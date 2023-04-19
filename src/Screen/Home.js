import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import ImageProfile from "../assets/Perfil.jpeg"
import { BackgroundParticle } from '../Component';
import './styles.scss';

const Home = ({ calcYear, message }) => {
    return <div className='container' >
        <div className='div-primary'>
            <div className='div-image' >
                <img src={ImageProfile} className="image" />
            </div>
            <text className='text-info'><text className='label'>Nome:</text> Gustavo Lauro de Medeiros</text>
            <text className='text-info'><text className='label'>Profissão:</text> Desenvolvedor de software</text>
            <text className='text-info'><text className='label'>Soft skills:</text> React native | React js | javascript</text>
            <text className='text-info'><text className='label'>Idade:</text> {calcYear()}</text>
        </div>
        <div className='div-secondary'>
            <BackgroundParticle />
            <div className='div-text'>
                <text className='text title'>{message} ! <br /> eu sou o Gustavo</text>
                <text className='text'>
                    Vou falar um pouco sobre mim e sobre minha pespctiva de carreira. Eu tenho  {calcYear()} anos e comecei minha jornada na programação aos 17 anos com um curso de html bem básico.
                    Porem foi o bastante para mim se apaixonar pela área e toda sua lógica por traz. Após me formar no ensino medio resolvi iniciar faculdade de Ciência da Computação, para me especializar na area da melhor forma.<br /><br />
                    Foi no ano da pandemia em 2020 que iniciei, com a maioria das empresas de programação virando Home Office iniciei um estágio na empresa Laev. Dessa forma, entrei mais afundo no mundo da programação, com javascript, implementações em react js e react native.
                    Onde aprendi muita coisa e trabalhando em vários projetos, após dois anos de estágio fui contratado como dev Jr e continuo na minha jornada em busca de evolução!
                </text>
            </div>
            <div className='div-network'>
                {arrayIcon.map(item => {
                    return <div className='network-social' onClick={() => window.open(item.site)}>
                        {item.icon}
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default Home;

const arrayIcon = [
    { id: 0, icon: <BsInstagram className='icon' />, site: "https://www.instagram.com/medeiros__gu/" },
    { id: 1, icon: <BsLinkedin className='icon' />, site: "https://www.linkedin.com/in/gustavo-medeiros-963bb9206/" },
    { id: 2, icon: <BsGithub className='icon' />, site: "https://github.com/settings/profile" }
]