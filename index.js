const axios = require('axios');
const download = require('download');
const prompt = require('prompt-sync')();
async function doPostRequest() {
  try {
    const platform = prompt('ig/tiktok/twitter? ');
    const link = prompt('link? ');
    let res = await axios.post('https://ssyoutube.com/api/convert', {
      url: `${link}`,
    });
    return console.log(res.data);
    if (platform == 'ig') {
      const willDownload = res.data[0].url[0].url;
      // Url of the image
      const urlFile = willDownload;
      // Path at which image will get downloaded
      const filePath = `${__dirname}/downloaded/ig`;

      download(urlFile, filePath)
        .then(() => {
          console.log('Download Completed');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (platform == 'tiktok') {
      const willDownload = res.data.url[0].url;
      // Url of the image
      const urlFile = willDownload;
      // Path at which image will get downloaded
      const filePath = `${__dirname}/downloaded/tiktok`;

      download(urlFile, filePath)
        .then(() => {
          console.log('Download Completed');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (platform == 'twitter') {
      const willDownload = res.data.url[0].url;
      // Url of the image
      const urlFile = willDownload;
      // Path at which image will get downloaded
      const filePath = `${__dirname}/downloaded/twitter`;

      download(urlFile, filePath)
        .then(() => {
          console.log('Download Completed');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
}
doPostRequest();
