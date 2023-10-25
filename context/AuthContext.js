const { createContext } = require("react")

export const AuthContext = createContext({})

export function AuthContext ({ children}){
    return(
        <AuthContext.Provider value={{username: "thiago"}}>
            {children}
        </AuthContext.Provider>
    )
}    