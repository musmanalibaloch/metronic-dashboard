import { useState } from 'react';

import { Collapse, Form, Input, Select, Button, Modal, Space, Row, Col, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Item } = Form;
const { Option } = Select;

const prefixSelector = (
  <Item name="prefix" noStyle>
    <Select defaultValue="+92" style={{ width: 70 }}>
      <Option value="92">+92</Option>
    </Select>
  </Item>
);

const DrawerBody = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
      <div>
        <Row justify="space-between" align="center" gutter={10}>
          <Col span={12}>
            <Item
              name="fullname"
              rules={[{ required: true, message: ' ' }]}
            >
              <Input placeholder="Full name" />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name="date"
              rules={[{ required: true, message: ' ' }]}
            >
              <Input placeholder="Date of birth" />
            </Item>
          </Col>
        </Row>
        <Item
          name="phone"
          rules={[{ required: true, message: ' ' }]}
        >
          <Input
            controls={false}
            addonBefore={prefixSelector}
            style={{ width: '100%' }}
            placeholder="example" />
        </Item>
        <Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'email not valid!',
            },
            {
              required: true,
              message: ' ',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Item>
        <Item
          name="cnic"
          rules={[{ required: true, message: ' ' }]}
        >
          <Input placeholder="CNIC" />
        </Item>
      </div>

    </div>
  )
}

function ApplicantModal({ visible, setVisible }) {
  const [phoneMessage, setPhoneMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [drawer, setDrawer] = useState(false);
  const PHONE_REGEX = /^[0-9\b]+$/;
  const validatePhone = value => value.length === 11 && PHONE_REGEX.test(value)

  const onBlurHandler = e => {
    if (!validatePhone(e)) {
      setPhoneMessage('Enter a valid Phone number.');
      setPhoneNumber(null);
    }
    else
      setPhoneNumber(e)
  }

  return (
    <Modal
      centered
      visible={visible}
      onCancel={_ => setVisible(false)}
      footer={null}
      title="Add a new applicant">
      <p>Help a new applicant to onboard with more ease</p>
      <Form>
        <Space>
          <Item
            name="phone"
            rules={[{ required: true, message: phoneMessage }]}
          >
            <Input
              onBlur={(e) => onBlurHandler(e.target.value)}
              controls={false}
              value={phoneNumber}
              addonBefore={prefixSelector}
              style={{ width: '100%' }}
              placeholder="example" />
          </Item>
          <Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'email not valid!',
              },
              {
                required: true,
                message: ' ',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Item>
        </Space>
        <Collapse expandIconPosition='right' ghost>
          <Panel header="Additional information" key="1">
            <Item
              name="fullname"
              rules={[{ required: true, message: ' ' }]}
            >
              <Input placeholder="Full name" />
            </Item>
            <Row justify="space-between" align="center" gutter={24}>
              <Col span={12}>
                <Item
                  name="cnic"
                  rules={[{ required: true, message: ' ' }]}
                >
                  <Input placeholder="CNIC" />
                </Item>
              </Col>
              <Col span={12}>
                <Item
                  name="date"
                  rules={[{ required: true, message: ' ' }]}
                >
                  <Input placeholder="Date of birth" />
                </Item>
              </Col>
            </Row>
          </Panel>
        </Collapse>
        <Button type="link" icon={<PlusOutlined />} onClick={() => setDrawer(true)} >Add another user</Button>
        <Drawer
          title="Add new applicant"
          placement="right"
          footer={
            <Row justify="end">
              <Space>
                <Button onClick={() => setDrawer(false)}>Cancel</Button>
                <Button type="primary">Add</Button>
              </Space>
            </Row>
          }
          onClose={() => setDrawer(false)}
          visible={drawer}
          width={350}
        >
          <DrawerBody />
        </Drawer>
        <br /><br />
        <Row justify="center">
          <Button type="primary" htmlType="submit">Send invite</Button>
        </Row>
      </Form>
    </Modal>
  )
}

export default ApplicantModal
