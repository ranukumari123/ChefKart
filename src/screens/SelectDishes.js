import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconArrow from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../css/SelectDishesCss'
import Dishes from '../component/Dishes';
import PopularDishes from '../component/PopularDishes';


const SelectDishes = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [popularDishes, setpopularDishes] = useState([]);


    const dishesApi = async () => {
        try {
            const url = "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";
            const response = await fetch(url);
            const result = await response.json();
            setData(result.dishes || []);
            setpopularDishes(result.popularDishes || []);
            // console.log(result.popularDishes)
            // console.log(result.dishes)

        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    };

    useEffect(() => {
        dishesApi();

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <IconArrow name="angle-left" size={25} color="grey" />
                    <Text style={styles.headerText}>Select Dishes</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.dateContainer}>
                    <View style={styles.date}>
                        <Icon name="calendar-outline" size={24} color="#383838" />
                        <Text style={styles.dateText}>21 May 2021</Text>
                        <View style={styles.dividerVerticle} />
                        <Icon name="alarm-outline" size={26} color="#383838" />
                        <Text style={styles.dateText}>10:30 PM - 12:30 PM</Text>
                    </View>
                </View>
                <ScrollView horizontal>
                <View style={styles.categories}>
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.categoryButton}>Italian</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <View >
                            <Text style={styles.categoryText}>Indian</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <View >
                            <Text style={styles.categoryText}>Indian</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <View >
                            <Text style={styles.categoryText}>Indian</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <View >
                            <Text style={styles.categoryText}>Indian</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                <View style={styles.popularDishesContainer}>
                    <Text style={styles.popularDishesText}>Popular Dishes</Text>
                    <ScrollView horizontal>
                        {popularDishes.length === 0 ? null : (
                            popularDishes.map((item) => (
                                <PopularDishes key={item.id} item={item} />
                            ))
                        )}
                    </ScrollView>
                </View>
                <View style={styles.divider} />
                <View style={styles.recommendedContainer}>
                    <TouchableOpacity style={styles.recommendedButton}>
                        <View style={styles.recommendedTextContainer}>
                            <Text style={styles.recommendedText}>Recommended</Text>
                            <Icon name="caret-down" size={18} color="#383838" style={styles.caretIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}>
                        <View style={styles.menuButtonContainer}>
                            <Text style={styles.menuButtonText}>Menu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {data.length === 0 ? null : (
                        data.map((item, index) => (
                            <Dishes key={index} item={item} navigation={navigation} />
                        ))
                    )}
                </ScrollView>
                <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} activeOpacity={0.5}>
                        <Icon name="fast-food-outline" size={22} color="#fff" />
                        <Text style={styles.footerButtonText}>3 food items selected</Text>
                        <View style={styles.footerArrowIcon}>
                            <Icon name="arrow-forward" size={22} color="#fff" />
                        </View>
                        
                        </TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>
    )
};


export default SelectDishes;