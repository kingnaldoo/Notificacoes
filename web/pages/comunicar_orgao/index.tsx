import React, { useEffect, useState } from "react";
import { Card, Layout, Row, Form, Select, Input, Button } from "antd";

import axios from "../../utils/axios";
import { useRouter } from "next/dist/client/router";

const { Content } = Layout;
const { Option } = Select;
const { TextArea } = Input;

export default function comunicarOrgao() {
  const [orgao, setOrgao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [orgaos, setOrgaos] = useState([]);
    const router = useRouter();

  useEffect(() => {
    axios.get("/classes/Orgao").then((response) => {
      setOrgaos(response.data.results);
    });
  }, []);

  const cadastrar_comunicacao = () => {
    const idUser = JSON.parse(localStorage.getItem("usuarioLogado")).objectId;

    axios
      .post("/classes/Comunicacao", {
        mensagem,
        orgaoReceptor: {
          __type: "Pointer",
          className: "Orgao",
          objectId: orgao,
        },
        emissor: {
          __type: "Pointer",
          className: "_User",
          objectId: idUser,
        },
      })
      .then((reponse) => {
        router.push("/comunicacoes_recebidas");
      });
  };

  return (
    <Layout>
      <Content>
        <Row
          justify="space-around"
          align="middle"
          style={{
            background: "#F3F5F8",
            padding: 45,
            height: "calc(100vh - 150px)",
          }}
        >
          <Card
            title="Comunicar Órgão"
            style={{ width: "35vw", padding: 15 }}
            headStyle={{
              fontWeight: "bold",
              color: "#4B9F37",
              fontSize: "1.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Preencha as informações abaixo</p>
            <Form onFinish={cadastrar_comunicacao}>
              <Form.Item name="orgao">
                <span style={{ fontWeight: "bold" }}>Órgão Recpetor</span>
                <Select
                  showSearch
                  allowClear
                  onChange={(value) => setOrgao(value)}
                >
                  {orgaos.map((orgao) => (
                    <Option key={orgao.objectId} value={orgao.objectId}>{orgao.nome}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="mensagem">
                <span style={{ fontWeight: "bold" }}>Menssagem</span>
                <TextArea
                  allowClear
                  showCount
                  maxLength={50}
                  onKeyUp={(input) => setMensagem(input.target.defaultValue)}
                />
              </Form.Item>
              <Form.Item style={{ float: "right" }}>
                <Button type="primary" htmlType="submit">
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </Content>
    </Layout>
  );
}
