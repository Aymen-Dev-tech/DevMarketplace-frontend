export default function Login() {
  const handleClick = () => {
    window.open("/api/auth/google", "_self");
  };
  return <button onClick={handleClick}> login </button>;
}
