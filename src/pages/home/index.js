import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Row, Modal, Typography, Image } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { deleteProduct } from "../../redux/reducers/product";
import "./home.css";
import AddProductModal from "../../components/AddProductModal";

const { Paragraph } = Typography;

const { confirm } = Modal;

const Home = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const [productlist, setProductList] = useState([]);
  const [modal, setModal] = useState(false);

  const showConfirm = (index) => {
    console.log("delete");

    confirm({
      title: "Are you sure you want to delete these product?",
      icon: <ExclamationCircleOutlined />,

      onOk() {
        console.log("OK");
        dispatch(deleteProduct(index));
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    console.log("products", products);
    setProductList([{ title: "add" }, ...products]);
  }, [products]);

  return (
    <div className="home">
      <div className="site-card-wrapper">
        <Row gutter={[24, 24]}>
          {productlist?.map((product, index) => {
            if (product?.title === "add") {
              return (
                <Col xs={20} sm={16} md={12} lg={8} xl={6} key={index}>
                  <Card
                    className="product-item"
                    bordered={false}
                    onClick={() => setModal(true)}
                  >
                    <PlusOutlined />
                  </Card>
                </Col>
              );
            } else {
              return (
                <Col xs={20} sm={16} md={12} lg={8} xl={6} key={index}>
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
                        onClick={() => showConfirm(index - 1)}
                      />
                    </div>
                    <div></div>
                  </Card>
                </Col>
              );
            }
          })}
        </Row>

        <AddProductModal
          isVisible={modal}
          onClose={() => {
            setModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
