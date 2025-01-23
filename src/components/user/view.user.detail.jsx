import { Drawer } from "antd";
import { Button } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handelOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  console.log("check file", preview);
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
          <div
            style={{
              marginTop: "10px",
              height: "150px",
              width: "200px",
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
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
            <input
              type="file"
              hidden
              id="uploadBtn"
              onChange={(event) => {
                handelOnChangeFile(event);
              }}
            />
          </div>
          {preview && (
            <div
              style={{
                marginTop: "10px",
                height: "150px",
                width: "200px",
                border: "1px solid #ccc",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={preview}
              />
            </div>
          )}
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
