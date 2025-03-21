import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import clsx from 'clsx'

type CardProps = {
    name: 'General Question' | 'Generate Image' | 'Smart AI';
    content: string;
    imgSource: number;
    handlePress: () => void
}

const Card: FC<CardProps> = ({name, content, imgSource, handlePress}) => {
    const bgColor = {
        'General Question': 'bg-green-500',
        'Generate Image': 'bg-red-500',
        'Smart AI': 'bg-blue-500'
    }[name];

    return (
        <View  className={clsx('rounded-xl p-2', bgColor)}>
           <TouchableOpacity onPress={handlePress}>
                <View className="flex flex-row justify-start items-center gap-2">
                    <Image style={{width: wp(8), height: hp(4)}} source={imgSource} />
                    <Text style={{fontSize: wp(4.8)}} className="font-medium text-2xl" >{name}</Text>
                </View>
                <View>
                    <Text style={{fontSize: wp(3.8)}} className="text-lg tracking-tighter leading-tight">{content}</Text>
                </View>
           </TouchableOpacity>
        </View>
    )
}

export default Card