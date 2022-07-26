import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./home.css";
import AddProductModal from "../../components/AddProductModal";
import ProductCard from "../../components/ProductCard";

const Home = (props) => {
  const products = useSelector((state) => state.product);

  const [productlist, setProductList] = useState([]);
  const [modal, setModal] = useState(false);

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
                  <ProductCard
                    index={index}
                    data={product}
                  />
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
