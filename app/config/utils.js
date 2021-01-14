import { AlertIOS, ToastAndroid, View } from "react-native";

const getReadableDate = (dateString) => {
  // YYYY-MM-DD HH:MM:SS.SSS the desired date format is
  const date = new Date(dateString);
  const options = {
    weekday: "long",
   year: "long",
   month:"long",
   day:"numeric"
  };
  return date.toLocaleDateString("en-KE",options);
};

const notifyMessage = (msg) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
};

export default { notifyMessage, getReadableDate };
