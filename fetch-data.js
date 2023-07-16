const axios = require('axios');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const moment = require('moment/moment');

const url = 'https://www.nintendo.com/es-mx/store/games/nintendo-switch-games';
const imageUrl = 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_400';

async function getHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error retrieving HTML:', error);
    throw error;
  }
};

getHTML(url)
  .then((html) => {
    const filePath = 'src/games.json';
    const data = parseHTML(html);
    const games = data[0].map((gameDataItem) => getDataFromCardfunction(gameDataItem))
    const jsonData = JSON.stringify(games, null, 2);
    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log(`${games.length} games saves in games.json file`);
      }
    });
  })
  .catch(error => {
    console.log(error);
  });


const parseHTML = (html) => {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const scriptTags = document.querySelectorAll('script');
  const scriptContents = Array.from(scriptTags).filter((script) => script && script.textContent !== '').map((script) => script.textContent);
  const siteProps = JSON.parse(scriptContents[0]);
  const pageProps = siteProps.props.pageProps;
  return pageProps.page.content.merchandisedGrid;
}

const getDataFromCardfunction =  ({ nsuid, sku, productImage, name, releaseDate, prices, priceRange, platform, topLevelFilters, availability, genres, nsoFeatures }) => {
    if (!nsuid) return {};
    return {
        nsuid,
        sku,
        productImage: `${imageUrl}/${productImage.publicId}`,
        title: name,
        releaseDate: moment(releaseDate).format("DD/MM/YYYY"),
        prices,
        priceRange,
        platform,
        filters: topLevelFilters,
        availability,
        genres,
        nsoFeatures
    };
}