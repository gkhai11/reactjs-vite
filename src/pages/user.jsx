import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <UserForm loadUser={loadUser} />
        <UserTable dataUsers={dataUsers} loadUser={loadUser} />
      </div>
    </div>
  );
};

export default UserPage;
