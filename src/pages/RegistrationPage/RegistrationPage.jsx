import RegistrationForm from "../../components/RegistarationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div>
      <p className={css.title}>Register your account</p>
      <RegistrationForm />
    </div>
  );
}
