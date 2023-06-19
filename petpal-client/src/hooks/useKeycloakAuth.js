import { useKeycloak } from "@react-keycloak/web"
import { useEffect, useState } from "react";


const useKeycloakAuth = () => {
    const { keycloak, initialized } = useKeycloak();
    const [userName, setUserName] = useState();
    const [token, setToken] = useState();


    const isAuthenticated = keycloak.authenticated;


    const updateToken = (successCallback) =>
    keycloak.updateToken(5)
      .then(successCallback)
      .catch(keycloak.login);
    
      useEffect(() => {   
       
        const loadUserInfo = async () => {
            try {
                const userInfo = await keycloak.loadUserInfo();
                const { name } = userInfo;
                const { token } = keycloak;
                setToken(token);
                setUserName(name);
            } catch (error) {
                console.error("Error loading user info:", error);
            }
        };

        if (isAuthenticated) {
            loadUserInfo();
        }
    }, [isAuthenticated, keycloak]);

    return { isAuthenticated, userName, token, updateToken };
};

export default useKeycloakAuth;