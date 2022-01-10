import PropTypes from "prop-types";
import styles from "./Button.module.css";
// styles object가 .btn을 가지고 있음 -> 해당 css가진 랜덤 클래스 부여
// 이제 다른 파일에서도 btn이라는 클래스네임 쓸 수 있음

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
