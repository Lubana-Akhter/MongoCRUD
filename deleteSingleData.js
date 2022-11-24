const { client } = require('./dbConfig');
const DeleteSingleItem = async () => {
    try {
        const database = client.db("School");
        const users = database.collection("Student");
        const query = { Roll: "01" };
        const result = await users.deleteOne(query);
        console.log(result);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}
DeleteSingleItem();