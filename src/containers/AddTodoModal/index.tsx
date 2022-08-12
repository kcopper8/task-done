import { Modal } from "antd";

interface AddTodoModalProps {}

const AddTodoModal = ({}: AddTodoModalProps) => {
  const handleOk = () => {};
  const handleCancel = () => {};

  return (
    <Modal
      title="Basic Modal"
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default AddTodoModal;
