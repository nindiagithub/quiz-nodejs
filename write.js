const fs = require("fs");
const os = require("os");

function createSpecification(data) {
    fs.writeFileSync("./write.json", JSON.stringify(data));
}

createSpecification ({
    tipe: "ACER Aspire C24-1651",
    RAM: "8 GB",
    processor: "11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz   2.42 GHz",
    sistem: "64-bit operating system, x64-based processor",
    pen: "No pen or touch input is available",
    id: "00327-36270-01699-AAOEM",
    memory: os.freemem(),
    hostname: os.hostname(),
});



