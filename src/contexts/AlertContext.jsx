import { createContext, useState, useContext } from "react";

// CREAZIONE CONTESTO

const AlertContext = createContext();

// CREO COMPONENTE PROVIDER

function AlertProvider({ children }) {
  const [alertData, setAlertData] = useState({
    message: "",
  });

  return (
    <AlertContext.Provider value={{ alertData, setAlertData }}>
      {children}
    </AlertContext.Provider>
  );
}

// DEFINISCO HOOK CUSTOM
function useAlertContext() {
  const context = useContext(AlertContext);
  return context;
}

export { AlertProvider, useAlertContext };
