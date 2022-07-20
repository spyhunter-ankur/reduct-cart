import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import {
  Button,
  Input,
  Card,
  Col,
  Row,
  Modal,
  Form,
  Typography,
  Image,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { addProduct } from "../../redux/reducers/product";
import "./home.css";

const { Paragraph } = Typography;
const { TextArea } = Input;
const { confirm } = Modal;

const showConfirm = () => {
  console.log('delete');
  confirm({
    title: "Are you sure you want to delete these product?",
    icon: <ExclamationCircleOutlined />,
    
    onOk() {
      console.log("OK");
      

    },

    onCancel() {
      console.log("Cancel");
    },
  });
};

const Home = () => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0,1)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const [form] = Form.useForm();
  const [productlist, setProductList] = useState([]);
  const [modal, setModal] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
    setModal(false);
    dispatch(addProduct(values));
  };
  const onReset = () => {
    console.log("inside reset ");
    form.resetFields();
    
  };

  useEffect(() => {
    console.log("products", products);
    setProductList([{ title: "add" }, ...products]);
    // let item = products[6];
    // var removed = products.splice(0);
    // console.log(removed);
  }, [products]);

  return (
    <div className="home">
      <div className="site-card-wrapper">
        <Row gutter={[24, 24]}>
          {productlist?.map((product) => {
            if (product?.title === "add") {
              return (
                <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                  <Card
                    className="product-item"
                    bordered={false}
                    onClick={() => setModal(true)}
                  >
                    <PlusOutlined />
                    add product
                  </Card>
                </Col>
              );
            } else {
              return (
                <Col xs={20} sm={16} md={12} lg={8} xl={6}>
                  <Card className="product-item">
                    
                    {
                      <Image
                        preview={false}
                        className="img"
                        src={require("../../assets/Mangoes.png")}
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          // display: "flex",
                          minHeight: "150px",
                        }}
                      />
                    }
                    <div className="texts">
                      <h2>{product.name}</h2>
                      <p className="price">₹{product.price}</p>
                      <Paragraph ellipsis={{ rows: 2 }}>
                        {product.desc}
                      </Paragraph>

                      <Button
                        type="primary"
                        shape="squre"
                        style={{ margin: "0 20px 0 0" }}
                        icon={<EditOutlined />}
                      />
                      <Button
                        type="primary"
                        shape="squre"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={showConfirm}
                      />
                    </div>
                    <div></div>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>

        {/* add product modal */}
        <Modal
          xs={20}
          sm={16}
          md={12}
          lg={8}
          xl={4}
          visible={modal}
          title="Add Product"
          onCancel={() => {
            console.log("cancel modal");
            setModal(!modal);
          }}
          footer={null}
        >
          <Form
            form={form}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            id="addProduct"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 12,
            }}
            autoComplete="off"
          >
            <Form.Item
              type="text"
              label="Product Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your product name!",
                  whitespace: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Product Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Price must be minimum 5 characters.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Product Description"
              name="desc"
              rules={[
                {
                  message: "Please input your product description!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label="Product Quntity"
              name="quntity"
              rules={[
                {
                  required: true,
                  message: "Please input your product quntity",
                  min: 1,
                  max: 5,
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button style={{ margin: "0 20px 0 0" }} onClick={onReset}>
                cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Home;