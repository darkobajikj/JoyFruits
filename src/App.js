import "./App.css";
import { Layout } from "antd";
import "antd/dist/antd.css";
import AppHeader from "./components/common/AppHeader";
import AppFooter from "./components/common/AppFooter";
import Home from "./views/Home";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
