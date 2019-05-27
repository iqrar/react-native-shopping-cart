import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Modal,
  TextInput,
  TouchableHighlight,
  Image
} from "react-native";

export default class Thanks extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = () => {
     this.setModalVisible(true)
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backArrow}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      ),
      title: 'Buy More',
    headerStyle: {
      backgroundColor: '#ffc04f',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 22
    }
    };
  };

  render() {
    return (
      <View style={styles.container}>

         
              <Text style={styles.headline}>{"Your order is on The Way"}</Text>

              <View style={styles.buttonView}>
                <TouchableOpacity
                  onPress = {() => this.props.navigation.navigate("Landing")}
                  style={styles.buttonWrapper}>
                  <Text style={styles.button}>{"Back To Store"}</Text>
                </TouchableOpacity>
              </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc04f"
  },
  headline: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    textAlign: "center"
  },
  contentView: {
    marginTop: 10
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  buttonView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  buttonWrapper: {
    backgroundColor: "#ffc04f",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 25,
    padding: 15,
    width: 250
  },
  button: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});
