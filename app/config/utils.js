import { AlertIOS, ToastAndroid, View } from "react-native";

const getReadableDate = (date) => {
  // YYYY-MM-DD HH:MM:SS.SSS the desired date format is
};

const notifyMessage = (msg) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
};

export default { notifyMessage, getReadableDate };
