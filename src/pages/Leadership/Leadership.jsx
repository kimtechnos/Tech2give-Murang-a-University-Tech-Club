
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Leadership = ({image, twitterurl,fburl,lnnurl,fullName,field,biography }) => {
  return(
    <div className="member">
      <div className="member-image">
        <img src={image} alt={`member image Dr.${fullName}`}/>
        <div className="social-media">
          {twitterurl && <Link to={twitterurl}><FaXTwitter/></Link>}
          {fburl && <Link to={fburl}><FaFacebookF/></Link>}
          {lnnurl && <Link to={lnnurl}> <FaLinkedin /></Link>}
        </div>
        <div className="member-body">
          <h3>{fullName}</h3>
          <p className="member-body_field"> {field}</p>
          <p className="member-body_biography">{biography}</p>
        </div>

      </div>
    </div>
  )
};
export default Leadership;
