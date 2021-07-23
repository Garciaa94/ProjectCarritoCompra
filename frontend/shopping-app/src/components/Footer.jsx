import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (

        <footer className="footer navbar text-center">
            <div className="container">
                <span className="text-muted">
                   <p>
                   <span className="material-icons align-middle">copyright</span>
                       All rights reserved 2021-2022.  
                       <a href="https://github.com/garciaa94">
                        <FontAwesomeIcon icon={faCodeBranch}/>
                            Garciaa94
                        </a> 
                    </p> 
                </span>
            </div>
        </footer>
    );
}

export default Footer;