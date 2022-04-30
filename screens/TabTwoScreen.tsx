import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time per level</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
  

<Text style={styles.title}>Points by topic</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
<Text style={styles.title}>Points by topic</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     


<ProgressChart
  data={data3}
  width={screenWidth}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>

</View>
   
  );
}


const data3 = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

const chartConfig = {
  backgroundColor: "white",
      backgroundGradientFrom: "white",
      backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const screenWidth = Dimensions.get("window").width;
const data2 = {
  labels: ["There is / are", "Past simple", "Present continuous", "Verb to be", "Present Simple", "Going to"],
  datasets: [
    {
      data: [2, 4, 2, 8, 9, 3],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  //legend: ["Rainy Days"] // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
