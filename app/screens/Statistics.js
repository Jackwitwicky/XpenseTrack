import React from 'react';
import { Dimensions, StyleSheet, View, Text} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import Screen from '../components/Screen';

const dataset = {
  labels: ["january", "february", "may"],
  datasets: [
    {
      data: [200, 500, 300],
      colors: [
        (opacity = 1) => `red`,
        (opacity = 1) => `#ff00ff`,
        (opacity = 1) => `rgba(255, 0, 50, ${opacity})`,
      ]
    }
  ]
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

function Statistics(props) {
  return (
    <Screen>

<View>
  <Text>Bezier Line Chart</Text>
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
            Math.random() * 100
          ]
        }
      ]
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
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

<BarChart
      data={dataset}
      width={300}
      height={220}
      withCustomBarColorFromData={true}
      flatColor={true}
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        data: dataset.datasets,
        color: (opacity = 1) => '#fff',
        labelColor: () => '#6a6a6a',
      }}
/>
</View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16
  }
})

export default Statistics;