import { View, Text, Image } from 'react-native';
import { FC } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import cn from "../utils/cn.ts";

type CardProps = {
    name: 'General Question' | 'Generate Image' | 'Smart AI';
    content: string;
    imgSource: number;
}

const Card: FC<CardProps> = ({name, content, imgSource}) => {
    const bgColor = {
        'General Question': 'bg-green-500',
        'Generate Image': 'bg-red-500',
        'Smart AI': 'bg-blue-500'
    }[name];

    return (
        <View  className='!px-[10px] rounded-xl bg-red-500 m-2'>
            <View className="flex flex-row justify-start items-center gap-2">
                <Image style={{width: wp(8), height: hp(4)}} source={imgSource} />
                <Text className="font-medium text-2xl" >{name}</Text>
            </View>
            <View>
                <Text className="text-lg tracking-tighter leading-tight">{content}</Text>
            </View>
        </View>
    )
}

export default Card