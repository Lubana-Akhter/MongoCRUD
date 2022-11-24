const { client } = require('./dbConfig');
const insertSingleItem = async () => {
    try {
        const database = client.db("School");
        const users = database.collection("Student");
        // create a document to insert
        const doc = {
            name: "Sarin Reza",
            Roll: "01",
        }
        const result = await users.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }

}
insertSingleItem();