import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Modal, Form } from "antd";
import { addProduct, editProduct } from "../../redux/reducers/product";


const { TextArea } = Input;
const AddProductModal = (props) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
    props.data ? dispatch(editProduct({data:values ,index:props.index})) : dispatch(addProduct(values));
    props.onClose();
  };

  useEffect(() => {
    props.isVisible ? form.setFieldsValue(props.data) : form.resetFields();
  }, [props.isVisible]);

  return (
    <Modal
      title="Add Product Modal"
      visible={props.isVisible}
      onCancel={() => {
        props.onClose();
      }}
      footer={null}
    >
      <Form
        form={form}
        onFinish={onFinish}
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
          <Button
            style={{ margin: "0 20px 0 0" }}
            onClick={() => {
              form.resetFields();
              props.onClose();
            }}
          >
            cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
