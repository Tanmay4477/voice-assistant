import { View, Text } from "react-native";
import Card from "../ui/Card";
import { FeatureContent } from "../constants/Feature.ts"; 

export default function Features({handlePress}: {handlePress: () => void}) {

    return (
        <View className="flex flex-col gap-4">
            <Text className="text-2xl font-medium">Features</Text>
            <View className="flex flex-col gap-4">
                <Card handlePress={handlePress} name="General Question" content={FeatureContent['General Question']} imgSource={require("../assets/images/chatgptIcon.png")}/>
                <Card handlePress={handlePress} name="Generate Image" content={FeatureContent['Generate Image']} imgSource={require("../assets/images/dalleIcon.png")}/>
                <Card handlePress={handlePress} name="Smart AI" content={FeatureContent['Smart AI']} imgSource={require("../assets/images/smartaiIcon.png")}/>
            </View>
        </View>
    )
}