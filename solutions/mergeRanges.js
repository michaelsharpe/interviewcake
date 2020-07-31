

const mergeRanges = (meetings) => {
  return meetings
    // JS sort is O(n^2) time and O(1) space for short (<10) arrays 
    // and O(n log(n)) time and O(log(n)) space for long arrays
    .sort((m1, m2) => m1.startTime - m2.startTime)
    // Reduce is a 0(n) operation
    .reduce((acc, meeting) => {

      // O(1) operation
      const lastMeeting = acc.pop();

      // On the first run there won't be a meeting present
      // There might be a way around doing this, though mya not help much
      if(!lastMeeting) {
        return [meeting]
      }

      // If the last meetings endTime is less then the nexts start time
      // Move on
      if (lastMeeting.endTime < meeting.startTime) {
        return [...acc, lastMeeting, meeting];
      }

      // Merge the last meeting with the next one.
      // We want to take the start time which is smallest
      // And the end time which is the largest
      const newMeeting = {
        startTime:  lastMeeting.startTime,
        endTime:
          lastMeeting.endTime > meeting.endTime
            ? lastMeeting.endTime
            : meeting.endTime,
      };

      return [...acc, newMeeting];
    }, []);
};

module.exports = mergeRanges;
