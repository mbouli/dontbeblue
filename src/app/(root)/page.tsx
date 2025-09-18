import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import Landing from "@/components/Sections/Landing";
import Messages from "@/components/Sections/Messages";

const landing = process.env.PRODUCTION_STATUS;

export default function Home({ searchParams }: { searchParams: { error?: string } }) {
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
                        {searchParams.error && (
                            <div className="w-6/7 bg-red-100 border-1 border-red-500 rounded-xl p-3 mt-5 text-center">
                                <p className="text-red-700 text-sm font-semibold">Message Rejected</p>
                                <p className="text-red-600 text-xs mt-1">{searchParams.error}</p>
                            </div>
                        )}
                        <Hero />
                        <Messages />
                        <Footer />
                    </div>
                </div>
            </div >
        );
    }
}