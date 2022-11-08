import styles from "./Thing.module.scss";
import "@/App.scss";

function Thing(props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.one}</h3>
      <p className={styles.description}>
        {props.two}
        <span> {" "} {props.three} </span>
          <br />
        <span className={styles.text}>
          {props.four}
        </span>
      </p>
    </div>
  );
}

export default Thing;

{
  /* <h3 className="position">Software Engineer</h3>
<p className="description">
  Napice {" "}
  <span>
    • Canada (remote) <br />
    Aug 2022 – Present • 4 mos{" "}
  </span>
</p> */
}
