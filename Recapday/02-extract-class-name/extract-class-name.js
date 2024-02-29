function extractClassName(sessionTitle) {
  let arr = sessionTitle.toLowerCase().split(" ");
  let year = 0;
  let month = null;
  let str = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "januar") {
      month = "01";
    } else if (str < 4) {
      return null;
    } else if (arr[i] === "februar") {
      month = "02";
    } else if (arr[i] === "märz") {
      month = "03";
    } else if (arr[i] === "maerz") {
      month = "03";
    } else if (arr[i] === "april") {
      month = "04";
    } else if (arr[i] === "mai") {
      month = "05";
    } else if (arr[i] === "juni") {
      month = "06";
    } else if (arr[i] === "juli") {
      month = "07";
    } else if (arr[i] === "august") {
      month = "08";
    } else if (arr[i] === "september") {
      month = "09";
    } else if (arr[i] === "oktober") {
      month = "10";
    } else if (arr[i] === "november") {
      month = "11";
    } else if (arr[i] === "dezember") {
      month = "12";
    } else if (Number(arr[i]) > 1900 && Number(arr[i] < 2100)) {
      year = arr[i];
    } else if (Number(arr[i] < 1900 || Number(arr[i]) > 2100)) {
      return null;
    }
  }
  console.log(year + "-" + month);
  return `${year}-${month}`;
}
