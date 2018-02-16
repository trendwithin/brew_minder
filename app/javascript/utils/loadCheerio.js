import { scrapePineBox, scrapeChucks, convertDraftList, scrapeBrouwers, scrapeBeerJunction } from './state/WA/Seattle/seattle_bars.js';
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
    case 'chucksCD':
      let chucksCD = scrapeChucks($);
      return convertDraftList(chucksCD, brewerName);
    case 'brouwers':
      let brouwers = scrapeBrouwers($);
      return convertDraftList(brouwers, brewerName);

    // Issues Implementing this Feature
    // case 'beerJunction':
    //   let beerJunction = scrapeBeerJunction($);
    default:
  }
}
