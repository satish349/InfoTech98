import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CurrPages = () =>{
    return(
        <>
            <div className='px-30 pb-15'>
                <p className="text-xl text-white py-3">MERN Stack Web Development</p>
                <div>
                    <Accordion className='mb-2'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span">Frontend (HTML,CSS,Javascript, React)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>What is Web?</AccordionDetails>
                        <AccordionDetails>Markup with HTML & JSX</AccordionDetails>
                        <AccordionDetails>Flexbox, Grid & Responsiveness</AccordionDetails>
                        <AccordionDetails>Bootstrap Layouts & Components</AccordionDetails>
                        <AccordionDetails>Frontend UI Framework - Tailwind CLI</AccordionDetails>
                        <AccordionDetails>Core JavaScript & Object Orientation</AccordionDetails>
                        <AccordionDetails>Async JS - promises, async/await</AccordionDetails>
                        <AccordionDetails>DOM & Events</AccordionDetails>
                        <AccordionDetails>Event Bubbling & Delegation</AccordionDetails>
                        <AccordionDetails>Ajax, Axios & fetch API</AccordionDetails>
                        <AccordionDetails>Functional React Components</AccordionDetails>
                        <AccordionDetails>Props & State Management</AccordionDetails>
                        <AccordionDetails>Dynamic Component Styling</AccordionDetails>
                        <AccordionDetails>Functions as Props</AccordionDetails>
                        <AccordionDetails>Hooks in React : useState, useEffect</AccordionDetails>
                        <AccordionDetails>Material UI</AccordionDetails>
                        <AccordionDetails>Custom Hooks</AccordionDetails>
                        <AccordionDetails>Supplement: Redux & Redux Toolkit</AccordionDetails>
                        <AccordionDetails>Version Control: Git & Github</AccordionDetails>
                    </Accordion>
                    <Accordion className='mb-2'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        <Typography component="span">Backend (NodeJS, MongoDB, SQL)</Typography>
                        </AccordionSummary>
                        <AccordionDetails>Databases (SQL & No SQL)</AccordionDetails>
                        <AccordionDetails>Mongo Relationships</AccordionDetails>
                        <AccordionDetails>Dive deep into Mongo</AccordionDetails>
                        <AccordionDetails>Express, Nodejs & npm</AccordionDetails>
                        <AccordionDetails>REST APIs</AccordionDetails>
                        <AccordionDetails>Routing, cookies & session</AccordionDetails>
                        <AccordionDetails>Middlewares deep dive</AccordionDetails>
                        <AccordionDetails>EJS Templating</AccordionDetails>
                        <AccordionDetails>MVC Architecture</AccordionDetails>
                        <AccordionDetails>Client & server side Validations</AccordionDetails>
                        <AccordionDetails>Error Handling & flash-connect</AccordionDetails>
                        <AccordionDetails>Authorization</AccordionDetails>
                        <AccordionDetails>Cloudinary & MapBox with Geocoding</AccordionDetails>
                        <AccordionDetails>Deployment with Render</AccordionDetails>
                        <AccordionDetails>+ More Topics like AWS Deployment, socket.io, unit testing with JEST, webRTC etc. in Project based learning </AccordionDetails>
                    </Accordion>

                    <Accordion className='mb-2'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        <Typography component="span">Projects</Typography>
                        </AccordionSummary>
                        <AccordionDetails>Multiple Minor projects : Simon Says Game, Real-time Weather App (React), Todo List App, Spotify Replica etc.</AccordionDetails>
                        <AccordionDetails>Airbnb (Travel & Listing)</AccordionDetails>
                        <AccordionDetails>Zerodha (Investing & Stock Prices)</AccordionDetails>
                        <AccordionDetails>ChatGPT (OpenAI API integration)</AccordionDetails>
                        <AccordionDetails>Linkedin (Social Media)</AccordionDetails>
                        <AccordionDetails>Github (our own Version Control)</AccordionDetails>
                        <AccordionDetails>Zoom (Live Video Conferencing)</AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}
export default CurrPages;