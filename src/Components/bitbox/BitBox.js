import { Container } from '@material-ui/core'
import React from 'react'
import Section4 from '../landing-page/Section4'
import FAQ from './FAQ'
import Hero from './Hero'
import Schedule from './Schedule'
import Sponsor from './Sponsor'
import './bitbox.scss'

export default function BitBox({isDark}) {
    return (
        <div>
            <Hero isDark={isDark}/>
            <FAQ/>
            <Sponsor/>
            <Schedule/>
            <Container id="contact">
            <Section4 isDark={isDark}/>
            </Container>
        </div>
    )
}