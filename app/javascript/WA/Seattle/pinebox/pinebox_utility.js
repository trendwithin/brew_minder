const cheerio = require('cheerio');

export function loadCheerioWith(data, brewerName) {
  const $ = cheerio.load(data.data);
  let draftListLeft = Array.from($('#draft_left').find('li'));
  let draftListRight = Array.from($('#draft_right').find('li'));
  let draftList = draftListLeft.concat(draftListRight);
  let brewerList = cleanString(draftList);
  let foundMatches = findMatchingBeers(brewerList, brewerName);
  return foundMatches;
}

function cleanString(array) {
  let brewerList = [];
  array.map(function (elem) {brewerList.push(elem.children[0].data.replace(/[^\x20-\x7E]/gmi, '')
                                       .replace(/ {2,}/g, ' ').trim());
  });

  return brewerList;
}

function findMatchingBeers(brewerList, brewerName) {
  let matchedBeers = [];
  let sorry = ['Sorry. No Matches Found'];
  brewerList.map(function (beer) {
    if (~beer.toLowerCase().indexOf(brewerName.toLowerCase())) {
      matchedBeers.push(beer);
    }
  });

  return matchedBeers.length === 0 ? sorry :  matchedBeers;
}
