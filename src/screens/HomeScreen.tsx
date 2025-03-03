import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { dummyMessages, messageType } from "../constants/index.ts";
import { useState } from "react"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Features from "../components/Feature";
import { Assistant } from "../components/Assistant.tsx";

export default function HomeScreen() {
  const [messages, setMessages] = useState<messageType[]>(dummyMessages);
  
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5 space-y-2">
        <View className="flex-row justify-center mt-4">
          <Image style={{width: wp(40), height: wp(40)}} source={require('../../assets/images/bot.png')}/>
        </View>

        {messages.length>0 ? <Assistant messages={messages} /> : <Features />}
      </SafeAreaView>
    </View>
)}