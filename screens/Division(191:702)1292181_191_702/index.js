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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca21e618-ca39-4ca1-94cb-b49bd8875b1e"
        }}
        style={styles.ImageBackground_191_703}
      />
      <View style={styles.View_191_704} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48c5e350-dfc7-406b-9e1f-0b013f66c8e9"
        }}
        style={styles.ImageBackground_191_705}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43452220-0963-489f-903c-b7686d26a1cf"
        }}
        style={styles.ImageBackground_191_706}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3c6ffee-e730-4ec2-91e0-ce59682101d8"
        }}
        style={styles.ImageBackground_191_707}
      />
      <View style={styles.View_191_708}>
        <View style={styles.View_I191_708_4_6}>
          <View style={styles.View_I191_708_4_4} />
        </View>
        <View style={styles.View_I191_708_4_8} />
        <View style={styles.View_I191_708_6_10}>
          <Text style={styles.Text_I191_708_6_10}>8:30 </Text>
        </View>
      </View>
      <View style={styles.View_191_709} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44db0360-66d4-4036-b309-7beaec51e2ba"
        }}
        style={styles.TouchableOpacity_191_711}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_322"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e5cddb5-6252-4e26-bc92-c9c49fb4e636"
        }}
        style={styles.ImageBackground_191_713}
      />
      <View style={styles.View_191_714}>
        <Text style={styles.Text_191_714}>
          Division is a operation that you splitting specific amount into equal
          parts. Lets look the example below: 18 / 2 = 9 80 / 8 = 10 55 / 5 = 11
          so what about 4 / 2 = ? Try click at the lions shown!{" "}
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeb92fd3-ae73-4165-b409-a0eecc89c382"
        }}
        style={styles.TouchableOpacity_191_715}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_34"))
        }
      />
      <View style={styles.View_191_716}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fb89bb2-7e43-48a9-8ec7-e9d56d6425b4"
          }}
          style={styles.ImageBackground_I191_716_30_68}
        />
        <View style={styles.View_I191_716_30_74}>
          <Text style={styles.Text_I191_716_30_74}>Division &gt; </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_195_741}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("191_740"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9af6b6b3-ac32-4956-a0c5-6f0c8dfe3d33"
          }}
          style={styles.ImageBackground_195_735}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e50dff81-a8ad-413d-a01e-9254164a086c"
          }}
          style={styles.ImageBackground_195_738}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1753a24-4d16-4d66-94eb-e1fd95a456cd"
          }}
          style={styles.ImageBackground_195_739}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ef33666-6638-4984-b8d1-1f52f0df9346"
          }}
          style={styles.ImageBackground_195_740}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)" },
  View_2: { height: hp("115%") },
  ImageBackground_191_703: {
    width: wp("125%"),
    height: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-25%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_191_704: {
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("16%")
  },
  ImageBackground_191_705: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_191_706: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_191_707: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_191_708: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I191_708_4_6: {
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
  View_I191_708_4_4: {
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
  View_I191_708_4_8: {
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
  View_I191_708_6_10: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I191_708_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_709: {
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
  TouchableOpacity_191_711: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_191_713: {
    width: wp("93%"),
    height: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%")
  },
  View_191_714: {
    width: wp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_191_714: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_191_715: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    resizeMode: "cover"
  },
  View_191_716: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I191_716_30_68: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I191_716_30_74: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I191_716_30_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_195_741: {
    width: wp("100%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_195_735: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_195_738: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_195_739: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  ImageBackground_195_740: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
