import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        fontFamily: "sans-serif-condensed",
    }
})

export default AppText;