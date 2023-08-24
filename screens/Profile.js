import { View, Text, Image, useWindowDimensions, FlatList, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES, images } from '../constants';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { posts } from '../constants/data';

const PostsRoute = () => (
    <View
        style={{
            flex: 1,
        }}
    >
        <FlatList
            data={posts}
            numColumns={3}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        flex: 1,
                        aspectRatio: 1,
                        margin: 3,
                    }}
                >
                    <Image
                        key={index}
                        source={item.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 12,
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 6,
                            }}
                        >
                            <Ionicons
                                name="eye"
                                size={14}
                                color={COLORS.white}
                            />
                            <Text style={{ color: COLORS.white }}>
                                {item.numOfViews}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="heart-outline"
                                size={14}
                                color={COLORS.white}
                            />
                            <Text style={{ color: COLORS.white }}>
                                {item.numOfViews}
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        />
    </View>
)

const HighLightsRoute = () => (
    <View style={{ flex: 1, backfaceColor: 'blue' }}></View>
)

const TaggedRoute = () => (
    <View style={{ flex: 1, backfaceColor: 'blue' }}></View>
)

const renderScene = SceneMap({
    first: PostsRoute,
    second: HighLightsRoute,
    third: TaggedRoute,
})
const Profile = () => {
    function renderProfileCard() {
        return (
            <ImageBackground
            imageStyle={{
             
              borderRadius:35,
              width:'auto',
              alignItems:'center',
              justifyContent:'center'
              }}
            
            resizeMode=''
                style={{
                    width:'auto',
                    height: 260,
                    marginHorizontal: 22,
                    paddingHorizontal: 6,
                    paddingVertical: 18,
                    borderColor: '#F7F7F7',
                    borderWidth: 1,
                   
                    
                    
                    shadowColor: '#18274B',
                    shadowOffset: {
                        width: 0,
                        height: 4.5,
                    },
                    shadowOpacity: 0.12,
                    shadowRadius: 0.65,
                    elevation: 2,
                    borderRadius: 35,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Profile image container */}
                    <View>
                        <Image
                            source={images.user2}
                            resizeMode="contain"
                            style={{
                                height: 150,
                                width: 100,
                                borderRadius: 80,
                                borderWidth: 4,
                                borderColor: '#000',
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            flex: 1,
                            marginLeft: 6,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ flexDirection: 'column' }}>
                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        fontWeight: 'bold',
                                        color:'#000'
                                    }}
                                >
                                    Lose Hanbel
                                </Text>
                                <Text style={{ ...FONTS.body3 ,color:'#000'}}>
                                    Writes
                                </Text>
                            </View>

                            <Feather
                                name="edit"
                                size={24}
                                colors={['#8f1db0', '#db2a61']}
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                  
                                  color:'#000',
                                    fontWeight:'bold',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                }}
                            >
                                <Text style={{ ...FONTS.body4,color:'#000' }}>7</Text>
                                <Text style={{ ...FONTS.body4,color:'#000' }}>Posts</Text>
                            </View>

                            <View
                                style={{
                                 
                                    color:'#000',
                                    fontWeight:'bold',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                }}
                            >
                                <Text style={{ ...FONTS.body4,color:'#000' }}>24</Text>
                                <Text style={{ ...FONTS.body4,color:'#000' }}>
                                    Followers
                                </Text>
                            </View>

                            <View
                                style={{
                                
                                    color:'#000',
                                    fontWeight:'bold',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: 8,
                                }}
                            >
                                <Text style={{ ...FONTS.body4,color:'#000' }}>7</Text>
                                <Text style={{ ...FONTS.body4,color:'#000' }}>
                                    Followings
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'column',
                        marginVertical: 12,
                    }}
                >
                    <Text style={{ ...FONTS.body4,color:'#000'}}>Jack of all</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...FONTS.body4 ,color:'#000'}}>Product Designer</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.blue }}>
                            @junio
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...FONTS.body4 ,color:'#000'}}>Creator of</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.blue }}>
                            @damnpixels
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Posts', icon: 'square-outline' },
        { key: 'second', title: 'Highlights', icon: 'heart-outline' },
        { key: 'third', title: 'Tagged', icon: 'person-outline' },
    ])

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: COLORS.primary,
            }}
            renderIcon={({ route, focused, color }) => (
                <Ionicons
                    name={route.icon}
                    size={20}
                    color={focused ? COLORS.black : 'gray'}
                />
            )}
            style={{
                backgroundColor: '#fff',
                height: 64,
            }}
            renderLabel={({ focused, route }) => (
                <Text style={[{ color: focused ? COLORS.black : 'gray' }]}>
                    {route.title}
                </Text>
            )}
        />
    )

    function renderButtions() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    
                    paddingHorizontal: 22,
                    marginVertical: 12,
                    alignItems: 'center',
                        justifyContent: 'center',
                }}
            >
                <LinearGradient
                    colors={['#8f1db0', '#db2a61']}
                    style={{
                        height: 40,
                        width: 140,
                        borderRadius: SIZES.padding * 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight:'1rem',
                    }}
                >
                    <AntDesign name="adduser" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 12,
                            color: COLORS.white,
                        }}
                    >
                        Follow
                    </Text>
                </LinearGradient>

                <LinearGradient
                    colors={['#8f1db0', '#db2a61']}
                    style={{
                        height: 40,
                        width: 140,
                        borderRadius: SIZES.padding * 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AntDesign name="message1" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 12,
                            color: COLORS.white,
                        }}
                    >
                        Message
                    </Text>
                </LinearGradient>
            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <View style={{ flex: 1 }}>
                {renderProfileCard()}
                {renderButtions()}
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 22,
                    }}
                >
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: layout.width }}
                        renderTabBar={renderTabBar}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile
