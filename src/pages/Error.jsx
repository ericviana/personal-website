import "@/App.scss";
import Gif from "@/assets/404.gif"
//import "../styles/Error.scss";

function Error() {
  return (
    <div className="container">
      <img src={Gif} alt="" height='200'/>
      <h2>404 Not Found </h2> 
      <a href="">Go back to home ↷</a>  
    </div>
  );
}

export default Error;