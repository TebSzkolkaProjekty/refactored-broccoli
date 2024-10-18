import { useParams } from "react-router-dom";
import styles from "./profile.module.css";

function ProfilePage() {
  const { userId } = useParams();

  return <h1 className={styles.h1}>{userId}</h1>;
}

export default ProfilePage;
