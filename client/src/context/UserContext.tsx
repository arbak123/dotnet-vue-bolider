import { createContext, useEffect, useState } from "react";
import { User } from "../models/User";
import * as UserApi from '../network/UserApi'
interface ContextType{
    user:User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
const UserContext = createContext<ContextType>({
    user:null,
    setUser:()=>{}
})

function UserContextProvider(props:any) {
    const [user,setUser] = useState<User | null>(null)

    useEffect(()=>{
        async function fetchLoggedInUser(){
            try{
                const user = await UserApi.getLoggedInUser()
                console.log("logged in user from server:",user)
                setUser(user)
            } catch(err){
                console.log("error getting logged in user: ",err)
            }
        }
        fetchLoggedInUser()
    },[])

    return (
        <UserContext.Provider value={{ user,setUser }}>
          {props.children}
        </UserContext.Provider>
      );
}

export {UserContext,UserContextProvider}