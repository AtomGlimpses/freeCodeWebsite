import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

import PagesHeader from "../components/PagesHeader";
import PagesContent from "../components/PagesContent";
import PagesFooter from "../components/PagesFooter";

function HomePages() {
    return (
        <>
            <Layout className="tw-w-[100dvw] tw-h-[100dvh] tw-bg-[url('../assets/images/bg.webp')] tw-bg-cover tw-bg-no-repeat tw-bg-center">
                <Header className="tw-bg-[rgba(0,0,0,.7)] tw-h-[.4rem]">
                    <PagesHeader />
                </Header>
                <Content className="tw-w-full tw-h-[calc(100dvh-.8rem)]">
                    <PagesContent />
                </Content>
                <Footer className="tw-py-0 tw-bg-black tw-h-[.4rem]">
                    <PagesFooter />
                </Footer>
            </Layout>
        </>
    );
}

export default HomePages;