import UserTable from "../components/user/user.table";
import UserForm from "../components/user/user.form";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUser();
  }, [current, pageSize]);
  const loadUser = async () => {
    const res = await fetchAllUserAPI(current, pageSize);
    if (res.data) {
      setDataUsers(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <UserForm loadUser={loadUser} />
        <UserTable
          dataUsers={dataUsers}
          loadUser={loadUser}
          current={current}
          pageSize={pageSize}
          total={total}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default UserPage;
