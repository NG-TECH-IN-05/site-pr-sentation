import React from 'react'

function Footer() {
  return (
    
    <footer>
    <div className="container py-5">
        <div className="row">
            <div className="col-md-3">
                <h3 className="mb-3"> New Generation Innovator </h3>
                <div className="pe-5">
                   <p> faites nous confiance  <br /> et vous ne serrez plus decu<br />
                   </p>
                </div>
               
            </div>
            <div className="col-md-3">
                <h3 className="mb-3">Nos services  </h3>
                <ul>
                    <li><a href=""> Realisation sites web</a></li>
                    <li><a href="">maintenance reseau</a></li>
                    <li><a href="">installation cameras</a></li>
                    <li><a href="">services digitales</a></li>
                </ul>
            </div>
            <div className="col-md-3">
            <h3 className="mb-3"> Liens </h3>
                <ul>
                    <li><a href="">A propos </a></li>
                    <li><a href=""> services</a></li>
                    <li><a href=""> <i className="bi bi-phone" style={{ fontSize: "1rem" }}></i>  contact</a></li>
                  
                </ul>
            </div>
            <div className="col-md-3">
             <h3 className="mb-3"> contactez nous  </h3>
                <ul>
                    <li><a href="">(+237) 679625450 / 657386115
                    </a></li>
                    <li><a href="">digitalgenerationinnovator@gmail.com</a></li>
                    <li><a href="">b-18xp cameroon <br />yaounde <br />214524415522544</a></li>
                    
                   
                </ul>
            </div>
            <hr />
            <p  className="text-center pt-5"> Copyright  2024 Ng Tech IN all rights reserved</p>
        </div>
    </div>
 </footer>
  )
}

export default Footer
