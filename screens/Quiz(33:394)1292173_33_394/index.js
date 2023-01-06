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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a9b0fbe-8496-491b-89a3-bb722027cb1f"
        }}
        style={styles.ImageBackground_41_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60177a9d-76f9-4072-a25b-fe56bc4704ba"
        }}
        style={styles.ImageBackground_33_398}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20a83309-cee4-43df-9d34-34b9e65bedb8"
        }}
        style={styles.ImageBackground_33_397}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63f3a2bf-0dd8-4ff8-8d34-3e94554741e2"
        }}
        style={styles.ImageBackground_33_399}
      />
      <View style={styles.View_33_400}>
        <View style={styles.View_I33_400_4_6}>
          <View style={styles.View_I33_400_4_4} />
        </View>
        <View style={styles.View_I33_400_4_8} />
        <View style={styles.View_I33_400_6_10}>
          <Text style={styles.Text_I33_400_6_10}>8:30 </Text>
        </View>
      </View>
      <View style={styles.View_33_401} />
      <View style={styles.View_33_410} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/297c1cf3-46ee-4225-90c2-c6a39835dc46"
        }}
        style={styles.ImageBackground_33_412}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38cd5eb3-453f-4f38-89c7-38e7425d9928"
        }}
        style={styles.TouchableOpacity_33_413}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_322"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee1a156c-1bfd-4ba1-b066-ceb5b33bd605"
        }}
        style={styles.ImageBackground_33_415}
      />
      <View style={styles.View_33_416}>
        <Text style={styles.Text_33_416}>
          You can click any links above to test your level. Goodluck buddy!
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f47e157f-b3a0-4304-be7e-7ee7a2271428"
        }}
        style={styles.ImageBackground_38_472}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a93eaa4a-1ed0-4452-a2c4-91cb1f693fa1"
        }}
        style={styles.ImageBackground_39_538}
      />
      <View style={styles.View_41_579} />
      <View style={styles.View_41_590}>
        <Text style={styles.Text_41_590}>Fun Kid’s Math application</Text>
      </View>
      <View style={styles.View_41_587}>
        <Text style={styles.Text_41_587}>
          https://quizizz.com/admin/quiz/5af9c2226b2678001a6e6cb0/multiplication-and-division
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3be0ffab-85bb-43ce-8a0a-0911b10ced20"
        }}
        style={styles.ImageBackground_41_581}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23177729-84c2-4682-810f-c757b6ab0f26"
        }}
        style={styles.ImageBackground_41_582}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3d298c4-77e0-4f1c-b6d1-cb3f7e95465a"
        }}
        style={styles.ImageBackground_41_583}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d459a4cb-32ad-4504-be2c-3da146aab01a"
        }}
        style={styles.ImageBackground_41_584}
      />
      <View style={styles.View_41_585}>
        <Text style={styles.Text_41_585}>
          https://quizizz.com/admin/quiz/57a8c90eb45e5db50dba49e7/addition-subtraction
        </Text>
      </View>
      <View style={styles.View_41_588}>
        <Text style={styles.Text_41_588}>KooBits application</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)" },
  View_2: { height: hp("115%") },
  ImageBackground_41_578: {
    width: wp("156%"),
    height: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_33_398: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_33_397: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_33_399: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_33_400: {
    width: wp("62%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_400_4_6: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_400_4_4: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_400_4_8: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_400_6_10: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_400_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_401: {
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
  View_33_410: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_33_412: {
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("106%")
  },
  TouchableOpacity_33_413: {
    width: wp("17%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("107%")
  },
  ImageBackground_33_415: {
    width: wp("55%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("66%")
  },
  View_33_416: {
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_33_416: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_472: {
    width: wp("36%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  ImageBackground_39_538: {
    width: wp("43%"),
    height: hp("38%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_41_579: {
    width: wp("94%"),
    height: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%"),
    backgroundColor: "rgba(243, 180, 180, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 5
  },
  View_41_590: {
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_41_590: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_587: {
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_41_587: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_581: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_41_582: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_41_583: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_41_584: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_41_585: {
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_41_585: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_588: {
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_41_588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
