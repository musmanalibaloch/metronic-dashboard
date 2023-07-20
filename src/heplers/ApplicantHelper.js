import { Typography } from "antd";

const { Text, Link } = Typography;

export const getTreeArray = (data, treeKey) => {
    let array = []
    Object.entries(data).forEach(([key, value], i) => {
        const separated = key.replace(/([A-Z])/g, ' $1').trim()
        const capitalized = separated.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
        let title = capitalized
        let valueArray = []
        if (value) {
            if (typeof value === 'object') {
                valueArray.push(getTreeArray(value, treeKey ? `${treeKey}-${i + 1}` : `1-${i + 1}`))
            } else {
                title = `${title} : ${typeof value === "number" ? value.toFixed(2) : value}`
            }
        }
        const data = {
            title: title,
            key: treeKey ? `${treeKey}-${i + 1}` : `1-${i + 1}`,
            children: valueArray.length ? valueArray[0] : valueArray
        }
        if (data.children) {
            array.push(data)
        }
    });
    return array
}