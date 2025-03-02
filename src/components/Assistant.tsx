import { View, Text, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Assistant = () => {
    return (
        <View>
            <Text style={{fontSize: wp(5)}} className='text-xl font-medium'>Assistant</Text>
            <View style={{height: hp(58)}} className='bg-neutral-200 rounded-3xl p-4'>
                <ScrollView bounces={false} className='space-y-4' showsVerticalScrollIndicator={false}>{
                    
                }
                </ScrollView>
            </View>
        </View>
    )
}