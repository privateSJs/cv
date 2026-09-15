import { PersonalInfo } from "./sections/PersonalInfo";
// import { Skills } from "./sections/Skills";
// import { Languages } from "./sections/Languages";

export default function Sidebar() {
    return (
        <aside className="w-[30%] bg-slate-800 p-6 text-white">
            <PersonalInfo />
            {/*<Skills />*/}
            {/*<Languages />*/}
        </aside>
    );
}