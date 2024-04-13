import Image from "next/image";
import LoginCard from "@/components/login/LoginCard";
import SideImg from "../resources/images/pupil-book-img.png";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-evenly">
      <div className="w-[60%] h-[100%] p-2">
        <Image
          className="h-full w-full object-cover object-center rounded-2xl"
          src={SideImg}
          width={2000}
          height={2000}
          alt="login page image"
        />
      </div>
      <div className="w-[40%] flex justify-center">
        <LoginCard className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm" />
      </div>
    </div>
  );
}
