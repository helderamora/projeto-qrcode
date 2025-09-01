import chalk from "chalk";
import handle from "../password/handle.js";



async function creeatePassword() {
    console.log(chalk.green("password"));
    const password = await handle();
    console.log(password)
};


export default creeatePassword;

