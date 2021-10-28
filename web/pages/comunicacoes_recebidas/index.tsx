import { Layout, Row, Col, Card, Select, Button, Modal } from "antd";
import TextArea from "rc-textarea";
import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard.module.css";

import axios from "../../utils/axios";

const { Content } = Layout;
const { Option } = Select;

export default function ComunicacoesRecebidas() {
  const [modal, setModal] = useState(false);

  const [comunicacoes, setComunicacoes] = useState([]);

  useEffect(() => {
    const idOrgaoUsuarioLogado = JSON.parse(
      localStorage.getItem("usuarioLogado")
    ).orgao.objectId;

    axios
      .get("/classes/Comunicacao", {
        params: {
          include: "orgaoReceptor",
          where: {
            orgaoReceptor: {
              __type: "Pointer",
              className: "Orgao",
              objectId: idOrgaoUsuarioLogado,
            },
          },
        },
      })
      .then((response) => {
        setComunicacoes(response.data.results);
        console.log(response.data.results);
      });
  }, []);

  const showModal = () => {
    setModal(true);
  };
  const handleOk = () => {
    setModal(false);
  };
  const handleCancel = () => {
    setModal(false);
  };
  return (
    <Layout>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content>
            <Row className={styles.container}>
              <h1 className={styles.title}>Lista de Comunicações Recebidas</h1>
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
                  Filtrar
                </Button>
              </Col>
            </Row>
            <Row className={styles.container_item}>
              <Col span={24}>
                <Row gutter={16}>
                  {comunicacoes.map((comunicacao) => (
                    <Col span={8}>
                      <Card
                        title={comunicacao.orgaoReceptor.nome}
                        headStyle={{
                          fontWeight: "bold",
                          color: "#4B9F37",
                          fontSize: "18px",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                        bordered={false}
                      >
                        <span style={{ fontWeight: "bold" }}>Mensagem: </span>
                        <p>{comunicacao.mensagem}</p>
                        <Button
                          style={{ float: "right" }}
                          type="primary"
                          onClick={showModal}
                        >
                          APURAR
                        </Button>
                      </Card>
                      <Modal
                        title="Apurar comunicação"
                        visible={modal}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <TextArea
                          placeholder="Insira detalhes da apuração"
                          style={{ width: "27vw" }}
                          
                        />
                      </Modal>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
