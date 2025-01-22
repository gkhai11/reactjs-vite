import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
  return (
    <Drawer
      title="Thong tin user"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>ID: {dataDetail._id}</p>
          <br />
          <p>Full Name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone number: {dataDetail.phone}</p>
          <br />
        </>
      ) : (
        <>
          <p> Khong co du lieu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
