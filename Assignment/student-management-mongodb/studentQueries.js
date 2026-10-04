const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        console.log("MongoDB Connected Successfully!");

        const db = client.db("collegeDB");
        const students = db.collection("students");

        // ===============================
        // 1. INSERT STUDENTS
        // ===============================

        await students.insertMany([
            {
                rollNo: "A241265501",
                name: "Karri Rama",
                branch: "CSE-AIML",
                year: 3,
                marks: 85,
                email: "ramakarri32@gmail.com"
            },
            {
                rollNo: "A241265502",
                name: "Priya Sharma",
                branch: "CSE-AIML",
                year: 3,
                marks: 92,
                email: "priya@example.com"
            },
            {
                rollNo: "A241265503",
                name: "Arjun Reddy",
                branch: "CSE",
                year: 2,
                marks: 68,
                email: "arjun@example.com"
            },
            {
                rollNo: "A241265504",
                name: "Sneha Patel",
                branch: "ECE",
                year: 3,
                marks: 78,
                email: "sneha@example.com"
            },
            {
                rollNo: "A241265505",
                name: "Rahul Verma",
                branch: "EEE",
                year: 2,
                marks: 45,
                email: "rahul@example.com"
            },
            {
                rollNo: "A241265506",
                name: "Anjali Singh",
                branch: "CSE-AIML",
                year: 4,
                marks: 88,
                email: "anjali@example.com"
            }
        ]);

        console.log("Students inserted successfully!");

        // ===============================
        // 2. DISPLAY ALL STUDENTS
        // ===============================

        console.log("\nAll Students:");

        const allStudents = await students.find({}).toArray();

        console.log(allStudents);

        // ===============================
        // 3. STUDENTS OF PARTICULAR BRANCH
        // ===============================

        console.log("\nCSE-AIML Students:");

        const branchStudents = await students.find({
            branch: "CSE-AIML"
        }).toArray();

        console.log(branchStudents);

        // ===============================
        // 4. STUDENTS WITH MARKS > 75
        // ===============================

        console.log("\nStudents scoring more than 75:");

        const above75 = await students.find({
            marks: { $gt: 75 }
        }).toArray();

        console.log(above75);

        // ===============================
        // 5. SEARCH USING ROLL NUMBER
        // ===============================

        console.log("\nStudent with Roll No A241265501:");

        const student = await students.findOne({
            rollNo: "A241265501"
        });

        console.log(student);

        // ===============================
        // 6. SEARCH USING CONDITION
        // ===============================

        console.log("\nThird Year Students:");

        const thirdYear = await students.find({
            year: 3
        }).toArray();

        console.log(thirdYear);

        // ===============================
        // 7. UPDATE MARKS
        // ===============================

        await students.updateOne(
            { rollNo: "A241265501" },
            { $set: { marks: 90 } }
        );

        console.log("\nMarks updated successfully!");

        // ===============================
        // 8. UPDATE EMAIL
        // ===============================

        await students.updateOne(
            { rollNo: "A241265501" },
            { $set: { email: "ramakarri32@gmail.com" } }
        );

        console.log("Email updated successfully!");

        // ===============================
        // 9. DELETE STUDENT
        // ===============================

        await students.deleteOne({
            rollNo: "A241265505"
        });

        console.log("Student deleted successfully!");

        // ===============================
        // 10. SORT BY MARKS
        // DESCENDING ORDER
        // ===============================

        console.log("\nStudents sorted by marks:");

        const sortedStudents = await students.find({})
            .sort({ marks: -1 })
            .toArray();

        console.log(sortedStudents);

        // ===============================
        // 11. CREATE INDEX ON rollNo
        // ===============================

        const indexName = await students.createIndex({
            rollNo: 1
        });

        console.log("\nIndex created:", indexName);

        // ===============================
        // 12. DISPLAY INDEXES
        // ===============================

        const indexes = await students.indexes();

        console.log("\nIndexes:");

        console.log(indexes);

        // ===============================
        // 13. REAL-TIME QUERY
        // MARKS ABOVE 80
        // ===============================

        console.log("\nStudents scoring above 80:");

        const above80 = await students.find({
            marks: { $gt: 80 }
        }).toArray();

        console.log(above80);

        // ===============================
        // 14. REAL-TIME QUERY
        // MARKS BELOW 50
        // ===============================

        console.log("\nStudents scoring below 50:");

        const below50 = await students.find({
            marks: { $lt: 50 }
        }).toArray();

        console.log(below50);

        // ===============================
        // 15. HIGHEST SCORING STUDENT
        // ===============================

        console.log("\nHighest Scoring Student:");

        const highestStudent = await students.find({})
            .sort({ marks: -1 })
            .limit(1)
            .toArray();

        console.log(highestStudent);

        // ===============================
        // 16. PARTICULAR BRANCH
        // ===============================

        console.log("\nECE Students:");

        const eceStudents = await students.find({
            branch: "ECE"
        }).toArray();

        console.log(eceStudents);

        // ===============================
        // 17. FINAL SORT
        // ===============================

        console.log("\nFinal Students Sorted By Marks:");

        const finalStudents = await students.find({})
            .sort({ marks: -1 })
            .toArray();

        console.log(finalStudents);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main();
