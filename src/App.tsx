import React, { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "./types/types";
import UserCard from "./components/UserCard";



const App: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchUser();
  }, []);

  return (
   
    <div style={{ display: "flex", justifyContent: "center",  marginTop: "20px" }}>
      {user ? <UserCard user={user} /> : <p>Loading...</p>}
    </div>
    
  );
};



export default App;
