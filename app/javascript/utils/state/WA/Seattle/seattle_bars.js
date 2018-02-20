import { cleanString, findMatchingBeers, stripHTML } from '../../../cleanse_data';
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

  $('td[class=draft_name]').map(function (i, elem) {
    draftName.push(elem.children[0].data);
  });

  let draftList = _.zip(brewerName, draftName);
  return draftList;
};

export function scrapeBrouwers($) {
  let brewerName = [];
  let brewerDescription = [];
  let draftList = [];

  $('div[class=entry-content]').find('p').find('span[class=item]').map(function (i, elem) {
    brewerName.push(elem.children[0].data);
  });

  $('div[class=entry-content]').find('p').find('span[class=description]').map(function (i, elem) {
    brewerDescription.push(elem.children[0].data);
  });

  draftList = _.zip(brewerName, brewerDescription);
  return draftList;
}

export function scrapeBeerJunction($) {

  const beerList = [];
  const brewerName = [];

  // return to this feature
  $('div').find('p').find('a').map(function (i, elem) {
    if (elem.children.length === 2) {
      let beerName = elem.children[1].children[0].data;
      let beerStyle = elem.children[1].children[1].children[0].data;
      console.log(brewer);
      console.log(secondBrew);
      beerName = stripHTML(beerName);
      beerStyle = stripHTML(beerStyle);
      beerList.push([`${beerName} ${beerStyle}`]);
    }
  });

  // Currently an issue trying to get the name of the brewery to match with beer
  // $('div').find('span').find('a').map(function (i, elem) {
  //   if (elem.children.length === 1) {
  //     if (elem.attribs.href !== undefined && elem.attribs.target !== undefined) {
  //       let datapoint = elem.children[0].data;
  //       datapoint = stripHTML(datapoint);
  //       if (datapoint) {
  //         if (datapoint.trim() !== 'Untappd') {
  //           brewerName.push(datapoint);
  //         }
  //       }
  //     }
  //   }
  // });
}

export function convertDraftList(arrayOfArrays, brewerName) {
  let testArray = new Array;

  arrayOfArrays.map(function (elem, i) {
    testArray.push(elem.join(' '));
  });

  let merged = [].concat.apply([], testArray);
  let foundMatches = findMatchingBeers(merged, brewerName);
  return foundMatches;
}
