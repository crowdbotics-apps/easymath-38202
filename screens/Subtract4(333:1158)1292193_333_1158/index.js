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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fabb9306-90e0-4c45-b2e0-3a1659085346"
        }}
        style={styles.ImageBackground_333_1159}
      />
      <View style={styles.View_333_1160} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ee2a631-e970-4a99-8b94-d5fc5a625b38"
        }}
        style={styles.ImageBackground_333_1161}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee975c02-7bd7-4f9f-93d5-27da2c11e44c"
        }}
        style={styles.ImageBackground_333_1162}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f1a872c-fa35-4242-a5ab-0fe994aacd0b"
        }}
        style={styles.ImageBackground_333_1163}
      />
      <View style={styles.View_333_1164}>
        <View style={styles.View_I333_1164_4_6}>
          <View style={styles.View_I333_1164_4_4} />
        </View>
        <View style={styles.View_I333_1164_4_8} />
        <View style={styles.View_I333_1164_6_10}>
          <Text style={styles.Text_I333_1164_6_10}>8:30 </Text>
        </View>
      </View>
      <View style={styles.View_333_1165} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97ff500e-2bc6-4892-a381-a1020b1bb96f"
        }}
        style={styles.ImageBackground_333_1166}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d0b4367-59cb-42b2-90ca-5e4576e29541"
        }}
        style={styles.TouchableOpacity_333_1167}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_322"))
        }
      />
      <View style={styles.View_333_1168}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ed8008b-ca61-4ff2-83fa-b68233b63f38"
          }}
          style={styles.ImageBackground_I333_1168_30_68}
        />
        <View style={styles.View_I333_1168_30_74}>
          <Text style={styles.Text_I333_1168_30_74}>Subtract &gt; </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fdd9a31-20ad-4bb0-9784-f8b4da0e2a38"
        }}
        style={styles.ImageBackground_333_1169}
      />
      <View style={styles.View_333_1170}>
        <Text style={styles.Text_333_1170}>
          Now, click minus to see the difference between those two numbers.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15524480-ccfc-4091-871c-49050b4a883b"
        }}
        style={styles.ImageBackground_333_1171}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7cfa2b3-1fa5-4745-b9bb-f7c7f1195625"
        }}
        style={styles.ImageBackground_333_1172}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a688a61-cf85-4761-ab0c-e216ed489017"
        }}
        style={styles.ImageBackground_333_1174}
      />
      <View style={styles.View_333_1175}>
        <Text style={styles.Text_333_1175}>8 </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afbd9790-571b-44c9-8a59-1cf92032a20f"
        }}
        style={styles.ImageBackground_333_1176}
      />
      <View style={styles.View_333_1177}>
        <Text style={styles.Text_333_1177}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58e58e14-59e7-44a1-a819-18a158be0ee6"
        }}
        style={styles.ImageBackground_333_1178}
      />
      <View style={styles.View_333_1179}>
        <Text style={styles.Text_333_1179}>4</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12fec6cf-b409-48f2-ae31-9a47e8ab3742"
        }}
        style={styles.ImageBackground_333_1180}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81cb0a52-1cf3-4921-ad84-fc5695977cd2"
        }}
        style={styles.ImageBackground_333_1181}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbeb548f-3e1c-4199-9fed-eb02b9701880"
        }}
        style={styles.TouchableOpacity_333_1182}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("333_1070"))
        }
      />
      <View style={styles.View_333_1183}>
        <Text style={styles.Text_333_1183}>2</Text>
      </View>
      <View style={styles.View_333_1184}>
        <Text style={styles.Text_333_1184}>3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9f8b5cc-182a-4753-abf7-c26cec7e9589"
        }}
        style={styles.ImageBackground_333_1185}
      />
      <View style={styles.View_333_1186}>
        <Text style={styles.Text_333_1186}>0</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6437e59c-1d36-4c04-b55b-7367469f461c"
        }}
        style={styles.ImageBackground_333_1187}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02d0d976-e7cc-45ac-9348-d67e4467e71e"
        }}
        style={styles.ImageBackground_333_1188}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/058caf99-423a-4ffa-a338-fc4098f86492"
        }}
        style={styles.ImageBackground_333_1189}
      />
      <View style={styles.View_333_1190}>
        <Text style={styles.Text_333_1190}>5</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fb0a3e9-310c-429f-9590-e8815ecf5a52"
        }}
        style={styles.ImageBackground_333_1191}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a3e4099-1450-43ea-9a6a-427016a53da4"
        }}
        style={styles.ImageBackground_333_1192}
      />
      <View style={styles.View_333_1193}>
        <Text style={styles.Text_333_1193}>9</Text>
      </View>
      <View style={styles.View_333_1194}>
        <Text style={styles.Text_333_1194}>6</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fa34aee-f1b5-4a69-a565-4c7e50e41ef6"
        }}
        style={styles.ImageBackground_333_1195}
      />
      <View style={styles.View_333_1196}>
        <Text style={styles.Text_333_1196}>8</Text>
      </View>
      <View style={styles.View_333_1197}>
        <Text style={styles.Text_333_1197}>7</Text>
      </View>
      <View style={styles.View_333_1198}>
        <Text style={styles.Text_333_1198}>=</Text>
      </View>
      <View style={styles.View_333_1199}>
        <Text style={styles.Text_333_1199}>C</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a15baea-6f91-4b03-89cf-8122fcdc58c5"
        }}
        style={styles.TouchableOpacity_333_1200}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("333_1070"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_333_1201}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("333_1070"))
        }
      >
        <Text style={styles.Text_333_1201}>-</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)" },
  View_2: { height: hp("115%") },
  ImageBackground_333_1159: {
    width: wp("126%"),
    minWidth: wp("126%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-25%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_333_1160: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_333_1161: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_333_1162: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_333_1163: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_333_1164: {
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
  View_I333_1164_4_6: {
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
  View_I333_1164_4_4: {
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
  View_I333_1164_4_8: {
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
  View_I333_1164_6_10: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I333_1164_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1165: {
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
  ImageBackground_333_1166: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("106%")
  },
  TouchableOpacity_333_1167: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_333_1168: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I333_1168_30_68: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I333_1168_30_74: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I333_1168_30_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1169: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("25%")
  },
  View_333_1170: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_333_1170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1171: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("67%")
  },
  ImageBackground_333_1172: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("33%"),
    resizeMode: "cover"
  },
  ImageBackground_333_1174: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("69%")
  },
  View_333_1175: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_333_1175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1176: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("78%")
  },
  View_333_1177: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_333_1177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1178: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("84%")
  },
  View_333_1179: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_333_1179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1180: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("90%")
  },
  ImageBackground_333_1181: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("78%")
  },
  TouchableOpacity_333_1182: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("78%")
  },
  View_333_1183: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_333_1183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1184: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_333_1184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1185: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("78%")
  },
  View_333_1186: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_333_1186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1187: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("84%")
  },
  ImageBackground_333_1188: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("90%")
  },
  ImageBackground_333_1189: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("84%")
  },
  View_333_1190: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_333_1190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1191: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("84%")
  },
  ImageBackground_333_1192: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("90%")
  },
  View_333_1193: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_333_1193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1194: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_333_1194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1195: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("90%")
  },
  View_333_1196: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_333_1196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1197: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_333_1197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1198: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_333_1198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1199: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_333_1199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_333_1200: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("78%")
  },
  TouchableOpacity_333_1201: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_333_1201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
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
