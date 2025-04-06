import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

import PagesHeader from "../components/PagesHeader";
import PagesContent from "../components/PagesContent";
import PagesFooter from "../components/PagesFooter";

function HomePages() {
    return (
        <>
            <Layout className="tw-w-[100dvw] tw-h-[100dvh] tw-bg-[url('../assets/images/bg.webp')] tw-bg-cover tw-bg-no-repeat tw-bg-center">
                <Header className="tw-bg-[rgba(0,0,0,.7)]">
                    <PagesHeader />
                </Header>
                <Content>
                    <PagesContent />
                </Content>
                <Footer>
                    <PagesFooter />
                </Footer>
            </Layout>
        </>
    );
}

export default HomePages;