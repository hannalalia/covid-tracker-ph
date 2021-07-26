import React  from 'react';
import {IoBriefcaseSharp} from 'react-icons/io5';
import { VscFolderActive } from "react-icons/vsc";
import { GiHealthNormal } from "react-icons/gi";
import { FaSkullCrossbones } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { RiHealthBookFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive';
import NumberFormat from 'react-number-format';

function Box({title, iconName,subtitle,boxStyle}) {
const isMobile = useMediaQuery({ query: `(max-width: 760px)` });   
    return (
        <div className={boxStyle} >
            { isMobile? '':            
            <IconContext.Provider  value={{ size:"2.75rem"}}>
                {iconName==="IoBriefcaseSharp"? 
                    	<IoBriefcaseSharp></IoBriefcaseSharp>:
                iconName==="VscFolderActive"?
                    <VscFolderActive></VscFolderActive>:
                iconName==="RiHealthBookFill"?
                    <RiHealthBookFill></RiHealthBookFill>:
                iconName==="FaSkullCrossbones"?
                    <FaSkullCrossbones></FaSkullCrossbones>:
                iconName==="AiFillWarning"?
                    <AiFillWarning></AiFillWarning>: 
                    <GiHealthNormal></GiHealthNormal>
                }
                
            </IconContext.Provider>
            }
                       
            <div className="ms-4">
                <h4>{title}</h4>
                <p><NumberFormat value={subtitle} displayType={'text'} thousandSeparator={true}></NumberFormat>{title==="Fatality Rate" || title==="Recovery Rate" ? "%":""}</p>   
             </div>
        </div>           
    )  
}

export default Box
