import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width : '45%',
    backgroundColor: 'gainsboro',
    margin: 10,
    borderRadius: 10
  },
  image: {
    height: Dimensions.get('window').height /4,
    borderRadius:10,
    resizeMode:'contain',
    margin: 10,
    padding: 10,
  },
  productname: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  productprice: {
    marginTop: 3,
    padding: 3,
  },
  innerContainer:{
    padding:5,
  },
  stockStatus:{
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    padding: 1,
  }
});
