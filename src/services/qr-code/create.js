import prompt from "prompt";
import prompSchemaQRCode from "../../prompts-schema/schema-qrcode.js"
import handle from "./handles.js";

async function createQRCode() {
    prompt.get(prompSchemaQRCode, handle);

    prompt.start();
};


export default createQRCode;
 
