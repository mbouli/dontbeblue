import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Messages from "@/components/Messages";
import Image from "next/image";

const landing = false;

export default function Home() {
  if (landing) {
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
