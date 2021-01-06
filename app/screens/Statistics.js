import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import Screen from "../components/Screen";
import colors from "../config/colors";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const dataset = {
  labels: ["january", "february", "may"],
  datasets: [
    {
      data: [200, 500, 300],
      colors: [
        (opacity = 1) => `red`,
        (opacity = 1) => `#ff00ff`,
        (opacity = 1) => `rgba(255, 0, 50, ${opacity})`,
      ],
    },
  ],
};

const data = [
  {
    name: "Food",
    amount: 5000,
    color: colors.food,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Gifts",
    amount: 1500,
    color: colors.gift,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Medical",
    amount: 4000,
    color: colors.medical,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Transport",
    amount: 3000,
    color: colors.transport,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Utilities",
    amount: 3000,
    color: colors.utilities,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const pieChartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

function Statistics(props) {
  return (
    <Screen style={styles.screen}>
      <View>
        <Text style={styles.statisticsTitle}>Here is your month in charts</Text>

        <Text style={styles.chartTitle}>Money distribution</Text>
        <PieChart
          data={data}
          width={screenWidth}
          height={screenHeight / 3}
          chartConfig={pieChartConfig}
          accessor={"amount"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
        />
        
        <Text style={styles.chartTitle}>Expense distribution</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            borderRadius: 16,
            marginRight: 30
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  screen: {
    padding: 16
  },
  statisticsTitle: {
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 20
  },
  chartTitle: {
    fontSize: 14,
    marginBottom: 16
  },
});

export default Statistics;
