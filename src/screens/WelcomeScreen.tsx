import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-green-500">
        <View className="space-y-2 text-center">
            <Text className="text-5xl">Ranay</Text>
            <Text className="text-2xl">Your Only AI Assisstant you need</Text>
        </View>
        <View>
            <Image source={require('../../assets/images/welcome.png')} className="w-60 h-60"/>
        </View>
        <TouchableOpacity className="bg-blue-500 text-green-600">
            <Text className="">Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
)};