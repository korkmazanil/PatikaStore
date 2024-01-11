import React from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, SafeAreaView} from 'react-native';
import ProductCard from './components/ProductCard';
import productslist from './productsList.json';

function App() {

  const renderProduct = ({item}) => <ProductCard products={item}/>

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appname}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder='Ara...'/>
     <FlatList
        data={productslist}
        numColumns={2}
              
        renderItem={renderProduct}
     />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  appname: {
    fontSize:36,
    margin:8,
    textAlign: 'center',
    color: 'purple',
    fontWeight: 'bold'
  },
  search: {
    backgroundColor:'gainsboro',
    paddingHorizontal: 36,
    paddingVertical: 6,
    borderRadius: 10,
    marginHorizontal: 12,
  },

});
export default App;