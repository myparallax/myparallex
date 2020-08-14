import React from 'react'; 


function SocialAccounts(props){


return <>
<div className="social-accounts">
              <div className="base-line"></div>
              <span className="login-text-social">or login with</span>
              <div className="social-icons">
                <button className="icons">
                  <span>Github</span>
                  <img src={require("@/Assests/icons/github.svg")} alt=" " />
                </button>
                <button className="icons">
                  <span>Google</span>
                  <img src={require("@/Assests/icons/google.svg")} alt=" " />
                </button>
              </div>
            </div>
</>
}

export default SocialAccounts ; 