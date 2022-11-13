import "@/App.scss";
import { Link } from "react-router-dom";
import Gif from "@/assets/404.gif"
import "../styles/Error.scss";

function Error() {
  return (
    <div className="error-container">
      <img src={Gif} alt="" height='200'/>
      <h1>Error 404 😳</h1>
      <h2>Ain't Nothing Here</h2> 
      <Link to="" className="error-link">Go back to home ↷</Link>  
    </div>
  );
}

export default Error;