/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard.module.css";
import {
    Layout,
    Row,
    Col,
    Button,
    Select,
    Menu,
    Input,
    Card,
    Pagination,
    Spin
} from "antd";

import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import axios from '../../utils/axios';

const { SubMenu } = Menu;
const { Search } = Input;

const { Sider, Content, Footer, Header } = Layout;
const { Option } = Select;

export default function Dasboard() {
    const [orgaos, setOrgaos] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("/classes/Orgao").then(response => {
            setOrgaos(response.data.results)
            setLoading(false);
        })
    }, []);

    return (
        <Layout>
            <Layout>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Content>
                        <Row className={styles.container}>
                            <Row className={styles.container_item}>
                                <h1 className={styles.title}>
                                    Lista de Órgãos Cadastrados
                                </h1>
                            </Row>
                            <Row className={styles.container_item}>
                                <Col
                                    span={19}
                                    xs={{ span: 17 }}
                                    sm={{ span: 19 }}
                                    md={{ span: 19 }}
                                    lg={{ span: 19 }}
                                >
                                    <Select
                                        style={{ width: "100%" }}
                                        size="large"
                                        placeholder="Todas"
                                        showSearch
                                    >
                                        <Option value="Todas">Todas</Option>
                                        <Option value="Algumas">Algumas</Option>
                                    </Select>
                                </Col>
                                <Col
                                    xs={{ span: 6, offset: 1 }}
                                    sm={{ span: 4, offset: 1 }}
                                    md={{ span: 4, offset: 1 }}
                                    lg={{ span: 4, offset: 1 }}
                                >
                                    <Button className={styles.filter_button} type="primary">
                                        {" "}
                                        Filtrar{" "}
                                    </Button>
                                </Col>
                            </Row>
                            <Row className={styles.container_item}>
                                {
                                    orgaos.map((orgao) => (<Col span={24}>
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Spin tip="Carregando dados..." spinning={loading} size="large">
                                                    <Card
                                                        actions={[
                                                            <EditOutlined key="edit" style={{ color: '#4B9F37' }} />,
                                                            <DeleteOutlined key="ellipsis" style={{ color: '#C2102A' }} />,
                                                        ]}
                                                        headStyle={{ fontWeight: 'bold', color: '#4B9F37', fontSize: '18px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} title={orgao.nome} bordered={false}>
                                                        <span style={{ fontWeight: 'bold' }}>Descrição: </span>
                                                        <p>
                                                            {orgao.descricao}
                                                        </p>
                                                    </Card>
                                                </Spin>
                                            </Col>

                                        </Row>
                                    </Col>))
                                }

                            </Row>
                        </Row>
                        <Pagination style={{ display: 'flex', justifyContent: 'center' }} defaultCurrent={1} total={50} />
                    </Content>

                </Layout>
            </Layout>
        </Layout>
    );
}
