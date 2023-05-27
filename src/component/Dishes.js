import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import IconArrow from 'react-native-vector-icons/FontAwesome';

const Dishes = ({ item, navigation }) => {

    const handleViewIngredients = () => {
        navigation.navigate('IngredientsDetail');
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.rowContainer}>
                <View>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleRow}>
                            <Text style={styles.titleText}>{item.name}</Text>
                            <Image
                                style={styles.iconImage}
                                source={require('../assets/vegetarian-food-symbol.png')}
                            />
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>
                                    {item.rating}{' '}
                                    <Image
                                        style={{ height: 7, width: 7, marginLeft: '1%' }}
                                        source={require('../assets/star.png')}
                                    />
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.equipmentContainer}>
                        <View style={styles.equipmentColumn}>
                            {item.equipments[0] && (
                                <View style={styles.equipmentIcon}>
                                    <Image
                                        style={{ height: 15, width: 10 }}
                                        source={require('../assets/refrigerator.png')}
                                    />
                                    <Text style={styles.equipmentText}>
                                        {item.equipments[0]}
                                    </Text>
                                </View>
                            )}
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: '4%' }}>
                            {item.equipments[1] && (
                                <View style={styles.equipmentIcon}>
                                    <Image
                                        style={{ height: 15, width: 15 }}
                                        source={require('../assets/microwave.png')}
                                    />
                                    <Text style={styles.equipmentText}>
                                        {item.equipments[1]}
                                    </Text>
                                </View>
                            )}
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.ingredientsContainer}>
                            <Text style={styles.ingredientsTitle}>Ingredients</Text>
                            <TouchableOpacity onPress={handleViewIngredients}>
                                <View style={styles.viewIngredientsContainer}>
                                    <Text style={styles.viewIngredientsText}>View </Text>
                                    <IconArrow name="angle-right" size={10} color="orange" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text
                        style={{
                            color: '#A9A9A9',
                            fontSize: 11,
                            marginTop: '5%',
                            width: '60%',
                            flexWrap: 'wrap',
                        }}
                    >
                        {item.description}
                    </Text>
                </View>
                <View style={{ marginLeft: '-12%', alignItems: 'center' }}>
                    <Image
                        style={{ height: 100, width: 130, borderRadius: 10 }}
                        source={{ uri: item.image }}
                        resizeMode="contain"
                    />

                    <TouchableOpacity style={{ width: '65%', marginTop: '-15%' }}>
                        <View style={styles.addButton}>
                            <View style={styles.addIcon}>
                                <IconArrow name="plus" size={10} color="orange" />
                            </View>
                            <Text style={styles.addButtonText}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.dividerLine} />
        </SafeAreaView>
    )
};

export default Dishes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    rowContainer: {
        flexDirection: 'row',
        margin: '5%',
        justifyContent: 'space-between',
    },

    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    titleRow: {
        flexDirection: 'row',
    },

    titleText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#535353',
    },

    iconImage: {
        height: 18,
        width: 18,
        alignSelf: 'center',
        marginLeft: '3%',
    },

    ratingContainer: {
        alignSelf: 'center',
        marginLeft: '4%',
    },

    ratingText: {
        fontSize: 9,
        backgroundColor: '#51c452',
        padding: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 2,
        color: '#fff',
        fontWeight: '400',
    },

    equipmentContainer: {
        flexDirection: 'row',
        marginTop: '3%',
    },

    equipmentColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    equipmentIcon: {
        alignItems: 'center',
    },

    equipmentText: {
        fontSize: 7,
        fontWeight: '500',
        marginTop: '3%',
    },

    divider: {
        height: '100%',
        width: 1,
        backgroundColor: '#E8E8E8',
        marginLeft: 10,
        marginRight: 10,
    },

    ingredientsContainer: {
        flexDirection: 'column',
    },

    ingredientsTitle: {
        fontSize: 9,
        fontWeight: '500',
        color: '#535353',
        marginTop: '3%',
    },

    viewIngredientsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '3%',
    },

    viewIngredientsText: {
        fontSize: 8,
        fontWeight: '500',
        color: 'orange',
        marginRight: '2%',
    },

    addIcon: {
        alignSelf: 'flex-end',
        marginTop: '5%',
    },

    addButton: {
        shadowColor: 'grey',
        backgroundColor: '#fff',
        borderColor: 'orange',
        shadowOpacity: 4,
        shadowOffset: { height: 1, width: 1 },
        borderWidth: 0.6,
        paddingLeft: '8%',
        paddingRight: '8%',
        elevation: 4,
        paddingBottom: '6%',
    },

    addButtonText: {
        borderRadius: 3,
        fontSize: 16,
        textAlign: 'center',
        marginTop: '-8%',
        color: 'orange',
        fontWeight: '500',
    },

    dividerLine: {
        borderWidth: 1,
        marginLeft: '5%',
        marginRight: '5%',
        borderColor: '#F0F0F0',
        marginTop: '1%',
        backgroundColor: '#F0F0F0',
    },
});