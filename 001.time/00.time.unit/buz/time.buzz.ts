import { TimeModel } from '../time.model';
import TimeBit from '../fce/time.bit';
import State from '../../99.core/state';

import * as ClkAct from '../../03.clock.unit/clock.action';

import { DateTime } from 'luxon';

var bit, lst, dex, src, dat;

export const initTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bal.slv({ intBit: { idx: 'init-time' } });
  return cpy;
};

export const testTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bal.slv({ tmeBit: { idx: 'test-time', src: 'testing-time' } });
  return cpy;
};

export const updateTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bal.slv({ tmeBit: { idx: 'update-time', dat: bit.tmeBit.dat } });
  return cpy;
};

export const randomTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {

  if (bal.idx == null) bal.idx = 'clk00';

  bit = await ste.hunt(ClkAct.READ_CLOCK, { idx: bal.idx })

  var data = bit.clkBit.dat

  var year = data.yrs;
  if (year == null) year = 1978;

  if (typeof year !== 'number' || isNaN(year) || year < 1 || year > 9999) {
    // console.error("Invalid year provided. Please provide a valid four-digit year.");
    return null;
  }

  var Chance = require('chance')
  const chance = new Chance();
  const sundaysInYear = [];

  // Start with the first day of the year
  let currentDate = DateTime.local(year, 1, 1);

  if (!currentDate.isValid) {
    // console.error(`Failed to create a valid date for January 1st, ${year}. Reason: ${currentDate.invalidReason}`);
    return null;
  }

  // Find the first Sunday of the year.
  // Luxon's weekday numbers are 1 for Monday to 7 for Sunday.
  // .endOf('week') using default locale (week starts Monday) will give Sunday.
  if (currentDate.weekday !== 7) {
    currentDate = currentDate.endOf('week');
  }
  // Now, currentDate is the first Sunday of the year (e.g., if Jan 1 is Mon, currentDate is Jan 7).
  // If Jan 1 was already Sunday, it remains Jan 1.

  // Collect all Sundays that fall within the specified year
  while (currentDate.year === year) {
    sundaysInYear.push(currentDate);
    currentDate = currentDate.plus({ weeks: 1 });
  }

  if (sundaysInYear.length === 0) {
    // This should ideally not be reached if the year is valid and logic is correct.
    // console.error(`No Sundays found in the year ${year}. This is unexpected.`);
    return null;
  }

  var itm = chance.pickone(sundaysInYear);
  var now = itm.c;

  bit = await ste.hunt(ClkAct.ADAPT_CLOCK, { dat: now })

  var clk = bit.clkBit.dat;
  
  bit = await ste.hunt(ClkAct.WRITE_CLOCK, { idx:bal.idx, dat: {clk} })
  
  bal.slv({ tmeBit: { idx: 'random-time', dat: bit.clkBit.dat } });
  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

