import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ListItemIcon from "../components/ListItemIcon";
import AppTextHeader from "../components/AppTextHeader";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import HorizontalDivider from "../components/HorizontalDivider";
import AppFab from "../components/AppFab";
import AccountDB from "../data/AccountDB";

const DATA = [
  {
    id: 1,
    type: "BANK",
    name: "NCBA Bank",
    description: "Main Account",
  },
  {
    id: 2,
    type: "MOBILE MONEY",
    name: "Mpesa",
    description: "Main Mpesa Line",
  },
  {
    id: 3,
    type: "MOBILE MONEY",
    name: "Airtel Money",
    description: "Airtel simcard",
  },
];

function Accounts({ navigation }) {
  const [accounts, setAccounts] = useState([]);

  // life cycle functions
  useEffect(() => {
    console.log("get accounts");
    AccountDB.getAccounts(onGetAccounts);
  }, []);

  // callback functions
  const onGetAccounts = (fetchedAccounts) => {
    setAccounts(fetchedAccounts);
    console.log("THe accounts are: ", fetchedAccounts);
  };

  return (
    <Screen>
      <AppTextHeader>My Accounts</AppTextHeader>

      <FlatList
        data={accounts}
        keyExtractor={(account) => account.id.toString()}
        ItemSeparatorComponent={HorizontalDivider}
        renderItem={({ item }) => (
          <ListItem
            header={item.type}
            name={item.name}
            description={item.description}
            onPress={() => navigation.navigate("Account", {id: item.id})}
          />
        )}
      />

      <AppFab
        icon="plus"
        backgroundColor="royalblue"
        onPress={() => navigation.navigate("AddAccount")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountDetailsContainer: {
    flexDirection: "column",
    marginLeft: 30,
  },
  accountContainer: {
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  accountDescription: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#1c2629",
  },
  accountIconContainer: {},
  accountName: {
    marginTop: 6,
    color: "#1d272a",
    fontSize: 16,
  },
  accountType: {
    color: "#6c7174",
    textTransform: "uppercase",
  },
});

export default Accounts;
