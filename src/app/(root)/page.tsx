import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import Landing from "@/components/Sections/Landing";
import Messages from "@/components/Sections/Messages";

const landing = process.env.PRODUCTION_STATUS;

export default function Home() {
    if (landing == "FALSE") {
        return (
            <>
                <Landing />
            </>
        )
    } else {
        return (
            <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
                <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                    <div className="h-full w-full overflow-y-auto flex flex-col items-center">
                        <Hero />
                        <Messages />
                        <Footer />
                    </div>
                </div>
            </div >
        );
    }
}