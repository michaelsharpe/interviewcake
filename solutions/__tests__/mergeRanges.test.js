const mergeRanges = require('../mergeRanges');

describe('mergeRanges', () => {
  it('merges meetings multiple meeting time ranges and returns an array of condensed ranges', () => {
    const starting =   [
      { startTime: 0,  endTime: 1 },
      { startTime: 3,  endTime: 5 },
      { startTime: 4,  endTime: 8 },
      { startTime: 10, endTime: 12 },
      { startTime: 9,  endTime: 10 },
    ];

    const expected =   [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 },
    ]
    
    expect(mergeRanges(starting)).toStrictEqual(expected);
  })
})