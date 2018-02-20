// test links locally in dev
const WA = [{ pinebox: 'box.html' },
            { chucks85: 'chucks.html' },
            { chucksCD: 'chuckscd.html' },
            { brouwers: 'brouwers.html' },

            // { beerJunction: 'https://www.thebeerjunction.com/tap-list-c2ws' },
            // { beerJunction: 'https://business.untappd.com/locations/3026/themes/8580/js' },
            // currently an issue with BeerJuntion that needs to be addressed.
           ];

// live links for production
// const WA = [ { pinebox: 'http://pineboxbar.com/' },
//              { chucks85: 'http://chucks.jjshanks.net/draft' },
//              { chucksCD: 'http://chucks-cd.jjshanks.net/draft' },
//            ];

module.exports = Object.freeze({
  BREW_RLS: WA,
});
