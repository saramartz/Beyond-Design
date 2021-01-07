import linkedin from "./linkedin2.png"

const Footer = () => {
    return (
    <footer className="site-footer">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify mr-4">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Photography</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Fashion</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Stylism</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Makeup</a></li>
              <li><a href="http://scanfcode.com/category/android/">Modeling</a></li>           
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Terms & Condition</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by Sara Martínez Vega.</p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">             
                <li><a className="linkedin" target="_blank" href="https://www.linkedin.com/in/sara-mart%C3%ADnez-vega-5a25991b9/"><img src={linkedin} style={{width: 20, height: 20, opacity: 0.8}} className="linkedin-icon mb-1"></img></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    )
}  

export default Footer


