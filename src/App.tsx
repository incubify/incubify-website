    import React, {useState} from 'react';
    import './App.css';
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {fab} from '@fortawesome/free-brands-svg-icons'
    import {faQuestionCircle, faEnvelope, faRocket, faBolt} from '@fortawesome/free-solid-svg-icons'
    import ModalButton from './Modal/ModalButton';
    import styled from "styled-components";
    import Modal from './Modal/Modal';
    library.add(fab, faQuestionCircle, faEnvelope, faRocket, faBolt)
    const ModalContent = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow: scroll;
      flex-direction: column;
      padding: 10px;
      ul {
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        width: 100%;
        margin: 30px 0 0;
      }

      li {
        margin: 0;
        padding: 0;
        list-style-type: none;
        color: #3f1c0c;
        font-size: 16px;
        display: block;
        line-height: 16px;
      }

      a {
        text-decoration: none;
        font-size: 16px;
        line-height: 16px;
        cursor: pointer;
      }

      h1 {
        color: #3f1c0c;
        font-size: 22px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        color: #3f1c0c;
        overflow: scroll;
      }

      h2 {
        color: #3f1c0c;
        font-size: 18px;
        margin-top: 20px;
      }
    `;



    function App() {
        const [isOpen, toggle] = useState(false);

        function handlOpenModal(open: any) {
            console.log("close modal");
            toggle(open);
        }

        return (
            <div className="main">
                <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
                    <ModalContent>
                        <h1>What is Incubify?</h1>
                        <p>
                            Incubify is a decentralized incubator built on the Binance Smart Chain network. We believe in the
                            future of decentralized finance and we select projects with user votes, then we are building a
                            funding round that only those holding Incubify tokens can participate in. <br/>
                            Half of the tokens will be distributed via airdrop. The remaining half will be sold over PancakeSwap.
                        </p>
                        <ul>
                            <li>SYMBOL: IFY</li>
                            <li>TOTAL SUPPLY: 1.200.000 IFY</li>
                            <li><a href="https://bscscan.com/token/0x7b70cca52db57512a63c62c7e8ddb834c404d322" rel="noreferrer noopener" target="_blank">TOKEN CONTRACT ADDRESS</a></li>
                        </ul>
                        <h2>Coming soon..</h2>
                    </ModalContent>
                </Modal>
                <div className="buttons">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScSzcNp2JHUkgVngJSW5UWoxN3ldsmwv6vmWSCeeJLZHe_Lzg/viewform" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={['fas', 'bolt']} /> AIRDROP</a>
                    <ModalButton handleClick={() => handlOpenModal(true)}><FontAwesomeIcon
                        icon={['fas', 'question-circle']}/></ModalButton>
                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x7b70cca52db57512a63c62c7e8ddb834c404d322" rel="noreferrer noopener" target="_blank">PANCAKE <FontAwesomeIcon icon={['fas', 'rocket']} /> </a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="incubify" data-name="incubify" viewBox="0 0 512 512">
                        <path className="cls-1"
                              fill="#3f1c0e"
                              d="M44.57,217.52H76.31c.35-1,.72-1.91,1.09-2.86-120.66-21.25-74.91-173,8.69-180.89,43.78-4.12,86,33.33,94.67,75.35a471.72,471.72,0,0,1,150.46.11C340.07,66,384.4,27.69,429.34,34.16,511,45.9,553.68,194.24,434,214.77l1.05,2.75h39.84V287.8c-7.3.33-13.42.67-19.26,2.78l5.43,30.5c3.93,25.79-4.63,49.95-23.9,67.58C389.71,432,335.84,462.6,272,476.67a72,72,0,0,1-32.77,0c-63.8-14.07-117.66-44.66-165.08-88C54.91,371,46.36,346.87,50.29,321.08l5.43-30.5c-5.84-2.11-12-2.45-19.26-2.79V217.52Z"/>
                        <path className="cls-2"
                              fill="#e0731f"
                              d="M40.89,150.46C39.46,124.24,56.7,97.17,87.59,94c17.6-1.82,35.66,5.71,47.44,20.32,6,7.45,31.68.13,26.68-12.88C150,71,117.43,45.5,84.93,50.17c-41.93,6-74.62,61.5-62.55,103.42,3.09,10.73,19.12,8,18.51-3.13Z"/>
                        <path className="cls-3"
                              fill="#ee9e5b"
                              d="M40.89,150.46C39.49,124.8,56,98.34,85.62,94.23h0S40.45,92.4,21.09,121a72.46,72.46,0,0,0,1.29,32.55C25.47,164.32,41.5,161.61,40.89,150.46Zm79.31-49.05A55.68,55.68,0,0,1,135,114.31c6,7.45,31.68.13,26.68-12.88a80.88,80.88,0,0,0-6.13-12.51c-4,5.46-13.77,14.27-35.38,12.49Z"/>
                        <path className="cls-1"
                              fill="#3f1c0e"
                              d="M125.67,129.9c-4.28-9.42-18.06-18.05-27.4-19.94-26.17-5.28-55.82,29-32.61,56.63,6,7.15,15.06,12.61,26.45,14.69C100,165.55,112.4,141.75,125.67,129.9Z"/>
                        <path className="cls-1"
                              fill="#3f1c0e"
                              d="M385.66,129.91c13.25,11.85,25.7,35.65,33.55,51.37,11.4-2.08,20.45-7.52,26.46-14.68h0C468.87,139,439.21,104.68,413,110c-10.43,2.11-17.74,8.12-26.19,17.36l-1.19,2.59Z"/>
                        <path className="cls-4"
                              fill="#f9cb3a"
                              d="M458.64,233.74h-406V273c24.57,4.91,42.06,26.62,47.53,51.21H411.11c5.47-24.59,23-46.3,47.53-51.21Z"/>
                        <path className="cls-5"
                              fill="#ef9900"
                              d="M85.48,233.74H52.67V273c24.57,4.91,42.05,26.62,47.53,51.21H411.11L121.37,311.25,85.48,262.79Z"/>
                        <path className="cls-2"
                              fill="#e0731f"
                              d="M441,300.6c-11.4,12-13.88,23.5-16,39.77H86.35c-2.13-16.3-4.6-27.73-16-39.77l-4,22.89C63.19,344,69.83,362.8,85.08,376.75c45.31,41.43,96.73,67.94,157.68,81.39a58.06,58.06,0,0,0,25.8,0c60.94-13.44,112.36-39.95,157.67-81.38C441.48,362.8,448.12,344,445,323.49l-4-22.89Z"/>
                        <path className="cls-2"
                              fill="#e0731f"
                              d="M93.61,217.52H417.7A375,375,0,0,0,386,155.26c-9.21-14.64-22.44-23.67-39.44-26.93-62.61-12-119.21-12-181.82,0-17,3.26-30.23,12.29-39.44,26.93a376.13,376.13,0,0,0-31.69,62.26Z"/>
                        <path className="cls-3"
                              fill="#ee9e5b"
                              d="M164.05,340.37H86.35c-2.13-16.3-4.6-27.73-16-39.77l-4,22.89C63.19,344,69.83,362.8,85.08,376.75c45.31,41.43,96.73,67.94,157.68,81.39a58.06,58.06,0,0,0,25.8,0,349.34,349.34,0,0,0,73.87-24.86c-51.37,17.67-200.08-12.76-204.15-71.08-.74-10.58,7.11-21.82,25.77-21.82Z"/>
                        <path className="cls-3"
                              fill="#ee9e5b"
                              d="M93.61,217.53h19.73c4.22-24.09,11.12-52.56,20.2-72.8C119.94,158.68,100.77,199.44,93.61,217.53Z"/>
                        <path className="cls-6"
                              fill="#3f1c0c"
                              d="M301.07,242.76h77.47a23.2,23.2,0,0,1,23.14,23.13V292a23.2,23.2,0,0,1-23.14,23.13H301.07A23.2,23.2,0,0,1,277.94,292V265.89a23.2,23.2,0,0,1,23.13-23.13Z"/>
                        <path className="cls-6"
                              fill="#3f1c0c"
                              d="M134.14,242.76h77.48a23.2,23.2,0,0,1,23.13,23.13V292a23.2,23.2,0,0,1-23.13,23.13H134.14A23.19,23.19,0,0,1,111,292V265.89a23.19,23.19,0,0,1,23.12-23.13Z"/>
                        <path className="cls-2"
                              fill="#e0731f"
                              d="M470.41,150.46c1.44-26.22-15.8-53.29-46.69-56.47-17.6-1.82-35.65,5.71-47.44,20.32-6,7.45-31.68.13-26.68-12.88C361.28,71,393.88,45.5,426.38,50.17c41.93,6,74.62,61.5,62.55,103.42-3.09,10.73-19.13,8-18.52-3.13Z"/>
                        <path className="cls-7"
                              fill="#e8b349"
                              d="M216,374.6c5,16.33,33.12,24.37,18.21,33.26l1.13,5.39s15.86-2.21,17-5.72,3.32-10.14,2-18.44-1.48-10.33-4.06-12S227,374.15,216,374.6Z"/>
                        <path className="cls-7"
                              fill="#e8b349"
                              d="M295.34,374.6c-5,16.33-33.12,24.37-18.2,33.26L276,413.25s-15.86-2.21-17-5.72-3.32-10.14-2-18.44,1.48-10.33,4.06-12S284.3,374.15,295.34,374.6Z"/>
                        <path className="cls-1"
                              fill="#3f1c0e"
                              d="M255.66,419.49a38,38,0,0,1-37.69.15c-5.58-3.06-2.9-11.69,3.48-11,10,1.15,19.71-2.35,24.36-6L244,393.58c-23.11-2-40.17-28.84-22.36-36.89,7.84-3.55,21.34-.64,34-.64s26.17-2.91,34,.64c17.79,8.05.74,34.87-22.37,36.89l-1.82,9.12c4.65,3.63,14.37,7.13,24.37,6,6.38-.73,9.07,7.9,3.48,11a37.93,37.93,0,0,1-37.68-.15Z"/>
                        <path className="cls-3"
                              fill="#ee9e5b"
                              d="M470.41,150.46c1.41-25.66-15.07-52.12-44.72-56.23h0S470.86,92.4,490.22,121a72.6,72.6,0,0,1-1.29,32.55C485.84,164.32,469.8,161.61,470.41,150.46Zm-79.3-49.05a55.68,55.68,0,0,0-14.83,12.9c-6,7.45-31.68.13-26.68-12.88a79.17,79.17,0,0,1,6.14-12.51c3.95,5.46,13.75,14.27,35.37,12.49Z"/>
                    </svg>
                </div>
                <ul>
                    <li><a href="mailto:incubify@protonmail.com" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fas', 'envelope']}/></a></li>
                    <li><a href="https://twitter.com/incubifyxyz" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                    <li><a href="https://github.com/incubify" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
                    <li><a href="https://t.me/incubify" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'telegram-plane']}/></a></li>
                </ul>
            </div>
        );
    }


    export default App;
