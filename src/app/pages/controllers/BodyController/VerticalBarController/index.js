import React, {useState, useRef} from 'react';
import Adduser from "../../../../assets/adduser.svg";
import Configuration from "../../../../assets/configuration.svg";
import Exit from "../../../../assets/exit.svg";
import Home from "../../../../assets/home.svg";
import Calendar from "../../../../assets/calendar.svg";
import Modal from '../../../../components/Modal'
import {BarStyle, LinkBarStyle} from "./style";


const Bar = ()=> {

    const [dropdown, setDropdown] = useState(""); 
    const modalRef = useRef(null);

    const toggleDropdown = () => {
        //se clicar no botão, modal aparece
        setDropdown("show");
        document.body.addEventListener("click", closeDropdown);
    }

    const closeDropdown = event => {
        event.stopPropagation(); 
        const contain = modalRef.current.contains(event.target);
        if (!!!contain) { //se clicar fora do modal, ele DESaparece
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };
    return(
        <BarStyle>
            <Modal className={dropdown} modalRef={modalRef}/>

            <LinkBarStyle src={Home}></LinkBarStyle>
            <LinkBarStyle onClick={toggleDropdown} src={Adduser}></LinkBarStyle>
            <LinkBarStyle src={Calendar}></LinkBarStyle>
            <LinkBarStyle src={Configuration}></LinkBarStyle>
            <LinkBarStyle src={Exit}></LinkBarStyle>
        </BarStyle>

    )
}
export default Bar;