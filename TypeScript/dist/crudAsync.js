import fs from 'fs';
import path from 'path';
const fileName = "fileManipulation.txt";
const filePath = path.join(__dirname, fileName);
const writeIntoFile = async () => {
    try {
        const res = await fs.promises.writeFile(filePath, "hey there", "utf-8");
    }
    catch (err) {
        console.log(err);
    }
};
const readFileContent = async () => {
    try {
        const res = await fs.promises.readFile(filePath);
        console.log(`result ${res}`);
    }
    catch (err) {
        console.log(err);
    }
};
writeIntoFile();
readFileContent();
