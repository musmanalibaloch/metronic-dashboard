import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Button, Col, message, Row, Space, Typography, } from 'antd';

const { Title } = Typography

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: "18px",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "24px",

    },
    sandBoxTitle: {
        fontSize: "18px",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
    },
    lowOpacity: {
        color: "#00474F",
        fontSize: "18px",
        opacity: 0.52,
        marginTop: "7px",
        fontSize: "14px",
        lineHeight: "24px",
    },
    indegoText: {
        color: "#00474F",
        fontSize: "18px",
        marginTop: "7px",
        fontSize: "14px",
        lineHeight: "24px",

    },
    container: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    wrapper: {
        width: "50%",
        backgroundColor: "#FFFFFF",
        padding: "25px",
        display: "flex",
        flexDirection: 'column',
    },
    sandBox: {
        padding: "30px 0 10px 0",
        display: "flex",
        flexDirection: "column"
    },
    valuesBox: {
        marginTop: "-10px",
        display: "flex",
        flexDirection: "column"
    },
    valuesBox2: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "column"
    },
    flexWrapper: {
        marginTop: "20px",
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        paddingBottom: "20px"
    },
    leftSection: {
        borderRight: "1px solid rgba(0, 0, 0, 0.06)",
        width: "33%"
    },
    rightSection: {
        padding: "0 38px 0 46px",
        width: "67%"
    },
    calculations: {
        display: "flex",
        justifyContent: "space-between",
    },
    calculations2: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        paddingBottom: "7px"
    },
    total: {
        display: "flex",
        justifyContent: "space-between",
    },
    footer: {
        marginTop: "20px"
    },
    button: {
        padding: "7px 15px 7px 15px",
        marginLeft: "10px",
        background: "#FFFFFF",
        border: "1px dashed #1D6E71",
        boxSizing: "border-box",
        boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.016)",
        borderRadius: "2px",
    }
});

const PdfGenerator = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container} >
                    <View style={styles.wrapper}>
                        <Text style={styles.title} level={4}>Your Subscription</Text>
                        <View style={styles.sandBox}>
                            <Text style={styles.sandBoxTitle} level={4}>Sandbox Plan</Text>
                            <Text style={styles.lowOpacity} level={4}>10/15 Used</Text>
                        </View>
                        <View style={styles.flexWrapper}>
                            <View style={styles.leftSection}>
                                <View style={styles.valuesBox}>
                                    <Text style={styles.lowOpacity} level={4}>Document Verification</Text>
                                    <View style={styles.valueCss}>
                                        <Text style={styles.sandBoxTitle} level={4}>Rs. 5</Text>
                                        <Text style={styles.lowOpacityGreen} level={4}>/API CALL</Text>
                                    </View>
                                </View>
                                <View style={styles.valuesBox2}>
                                    <Text style={styles.lowOpacity} level={4}>Sandbox Plan</Text>
                                    <View style={styles.valueCss}>
                                        <Text style={styles.sandBoxTitle} level={4}>Rs. 5</Text>
                                        <Text style={styles.lowOpacityGreen} level={4}>/API CALL</Text>
                                    </View>
                                </View>
                                <View style={styles.valuesBox2}>
                                    <Text style={styles.lowOpacity} level={4}>Sandbox Plan</Text>
                                    <View style={styles.valueCss}>
                                        <Text style={styles.sandBoxTitle} level={4}>10/15 </Text>
                                        <Text style={styles.lowOpacityGreen} level={4}> Used</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={styles.rightSection}>
                                <View style={styles.calculations}>
                                    <Text style={styles.lowOpacity}>Cost:</Text>
                                    <Text style={styles.lowOpacity}>Rs. 500/-</Text>
                                </View>
                                <View style={styles.calculations2}>
                                    <Text style={styles.indegoText}>Discount:</Text>
                                    <Text style={styles.indegoText}>Rs. 100%</Text>
                                </View>
                                <View style={styles.total}>
                                    <Text style={styles.indegoText}>Total</Text>
                                    <Text style={styles.indegoText}>Rs. 0/-</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <Text>Do you want to renew the plan?</Text>
                            <View style={styles.button}>
                                <Text>Contact Sabhi Sales</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default PdfGenerator