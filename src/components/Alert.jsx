export default function Alert({ type = "info", message }) {
  if (!message) return null;

  return <div>{message}</div>;
}
