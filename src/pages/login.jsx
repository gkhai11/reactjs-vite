import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row, Form, Input, Button, message, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useState } from "react";

// import { Divider } from "antd";
const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginAPI(values.email, values.password);
    if (res.data) {
      message.success("Đăng nhập thành công");
      navigate("/");
    } else {
      notification.error({
        message: "Error login",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };
  return (
    <Row justify={"center"} style={{ marginTop: "30px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend>Đăng nhập</legend>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Không được để trống email",
                },
                {
                  type: "email",
                  message: "Email không đúng định dạng",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Không được để trống passsword" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  loading={loading}
                  type="primary"
                  onClick={() => {
                    form.submit();
                  }}
                >
                  Login
                </Button>
                <Link to="/">
                  Go to Home Page
                  <ArrowRightOutlined />
                </Link>
              </div>
            </Form.Item>
            <p>
              Chưa có tài khoản?<Link to="/register"> Đăng ký tại đây</Link>
            </p>
          </Form>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
