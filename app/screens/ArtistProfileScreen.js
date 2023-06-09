import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import CalendarScreen from "./CalendarScreen";
import { FlatList } from "react-native-gesture-handler";
import listings from "../config/listings";

const renderItem = (item) => (
  <Collapse key={item.title}>
    <CollapseHeader>
      <Text>{item.title}</Text>
    </CollapseHeader>
    <CollapseBody>
      <Text>{item.body}</Text>
    </CollapseBody>
  </Collapse>
);

function ArtistProfileScreen({ navigation, route }) {
  return (
    <Screen style={styles.screen}>
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>{route.params.item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Pressable
          onPress={() =>
            navigation.push("Viewer", {
              item: route.params.item,
              testParam: "stringy McStringFace",
            })
          }
        >
          <Image
            style={styles.image}
            source={route.params.item.image.toString()}
          />
        </Pressable>
      </View>
        <FlatList
          data={listings.slice(0,1)}
          renderItem={({ item }) => (
            <>   
            <View style={styles.collapseContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={styles.button}>
                  {`Bio:\t\t\t\t\t\t`}
                  <AntDesign name="downsquare" size={30} color={colors.light} />
                </Text>
              </CollapseHeader>
              <CollapseBody style={styles.collapseBody}>
                <ScrollView>
                  <Text style={styles.text}>{route.params.item.bio}</Text>
                </ScrollView>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.collapseContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={styles.button}>
                  {`Optredens:\t\t\t`}
                  <AntDesign name="downsquare" size={30} color={colors.light} />
                </Text>
              </CollapseHeader>
              <CollapseBody style={styles.collapseBody}>
                <ScrollView>
                  <Text style={styles.text}>{route.params.item.optreden}</Text>
                </ScrollView>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.collapseContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={styles.button}>
                  {`Prijs:\t\t\t\t\t\t`}
                  <AntDesign name="downsquare" size={30} color={colors.light} />
                </Text>
              </CollapseHeader>
              <CollapseBody style={styles.collapseBody}>
                <ScrollView>
                  <Text style={styles.text}>{route.params.item.price}</Text>
                </ScrollView>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.collapseContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={styles.button}>
                  {`Beschikbaarheid:\t`}
                  <AntDesign name="downsquare" size={30} color={colors.light} />
                </Text>
              </CollapseHeader>
              <CollapseBody style={styles.collapseBody}>
                <ScrollView>
                  <CalendarScreen artistname={route.params.item.title}></CalendarScreen>
                </ScrollView>
              </CollapseBody>
            </Collapse>
          </View>
          </>
            )}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  title: {
    color: colors.light,
    textAlign: "center",
    fontFamily: "Avenir",
    fontSize: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 14,
  },
  collapseContainer: {
    alignItems: "left",
    padding: 10,
  },
  button: {
    height: 30,
    width: "100%",
    color: colors.light,
    fontSize: 25,
    marginBottom: 1,
    borderBottomColor: "#fff",
  },
  collapseBody: {
    width: 360,
    height: 620,
    borderRadius: 8,
    backgroundColor: "#ffffff30",
    padding: 10,
  },
  text: {
    fontSize: 22,
    color: colors.light,
  },
});

export default ArtistProfileScreen;

