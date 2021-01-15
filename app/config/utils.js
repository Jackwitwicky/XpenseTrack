import { AlertIOS, ToastAndroid, View } from "react-native";

const getReadableDate = (dateString) => {
  // YYYY-MM-DD HH:MM:SS.SSS the desired date format is
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "long",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-KE", options);
};

const getHumanReadableDate = (dateString) => {
  // provided date is: YYYY-MM-DD
  const date = new Date(dateString);
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // options.timeZone = 'UTC';
  // options.timeZoneName = 'short';
  console.log(date.toLocaleDateString("en-GB", options));
  // const readableDateString = date.format("DS MMMM YYYY");
  // console.log("The date is", readableDateString);
};

const notifyMessage = (msg) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
};

export default { notifyMessage, getReadableDate, getHumanReadableDate };
