import React from 'react'
import { Tree, Typography } from 'antd';
import "./Tree.less"
import { CaretDownFilled, DownCircleFilled, DownOutlined } from '@ant-design/icons';
import _, { values } from 'lodash'
import CheckedGreen from "../../assets/icons/CheckedGreen.svg"
import Warning from "../../assets/icons/Warning.svg"
import Danger from "../../assets/icons/Danger.svg"

const { Text, Link } = Typography;

const obj = [
    {
        title: "abc",
        values: "true",
        child: [
            {
                title: "mno",
                values: "child"
            },
        ]
    },
    {
        title: "def",
        values: "false"
    },
    {
        title: "ghi",
        values: "true"
    },
    {
        title: "jkl",
        props: "true"
    },
]

const CustomTree = (props) => {


    const data = props.data

    const treeData = [
        {
            title: <span className={"treeTitle"}>
                {
                    props.treeScore === "clear" &&
                    <img src={CheckedGreen} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                }
                {
                    props.treeScore === "caution" &&
                    <img src={Warning} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                }
                {
                    props.treeScore === "suspected" &&
                    <img src={Danger} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                }
                {
                    !props.treeScore &&
                    <img src={Danger} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                }
                <Text>{props.grandTitle}</Text>
            </span>,
            key: '1',
            children: data.map((item, i) => {
                const array = _.flattenDepth(item.children, 5)
                const clear = _.find(array, { "title": "Result : clear" })
                const caution = _.find(array, { "title": "Result : caution" })
                const suspected = _.find(array, { "title": "Result : suspected" })
                return {
                    title: <span className={"treeSubTitle"}>
                        {
                            clear &&
                            <img src={CheckedGreen} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                        }
                        {
                            caution &&
                            <img src={Warning} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                        }
                        {
                            suspected &&
                            <img src={Danger} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                        }
                        <Text className="opacityHalf">{item.title}</Text>
                    </span>,
                    key: `1-${i + 1}`,
                    children: item.children.map((child, i) => {
                        const array = _.flattenDepth(child.children, 5)
                        const clearChild = _.find(array, { "title": "Result : clear" })
                        const cautionChild = _.find(array, { "title": "Result : caution" })
                        const suspectedChild = _.find(array, { "title": "Result : suspected" })
                        return {
                            title: <span className={"treeSubTitle"}>
                                {
                                    clearChild &&
                                    <img src={CheckedGreen} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                                }
                                {
                                    cautionChild &&
                                    <img src={Warning} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                                }
                                {
                                    suspectedChild &&
                                    <img src={Danger} style={{ width: "12px", height: "12px", marginRight: "10px" }} />
                                }
                                <Text className="opacityHalf">{child.title}</Text>
                            </span>,
                            key: child.key,
                            children: child.children
                        }
                    })
                }
            })

        },
    ];

    return (
        <div>
            <Tree
                showLine
                switcherIcon={<CaretDownFilled style={{ marginTop: "5px" }} />}
                blockNode
                defaultExpandedKeys={['1']}
                treeData={treeData}
            />
        </div>
    )
}

export default CustomTree
