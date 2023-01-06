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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1a38dac-8527-4901-9b9c-64dc0668b47f"
        }}
        style={styles.ImageBackground_333_1451}
      />
      <View style={styles.View_333_1452} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a48592da-7c0e-4910-98a3-2dbbadd739f2"
        }}
        style={styles.ImageBackground_333_1453}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a44f9437-c9e8-4766-8e5e-171b32cd9966"
        }}
        style={styles.ImageBackground_333_1454}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cae737a3-2516-4238-a058-35450835c6a5"
        }}
        style={styles.ImageBackground_333_1455}
      />
      <View style={styles.View_333_1456}>
        <View style={styles.View_I333_1456_4_6}>
          <View style={styles.View_I333_1456_4_4} />
        </View>
        <View style={styles.View_I333_1456_4_8} />
        <View style={styles.View_I333_1456_6_10}>
          <Text style={styles.Text_I333_1456_6_10}>8:30 </Text>
        </View>
      </View>
      <View style={styles.View_333_1457} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/934abf53-6a5a-44be-898a-c093740c7bb1"
        }}
        style={styles.ImageBackground_333_1458}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a8e82e6-257a-4f7a-a98d-611298fa57ba"
        }}
        style={styles.TouchableOpacity_333_1459}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_322"))
        }
      />
      <View style={styles.View_333_1460}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdb45fb9-fcfe-47fb-9c69-f3658a59b95c"
          }}
          style={styles.ImageBackground_I333_1460_30_68}
        />
        <View style={styles.View_I333_1460_30_74}>
          <Text style={styles.Text_I333_1460_30_74}>Multiply &gt; </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99fe6147-fff4-4486-b147-8c85dea2f300"
        }}
        style={styles.ImageBackground_333_1461}
      />
      <View style={styles.View_333_1462}>
        <Text style={styles.Text_333_1462}>
          Then, clicls on Multiply button?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52ebce93-7aab-4b23-ae01-111b367e2c5a"
        }}
        style={styles.ImageBackground_333_1463}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaa8b0b5-3589-4875-9569-335e4e03bb7c"
        }}
        style={styles.ImageBackground_333_1464}
      />
      <View style={styles.View_333_1466}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c46852b3-4067-43ee-95ac-92acb1dcf0c3"
          }}
          style={styles.ImageBackground_333_1467}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c621604-3832-461e-947f-d74e30ee628e"
          }}
          style={styles.ImageBackground_333_1468}
        />
        <View style={styles.View_333_1469} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b0f6794-33d1-4293-9e9a-d9a3ff34fe59"
          }}
          style={styles.ImageBackground_333_1470}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db8e1cee-51aa-4176-b0f9-8fb7abe8f0e0"
          }}
          style={styles.ImageBackground_333_1471}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e972695f-d48c-4d9f-a50f-97afddda077f"
          }}
          style={styles.ImageBackground_333_1472}
        />
        <View style={styles.View_333_1473}>
          <View style={styles.View_I333_1473_4_6}>
            <View style={styles.View_I333_1473_4_4} />
          </View>
          <View style={styles.View_I333_1473_4_8} />
          <View style={styles.View_I333_1473_6_10}>
            <Text style={styles.Text_I333_1473_6_10}>8:30 </Text>
          </View>
        </View>
        <View style={styles.View_333_1474} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f38fd16-5e92-4fd4-b5bc-bd53042911d1"
          }}
          style={styles.ImageBackground_333_1475}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/828c8959-848a-45ba-8ee5-f1e355ca419a"
          }}
          style={styles.ImageBackground_333_1476}
        />
        <View style={styles.View_333_1477}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a88eaec9-2a09-4085-8c22-c6c7618c642b"
            }}
            style={styles.ImageBackground_I333_1477_30_68}
          />
          <View style={styles.View_I333_1477_30_74}>
            <Text style={styles.Text_I333_1477_30_74}>Addition &gt; </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76ef3162-98d6-4319-ba42-d24a8c76ff35"
          }}
          style={styles.ImageBackground_333_1478}
        />
        <View style={styles.View_333_1479}>
          <Text style={styles.Text_333_1479}>
            Addition is one of the basic operators. Look at the operations
            below: 1+2 = 3 2+2 = 4 2+3 = 5 so what about 1+1 = ? And now we have
            two cat!! YEAH!
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6adc6ce6-2336-4bac-8db5-fd89aa9c592b"
          }}
          style={styles.ImageBackground_333_1480}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1480cd1f-7d0e-43e3-8c7a-bd7b418ebe75"
          }}
          style={styles.ImageBackground_333_1481}
        />
        <View style={styles.View_333_1482}>
          <Text style={styles.Text_333_1482}>
            I am very exciting to learn addition more. Click this button to
            learn more about basic operators.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/845974fd-bb61-4ad5-b1d2-4e10c5781df0"
          }}
          style={styles.ImageBackground_333_1483}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33a3b9b0-e136-4580-ba67-acd9442cf9f3"
          }}
          style={styles.ImageBackground_333_1484}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55c98b27-2f7b-4efb-b0f9-88d99e8c9e03"
          }}
          style={styles.ImageBackground_333_1485}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fcaa813-8b24-43b3-8581-3ce81528eadb"
        }}
        style={styles.ImageBackground_333_1486}
      />
      <View style={styles.View_333_1487}>
        <Text style={styles.Text_333_1487}>7</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a66130d-7c30-4708-95fc-918280b6c0d1"
        }}
        style={styles.ImageBackground_333_1488}
      />
      <View style={styles.View_333_1489}>
        <Text style={styles.Text_333_1489}>1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dba28c9f-805f-4fe4-abf4-73994a12308f"
        }}
        style={styles.ImageBackground_333_1490}
      />
      <View style={styles.View_333_1491}>
        <Text style={styles.Text_333_1491}>4</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e7a1457-fad1-4af2-beec-60a682f12a5f"
        }}
        style={styles.ImageBackground_333_1492}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c39dcc9-e416-4d27-a38e-d56db40d0b38"
        }}
        style={styles.ImageBackground_333_1493}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20150494-80bc-497c-ab8d-5debd3e680ea"
        }}
        style={styles.ImageBackground_333_1494}
      />
      <View style={styles.View_333_1495}>
        <Text style={styles.Text_333_1495}>2</Text>
      </View>
      <View style={styles.View_333_1496}>
        <Text style={styles.Text_333_1496}>3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/692e0aa4-6436-44fa-8a6e-f1c5f8eda539"
        }}
        style={styles.ImageBackground_333_1497}
      />
      <View style={styles.View_333_1498}>
        <Text style={styles.Text_333_1498}>0</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b57f0f0e-6e1e-4e84-8d48-5c68f09088f1"
        }}
        style={styles.ImageBackground_333_1499}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b10c379-5cc3-4e4f-b3d3-14461c0093af"
        }}
        style={styles.ImageBackground_333_1500}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb93ef87-c65d-4f8c-89bc-d43f260d297e"
        }}
        style={styles.ImageBackground_333_1501}
      />
      <View style={styles.View_333_1502}>
        <Text style={styles.Text_333_1502}>5</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f1e8358-43f2-461c-a2bb-4a443da614a2"
        }}
        style={styles.ImageBackground_333_1503}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dadf679-b560-4da6-94cf-0631c317175f"
        }}
        style={styles.ImageBackground_333_1504}
      />
      <View style={styles.View_333_1505}>
        <Text style={styles.Text_333_1505}>9</Text>
      </View>
      <View style={styles.View_333_1506}>
        <Text style={styles.Text_333_1506}>6</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65e263dc-230e-4cc3-a805-feaee81ea0fa"
        }}
        style={styles.ImageBackground_333_1507}
      />
      <View style={styles.View_333_1508}>
        <Text style={styles.Text_333_1508}>8</Text>
      </View>
      <View style={styles.View_333_1509}>
        <Text style={styles.Text_333_1509}>7</Text>
      </View>
      <View style={styles.View_333_1510}>
        <Text style={styles.Text_333_1510}>=</Text>
      </View>
      <View style={styles.View_333_1511}>
        <Text style={styles.Text_333_1511}>C</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7995820-54d3-40b0-af31-cbaa50667aa3"
        }}
        style={styles.TouchableOpacity_333_1512}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("333_1406"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_333_1513}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("333_1406"))
        }
      >
        <Text style={styles.Text_333_1513}>x</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)" },
  View_2: { height: hp("115%") },
  ImageBackground_333_1451: {
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
  View_333_1452: {
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
  ImageBackground_333_1453: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_333_1454: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_333_1455: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_333_1456: {
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
  View_I333_1456_4_6: {
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
  View_I333_1456_4_4: {
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
  View_I333_1456_4_8: {
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
  View_I333_1456_6_10: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I333_1456_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1457: {
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
  ImageBackground_333_1458: {
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
  TouchableOpacity_333_1459: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_333_1460: {
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
  ImageBackground_I333_1460_30_68: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I333_1460_30_74: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I333_1460_30_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1461: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("25%")
  },
  View_333_1462: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_333_1462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1463: {
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
  ImageBackground_333_1464: {
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
  View_333_1466: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("162%"),
    top: hp("-258%"),
    backgroundColor: "rgba(255, 255, 255, 0.9100000262260437)",
    overflow: "hidden"
  },
  ImageBackground_333_1467: {
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
  ImageBackground_333_1468: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%")
  },
  View_333_1469: {
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
  ImageBackground_333_1470: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_333_1471: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_333_1472: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_333_1473: {
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
  View_I333_1473_4_6: {
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
  View_I333_1473_4_4: {
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
  View_I333_1473_4_8: {
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
  View_I333_1473_6_10: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I333_1473_6_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1474: {
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
  ImageBackground_333_1475: {
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
  ImageBackground_333_1476: {
    width: wp("17%"),
    height: hp("5%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_333_1477: {
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
  ImageBackground_I333_1477_30_68: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I333_1477_30_74: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I333_1477_30_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1478: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%")
  },
  View_333_1479: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_333_1479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1480: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("56%"),
    resizeMode: "cover"
  },
  ImageBackground_333_1481: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("89%"),
    resizeMode: "cover"
  },
  View_333_1482: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_333_1482: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1483: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%")
  },
  ImageBackground_333_1484: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("77%")
  },
  ImageBackground_333_1485: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("77%")
  },
  ImageBackground_333_1486: {
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
  View_333_1487: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_333_1487: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1488: {
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
  View_333_1489: {
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
  Text_333_1489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1490: {
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
  View_333_1491: {
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
  Text_333_1491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1492: {
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
  ImageBackground_333_1493: {
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
  ImageBackground_333_1494: {
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
  View_333_1495: {
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
  Text_333_1495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1496: {
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
  Text_333_1496: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1497: {
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
  View_333_1498: {
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
  Text_333_1498: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1499: {
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
  ImageBackground_333_1500: {
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
  ImageBackground_333_1501: {
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
  View_333_1502: {
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
  Text_333_1502: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1503: {
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
  ImageBackground_333_1504: {
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
  View_333_1505: {
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
  Text_333_1505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1506: {
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
  Text_333_1506: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_333_1507: {
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
  View_333_1508: {
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
  Text_333_1508: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1509: {
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
  Text_333_1509: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1510: {
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
  Text_333_1510: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_333_1511: {
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
  Text_333_1511: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_333_1512: {
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
  TouchableOpacity_333_1513: {
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
  Text_333_1513: {
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
