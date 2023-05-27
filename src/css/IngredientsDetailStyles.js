import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    backButton: {
        flexDirection: 'row',
        margin: 15,
    },

    backButtonIcon: {
        marginRight: '3%',
    },

    mainTitle: {
        margin: '6%',
        marginTop: '3%',
        marginBottom: '2%',
        flexDirection: 'row',
    },

    mainTitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#383838',
        letterSpacing: 1.5,
    },

    ratingContainer: {
        alignSelf: 'center',
        marginLeft: '4%',
    },

    ratingText: {
        fontSize: 9,
        backgroundColor: '#51c452',
        padding: 2,
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 2,
        color: '#fff',
        fontWeight: '400',
    },

    starImg: {
        height: 7,
        width: 7,
        marginLeft: '1%',
    },

    descriptionMainContainer: {
        margin: '6%',
        marginTop: '0%',
    },

    descriptionContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
    },

    descriptionWrapper: {
        flex: 1,
        flexDirection: 'column',
    },

    descriptionText: {
        color: '#A9A9A9',
        fontSize: 12,
        marginTop: '2%',
        width: '70%',
        flexWrap: 'wrap',
    },

    clockContainer: {
        flexDirection: 'row',
        marginTop: '15%',
        marginBottom: '15%',
    },

    clockIcon: {
        height: 25,
        width: 25,
    },

    prepareTimeText: {
        fontWeight: '500',
        color: '#383838',
        alignSelf: 'center',
        marginLeft: '3%',
        fontSize: 16,
    },

    dividerLine: {
        borderWidth: 2,
        borderColor: '#F0F0F0',
        backgroundColor: '#F0F0F0',
        width: '80%',
        marginLeft: '-10%',
    },

    ingredientImageContainer: {
        flex: 1,
        marginLeft: '-50%',
    },

    ingredientImage: {
        height: '150%',
        width: '180%',
        resizeMode: 'contain',
    },

    ingredientsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#383838',
        marginTop: '10%',
    },

    ingredientsSubtitle: {
        fontSize: 10,
        fontWeight: '500',
        color: '#A9A9A9',
        marginTop: '1%',
    },

    ingredientsDivider: {
        borderWidth: 1,
        borderColor: '#F0F0F0',
        backgroundColor: '#F0F0F0',
        marginTop: '8%',
        marginBottom: '8%',
    },

    ingredientsDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    ingredientsDetailsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#383838',
        marginRight: '4%',
    },

    ingredientsDetailsIcon: {
        alignSelf: 'center',
    },

    applicationTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#383838',
        marginTop: '10%',
    },

    applicationContainer: {
        flexDirection: 'row',
        marginTop: '4%',
        marginBottom: '10%',
    },

    itemContainer: {
        width: 80,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
    },

    itemImage: {
        height: 70,
        width: 30,
    },

    itemName: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: '5%',
    },

});

export default styles;
