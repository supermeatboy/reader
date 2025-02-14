import ThemeToggle from "@/shared/ui/ThemeButton/ThemeButton";
import {Header} from "@/shared/ui/Header/Header";

export default function Home() {
    return (
        <>
            <Header/>
            <main className="flex flex-wrap items-start w-full max-w-[936px] pt-8 px-[18px] mx-auto">
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <ThemeToggle/>

                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

            </footer>
        </>
    );
}
