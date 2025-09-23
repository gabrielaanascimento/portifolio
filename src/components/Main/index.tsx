"use client"
import React from 'react'
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";
import './styles.css'
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from '../ui/particles';
import { RainbowButton } from "@/components/ui/rainbow-button";




const Main = () => {
    return (
        <>
            <div className='main-container'>
                <div className='main-info'>
                    <Terminal className="terminal">
                    <TypingAnimation className='text-gray-800'>$ echo</TypingAnimation>
                    <AnimatedSpan className='text-gray-800'>$ Olá! Meu nome é Gabriel Augusto.</AnimatedSpan>
                    <AnimatedSpan className='text-gray-800'>$ Estou no último ano do Ensino Médio e sou um desenvolvedor</AnimatedSpan>
                    <AnimatedSpan className='text-gray-800'>em formação apaixonado por tecnologia e programação.</AnimatedSpan>
                    <AnimatedSpan className='text-gray-800'>$ Desenvolvedor Full-Stack.</AnimatedSpan>
                </Terminal>
                <RainbowButton className="button" onClick={() => window.location.href = '/about'}>Ver mais</RainbowButton>
                </div>
                <div className='image-profile'>
                    <BlurFade>
                        <img src="./gabriel.jpg" alt="Sample 1" className='image' />
                    </BlurFade>
                </div>
            </div>
        </>
    )
}

export default Main
