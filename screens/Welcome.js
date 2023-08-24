import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES, images, FONTS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import DotsView from '../components/DotsView'
import { ImageBackground } from 'react-native'

const Welcome = () => {
    const [progress, setProgress] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 1) {
                    clearInterval(intervalId)
                    return prevProgress
                }

                return prevProgress + 0.1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (progress >= 1) {
            // navigate to the Feed Screen
            navigation.navigate('BottomTabNavigation', { name: 'Feed' })
        }
    }, [progress, navigation])

    return (
        <ImageBackground
        source={images.backgroundm}
            resizeMode='stretch'
         style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 100,
                    alignItems: 'center',
                }}
            >
                 <Image
                          source={images.logow}
                          style={{
                            marginTop:'2rem',
                              height: 146,
                              width: 211,
                              borderRadius: 0,
                          }}
                      />

                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                   
                    <Image
                          source={images.worldw}
                          style={{
                            marginTop:'1rem',
                              height: 50,
                              width: 231,
                              borderRadius: 0,
                          }}
                      />
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 100,
                    }}
                >
                    {progress < 1 && <DotsView progress={progress} />}
                </View>
            </View>
        </ImageBackground>
    )
}

export default Welcome
