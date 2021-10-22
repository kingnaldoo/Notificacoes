import '../styles/globals.css';
import Link from 'next/link';
import dscegov from 'cegov-antd';
import 'cegov-antd/dist/index.css';

import pt_BR from 'antd/lib/locale/pt_BR';

import type { AppProps } from 'next/app';
import { ConfigProvider, Row, Col, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import { KeyOutlined } from '@ant-design/icons';
const { Header, Acessibility } = dscegov();

function MyApp({ Component, pageProps }: AppProps) {

 
  return (
	<ConfigProvider locale={pt_BR}>
	  <Acessibility accessibility/>
	  <Header title='Sistemas de Notificações'>
		<Row 
			gutter={8}
			align='middle'
			justify='space-between'
			style={{ width: '95%' }}	
		>
			<Col>
				<Row justify='end' align='middle'>
					<Col>
						<Link href="/">
							<img 
								height={65}
								width="auto"
								src="https://i.ibb.co/R90NzmY/logo-ce.png" 
							/>
						</Link>
					</Col>

					<Col>
						<div
							style={{
								background: '#fff',
								height: 42,
								width: 2,
								marginLeft: 15,
								marginRight: 15
							}}
						/>
					</Col>

					<Col>
						<Link href="/dashboard">
							<Title
								level={2}
								style={{ marginBottom: 0, color: '#fff', fontSize: '1.6rem' }}
							>
								Sistema de notificações
							</Title>
						</Link>
					</Col>

					
				</Row>
			</Col>

			<Col>
				<Link href="/login">
					<Button icon={<KeyOutlined />} type="primary">Entrar no Sistema</Button>
				</Link>
			</Col>
		</Row>
	  </Header>
	  <Component {...pageProps} />;
	</ConfigProvider>
  );
}
export default MyApp;
