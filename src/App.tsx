import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <div className="tw-w-[100dvw] tw-h-[100dvh]">
                <Outlet />
            </div>
        </>
    );
}

export default App;