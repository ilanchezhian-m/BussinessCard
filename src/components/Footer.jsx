import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare} from "react-icons/ai";
import { AiOutlineGithub} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";




function Footer(){
        return (
            <footer>
                <div className="footer-icons">
                          <a href="https://twitter.com/ilanchezhian27" className="icon-link"> 
                                      <AiFillTwitterSquare style={{ color: 'grey' }} size ="2rem"/>
                          </a>

                            <a href="https://www.linkedin.com/in/ilanchezhian-m-hyhfgds" className="icon-link">
                                     <AiOutlineLinkedin style={{ color: 'grey' }} size ="2rem"  />
                            </a>
                            
                            <a href="https://github.com/ilanchezhian-m" className="icon-link">
                                     <AiOutlineGithub style={{ color: 'grey' }} size ="2rem"  />  
                            </a>
                                      
                            <a href="https://ilanchezhian-m.github.io/portfolioweb/" className="icon-link">
                                    <BiLinkExternal style={{ color: 'grey' }} size = "2rem "/>       
                             </a>
                    
                </div>
            </footer>
        );
}

export default Footer;
