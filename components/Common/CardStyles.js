import { StyleSheet } from 'react-native';
import { Platform } from '@unimodules/core';

export default StyleSheet.create({
    Card: {
        backgroundColor: '#505050',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        marginLeft:2,
        marginRight:2,
    },
    Title: {
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 3,
        paddingBottom: 3,
        color: '#C6C6C6',
    },
    MainText: {
        textAlign: 'center',
        fontSize: 22,
        color: '#C6C6C6',
    },
    Options: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#C6C6C6',
        marginRight: 3,
        marginLeft: 3,
    }, 
    OptionContainer:
    {
        backgroundColor: '#C6C6C6',
        marginRight: 3,
        marginLeft: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C6C6C6',
    },
    OptionContent:
    {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        color: '#505050',
    },
});