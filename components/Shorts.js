import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  TextInput,
  Modal,
  Image
} from "react-native";

export default class Hoodies extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      name: "",
      cardNo: "",
      cvc: "",
      data: [
        {
          price: 40,
          image: require("../images/shorts/1.jpg")
        },
        {
          price: 30,
          image: require("../images/shorts/2.jpg")
        },
        {
          price: 50,
          image: require("../images/shorts/3.jpg")
        },
        {
          price: 90,
          image: require("../images/shorts/4.jpg")
        },
        {
          price: 70,
          image: require("../images/shorts/5.jpg")
        },
        {
          price: 200,
          image: require("../images/shorts/6.jpg")
        },
        {
          price: 140,
          image: require("../images/shorts/7.jpg")
        },
        {
          price: 40,
          image: require("../images/shorts/8.jpg")
        },
        {
          price: 120,
          image: require("../images/shorts/9.jpg")
        }
      ]
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

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
      title: "Shorts Store",
      headerStyle: {
        backgroundColor: "#ffc04f"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22
      }
    };
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onSubmit = () => {
     this.setModalVisible(true)
  };

  render() {
    return (
      <View style={styles.container}>
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
         <View style={styles.modal}>
           <View style={styles.backArrowView}>
              <TouchableOpacity onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                }}>
                <Image
                   style={styles.backArrow}
                   source={require("../assets/back.png")}
                />
             </TouchableOpacity>
          </View>
          <View>
              <Text style={styles.formInputText}>Card Holder Name</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={(text) => this.setState({name:text})}
                value={this.state.name}
               />
              <Text style={styles.formInputText}>Card Number</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={(text) => this.setState({cardNo:text})}
                value={this.state.cardNo}
               />
              <Text style={styles.formInputText}>CVC</Text>
              <TextInput
                style={styles.formInput}
                onChangeText={(text) => this.setState({cvc:text})}
                value={this.state.cvc}
               />
               <View style={styles.buttonViewModal}>
                <TouchableOpacity
                  onPress = {() => {
                    this.setModalVisible(false)
                    this.props.navigation.navigate("Thanks")
                   }}
                  style={styles.buttonWrapper}>
                  <Text style={styles.button}>{"Buy"}</Text>
                </TouchableOpacity>
              </View> 
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.contentContainer}>
          {this.state.data.map((item, index) => (
            <View style={styles.contentView}>
              <View style={styles.imageView}>
                <Image style={styles.image} source={item.image} />
              </View>
              <Text style={styles.headline}>{item.price + "$"}</Text>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  onPress={this.onSubmit}
                  style={styles.buttonWrapper}>
                  <Text style={styles.button}>{"Buy"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {},
  headline: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 1
  },
  text: {
    fontSize: 14,
    textAlign: "center"
  },
  modal: {
    backgroundColor: "#ffc04f",
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: '100%',
    paddingTop: 150
  },
  formInput: {
    borderColor: '#fff', 
    borderWidth: 2, 
    width: 300, 
    height: 40,
    paddingTop: 10,
    paddingBottom: 10, 
    borderRadius: 25, 
    textAlign:'center', 
    color: '#fff'
  },
  formInputText: {
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonViewModal: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  backArrowView: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 80
  },
  backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  contentView: {
    marginTop: 10
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 25
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
