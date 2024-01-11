import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({products}) => {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : products.imgURL}} />
            <View style={styles.innerContainer}>
                <Text style={styles.productname}>{products.title}</Text>
                <Text style={styles.productprice}>{products.price}</Text>
                {products.inStock === false && <Text style={styles.stockStatus}>STOKTA YOK</Text>}
                {products.inStock === true && <Text style={styles.stockStatus}></Text>}
                
            </View>

        </View>
    );
};

export default ProductCard;



