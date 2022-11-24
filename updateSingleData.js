const { client } = require('./dbConfig');
const UpdateSingleItem = async () => {
    try {
        const database = client.db("School");
        const users = database.collection("Student");
        const filter = { name: "Sarin" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                country: 'Bangladesh'
            },
        };
        const result = await users.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );

    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }

}
UpdateSingleItem();