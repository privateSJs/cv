import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Background from "./Background.tsx";

export default function Layout() {
    return (
        <div className="
            flex
            min-h-screen
            bg-slate-200
            py-10
            items-center
            p-8
            ">
            <div className="
                relative
                mx-auto
                flex
                w-[210mm]
                min-h-[297mm]
                overflow-hidden
                bg-white
                shadow-2xl
            ">
                <Background />
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}