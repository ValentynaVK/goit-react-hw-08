import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader
        color="rgb(89, 24, 77)"
        size={80}
        aria-label="loading-indicator"
      />
    </div>
  );
}
