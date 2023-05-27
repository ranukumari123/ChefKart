import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    innerContainer: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        margin: 15,
    },

    headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#383838',
        marginLeft: '10%',
    },

    separator: {
        backgroundColor: '#000',
        width: '100%',
        height: '6%',
    },

    dateContainer: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '90%',
        height: '8%',
        marginTop: '-5%',
        borderRadius: 10,
        shadowColor: 'grey',
        elevation: 4,
        shadowOpacity: 20,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    date: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    dateText: {
        fontWeight: 'bold',
        color: '#383838',
        marginLeft: '2%',
        fontSize: 14,
    },

    dividerVerticle: {
        height: '110%',
        width: 2,
        backgroundColor: '#E8E8E8',
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
    },

    divider: {
        borderWidth: 2,
        borderColor: '#F0F0F0',
        marginTop: '6%',
        backgroundColor: '#F0F0F0'
    },

    categories: {
        flexDirection: 'row',
        marginLeft: 22,
        marginTop: 25,
    },

    category: {
        marginLeft: 10,
    },

    categoryButton: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
        paddingLeft: 30,
        paddingRight: 30,
        fontWeight: '500',
        fontSize: 14,
        backgroundColor: '#fff8f1',
        color: 'orange',
    },

    categoryText: {
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 20,
        padding: 8,
        paddingLeft: 30,
        paddingRight: 30,
        fontWeight: '500',
        fontSize: 14,
        backgroundColor: '#fff',
        color: '#BEBEBE',
    },

    popularDishesContainer: {
        marginLeft: '5%',
        marginTop: '7%',
    },

    popularDishesText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#383838',
    },

    recommendedContainer: {
        flexDirection: 'row',
        margin: '5%',
        justifyContent: 'space-between',
    },

    recommendedButton: {
        marginTop: '2%',
    },

    recommendedTextContainer: {
        flexDirection: 'row',
    },

    recommendedText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#383838',
        marginRight: '6%',
    },

    caretIcon: {
        marginTop: '1.5%',
    },

    menuButton: {
        alignItems: 'center',
    },

    menuButtonContainer: {
        backgroundColor: '#383838',
        padding: 8,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },

    menuButtonText: {
        color: '#fff',
    },

    footer: {
        backgroundColor: '#000',
        alignSelf: 'center',
        width: '65%',
        height: '6%',
        marginBottom: '3%',
        borderRadius: 10,
        shadowColor: 'grey',
        elevation: 4,
        shadowOpacity: 20,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    footerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '6%',
    },

    footerButtonText: {
        fontWeight: '400',
        color: '#fff',
        marginLeft: '4%',
        fontSize: 15,
        marginTop: 1

    },

    footerArrowIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: '4%',
    },
});