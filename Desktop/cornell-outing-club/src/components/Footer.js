import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer--wrapper">
                    <div className="footer--top">
                        <div className="footer--top--logo fl w-25 pa2">
                            Placeholder
                        </div>
                        <div className="footer--top--about fl w-25 pa2">
                            <div className="footer--header">ABOUT</div>
                            <div className="footer--about--text">
                            The Cornell Outing Club is one of the oldest student organizations at Cornell. We offer students the chance to develop outdoors skills, leadership experience, and form lifetime bonds, all in an environment of mutual help and assistance. 
                            </div>
                        </div>
                        <div className="footer--top--follow fl w-25 pa2">
                            <div className="footer--header">FOLLOW</div>
                            <div className="footer--icons--wrapper">
                                <a href="https://www.facebook.com/CornellOutingClub/">
                                <div className="footer--icon--link">
                                    <svg
                                    viewBox = "0 0 64 64"
                                    height = "60"
                                    width = "60"
                                    className="footer--icon">
                                    <path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
                                        v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
                                            v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"/>
                                    </svg>
                                </div>
                                </a>

                                <a href="mailto:coc-exec-l@cornell.edu">
                                <div className="footer--icon--link">
                                    <svg
                                    viewBox = "0 0 24 24"
                                    height = "60"
                                    width = "60"
                                    className ="footer--icon">
                                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                                    </svg>
                                </div>
                               </a>

                               <a href="https://www.instagram.com/cornell_outing_club/">
                                <div className="footer--icon--link"> 
                                    <svg
                                    viewBox = "0 0 24 24"
                                    height = "60"
                                    width = "60"
                                    className = "footer--icon">
                                        <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/>
                                    </svg>
                                </div>
                                </a>

                            </div>
                        </div>
                        <div className="footer--top--links fl w-25 pa2">
                            <div className="footer--header">QUICKLINKS</div>
                            <div className="footer--links--list">
                                
                                <div className="link-default"><a href="/"> Home </a></div>
                                <div className="link-default"><a href="/board">Meet the E-Board</a></div>
                                <div className="link-default">About COC</div>
                                <div className="link-default">Calendar</div>
                                <div className="link-default">Resources</div>
                                <div className="link-default">LOGIN</div>
                            </div>
                            </div>
                        </div>
                    <div className = "footer--copyright">
                    COPYRIGHT @ CORNELL OUTING CLUB 2018
                    </div>
                 </div>
            </footer>
    );
    }
}



export default Footer; 