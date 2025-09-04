import Hero from "@/components/Hero";
import Messages from "@/components/Messages";
import Image from "next/image";

export default function Home() {
  return (
    <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
      <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
        <div className="h-full w-full overflow-y-auto flex flex-col items-center">
          <Hero />
          <Messages />
        </div>
      </div>
    </div >
  );
}
