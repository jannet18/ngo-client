import { createContext, useState } from "react";
import { useContext } from "react";
import Toast from "../components/Toast";

const appContext = createContext();
const AppContextProvider = appContext.Provider;

const AppContext = ({ children }) => {
  const [toast, setToast] = useState(undefined);

  return (
    <AppContextProvider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContextProvider>
  );
};
export { appContext };
export default AppContext;
