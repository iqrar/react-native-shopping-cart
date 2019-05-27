import React from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image
} from "react-native";

export default class Landing extends React.Component {

   constructor() {
    super();
    this.state = { data: [
         {
            headline: "Dress Store",
            description: "We have a variety of awesome dresses",
            image: require("../images/items/dress.png")
         },
         {
            headline: "Shoes Store",
            description: "We have a variety of awesome shoes",
            image: require("../images/items/shoes.png")
         },
         {
            headline: "Shirts Store",
            description: "We have a variety of awesome shoes",
            image: require("../images/items/shirts.png")
         },
         {
            headline: "Hoodies Store",
            description: "We have a variety of awesome hoodies",
            image: require("../images/items/hoodies.png")
         },
         {
            headline: "Jackets Store",
            description: "We have a variety of awesome jackets",
            image: require("../images/items/jackets.png")
         },
         {
            headline: "Jeans Store",
            description: "We have a variety of awesome hoodies",
            image: require("../images/items/jeans.png")
         },
         {
            headline: "Party Store",
            description: "We have a variety of awesome party",
            image: require("../images/items/party.png")
         },
         {
            headline: "Shorts Store",
            description: "We have a variety of awesome hoodies",
            image: require("../images/items/shorts.png")
         },
         {
            headline: "accessories Store",
            description: "We have a variety of awesome hoodies",
            image: require("../images/items/accessories.png")
         }

      ]};
    this.onSubmit = this.onSubmit.bind(this);
  }


  static navigationOptions = {
    
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
      title: 'Shopping Store',
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

 
  onSubmit = item => {
      if (item.headline === "Dress Store") {
        this.props.navigation.navigate("Dress");
      }

      if (item.headline === "accessories Store") {
        this.props.navigation.navigate("Accessiories");
      }
       if (item.headline === "Hoodies Store") {
        this.props.navigation.navigate("Hoodies");
      }
      if (item.headline === "Jackets Store") {
        this.props.navigation.navigate("Jackets");
      }
      if (item.headline === "Party Store") {
        this.props.navigation.navigate("Party");
      }
       if (item.headline === "Jeans Store") {
        this.props.navigation.navigate("Jeans");
      }
       if (item.headline === "Shirts Store") {
        this.props.navigation.navigate("Shirt");
      }
       if (item.headline === "Shorts Store") {
        this.props.navigation.navigate("Shorts");
      } 
      if (item.headline === "Shoes Store") {
        this.props.navigation.navigate("Shoes");
      }   
      
  };

  render() {

   
    return (
     
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
         { this.state.data.map ((item, index) => ( 
           <TouchableOpacity style={styles.button}
            onPress = {() => this.onSubmit(item)}>

            <View style={styles.contentView}>

              <View style={styles.imageView}>
                 <Image style={styles.image} source={item.image}/>
              </View >

              <View style={styles.textView}>
                 <Text style={styles.headline}>{item.headline}</Text>
                 <Text style={styles.text}>{item.description}</Text>
              </View>

             </View> 

              </TouchableOpacity>
              ))
            }

            </ScrollView>

         </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1
  },
   button: {
    backgroundColor: "#fff5e3",
    padding: 10,
    marginTop: 3
  },
  headline: {
    fontSize: 18
  },
  text: {
    fontSize: 14,
    textAlign: "center"
  },
   backArrow: {
    width: 15,
    height: 15,
    marginLeft: 10
  },
  contentView: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageView: {
    justifyContent: "center",
     alignItems: "center",
  },
  image: {
     width: 40,
     height: 40,
     marginRight: 10,
     marginLeft: 10
  },
  textView: {
    justifyContent: "space-around",
    flexDirection: "column",
  }
});
