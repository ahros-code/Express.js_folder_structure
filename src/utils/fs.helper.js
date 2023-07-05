import {readFileSync, writeFileSync} from "fs";
import {join} from "path"

export function readFile(fileName) {
  try {
    const data = readFileSync(join(process.cwd(), "src", "models", fileName));
    return JSON.parse(data);
  } catch (err) {
    return `Error while reading a file: ${err.message}`
  }
}

export function writeFile(fileName, payload){
  try{
    // const data = readFile("users.json");
    writeFileSync(join(process.cwd(), "src", "models", fileName), JSON.stringify(payload, null, 4))
  } catch (err) {
    return `Error while writing a file: ${err.message}`
  }
}