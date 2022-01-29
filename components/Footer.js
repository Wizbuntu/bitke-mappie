

import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";


function Footer(){
    return(
        <div>
            <footer class="footer">
    <div class="container">
        <div class="row pt-5 mt-5">
            <div class="col-md-5 pb-5">
                <h5><img src="logo.svg"></img></h5>
                <div class="row">
                    <div class="col-6">
                    <h5 class="text-md-left">Lets Connect</h5>
                <p>Plan your future and take the next step now</p>
                <p className="fw-bold">Email: info@bitke.io</p>
                    </div>
                    
                        <IconContext.Provider value={{color:'white', padding:'10px', size:'2em'}}>
                        <div>
                  <a target="_blank" href="https://web.facebook.com/BitcoinKenya254/" title="Facebook"> <FaFacebook /> </a> <a target="_blank" href="https://www.linkedin.com/company/bitcoinke/" title="Linkedin">
<FaLinkedin/></a> <a href="https://twitter.com/BitcoinKE" target="_blank" title="Twitter"><FaTwitter /></a> <a href="https://www.youtube.com/channel/UCf42KjMYcb6GMcXpXc9LPdw/videos" target="_blank" title="Youtube"> <FaYoutube /> </a>
                  </div>
                  </IconContext.Provider>
                  
                   
                </div>
            </div>
            <div class="col-md-2">
                {/* <h5 class="text-md-left">Lets Connect</h5>
                <p>Plan your future and take the next step now</p>
                <br /> */}
            </div>
            <div class="col-md-5">
                <form>
                <div class="form-group">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" />
                 </div>

                    <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="message"></textarea>
                </div>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn btn-light btn-md">Send</button>
                    </fieldset>
                </form>
            </div>
            <div className="col-12 text-center">&copy; copyright Bitke 2022</div>
        </div>
    </div>
</footer>
</div>
    )
}

export default Footer;