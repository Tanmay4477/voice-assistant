import { View, SafeAreaView, Image, FlatList } from "react-native";
import React, { useRef } from "react";
import { dummyMessages, messageType, Role } from "../constants/index.ts";
import { useState, useEffect } from "react"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Features from "../components/Feature";
import { Assistant } from "../components/Assistant.tsx";
// import Voice from '@react-native-voice/voice';
import generateAiResponse from "../api/anthropic.ts";
import Tts from "react-native-tts";


const HomeScreen = () => {

  const [messages, setMessages] = useState<messageType[]>(dummyMessages);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);
  const flatListRef = useRef<FlatList<messageType>>(null);

  const handlePress = () => {
    setMessages(dummyMessages)
  }

  const speechStartHandler = () => {
    console.log('Speech started');
  }
  
  const speechEndHandler = () => {
    console.log('Speech Ended');
  }

  const speechResultsHandler = (e: any) => {
    const text = e.value[0];
    console.log("text is" , text);
    setResult(text);
  }

  const speechErrorHandler = () => {
    console.log('Speech Errros');
  }

//   useEffect(() => {
//     Voice.onSpeechStart = speechStartHandler;
//     Voice.onSpeechEnd = speechEndHandler;
//     Voice.onSpeechResults = speechResultsHandler;
//     Voice.onSpeechError = speechErrorHandler;

//     Tts.addEventListener('tts-start', (event) => console.log("start", event));
//     Tts.addEventListener('tts-progress', (event) => console.log("progress", event));
//     Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
//     Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     }
//   }, []);

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages])

  const recordingBtnClick = async () => {
    const newState = !isRecording;
    setIsRecording(newState);

//     if (newState) {
//       try {
//         setResult(null);
//         await Voice.start('en-IN');
//       }
//       catch (error) {
//         console.log(`Error is `, error);
//       }
//     }
//     else {
//       try {
//         await Voice.stop();
//           if (result && result.trim().length > 0) {
//             let newMessages = [...messages];
//             newMessages.push({role: Role.USER, content: result.trim()});
//             setMessages(newMessages);
//             try {
//               const response = await generateAiResponse(result.trim());
//               if (response) {
//                 console.log("i also the ai respone", response);
//                 let aiResponse = [...newMessages];
//                 aiResponse.push({role: Role.ASSISTANT, content: response});
//                 setMessages(aiResponse);
//                 Tts.speak(response);
//               }
//               else {
//                 console.log("response did not come, do not know why")
//               }
//             } catch (error) {
//               console.log("This is the error if generate ai response", error)
//             }
            
//         }
//       }
//       catch (error) {
//         console.log(`Error is ${error}`);
//       }
//     }
  }

  const clearMessages = () => {
    setMessages([]);
  }
  
    return (
        <View className="flex-1 bg-white">
          <SafeAreaView className="flex-1 flex mx-5 space-y-2">
            <View className="flex-row justify-center mt-4">
              <Image style={{width: wp(30), height: wp(30)}} source={require('../assets/images/bot.png')}/>
            </View>
    
            {messages.length>0 ? <Assistant messages={messages} flatListRef={flatListRef} isRecording={isRecording} recordingBtnClick={recordingBtnClick} clearMessages={clearMessages}/> : <Features handlePress={handlePress}/>}
          </SafeAreaView>
        </View>
    )}

export default HomeScreen