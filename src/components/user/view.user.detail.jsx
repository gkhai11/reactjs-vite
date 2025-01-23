import { Drawer } from "antd";
import { Button } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
  return (
    <Drawer
      width={"40vw"}
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
          <p>Avatar: </p>
          <div>
            <img
              height={150}
              width={200}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="uploadBtn"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "rgb(22 117 255)",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input type="file" hidden id="uploadBtn" />
          </div>
          {/* <Button type="primary">Upload Avatar</Button> */}
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
