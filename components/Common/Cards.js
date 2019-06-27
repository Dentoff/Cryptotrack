import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Dimensions
} from 'react-native';

import Pie from 'react-native-pie';

import styles from './CardStyles.js';

export const TitleCard = ({ 
    Title,
    StyleSent,
    StyleTitle, 
    OnTap, 
}) => (
    <View style={[styles.Card, StyleSent]}>
        <Text onPress={OnTap} style={[styles.Title, StyleTitle]}>
            {Title}
        </Text>
    </View>
);

export const TextCard = ({ 
    Title,
    MainText, 
    StyleSent,
    StyleTitle,
    StyleText, 
    OnTap, 
}) => (
    <View style={[styles.Card, StyleSent]}>
        <Text onPress={OnTap} style={[styles.Title, StyleTitle]}>
            {Title}
        </Text>
        <Text onPress={OnTap} style={[styles.MainText, StyleText]}>
            {MainText}
        </Text>
    </View>
);

export const CollapsableTextCard = ({
    Title,
    MainText, 
    StyleMin,
    StyleMax,
    StyleTitle,
    StyleText, 
    OnTap, 
    Expanded,
}) => (
    <View style={[styles.Card, StyleMin || StyleMax]}>
        <Text onPress={OnTap} style={[styles.Title, StyleTitle]}>
            {Title}
        </Text>
        <Text onPress={OnTap} style={[styles.MainText, StyleText]}>
            {MainText}
        </Text>
    </View>
);  

export const ExpandedTextCard = ({
    Title,
    MainText, 
    StyleMin,
    StyleMax,
    StyleTitle,
    StyleText, 
    OnTap, 
    Negative,
    Postie,
    InputData,
    CurrentId,
}) => (
    <View style={[styles.Card, StyleMax]}>
        <Text onPress={OnTap} style={[styles.Title, StyleTitle]}>
            {Title}
        </Text>
        <TextInput value={MainText.toString()} onChangeText={TextInputValue => InputData(TextInputValue)} style={[styles.MainText, StyleText]}/>
        <View style={styles.OptionContainer}>
            <View style={styles.Options}>
                <Text onPress={Negative} style={styles.OptionContent}>
                    -
                </Text>
                <View
                    style={{
                    borderLeftWidth: 2,
                    borderLeftColor: '#505050',
                    }}
                />
                <Text onPress={Postie} style={styles.OptionContent}>
                    +
                </Text>
            </View>
        </View>
    </View>
);  

function buildUp()
{

}

export const PieChartCard = ({
    Title,
    Data,
    Total,
    StyleSent
}) => (
    <View style={[styles.Card, StyleSent, {flex:1, paddingBottom: 10}]}>
        <View style={{flex:1}}>
            <Text style={[styles.Title]}>
                {Title}
            </Text>
        </View>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'space-around'}}>
            <Pie
                style={{flex:1}}
                radius={(Math.round(Dimensions.get('window').width)/2) - 10}
                innerRadius={(Math.round(Dimensions.get('window').width)/2)-20}
                series={[10,40,50]}
                colors={['red','green','blue']}
                backgroundColor='#505050'
            />
            <View 
            style={{position:'absolute', 
            justifyContent: 'center', 
            alignContent:'center', 
            marginTop:((Math.round(Dimensions.get('window').width)/2)- ((Math.round(Dimensions.get('window').width)/10)))}}>
                <Text style={{fontSize: (Math.round(Dimensions.get('window').width/10)), color: '#C6C6C6'}}>
                    10000
                </Text>
            </View>
        </View>
    </View>
);