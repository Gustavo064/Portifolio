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
                <text class='text'>
                    Vou falar um pouco sobre mim e sobre minha perspectiva de carreira. Eu tenho {calcYear()} anos e comecei minha jornada na programação aos 17 anos com um curso básico de HTML. Porém, foi o suficiente para me apaixonar pela área e toda a lógica por trás dela. Após me formar no ensino médio, decidi iniciar a faculdade de Ciência da Computação para me especializar na área da melhor forma.<br /><br />
                    Foi no ano da pandemia em 2020 que iniciei um estágio na empresa Laev, já que a maioria das empresas de programação estava em Home Office. Dessa forma, mergulhei ainda mais fundo no mundo da programação, aprendendo sobre JavaScript, implementações em React.js e React Native. Trabalhei em vários projetos e aprendi muitas coisas. Após dois anos de estágio, fui contratado como desenvolvedor júnior e continuo na minha jornada em busca de evolução!
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
    { id: 2, icon: <BsGithub className='icon' />, site: "https://github.com/Gustavo064" }
]