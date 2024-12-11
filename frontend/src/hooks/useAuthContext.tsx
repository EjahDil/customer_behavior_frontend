import { AuthContext } from "../contexts/AuthContexts"
import { useContext } from "react"


export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  const { state: { user }, dispatch } = context;
  return { user, dispatch };
}