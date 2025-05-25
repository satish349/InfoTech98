import ChoosePages from "@/components/ui/Choose/page";
import DoubtsPage from "@/components/doubts/page";
import HeroSection from "@/components/ui/heroSection";
import IntroPage from "@/components/ui/intro";
import NewBatch from "@/components/ui/newBatch";
import EnquirePage from "@/components/ui/query";
import ReviewPages from "@/components/ui/review/page";
import SlideBtn from "@/components/ui/slidebtn";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white">
        <div>
          <SlideBtn/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <IntroPage/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <HeroSection/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <NewBatch/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <ChoosePages/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <ReviewPages/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <DoubtsPage/>
        </div>
        <hr className="opacity-50"/>
        <div>
          <EnquirePage/>
        </div>
        <hr className="opacity-50"/>
      </div>
    </>
  );
}
