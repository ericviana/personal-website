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