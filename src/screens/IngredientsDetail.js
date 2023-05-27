import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import IconArrow from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Ingredients from '../component/Ingredients';
import styles from '../css/IngredientsDetailStyles';


const IngredientsDetail = ({ navigation }) => {
    const [name, setName] = useState([]);
    const [prepareTime, setPrepareTime] = useState([]);
    const [vegetableIng, setVegetableIng] = useState([]);
    const [spicesIng, setspicesIng] = useState([]);



    const ingrediantsApi = async () => {
        try {
            const url = "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1";
            const response = await fetch(url);
            const result = await response.json();
            setName(result.name);
            setPrepareTime(result.timeToPrepare);
            setVegetableIng(result.ingredients.vegetables);
            setspicesIng(result.ingredients.spices);


        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    };

    useEffect(() => {
        ingrediantsApi();

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('SelectDishes')}>
                        <IconArrow name="angle-left" size={25} color="grey" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainTitle}>
                    <Text style={styles.mainTitleText}>{name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>4.2 <Image style={styles.starImg} source={require('../assets/star.png')} /></Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.descriptionMainContainer}>
                        <View style={styles.descriptionContainer}>
                            <View style={styles.descriptionWrapper}>
                                <Text style={styles.descriptionText}>
                                    Description of a food that is used with other foods in the preparation of a particular dish.
                                </Text>
                                <View style={styles.clockContainer}>
                                    <Image style={styles.clockIcon} source={require('../assets/clock.png')} />
                                    <Text style={styles.prepareTimeText}>{prepareTime}</Text>
                                </View>
                                <View style={styles.dividerLine} />
                            </View>
                            <View style={styles.ingredientImageContainer}>
                                <Image style={styles.ingredientImage} source={require('../assets/indegrediantImage.png')} />
                            </View>
                        </View>

                        <Text style={styles.ingredientsTitle}>Ingredients</Text>
                        <Text style={styles.ingredientsSubtitle}>For 2 people</Text>
                        <View style={styles.ingredientsDivider} />

                        <TouchableOpacity >
                            <View style={styles.ingredientsDetailsContainer}>
                                <Text style={styles.ingredientsDetailsText}>Vegetables (05)</Text>
                                <Icon name="caret-down" size={16} color="#383838" style={styles.ingredientsDetailsIcon} />
                            </View>
                        </TouchableOpacity>
                        {vegetableIng.length === 0 ? null : (
                            vegetableIng.map((item) => (
                                <Ingredients key={item.name} item={item} />
                            ))
                        )}
                        <TouchableOpacity >
                            <View style={{ ...styles.ingredientsDetailsContainer, marginTop: '10%' }}>
                                <Text style={styles.ingredientsDetailsText}>Spices (10)</Text>
                                <Icon name="caret-down" size={16} color="#383838" style={styles.ingredientsDetailsIcon} />
                            </View>
                        </TouchableOpacity>
                        {spicesIng.length === 0 ? null : (
                            spicesIng.map((item) => (
                                <Ingredients key={item.name} item={item} />
                            ))
                        )}
                        <Text style={styles.applicationTitle}>Appliances</Text>
                        <View style={styles.applicationContainer}>
                            <View style={styles.itemContainer}>
                                <Image style={styles.itemImage} source={require('../assets/refrigeratorImage.png')} />
                                <Text style={styles.itemName}>Refrigerator</Text>
                            </View>
                            <View style={[styles.itemContainer, { marginLeft: '5%' }]}>
                                <Image style={[styles.itemImage, { height: 60, width: 60, marginLeft: 20, marginRight: 20, marginTop: 5 }]} source={require('../assets/Microwave-Oven.png')} />
                                <Text style={[styles.itemName, { marginTop: '10%' }]}>Microwave</Text>
                            </View>
                            <View style={[styles.itemContainer, { marginLeft: '5%' }]}>
                                <Image style={[styles.itemImage, { height: 60, width: 60, marginLeft: 20, marginRight: 20, marginTop: 5 }]} source={require('../assets/stove.png')} />
                                <Text style={[styles.itemName, { marginTop: '10%' }]}>Stove</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default IngredientsDetail