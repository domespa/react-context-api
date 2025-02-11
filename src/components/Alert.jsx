import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
  const { alertData } = useAlertContext();

  const { message } = alertData;
  if (!message) return null;

  return <div className="alert">{message}</div>;
}
