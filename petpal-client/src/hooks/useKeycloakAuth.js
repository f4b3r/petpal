import { useKeycloak } from "@react-keycloak/web"
import { useEffect, useState } from "react";


const useKeycloakAuth = () => {
    const { keycloak, initialized } = useKeycloak();
    const isAuthenticated = keycloak.authenticated;
    console.log('IS AUTH', isAuthenticated)
    const [userName, setUserName] = useState();

    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                const userInfo = await keycloak.loadUserInfo();
                const { name } = userInfo;
                setUserName(name);
            } catch (error) {
                console.error("Error loading user info:", error);
            }
        };

        if (isAuthenticated) {
            loadUserInfo();
        }
    }, [isAuthenticated, keycloak]);

    return { isAuthenticated, userName };
};

export default useKeycloakAuth;