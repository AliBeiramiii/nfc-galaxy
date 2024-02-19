import { useContext,} from "react";
import AuthContext from "../../context-Api/AuthProvider";

const useAuth = () => {
    const authContext = useContext(AuthContext);
    // useDebugValue(authContext?.auth, auth => authContext?.auth?.username ? "Logged In" : "Logged Out");
    return authContext;
}

export default useAuth;
