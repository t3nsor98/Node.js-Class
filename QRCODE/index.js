import inquiry from "inquirer";
import QR from "qr-image";
import fs, { writeFile } from "fs";

inquiry
  .prompt([{ message: "Enter your URL: ", name: "url" }])
  .then((answers) => {
    const url = answers.url;
    let qr_svg = QR.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qrcode.png"));
    writeFile("message.txt", url, (err) => {
      if (err) throw err;
      console.log("File created");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
