import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL"
        ),
        pattern: /^[1-2]+$/,
        meaage: chalk.red.italic("Escolha apenas entre as opções 1 ou 2"),
        required: true,
    },

];

export default promptSchemaQRCode; 