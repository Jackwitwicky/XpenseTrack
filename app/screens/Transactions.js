import React from 'react';
import {Text, View, SectionList, StyleSheet, FlatList } from "react-native";
import ListItemIcon from "../components/ListItemIcon";
import AppTextHeader from "../components/AppTextHeader";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import HorizontalDivider from "../components/HorizontalDivider";
import AppFab from "../components/AppFab";

const TRANSACTION_DATA = [
  {
    date: "12 Nov 2020",
    transactions: [
      {
        id: 1,
        header: "BANK",
        name: "Monthly Shopping",
        description: "5,000"
      },
      {
        id: 2,
        header: "MOBILE MONEY",
        name: "Pay water bill",
        description: "150"
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
        description: "650"
      },
      {
        id: 4,
        header: "MOBILE MONEY",
        name: "Fruits from the market",
        description: "320"
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
      description: "150"
    }, {
      id: 3,
      header: "MOBILE MONEY",
      name: "Paying for Saturday KFC",
      description: "650"
    }]
  },
  {
    title: "16th Nov 2020",
    data: [{
      id: 1,
      header: "BANK",
      name: "Monthly Shopping",
      description: "5,000"
    }, {
      id: 2,
      header: "MOBILE MONEY",
      name: "Pay water bill",
      description: "150"
    }, {
      id: 3,
      header: "MOBILE MONEY",
      name: "Paying for Saturday KFC",
      description: "650"
    }]
  },
  {
    title: "14th Nov 2020",
    data: [{
      id: 3,
      header: "MOBILE MONEY",
      name: "Paying for Saturday KFC",
      description: "650"
    }, {
        id: 2,
        header: "MOBILE MONEY",
        name: "Pay water bill",
        description: "150"
      }]
  },
  {
    title: "13th Nov 2020",
    data: [{
      id: 4,
      header: "MOBILE MONEY",
      name: "Fruits from the market",
      description: "320"
    }, {
      id: 4,
      header: "MOBILE MONEY",
      name: "Fruits from the market",
      description: "320"
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
        renderItem={({ item }) => <ListItem header={item.header} name={item.name} description={"Ksh " + item.description} />}
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