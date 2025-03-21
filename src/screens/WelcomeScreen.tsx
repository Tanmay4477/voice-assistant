import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationTypes";

type WelcomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, "Welcome">

export default function WelcomeScreen({ navigation }: WelcomeScreenNavigationProp): React.JSX.Element {

  return (
    <SafeAreaView className="flex-1 flex justify-around items-center bg-white text-gray-600">
        <View className="space-y-4 flex flex-col items-center">
            <Text style={{fontSize: wp(10)}} className="text-5xl font-bold">Jhaat bot</Text>
            <Text className="text-lg tracking-wider">The only AI Assistant you need.</Text>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/welcome.png')} style={{width: wp(80), height: hp(40)}}/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-green-500 p-5 rounded-xl w-10/12">
            <Text className="text-center text-2xl text-white font-bold">Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
)};