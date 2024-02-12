const csvToJson = (await import('csvtojson')).default;
const fs = (await import('fs')).default;
const path = (await import('path')).default;

const csvPath = process.argv[2];
if (!csvPath) throw 'No CSV file path provided';

const json = await csvToJson()
    .fromFile(csvPath);

const generateJSONForTranslation = (input) => {
    const output = {};

    for (const item of input) {
        const key = item["Translation Keys"];
        const value = item["Translation"];
        output[key] = value;
    }

    return output;
};

const finalJSON = generateJSONForTranslation(json);
fs.writeFileSync('./result.json', JSON.stringify(finalJSON, null, 4));
