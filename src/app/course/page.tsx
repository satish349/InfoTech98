
import CourseFormModal from "@/components/modal/courseFormModal";
import SelectData from "./data";
import CourceComponents from "@/components/ui/course/allCourse";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function CoursesPages() {

  const data = await SelectData();
  console.log(data);
  const courseArray = Array.isArray(data) ? data : [];

  const session = await getServerSession(authOptions);
  console.log("Seesion all Data : ", session);

  return (
    <>
        <div className="text-2xl text-shadow-lg font-semibold py-3 text-center bg-gray-200 text-slate-900">
          <h1>Here are listed below Some Popular Courses!</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-20 mt-20">
          {courseArray.map((item, index) => (
            <div key={item.id || index}>
              <CourceComponents
                title={item.title}
                description={item.description}
                category={item.category}
                thumbnail_Url={item.thumbnail_Url}
                old_price={item.old_price}
                new_price={item.new_price}
                id={item.id}
              />
            </div>
        ))}
        </div>
        <hr />
        {session && session.user && session.user.role === "ADMIN" && (
          <div className="flex m-auto my-10">
            <CourseFormModal/>
          </div>
        )}
    </>
  );
}
