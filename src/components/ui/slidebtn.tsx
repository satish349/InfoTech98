
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const items = [
    {
        id:1,
        title: "Home",
        url:'/home'
    },
    {
        id:2,
        title: "About",
        url:'/about'
    },
    {
        id:3,
        title: "Courses",
        url:'/course'
    },
]


export default function SlideBtn() {

  return (
    <>
      <div className="text-white flex">
            <Carousel className="m-auto my-10 w-75">
                <CarouselContent >
                    {items.map((item, index) => (
                        <button key={index} className="basis-1/3 ml-15 m-auto w- py-3 text-lg font-bold rounded-md px-20 text-white bg-gradient-to-r from-slate-600 via-slate-900 via-slate-900 to-slate-600">
                            <Link href={item.url}>{item.title}</Link>
                        </button>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-black"/>
                <CarouselNext className="bg-black"/>
            </Carousel>
        </div>
    </>
  );
}
