import { useState } from 'react';

import { Form, Input, Select, Button, Typography, Modal, Space, Row, Col, Drawer, message } from 'antd';
import { CiCircleFilled, DownOutlined, LinkOutlined, PlusOutlined, UpOutlined, UserOutlined } from '@ant-design/icons';
import { applicantCreate } from '../../services/api';
import { CustomeLoader, StyledLoader } from '../../components/loader';
import { values } from '@antv/util';

const { Item } = Form;
const { Paragraph, Text } = Typography;
const { Option } = Select;

const prefixSelector = (
  <Item name="prefix" noStyle>
    <Select defaultValue="+92" style={{ width: 70 }}>
      <Option value="92">+92</Option>
    </Select>
  </Item>
);

const copyableStyle = {
  border: '1px solid rgba(0, 0, 0, 0.45)',
  color: 'rgba(0, 0, 0, 0.45)',
  padding: '4px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const nonCopyableStyle = {
  border: '1px solid rgba(0, 0, 0, 0.45)',
  color: 'rgba(0, 0, 0, 0.25)',
  padding: '4px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: "#F5F5F5"
}

function InviteSentModal({ visible, setVisible }) {
  const [drawer, setDrawer] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [sendInvite, setSendInvite] = useState(false);
  const [fullName, setFullName] = useState("");
  const [DOB, setDOB] = useState("asafas");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [usersArray, setUsersArray] = useState([])

  const getData = (newUser) => {

  }

  const handleInvite = async () => {
    setLoading(true)
    const applicantsData = {
      applicantType: "known",
      applicants: usersArray.filter((item) => item.status),
    }
    try {
      const { data, status } = await applicantCreate(applicantsData)
      if (status) {
        setLoading(false)
        setVisible(false)
        setUsersArray([])
        message.success("Invite sent successfully!")
      }
    } catch (error) {
      setLoading(false)
      console.log({ error })
    }
  }

  const cnicValidation = (value) => {
    if (value.length <= 15) {
      if (value.length === 5 || value.length === 13) {
        form.setFieldsValue({
          CNIC: `${value}-`,
        });
        setCNIC(`${value}-`)
      } else {
        setCNIC(value)
      }
    } else {
      form.setFieldsValue({
        CNIC: CNIC,
      });
    }
  }

  const validateDOB = (value) => {
    if (value.length <= 10) {
      if (value.length === 2 || value.length === 5) {
        form.setFieldsValue({
          DOB: `${value}-`,
        });
        setDOB(`${value}-`)
      } else {
        setDOB(value)
      }
    } else {
      form.setFieldsValue({
        DOB: DOB,
      });
    }
  }

  const handleRevoke = (item, i) => {
    let array = [...usersArray]
    array[i].status = !item.status
    setUsersArray(array)
  }

  const onFinish = (values) => {
    const index = usersArray.findIndex(ind => ind.email === values.email)
    if (index === -1) {
      setUsersArray([
        ...usersArray,
        {
          ...values,
          status: true,
          applicantType: "known",
          organization: JSON.parse(localStorage.getItem("user")).organizationId
        }
      ])
      form.setFieldsValue({
        fullName: "",
        phoneNumber: "",
        email: "",
        CNIC: "",
        DOB: "",
      })
    } else {
      message.error("This email already exists!")
    }
  }

  const handleChange = (name, value, i) => {
    const array = [...usersArray]
    array[i][name] = value
    setUsersArray(array)
  }

  return (
    <Modal
      centered
      visible={visible}
      onCancel={_ => setVisible(false)}
      footer={null}
      title="Invite applicants">
      {
        loading &&
        <StyledLoader />
      }
      {
        usersArray.length ?
          <p>Copy the link or email it directly by clicking the button below.</p>
          :
          <p>Click Add more to add applicant.</p>
      }
      {sendInvite ?
        usersArray.length ? usersArray.map((item, i) => {
          return <div key={i}>
            <Row justify="space-between" align="center" gutter={24}>
              <Col span={18}>
                <Paragraph
                  disabled={!item.status}
                  copyable={item.status && {
                    icon: [<LinkOutlined style={{ color: !item.status && "rgba(0, 0, 0, 0.25)" }} />],
                    tooltips: ['Copy Link', 'Link Copied!!'],
                    text: item.phoneNumber
                  }}
                  style={item.status ? copyableStyle : nonCopyableStyle}
                >
                  <div>
                    <UserOutlined /> {item.email}
                  </div>
                </Paragraph>
              </Col>
              <Col span={6}>
                <Button onClick={() => handleRevoke(item, i)} >{item.status ? "Revoke" : "Undo"}</Button>
              </Col>
            </Row>
          </div>
        }) : null
        :
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
          <div>
            {
              usersArray.length ? usersArray.map((item, i) => {
                return <div key={i}>
                  <Row justify="space-between" align="center" gutter={24}>
                    <Col span={18}>
                      <Paragraph
                        disabled={!item.status}
                        copyable={item.status && {
                          icon: [<LinkOutlined style={{ color: !item.status && "rgba(0, 0, 0, 0.25)" }} />],
                          tooltips: ['Copy Link', 'Link Copied!!'],
                          text: item.phoneNumber
                        }}
                        style={item.status ? copyableStyle : nonCopyableStyle}
                      >
                        <div>
                          <UserOutlined /> {item.email}
                        </div>
                      </Paragraph>
                    </Col>
                    <Col span={6}>
                      <Button onClick={() => handleRevoke(item, i)} >{item.status ? "Revoke" : "Undo"}</Button>
                    </Col>
                  </Row>
                </div>
              }) : null
            }
            <Form
              form={form}
              onFinish={async (val) => await onFinish(val)}
            // key={i}
            >
              <Row justify="space-between" align="center" gutter={10}>
                <Col span={12}>
                  <Item
                    name="phoneNumber"
                  // valuePropName={item.phoneNumber}
                  >
                    <Input

                      // onChange={(e) => handleChange("phoneNumber", e.target.value, i)}
                      controls={false}
                      addonBefore={prefixSelector}
                      style={{ width: '100%' }}
                      placeholder="example" />
                  </Item>

                </Col>
                <Col span={12}>
                  <Item
                    name="email"
                    // valuePropName={item.email}
                    rules={[
                      {
                        type: 'email',
                        message: 'email not valid!',
                      },
                      {
                        required: true,
                        message: 'Please enter email',
                      },
                    ]}
                  >
                    {/* <Input onChange={(e) => handleChange("email", e.target.value, i)} placeholder="Email" /> */}
                    <Input placeholder="Email" />
                  </Item>
                </Col>
              </Row>
              <div onClick={() => setAdditionalInfo(!additionalInfo)} style={{ cursor: "pointer", display: "flex", justifyContent: 'space-between', alignItems: "center", borderBottom: "1px solid #F0F0F0", paddingBottom: "5px" }}>
                <Text  >Additional information</Text>
                {
                  additionalInfo ?
                    <UpOutlined />
                    :
                    <DownOutlined />
                }
              </div>
              {
                additionalInfo &&
                <>
                  <Item
                    style={{ marginTop: "20px" }}
                    name="fullName"
                    rules={[{ required: true, message: 'Please enter full' }]}
                  // valuePropName={item.fullName}
                  >
                    {/* <Input onChange={(e) => handleChange("fullName", e.target.value, i)} placeholder="Full name" /> */}
                    <Input placeholder="Full name" />
                  </Item>
                  <Row justify="space-between" align="center" gutter={10}>
                    <Col span={12}>
                      <Item
                        name="CNIC"
                        rules={[{ required: true, message: 'Invalid CNIC Number', pattern: "^[0-9]{5}-[0-9]{7}-[0-9]$" }]}
                      // rules={[{ required: true, message: 'Invalid CNIC Number' }]}
                      // valuePropName={item.CNIC}
                      >
                        {/* <Input onChange={(e) => handleChange("CNIC", e.target.value, i)} placeholder="CNIC" /> */}
                        <Input placeholder="CNIC" />
                      </Item>
                    </Col>
                    <Col span={12}>
                      <Item
                        name="DOB"
                        rules={[{ required: true, message: 'Please enter date of birth' }]}
                      // valuePropName={item.DOB}
                      >
                        {/* <Input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(e) => handleChange("DOB", e.target.value, i)} placeholder="Date of birth" /> */}
                        <Input type="date" data-date="" data-date-format="DD MMMM YYYY" placeholder="Date of birth" />
                      </Item>
                    </Col>
                  </Row>
                </>
              }
              <Button htmlType="submit" type="link" icon={<PlusOutlined />} >Add another user</Button>
            </Form>
          </div>

        </div>
      }



      <br /><br />
      <Row justify="center">
        {
          sendInvite ?
            <Button onClick={handleInvite} type="primary">Done</Button>
            :
            <Button onClick={() => setSendInvite(true)} type="primary">Send invite</Button>
        }
      </Row>
    </Modal >
  )
}

export default InviteSentModal
