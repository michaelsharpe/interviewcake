const mergeRanges = (meetings) => {
  return meetings
    .sort((m1, m2) => m1.startTime - m2.startTime)
    .reduce((acc, meeting) => {
      const lastMeeting = acc[acc.length - 1];

      // console.log(!lastMeeting || lastMeeting.endTime < meeting.startTime);

      if (!lastMeeting || lastMeeting.endTime < meeting.startTime) {
        return [...acc, meeting];
      }

      const newMeeting = {
        startTime:
          lastMeeting.startTime < meeting.startTime
            ? lastMeeting.startTime
            : meeting.startTime,
        endTime:
          lastMeeting.endTime > meeting.endTime
            ? lastMeeting.endTime
            : meeting.endTime,
      };

      const newAcc = acc.slice(0, acc.length -1);

      return [...newAcc, newMeeting];
    }, []);
};

module.exports = mergeRanges;
