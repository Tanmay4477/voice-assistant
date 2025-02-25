import { View, Text } from "react-native";
import Card from "../ui/Card";
import { FeatureContent } from "../constants/Feature.ts"; 

export default function Features() {
    return (
        <View className="flex flex-col gap-4">
            <Card name="General Question" content={FeatureContent['General Question']} imgSource={require("../../assets/images/chatgptIcon.png")}/>
            <Card name="Generate Image" content={FeatureContent['Generate Image']} imgSource={require("../../assets/images/dalleIcon.png")}/>
            <Card name="Smart AI" content={FeatureContent['Smart AI']} imgSource={require("../../assets/images/smartaiIcon.png")}/>
        </View>
    )
}