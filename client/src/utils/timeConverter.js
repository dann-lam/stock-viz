const timeConverter = (inputDatetimeStr) => {
  // Input date and time in ISO 8601 format

  // Extract the date components from the input string
  const year = parseInt(inputDatetimeStr.substr(0, 4));
  const month = parseInt(inputDatetimeStr.substr(4, 2)) - 1; 
  const day = parseInt(inputDatetimeStr.substr(6, 2));
  const hours = parseInt(inputDatetimeStr.substr(9, 2));
  const minutes = parseInt(inputDatetimeStr.substr(11, 2));
  const seconds = parseInt(inputDatetimeStr.substr(13, 2));

  // Create a new Date object representing the input date and time in the local timezone
  const inputDatetime = new Date(year, month, day, hours, minutes, seconds);

  // Get the POSIX timestamp (milliseconds since epoch)
  const posixTimestamp = inputDatetime.getTime();

  // Convert milliseconds to seconds (POSIX timestamp is in seconds, not milliseconds)

  return posixTimestamp;
};

export default timeConverter;
