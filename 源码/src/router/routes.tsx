// 导入React
import { lazy, Suspense } from 'react';

// 导入Antd组件
import { Spin } from 'antd';

const HomePages = lazy(() => import('../Pages/HomePages'));

const routes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<Spin size="large" />}>
                <HomePages />
            </Suspense>
        ),
    },
]

// 导出路由表
export default routes