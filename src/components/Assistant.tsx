import { View, Text, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { messageType } from '../constants';

export const Assistant = ({messages}: {messages: messageType[]}) => {

    const renderItem = ({item, index}: {item: messageType, index: number}) => {
        if (item.role === "assistant") {
            if (item.content.includes(".png") || item.content.includes("jpg") || item.content.includes("image")) {
                // ai sending image
                return (
                    <View className='flex-row justify-start'>
                        <View style={{height: wp(60), width: wp(60)}} className='flex rounded-2xl bg-emerald-200'>
                            <Image 
                                source={{uri: item.content}}
                                className='rounded-2xl'
                                resizeMode='cover'
                                style={{height: wp(60), width: wp(60)}}
                            />
                        </View>
                    </View>
                )
            }
            else {
                // ai sending text
                return (
                    <View 
                        className='flex-row justify-start rounded-2xl bg-emerald-200 rounded-tl-none p-2'
                        style={{width: wp(70)}}
                        >
                            <Text>{item.content}</Text>
                    </View>
                )
            }
        }
        else {
            return (
                // user sending text
                <View className='flex-row justify-end'>
                    <View
                        style={{width: wp(70)}}
                        className='bg-white rounded-2xl p-2 rounded-tr-none'>
                        <Text>
                            {item.content}
                        </Text>
                    </View>
                </View>
            )
        }
    }

    return (
        <View className='flex-1 gap-2'>
            <Text style={{fontSize: wp(5)}} className='text-xl font-medium text-gray-700 ml-1'>Assistant</Text>
            <View style={{height: hp(58)}} className='bg-neutral-200 rounded-3xl p-4'>
                <FlatList contentContainerClassName='gap-4' data={messages} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
            </View>
        </View>
    )
}