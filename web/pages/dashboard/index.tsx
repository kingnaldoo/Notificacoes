import { Button, Card, Col, Layout, Row, Select } from 'antd';
const { Content } = Layout;
const { Option } = Select;

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import styles from '../../styles/dashboard.module.css';

export default function Dashboard() {
    return(
        <Layout style={{ padding: '0 24px 24px' }}>
            <Content>
                <Row className={styles.container}>
                    <Row className={styles.container_item}>
                        <h1 className={styles.title}>Lista de Órgaos Cadastrados</h1>
                    </Row>

                    <Row className={styles.container_item}>
                        <Col
                            span={19}
                            xs={{ span: 17 }}
                            sm={{ span: 19 }}
                            md={{ span: 19 }}
                        >
                            <Select
                                style={{ width: '100%' }}
                                size='large'
                                placeholder="Selecione um item da lista" showSearch
                            >
                                <Option value="Todas">Todas</Option>
                            </Select>

                            <Col
                                xs={{ span: 6, offset: 1 }}
                                sm={{ span: 4, offset: 1 }}
                                md={{ span: 4, offset: 1 }}
                                lg={{ span: 4, offset: 1 }}
                            >
                                <Button className={styles.filter_button} type='primary'>Filtrar</Button>
                            </Col>
                        </Col>
                    </Row>

                    <Row className={styles.container_item}>
                        <Col span={24}>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Card actions={[
                                        <EditOutlined key="edit" style={{ color: '#4b9f37' }}/>,
                                        <DeleteOutlined key="delete"style={{ color: '#c2102a' }}/>
                                    ]} title="Detran" headStyle={{ fontWeight: 'bold', color: '#4b9f37', fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Descrição</span>
                                        <p>Minha descrição aqui</p>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Content>
        </Layout>
    );
}