import { useAuth } from "../../hooks/hooks";

function LoginPage() {
  const { sendSingInEmail } = useAuth();
  return (
    <button type="button"
      onClick={() => {
        sendSingInEmail();
      }}
    >
      CHUJ
    </button>
  );
}

export default LoginPage;
