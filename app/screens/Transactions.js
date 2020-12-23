import React from 'react';
import {Text, View, SectionList, StyleSheet, FlatList } from "react-native";
import ListItemIcon from "../components/ListItemIcon";
import AppTextHeader from "../components/AppTextHeader";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import HorizontalDivider from "../components/HorizontalDivider";
import AppFab from "../components/AppFab";
import colors from "../config/colors";

const TRANSACTION_DATA = [
  {
    date: "12 Nov 2020",
    transactions: [
      {
        id: 1,
        header: "BANK",
        name: "Monthly Shopping",
        description: "5,000",
        category: { name: "shopping", color: colors.shopping }
      },
      {
        id: 2,
        header: "MOBILE MONEY",
        name: "Pay water bill",
        description: "150",
        category: { name: "cogs", color: colors.utilities }
      },
    ]
  },
  {
    date: "13th Nov 2020",
    transactions: [
      {
        id: 3,
        header: "MOBILE MONEY",
        name: "Paying for Saturday KFC",
        description: "650",
        category: { name: "food", color: colors.food }
      },
      {
        id: 4,
        header: "MOBILE MONEY",
        name: "Fruits from the market",
        description: "320",
        category: { name: "food", color: colors.food }
      },
    ]
  }
]

const DATA = [
  {
    title: "26th Nov 2020",
    data: [{
      id: 2,
      header: "MOBILE MONEY",
      name: "Pay water bill",
      description: "150",
      category: { name: "cogs", color: colors.utilities }
    }, {
      id: 3,
      header: "MOBILE MONEY",
      name: "Paying for Saturday KFC",
      description: "650",
      category: { name: "home", color: colors.home }
    }]
  },
  {
    title: "16th Nov 2020",
    data: [{
      id: 1,
      header: "BANK",
      name: "Monthly Shopping",
      description: "5,000",
      category: { name: "shopping", color: colors.shopping }
    }, {
      id: 2,
      header: "MOBILE MONEY",
      name: "Pay water bill",
      description: "150"
    }, {
      id: 3,
      header: "MOBILE MONEY",
      name: "Trip to Mombasa",
      description: "650",
      category: { name: "airplane-takeoff", color: colors.travel }
    }]
  },
  {
    title: "14th Nov 2020",
    data: [{
      id: 3,
      header: "MOBILE MONEY",
      name: "Paying for Saturday KFC",
      description: "650",
      category: { name: "medical-bag", color: colors.medical }
    }, {
        id: 2,
        header: "MOBILE MONEY",
        name: "Pay water bill",
        description: "150",
        category: { name: "cogs", color: colors.utilities }
      }]
  },
  {
    title: "13th Nov 2020",
    data: [{
      id: 4,
      header: "MOBILE MONEY",
      name: "Fruits from the market",
      description: "320",
      category: { name: "gift", color: colors.gift }
    }, {
      id: 4,
      header: "MOBILE MONEY",
      name: "Fruits from the market",
      description: "320",
      category: { name: "home", color: colors.home }
    }]
  }
];

function Transactions({navigation}) {
  return (
    <Screen>
      <SectionList
        sections={DATA}
        keyExtractor={(account, index) => account + index}
        ItemSeparatorComponent={HorizontalDivider}
        renderItem={({ item }) => <ListItem header={item.header} name={item.name} description={"Ksh " + item.description} category={item.category} />}
        renderSectionHeader={({section: { title }}) => (<Text style={styles.sectionHeader}>{title}</Text>)} />

      <AppFab icon="plus" backgroundColor="royalblue" onPress={() => navigation.navigate("AddTransaction")} />
    
    </Screen>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingLeft: 10,
    paddingBottom: 10
  }
  
})

export default Transactions;