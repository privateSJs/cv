import { AboutMe } from "./sections/AboutMe";
// import { Experience } from "./sections/Experience";
// import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";

export default function MainContent() {
    return (
        <main className="w-[70%] p-8">
            <AboutMe />
            {/*<Experience />*/}
            {/*<Projects />*/}
            <Education />
        </main>
    );
}