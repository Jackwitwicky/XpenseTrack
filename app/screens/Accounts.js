import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";
import ListItemIcon from "../components/ListItemIcon";
import AppTextHeader from "../components/AppTextHeader";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import HorizontalDivider from "../components/HorizontalDivider";
import AppFab from "../components/AppFab";

const DATA = [
  {
    id: 1,
    header: "BANK",
    name: "NCBA Bank",
    description: "Main Account"
  },
  {
    id: 2,
    header: "MOBILE MONEY",
    name: "Mpesa",
    description: "Main Mpesa Line"
  },
  {
    id: 3,
    header: "MOBILE MONEY",
    name: "Airtel Money",
    description: "Airtel simcard"
  }
]

function Accounts({ navigation }) {
  return(
    <Screen>
      <AppTextHeader>My Accounts</AppTextHeader>

      <FlatList
        data={DATA}
        keyExtractor={(account) => account.id.toString()}
        ItemSeparatorComponent={HorizontalDivider}
        renderItem={({ item }) => <ListItem header={item.header} name={item.name} description={item.description} />} />

      <AppFab icon="plus" backgroundColor="royalblue" onPress={() => navigation.navigate("AddAccount")} />
    
    </Screen>
  );
}


const styles = StyleSheet.create({
  accountDetailsContainer: {
    flexDirection: "column",
    marginLeft: 30    
  },
  accountContainer: {
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16
  },
  accountDescription: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#1c2629"
  },
  accountIconContainer: {

  },
  accountName: {
    marginTop: 6,
    color: "#1d272a",
    fontSize: 16
  },
  accountType: {
    color: "#6c7174",
    textTransform: "uppercase"
  }
})

export default Accounts;