import { scrapePineBox, scrapeChucks, convertDraftList } from './seattleScrapingFunctions'
import _ from 'lodash';

const cheerio = require('cheerio');

export function loadCheerioWith(data, elem, brewerName) {
  let $ = cheerio.load(data.data);
  let test = _.keys(elem);
  switch (test + '') {
    case 'chucks85':
      let returnValue = scrapeChucks($);
      return convertDraftList(returnValue, brewerName);
    case 'pinebox':
      return scrapePineBox($, brewerName);
      break;
    default:
  }
}
