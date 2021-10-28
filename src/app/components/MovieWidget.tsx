/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, colors } from 'react-native-elements';


interface Props {
    title: string;
    image: string;
    price: string;
}

export default function MovieWidget({ item }) {

    //const {image, title, price} = props;
    return (
        // <Card style={{ width: '50%', height: 140 }}>
        //   <Card.Image source={{uri: item.image}} style={{ width: '100%', height: 140 }}/>
        //   <Card.Divider />
        //   <Card.Title>{item.title}</Card.Title>
        //   <Card.FeaturedSubtitle style={{color: '#fe485a', textAlign: 'right'}}>
        //     {item.price}
        //   </Card.FeaturedSubtitle>
        // </Card>
        <View style={styles.mainCardView}>
            <Image
                style={{ width: '100%', height: 140 }}
                source={{ uri: item.image }}
            />
            <Text style={{ textAlign: 'center', marginTop: 8 }}>{item.title}</Text>
            <Text style={{ textAlign: 'right', marginTop: 8, color:'#fe485a' }}>{item.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCardView: {
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 5,
        backgroundColor: colors.white,
        shadowOffset: { width: 1, height: 1 },
        borderRadius: 2,
        padding: 5,
        shadowColor:'grey',
    },
});
