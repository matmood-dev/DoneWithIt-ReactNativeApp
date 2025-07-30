import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText'
import colors from '../config/colors';

function ListingDetailScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailContainer}>
            <AppText style={styles.title}>Red Jacket For Sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    detailContainer:{
        padding: 20
    },
    title:{
        fontSize: 24,
        fontWeight: '500',
    },
    price:{
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    }
})

export default ListingDetailScreen;