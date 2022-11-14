import styles from "./Contact.module.scss";
import "@/App.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <a href="#" className="method">
        Email
      </a>{" "}
      <span>• hello@ericviana.com.br</span> <br /> <br />
      <a href="#" className="method">
        Github
      </a>{" "}
      <span>• github.com/ericviana</span> <br /> <br />
      <a href="#" className="method">
        Linkedin
      </a>{" "}
      <span>• linkedin.com/in/eric-viana</span> <br /> <br />
    </div>
  );
}

export default Contact;
