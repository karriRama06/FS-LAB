const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter file name: ", function(fileName) {

    rl.question("Enter initial content: ", function(initialContent) {

        const filePath = `files/${fileName}.txt`;

        fs.writeFile(filePath, initialContent, function(error) {

            if (error) {
                console.log("Error creating file:", error);
                rl.close();
                return;
            }

            console.log("\nFile created successfully.");

            fs.readFile(filePath, "utf8", function(error, data) {

                if (error) {
                    console.log("Error reading file:", error);
                    rl.close();
                    return;
                }

                console.log("\nInitial File Content:");
                console.log(data);

                rl.question("\nEnter content to append: ", function(appendContent) {

                    fs.appendFile(
                        filePath,
                        "\n" + appendContent,
                        function(error) {

                            if (error) {
                                console.log("Error appending file:", error);
                                rl.close();
                                return;
                            }

                            console.log("\nContent appended successfully.");

                            fs.readFile(
                                filePath,
                                "utf8",
                                function(error, finalData) {

                                    if (error) {
                                        console.log(
                                            "Error reading final content:",
                                            error
                                        );
                                    } else {
                                        console.log(
                                            "\nFinal File Content:"
                                        );
                                        console.log(finalData);
                                    }

                                    rl.close();
                                }
                            );
                        }
                    );
                });
            });
        });
    });
});