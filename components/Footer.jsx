import React from "react";

const year = new Date; 
const currentYear = year.getFullYear();

function Footer(){
    return <div>
        <footer className="footer">
        <p>Copyright &copy; {currentYear} </p>
        <p>Made with love by Gerson Hauwanga</p>
    </footer>
    </div>
}


export default Footer;