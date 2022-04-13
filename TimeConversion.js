/*
Given a time in

12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

 */

// SOLUTION
function timeConversion(s) {
  // Write your code here
  if (s.trim().endsWith("PM")) {
  return s
    .replace(/\d{2}/, (_) => {
      return Number(_) === 12 ? 12 : Number(_) + 12;
    })
    .replace("PM", "");
} else {
  if (s.trim().startsWith("12")) {
    return s.replace("12", "00").replace("AM", "");
  } else {
    return s.replace("AM", "");
  }
}

}