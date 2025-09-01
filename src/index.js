import prompt from "prompt";

import promptSchemaMain  from "./prompts-schema/schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import creeatePassword from "./services/password/create.js";

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err) console.log("Erro na aplicação", err);

        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await creeatePassword();
    });

    prompt.start()
}

main();