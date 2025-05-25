import db from "@/lib/db"

export type DeatilDataType = {
    title: string
    category: string
    projectOneTitle: string
    projectOneDes: string
    projectTwoTitle: string
    projectTwoDes: string
    projectThreeTitle: string
    projectThreeDes: string
}

export type BasicDataType = {
    Status: string,
    Message: string
}

export const getDetail = async (id: number): Promise<DeatilDataType[] | BasicDataType> => {
    // Example: Replace 'yourTable' and 'idField' with actual table and field names
    try {
        const [rows] = await db.execute(`
        SELECT title, category, projectOneTitle, projectOneDes,projectTwoTitle, projectTwoDes, projectThreeTitle, projectThreeDes  FROM Courses WHERE ID = ${id}
        `);
        return rows as DeatilDataType[]
    } catch (error) {
        console.log("Error : ", error);
        return {Status: "Failed", Message: "Server Error"}
    }
}