import { useKeycloak } from "@react-keycloak/web"
import { useEffect, useState } from "react";


const useKeycloakAuth = () => {
    const { keycloak, initialized } = useKeycloak();
    const isAuthenticated = keycloak.isAuthenticated;
    const [userName, setUserName] = useState();

    useEffect(() => {
        if (isAuthenticated) {
            const { preferred_username } = keycloak;
            setUserName(preferred_username);
        }
    }, [isAuthenticated, keycloak]);

    return { isAuthenticated, userName };
};

export default useKeycloakAuth;