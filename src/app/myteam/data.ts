
import db from "@/lib/db";

type credType = {
    full_name:string,
    title:string,
    description:string,
    category:string,
    thumbnail_Url:string,
    linkedIn:string,
    github:string,
    instagram:string,
    twitter:string
}
const GetDataFromTeam = async():Promise<string | credType[]> => {
    try {
        const [rows] = await db.execute(`SELECT * FROM MyTeam`);
        console.log("Successfully Fetched data.",);
        return rows as credType[];
    } catch (error) {
        console.log("Error : ",error);
        return "Error occure.";
    }

}

export default GetDataFromTeam;