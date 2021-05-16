import React from 'react';

const year = new Date();

function Footer(){
    return <div>
        <footer><p>Copyright © {year.getFullYear()}</p></footer>
    </div>
}

export default Footer;