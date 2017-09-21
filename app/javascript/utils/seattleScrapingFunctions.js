import { cleanString, findMatchingBeers } from './cleanse_data';
import _ from 'lodash';

export function scrapePineBox($, brewerName) {
  let draftListLeft = Array.from($('#draft_left').find('li'));
  let draftListRight = Array.from($('#draft_right').find('li'));
  let draftList = draftListLeft.concat(draftListRight);
  let brewerList = cleanString(draftList);
  let foundMatches = findMatchingBeers(brewerList, brewerName);
  return foundMatches;
};

export function scrapeChucks($) {
  let brewerName = new Array;
  let draftName = new Array;
  $('td[class=draft_brewery]').map(function (i, elem) {
    brewerName.push(elem.children[0].data);
  });

  $('td[class=draft_name]').map(function(i, elem) {
    draftName.push(elem.children[0].data);
  });

  let draftList = _.zip(brewerName, draftName);
  return draftList;
};

export function convertDraftList(arrayOfArrays, brewerName) {
  let testArray = new Array;
  arrayOfArrays.map(function(elem, i) {
    testArray.push(elem.join(' '));
  });
  let merged = [].concat.apply([], testArray);
  let foundMatches = findMatchingBeers(merged, brewerName);
  return foundMatches;
}
