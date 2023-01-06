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
      <View style={styles.View_17_453}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e055c70-f967-4a8f-8233-0ced66cdb4b7"
          }}
          style={styles.ImageBackground_17_373}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73a2c0cf-9784-4528-9790-b6b74f9e80e1"
          }}
          style={styles.ImageBackground_17_372}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08e7e513-ebe2-4f86-aa29-f44e4259b91d"
          }}
          style={styles.ImageBackground_17_382}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_17_375}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("17_454"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_17_378}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_34"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_17_380}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_394"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d65e10d-bee0-4a9e-b2fa-e6bcb9b9ab5c"
        }}
        style={styles.ImageBackground_16_323}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d44a945e-c851-47fb-b4e3-a56a288f8b36"
        }}
        style={styles.ImageBackground_16_324}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c24c4adb-cf9d-4302-af7d-8ccbcb5ce8b9"
        }}
        style={styles.ImageBackground_16_325}
      />
      <View style={styles.View_16_327}>
        <View style={styles.View_I16_327_4_6}>
          <View style={styles.View_I16_327_4_4} />
        </View>
        <View style={styles.View_I16_327_4_8} />
        <View style={styles.View_I16_327_6_10}>
          <Text style={styles.Text_I16_327_6_10}>8:30 </Text>
        </View>
      </View>
      <View style={styles.View_17_377}>
        <Text style={styles.Text_17_377}>VIEW NOTES &gt;</Text>
      </View>
      <View style={styles.View_17_379}>
        <Text style={styles.Text_17_379}>EXPLORE &gt;</Text>
      </View>
      <View style={styles.View_17_381}>
        <Text style={styles.Text_17_381}>QUIZ &gt;</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_17_383}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("136_175"))
        }
      >
        <View style={styles.View_17_384}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc55c1a9-1165-47b9-a97a-9cd0f19ac054"
            }}
            style={styles.ImageBackground_17_385}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_17_431}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24a8a4f8-7c2e-4cb9-9aef-7caba0eab4b4"
          }}
          style={styles.ImageBackground_17_425}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81b2c591-8f68-4c5e-beb0-53ee0363300b"
          }}
          style={styles.ImageBackground_17_428}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b076a9cc-d671-4c0a-91e5-e72c349bf20d"
          }}
          style={styles.ImageBackground_17_426}
        />
        <View style={styles.View_17_432} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79daed56-e5e9-4e2a-b889-93d624be3da1"
          }}
          style={styles.ImageBackground_17_434}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)" },
  View_2: { height: hp("115%") },
  View_17_453: {
    width: wp("112%"),
    height: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_17_373: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_17_372: {
    flexGrow: 1,
    width: wp("78%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("23%"),
    resizeMode: "cover"
  },
  ImageBackground_17_382: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%"),
    resizeMode: "cover"
  },
  TouchableOpacity_17_375: {
    width: wp("63%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("32%"),
    backgroundColor: "rgba(106, 95, 235, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 10
  },
  TouchableOpacity_17_378: {
    width: wp("63%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("46%"),
    backgroundColor: "rgba(106, 95, 235, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 10
  },
  TouchableOpacity_17_380: {
    width: wp("63%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("61%"),
    backgroundColor: "rgba(106, 95, 235, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 10
  },
  ImageBackground_16_323: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_16_324: {
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("2%")
  },
  ImageBackground_16_325: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_16_327: {
    width: wp("62%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I16_327_4_6: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I16_327_4_4: {
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
  View_I16_327_4_8: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I16_327_6_10: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I16_327_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_377: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_17_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_379: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_17_379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_381: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_17_381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_17_383: {
    width: wp("19%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_17_384: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_385: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_431: {
    width: wp("41%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_17_425: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%")
  },
  ImageBackground_17_428: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%")
  },
  ImageBackground_17_426: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9%")
  },
  View_17_432: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_434: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("9%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
