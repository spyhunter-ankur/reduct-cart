import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Image, Button, Typography, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import "./ProductCard.scss";
import { deleteProduct } from "../../redux/reducers/product";
import AddProductModal from "../AddProductModal";

const { Paragraph } = Typography;
const { confirm } = Modal;

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const showConfirm = (props) => {
    console.log("delete");

    confirm({
      title: "Are you sure you want to delete these product?",
      icon: <ExclamationCircleOutlined />,

      onOk() {
        console.log("OK");
        dispatch(deleteProduct(props));
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const onEdit = (obj, i) => {
    setModal(true);
  };

  return (
    <>
      <Card id="productCard" bordered={false}>
        {
          <Image
            preview={false}
            className="img"
            src={require("../../assets/Mangoes.png")}
          />
        }
        <div className="details">
          <h1>{props.data.name}</h1>
          <h3 className="price">₹{props.data.price}</h3>
          <Paragraph ellipsis={{ rows: 2 }}>{props.data.desc}</Paragraph>
          <Button
            type="primary"
            shape="circle"
            style={{ margin: "0 20px 0 0" }}
            icon={<EditOutlined />}
            onClick={() => onEdit(props.data, props.index - 1)}
          />
          <Button
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
            onClick={() => showConfirm(props.index - 1)}
          />
        </div>
      </Card>
      <AddProductModal
        isVisible={modal}
        onClose={() => {
          setModal(false);
        }}
        data={props.data}
        index={props.index - 1}
      />
    </>
  );
};

export default ProductCard;
