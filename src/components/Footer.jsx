import "../css/Footer.css"

function Footer() {

 

  return (
    <footer className="footer">
            <div className="container-footer">
                <div className="row">
                    <div className="footer-col">
                        <h4>Job Portal App </h4>
                        <ul>
                            <li><p>Making a living together</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Useful Links</h4>
                        <ul>
                            <li> <a href="#">About</a></li>
                            <li> <a href="#">Partners</a></li>
                            <li> <a href="#">Contact</a></li>
                            <li> <a href="#"></a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Help?</h4>
                        <ul>
                            <li> <a href="#">FAQ</a></li>
                            <li> <a href="#">Terms & Conditions</a></li>
                            <li> <a href="#">Privacy</a></li>
                        </ul>
                    </div>              
                </div>
            </div>
            <div className="footer-bottom">
                <p>@K V N Kishore, Job Portal App</p>
            </div>
        </footer>
  );
}

export default Footer;
