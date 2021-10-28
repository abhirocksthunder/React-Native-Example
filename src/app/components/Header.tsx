/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function Header(props: any) {
    const { title } = props;
    return (
        <Text style={Styles.container}>{title}</Text>
    );
}

const Styles = StyleSheet.create({
    container: {
        padding: 10, fontSize: 20, backgroundColor: '#7b4bfd', color: '#ffffff',
    },
});
