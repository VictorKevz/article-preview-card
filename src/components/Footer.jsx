import React from "react";
import CopyrightTwoToneIcon from '@mui/icons-material/CopyrightTwoTone';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


function Footer() {
    const year = new Date().getFullYear();
    const monthIndex = new Date().getMonth();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
      const monthName = monthNames[monthIndex];
    return(
        <footer>
            <p>Coded with <VolunteerActivismIcon fontSize="medium" className="icon"/> by <a href="https://github.com/VictorKevz" target="_blank">Victor.Kevz</a><CopyrightTwoToneIcon fontSize="small" className="icon"/>{monthName}, {year} </p>
        </footer>
    )
}
export default Footer;