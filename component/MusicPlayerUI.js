// 노래 재생 화면을 담당하는 js 파일입니다.
import Slider from '@react-native-community/slider';
import React from'react';
import {SafeAreaView,View,Text,StyleSheet, Dimensions, Image} from'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 아이콘 라이브러리
const {width, height} = Dimensions.get("window");
const MusicPlayerUI = () => {
    return (
        <SafeAreaView style = {styles.container}>
        <View style = {styles.mainContainer}>
            <View style = {styles.artworkWrapper}>
                <Image source=
                {
                    //임의로 집어넣은 사진
                    require('../assets/artwork/lilac.jpg')
                }   style = {styles.arworkImage}/>  
            </View>
            <View>
                <Text style = {styles.title}>Song Title</Text>
                <Text style = {styles.artist}>Song Artist Name</Text>
            </View>

            <View>
                <Slider
                    style = {styles.progressContainer}
                    value = {20}
                    minimumValue = {0}
                    maximumValue = {100}
                    thumbTintColor = '#FFD369'
                    minimumTrackTintColor = '#FFD369'
                    maximumTrackTintColor = '#FF9500'
                    onSlidingComplete = {() => {}}
                />
            </View>
            <View style = {styles.progressLabelContainer}>
                <Text>0 : 00</Text>
                <Text>4 : 00</Text>
            </View>

            <View style = {styles.MusicControls}>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="play-skip-back-outline" size={35} color="#99CCFF" style = {{marginTop : 25}}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="ios-pause-circle" size={75} color="#99CCFF"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="play-skip-forward-outline" size={35} color="#99CCFF" style = {{marginTop : 25}}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            {/* TouchableOpacity - > 눌러지면 이벤트 발생 일단 지금은 빈 함수 호출로 해놓음 */}
            <View style={styles.bottomControls}>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="heart-outline" size={30} color="#FF0000"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="repeat" size={30} color="#000000"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="share-outline" size={30} color="#000000"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Ionicons name="ellipsis-horizontal" size={30} color="#000000"></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};

export default MusicPlayerUI;

const styles = StyleSheet.create({
    container :{ // 전체 컨테이너, 앱 배경 등의 색깔 조절
        flex: 1,
        backgroundColor : '#FFFFFF'
    },
    mainContainer :{ //메인 컨테이너
        flex :1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer : { // 밑의 아이콘들을 구분하는 컨테이너
        width : width,
        alignItems: 'center',
        paddingBottom: 60,
        paddingTop: 40
    },   
    bottomControls : { // 밑의 아이콘들이 담긴 컨테이너 조절
        flexDirection: 'row',
        justifyContent:'space-between',
        width : '80%'
    },
    artworkWrapper :{ //이미지 컨테이너
        marginTop : 40,
        width : 300,
        height : 300,
    },
    arworkImage:{ // 이미지가 이미지 컨테이너에 어떻게 들어갈지 정하는 것
        width:"100%",
        height:"100%",
        borderRadius:15
    },
    title : {//노래 제목
        marginTop : 20,
        fontSize :25,
        fontWeight: '600',
        textAlign: 'center'
    },
    artist : {//노래 가수 이름
        fontSize:15,
        fontWeight:'100',
        textAlign: 'center',
    },
    progressContainer :{
        width : 350,
        height : 40,
        marginTop : 25,
        flexDirection : 'row'
    },
    progressLabelContainer :{
        width : 340,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    MusicControls : {
        marginBottom : -40,
        flexDirection : 'row',
        width : '60%',
        justifyContent : 'space-between',
        marginTop : 15
    }
});