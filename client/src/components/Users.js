import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/users")
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {users.length > 0 &&
        users.map((elem) => {
          return (
            <div>
              <p>{elem.id}</p>
              <p>{elem.username}</p>
              <p>{elem.department}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
