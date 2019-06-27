import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
  } from 'react-native';

import styles from './MainScreenStyles.js';

import { 
    TextCard, 
    TitleCard, 
    CollapsableTextCard, 
    ExpandedTextCard,
    PieChartCard, 
} from '../../components/Common/Cards.js';

export default class MainScreen extends Component
{
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state ={
            TestText: "Test",
            TabKey: 0,
            Clicked: false,
            Collapsed: false,
            ExpandedCards: [],
            CardDisplay: [
                {'id': 1, 'Title': "ETH", 'MinText': "Text1", 'Amount': 14},
                {'id': 2, 'Title': "BTC", 'MinText': "Text2", 'Amount': 3},
                {'id': 3, 'Title': "OMG", 'MinText': "Text3", 'Amount': 30},
                {'id': 4, 'Title': "LTC", 'MinText': "Text4", 'Amount': 5},
                {'id': 5, 'Title': "TRX", 'MinText': "Text5", 'Amount': 100}],
        };

        this.CollapsedCLick = this.CollapsedCLick.bind(this);

        this.IncreaseAmount = this.IncreaseAmount.bind(this);
        this.DecreaseAmount = this.DecreaseAmount.bind(this);
        this.TypeAmount = this.TypeAmount.bind(this);
    }

    CollapsedCLick(key)
    {
        var found = false;
        var FinalKeys = [];
        let keys = this.state.ExpandedCards;

        if (keys.length > 0)
        {
            for (let Keyfound of keys)
            {
                if (Keyfound == key)
                {
                    found = true;
                }   
                else
                {
                    FinalKeys.push(Keyfound);
                }
            }

            if (!found)
            {
                FinalKeys.push(key);
            }
        }
        else
        {
            FinalKeys.push(key);
        }

        Keys = FinalKeys;

        console.log(keys);
        console.log(FinalKeys);

        this.setState({Collapsed: !this.state.Collapsed, ExpandedCards: Keys});
    }

    IncreaseAmount(key)
    {
        var CurrentAmount = this.state.CardDisplay;

        for (let card of CurrentAmount)
        {
            if (card.id == key)
            {
                card.Amount++;
            }
        }

        this.setState({CardDisplay: CurrentAmount});
    }

    DecreaseAmount(key)
    {
        var CurrentAmount = this.state.CardDisplay;

        for (let card of CurrentAmount)
        {
            if (card.id == key)
            {
                card.Amount--;
            }
        }

        this.setState({CardDisplay: CurrentAmount});
    }

    TypeAmount(key, event)
    {
        console.log(event);
        var CurrentAmount = this.state.CardDisplay;

        for (let card of CurrentAmount)
        {
            if (card.id == key)
            {
                card.Amount = event;
            }
        }

        this.setState({CardDisplay: CurrentAmount});   
    }

    render(){
        const Collapsed = this.state.Collapsed;
        let card;
        var i = 0;

        const CardsToShow = this.state.CardDisplay.map((TextArray) => {
            let placeholder = TextArray.Amount
            i++;
            for(let expanded of this.state.ExpandedCards)
            {
                if (expanded == TextArray.id)
                {
                    return (
                        <ExpandedTextCard 
                        OnTap={() => {this.CollapsedCLick(TextArray.id)}} 
                        key={TextArray.id} 
                        Title={TextArray.Title} 
                        MainText={placeholder} 
                        StyleMax={styles.Main}
                        Postie={() => this.IncreaseAmount(TextArray.id)}
                        Negative={() => this.DecreaseAmount(TextArray.id)}
                        InputData={(text) => this.TypeAmount(TextArray.id, text)}
                        CurrentId={TextArray.id}
                        />
                    )
                }
            }
            return (
                <CollapsableTextCard 
                OnTap={() => {this.CollapsedCLick(TextArray.id)}} 
                key={TextArray.id} 
                Title={TextArray.Title} 
                MainText={TextArray.Amount} 
                StyleMin={styles.Main} 
                />   
            )
               
        })

        return (
            <SafeAreaView style={styles.SafeArea}>
                <ScrollView style={styles.Container}>
                    <TitleCard StyleSent={styles.Main} Title='Title'/>
                    <PieChartCard StyleSent={styles.Main} Title='Graph'/>
                    {CardsToShow}
                    <View style={{marginTop:7}}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}