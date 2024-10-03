import TokenContext from "./tokenContext";

const TokenState = (props) => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    const adminCookie = getCookie('admin');
    const adminData = adminCookie ? JSON.parse(decodeURIComponent(adminCookie)) : null;
    const token = adminData ? `Bearer ${adminData.token}` : null;
    
    return (
        <TokenContext.Provider value={{ token }}>
            {props.children}
        </TokenContext.Provider>
    );
}

export default TokenState;
