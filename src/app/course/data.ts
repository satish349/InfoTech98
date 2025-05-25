
import db from "@/lib/db";

type credType = {
    id: number;
    title:string,
    description:string,
    category:string,
    thumbnail_Url:string,
    old_price:string,
    new_price:string,
}
const SelectData = async():Promise<string | credType[]> => {
    try {
        const [rows] = await db.execute(`SELECT * FROM Courses`);
        console.log("Successfully Fetched data.",);
        return rows as credType[];
    } catch (error) {
        console.log("Error : ",error);
        return "Error occure.";
    }

}

export default SelectData;