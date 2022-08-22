import React from 'react';
import { Row, Card } from 'react-bootstrap';

import carissa from '../images/carissa.png'
import kenneth from '../images/kenneth.png'
import gracie from '../images/gracie.png'
import alexis from '../images/alexis.png'
import mark from '../images/mark.png'
import Image from 'react-bootstrap/Image'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


export default function About() {

    return ( <
        div >
        <
        div style = {
            { backgroundColor: '#294a66ff', color: 'white' } } >
        <
        div style = {
            { textAlign: 'center', padding: '20px 0' } } >
        <
        h2 className = 'mainh1' > About < span style = {
            { fontWeight: 'bold' } } > Coder Finder < /span></h
        2 >
        <
        /div> <
        div style = {
            { textAlign: 'center', padding: '0px 50px 50px 50px' } } >
        <
        p className = 'pmain' > Coder Finder is a platform that connects web developers with potential clients or companies. < /p> <
        br / >
        <
        p className = 'pmain' > Coder Finder allows developers to create and edit a profile that showcases their skills,
        while clients are able to search
        for and view web developers and their profiles. < /p> <
        p className = 'pmain' > < a href = "/signup"
        style = {
            { textDecoration: 'none', color: '#f0a202', fontWeight: '400' } } > Sign up < /a> to get started today!</p >

        <
        /div> <
        /div>


        <
        div className = "aboutDev"
        style = {
            { padding: ' 50px' } } >
        <
        h1 className = "mainh1"
        style = {
            { margin: '20px 50px 50px 50px' } } > About Developers < /h1> <
        div className = 'about-cards' >
        <
        Row style = {
            { justifyContent: 'space-evenly', margin: '30px' } } >

        <
        Card style = {
            { backgroundColor: '#f2f7f2ff', width: '20rem', padding: '10px', margin: '10px' } } >
        <
        Image variant = "top"
        src = { carissa }
        className = 'p-3'
        roundedCircle / >
        <
        Card.Body >
        <
        Card.Title style = {
            { color: 'black' } } > Carissa Mero | < span style = {
            { fontSize: '18px' } } > Full - Stack < /span></Card.Title >
        <
        Card.Text style = {
            { color: 'black', fontStyle: 'italic' } } >
        "How many programmers does it take to change a light bulb?
        None– It’ s a hardware problem " <
        /Card.Text> <
        Row >
        <
        div style = {
            { color: 'black', fontSize: '50px', textAlign: 'center' } } >
        <
        a href = 'https://github.com/carissamero'
        target = '_blank' >
        <
        AiFillGithub style = {
            { marginRight: '15px' } }
        /> <
        /a> <
        a href = 'https://www.linkedin.com/in/carissa-mero-91333813a/'
        target = '_blank' >
        <
        AiFillLinkedin style = {
            { marginLeft: '15px' } }
        /> <
        /a> <
        /div> <
        /Row> <
        /Card.Body> <
        /Card>

        <
        Card style = {
            { backgroundColor: '#f2f7f2ff', width: '20rem', padding: '10', margin: '10px' } } >

        <
        Image variant = "top"
        src = { kenneth }
        className = 'p-3'
        roundedCircle / >
        <
        Card.Body >
        <
        Card.Title style = {
            { color: 'black' } } > Kenneth Huang | < span style = {
            { fontSize: '18px' } } > Full - Stack < /span></Card.Title >
        <
        Card.Text style = {
            { color: 'black', fontStyle: 'italic' } } >
        "Why do programmers always mix up Halloween and Christmas?
        Because Oct 31 equals Dec 25. " <
        /Card.Text> <
        Row >
        <
        div style = {
            { color: 'black', fontSize: '50px', textAlign: 'center' } } >
        <
        a href = 'https://www.GitHub.com/kekehua' >
        <
        AiFillGithub style = {
            { marginRight: '15px' } }
        /> <
        /a> <
        a href = 'https://www.linkedin.com/in/kenneth-huang-317187169/'
        target = '_blank' >
        <
        AiFillLinkedin style = {
            { marginLeft: '15px' } }
        /> <
        /a> <
        /div> <
        /Row> <
        /Card.Body> <
        /Card>

        <
        Card style = {
            { backgroundColor: '#f2f7f2ff', width: '20rem', padding: '10', margin: '10px' } } >
        <
        Image variant = "top"
        src = { gracie }
        className = 'p-3'
        roundedCircle / >
        <
        Card.Body >
        <
        Card.Title style = {
            { color: 'black' } } > Gracie Navarro | < span style = {
            { fontSize: '18px' } } > Front - End < /span></Card.Title >
        <
        Card.Text style = {
            { color: 'black' } } >
        Front - end web developer with experience in digital marketing.Please feel free to reach out to me at Ggracielanavarro @gmail.com!
        <
        /Card.Text> <
        Row >
        <
        div style = {
            { color: 'black', fontSize: '50px', textAlign: 'center' } } >
        <
        a href = 'https://github.com/avii004'
        target = '_blank' >
        <
        AiFillGithub style = {
            { marginRight: '15px' } }
        /> <
        /a> <
        a href = 'https://www.linkedin.com/in/gracie-navarro-316111236'
        target = '_blank' >
        <
        AiFillLinkedin style = {
            { marginLeft: '15px' } }
        /> <
        /a> <
        /div> <
        /Row> <
        /Card.Body> <
        /Card>

        <
        Card style = {
            { backgroundColor: '#f2f7f2ff', width: '20rem', padding: '10', margin: '10px' } } >
        <
        Image variant = "top"
        src = { mark }
        className = 'p-3'
        roundedCircle / >
        <
        Card.Body >
        <
        Card.Title style = {
            { color: 'black' } } > Mark Bermejo | < span style = {
            { fontSize: '18px' } } > Front - End < /span></Card.Title >
        <
        Card.Text style = {
            { color: 'black' } } >
        Front - end web developer. <
        /Card.Text> <
        Row >
        <
        div style = {
            { color: 'black', fontSize: '50px', textAlign: 'center' } } >
        <
        a href = ''
        target = '_blank' >
        <
        AiFillGithub style = {
            { marginRight: '15px' } }
        /> <
        /a> <
        a href = ''
        target = '_blank' >
        <
        AiFillLinkedin style = {
            { marginLeft: '15px' } }
        /> <
        /a> <
        /div> <
        /Row> <
        /Card.Body> <
        /Card>

        <
        Card style = {
            { backgroundColor: '#f2f7f2ff', width: '20rem', padding: '10', margin: '10px' } } >
        <
        Image variant = "top"
        src = { alexis }
        className = 'p-3'
        roundedCircle / >
        <
        Card.Body >
        <
        Card.Title style = {
            { color: 'black' } } > Alexis Ramos | < span style = {
            { fontSize: '18px' } } > Full - Stack < /span></Card.Title >
        <
        Card.Text style = {
            { color: 'black', fontStyle: 'italic' } } >
        "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds." <
        /Card.Text> <
        Row >
        <
        div style = {
            { color: 'black', fontSize: '50px', textAlign: 'center' } } >
        <
        a href = ''
        target = '_blank' >
        <
        AiFillGithub style = {
            { marginRight: '15px' } }
        /> <
        /a> <
        a href = ''
        target = '_blank' >
        <
        AiFillLinkedin style = {
            { marginLeft: '15px' } }
        /> <
        /a> <
        /div> <
        /Row> <
        /Card.Body> <
        /Card> <
        /Row> <
        /div> <
        /div> <
        /div>
    )
}