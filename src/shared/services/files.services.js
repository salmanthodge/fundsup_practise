const fs = require("fs");
const fileService = {};
const path = require("path");



// @service-name: readFile
// @service-desc: file service used to read a file on a given path
fileService.readFile = async (filePath, replaceDataJSON) => {
  try {
    let contentData = fs.readFileSync(filePath).toString();
    return new Function('return (`' + contentData + '`)').bind(replaceDataJSON)();
    // console.log("@@@")
    // console.log(typeof(contentData))
    // contentData = contentData.replace(replaceKey, replaceValue);
    // console.log(contentData);
    // return contentData;
  }
  catch (error) {
    console.log(error)
    return null
  }

};

fileService.readFileToBase64 = async (filePath) => {
  try {
    // let contentData = await fs.readFileSync(filePath, { encoding: 'base64' });
    // console.log(contentData);
    // return contentData;

    // Read the file asynchronously
    const data = await fs.promises.readFile(filePath);

    // Convert the file data to Base64 encoding


    const base64Data = data.toString('base64');

    const datatype = filePath.split('.')[1];
    console.log(base64Data);
    // Combine the Base64 data with the specified data type
    if (base64Data.includes("data:application/")) {
      return base64Data.replace("dataapplication/pdfbase64", "");
    }
    const base64String = `data:application/${datatype};base64,${base64Data}`;

    return base64String;
  }
  catch (error) {
    console.log(error)
    return null
  }

};

fileService.getFileContent = (filePath) => {
  return fs.readFileSync(filePath, { encoding: "base64" })
};

fileService.detectFileType = (base64String) => {
  const decodedData = Buffer.from(base64String, 'base64');
  const slice = decodedData.slice(0, 4).toString('hex');

  if (slice === '25504446') {
    return 'PDF'; // PDF files start with '%PDF'
  } else if (
    slice.startsWith('ffd8') || // JPEG
    slice.startsWith('89504e47') || // PNG
    slice.startsWith('47494638') // GIF
  ) {
    return 'Image';
  } else {
    return 'Unknown';
  }
}

fileService.removeMimeTyoeAndDetectFileType = (base64String) => {
  const cleanedBase64 = base64String.split(',')[1];
  const fileType = fileService.detectFileType(`${cleanedBase64}`);
  return fileType;
}

fileService.getCleanBase64Data = (base64String) => {
  const cleanedBase64 = base64String.split(',')[1];
  // const fileType = fileService.detectFileType(`${cleanedBase64}`);
  // return fileType;
  return cleanedBase64;
}



module.exports = fileService;
