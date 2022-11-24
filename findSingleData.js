const { client } = require('./dbConfig');
const FindSingleItem = async () => {
    try {
        const database = client.db("School");
        const users = database.collection("Student");
        // Query for a students that has the city dhaka
        const query = { city: "Dhaka" };
        const result = await users.findOne(query);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}
FindSingleItem();