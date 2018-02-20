export function cleanString(array) {
  let brewerList = [];
  array.map(function (elem) {brewerList.push(elem.children[0].data.replace(/[^\x20-\x7E]/gmi, '')
                                       .replace(/ {2,}/g, ' ').trim());
  });

  return brewerList;
}

export function findMatchingBeers(brewerList, brewerName) {
  let matchedBeers = [];
  let sorry = ['Sorry. No Matches Found'];

  brewerList.map(function (beer) {
    if (~beer.toLowerCase().indexOf(brewerName.toLowerCase())) {
      matchedBeers.push(beer);
    }
  });

  return matchedBeers.length === 0 ? sorry :  matchedBeers;
}

export function stripHTML(taggedString) {
  cleanString = taggedString;
  cleanString = cleanString.replace(/<[^>]+>/g, '');
  cleanString = cleanString.replace(/\s+/g, ' ').trim();
  cleanString = cleanString.replace(/\\n/g, '');
  return cleanString;
}
