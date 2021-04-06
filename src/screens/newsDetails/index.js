import React, {useEffect} from 'react';
import { Dimensions } from 'react-native';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const NewsDetailsScreen = (props) => {
    const navigation = useNavigation();
    const item = props.route.params;
    return (
        <SafeAreaView style={{flex: 1}}>
            <View
                style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                    <Text style={{marginLeft:15,fontSize: 24,fontWeight: 'bold'}}>BACK</Text>

                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 24,
                        marginVertical: 10,
                        textAlign: 'right',
                        flex: 1,
                        marginRight: 20,
                    }}>
                    username
                </Text>
            </View>
            <ScrollView style={{flex: 1}}>
                <Image
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width}}
                    source={{uri: item.urlToImage}}
                />
                <Text style={{marginHorizontal: 30,marginVertical: 10, fontSize: 16}}>
                    Подпись :{item.content}
                </Text>
                <Text style={{marginHorizontal: 30,marginVertical: 10, fontSize: 16}}>
                    Name : {item.source.name}
                </Text>
                <Text style={{marginHorizontal: 30,marginVertical: 10, fontSize: 16}}>
                    Время :{item.publishedAt}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewsDetailsScreen;
