import { StyleSheet } from 'react-native';
import { Platform } from '@unimodules/core';

export default StyleSheet.create({
    SafeArea: {
        flex:1,
        backgroundColor: '#C6C6C6',
        paddingTop: Platform.OS == 'android' ? 25: 0,
    },
    Container: {
        flex: 1,
        backgroundColor: '#C6C6C6',
    },    
    Title: {
        marginTop:3,
        marginBottom:3,
        fontSize: 28,
    },    
    Main: {
        marginTop: 3,
        marginBottom: 3,
        paddingBottom: 3,
    },
    Input: {
        backgroundColor: '#FFF',
        marginLeft:60,
        marginRight: 60,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 20,
    },
});
