import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d65fd435-6be3-4d38-9706-2efe229b5a2a"
        }}
        style={styles.ImageBackground_17_490}
      />
      <View style={styles.View_333_1976}>
        <Text style={styles.Text_333_1976}>
          i) https://www.twinkl.com/teaching-wikifouroperations ii)
          https:www.ducksters.comkidsmathorder_of_operations.php iii)
          https://www.universalclass.com/articlesmath/pre-algebra/the-four-basic-mathematicaloperations.html
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d9fab34-a47e-4505-932a-9c03b2c08f4c"
        }}
        style={styles.ImageBackground_17_459}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db165914-9f73-4dae-8fd2-331254a1228e"
        }}
        style={styles.ImageBackground_17_460}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acaaf094-50a6-4c9c-aeda-617f71093721"
        }}
        style={styles.ImageBackground_17_461}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_17_466}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("136_175"))
        }
      >
        <View style={styles.View_17_467}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da1ee9f8-1493-45b9-a68b-a8379e5db3ce"
            }}
            style={styles.ImageBackground_17_468}
          />
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5c58438-4cb8-4d01-b5c7-0335167fd39c"
        }}
        style={styles.ImageBackground_19_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c9e5211-f2dd-48db-a041-3e8c80dcc280"
        }}
        style={styles.ImageBackground_19_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e79d2ae-fb18-436a-90d5-3c65c6c4cae9"
        }}
        style={styles.ImageBackground_19_52}
      />
      <View style={styles.View_19_50}>
        <Text style={styles.Text_19_50}>General </Text>
      </View>
      <View style={styles.View_19_53}>
        <Text style={styles.Text_19_53}>Basic </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3a7542a-516e-4fd2-8c53-6f06dfdd3f4c"
        }}
        style={styles.ImageBackground_19_55}
      />
      <View style={styles.View_19_51}>
        <Text style={styles.Text_19_51}>
          EasyMath! actually an application that will help student the basic
          calculations which will improve your calculation skills and sharpen
          your thinking skills!
        </Text>
      </View>
      <View style={styles.View_19_54}>
        <Text style={styles.Text_19_54}>
          There are several basic operators that user can learn which are
          addition, subtraction, multiply and also division. For further notes,
          click the links below;
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2713e19e-3be1-4156-b22f-bd58944d913e"
        }}
        style={styles.ImageBackground_19_56}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7296c7bb-b3db-47b2-86b1-c4600f00156f"
        }}
        style={styles.TouchableOpacity_19_58}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_322"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13da49cf-5bdd-4891-87cd-7708501d4a08"
        }}
        style={styles.ImageBackground_27_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fb22d2b-7182-458d-8883-2f2cfb15fca0"
        }}
        style={styles.ImageBackground_27_62}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)" },
  View_2: { height: hp("115%") },
  ImageBackground_17_490: {
    width: wp("126%"),
    height: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-25%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_333_1976: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_333_1976: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_459: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("3%")
  },
  ImageBackground_17_460: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("2%")
  },
  ImageBackground_17_461: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  TouchableOpacity_17_466: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_17_467: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_468: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_41: {
    width: wp("59%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("40%"),
    resizeMode: "cover"
  },
  ImageBackground_19_48: {
    width: wp("35%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%")
  },
  ImageBackground_19_52: {
    width: wp("35%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("64%")
  },
  View_19_50: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_19_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_53: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_19_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_55: {
    width: wp("59%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("79%"),
    resizeMode: "cover"
  },
  View_19_51: {
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_19_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_54: {
    width: wp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_19_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_56: {
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("106%")
  },
  TouchableOpacity_19_58: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_27_60: {
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("67%")
  },
  ImageBackground_27_62: {
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("49%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
