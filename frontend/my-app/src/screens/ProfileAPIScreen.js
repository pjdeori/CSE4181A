import React, { useEffect, useState } from "react";
import { View, StyleSheet,Text, Button,TextInput, Pressable, Image } from "react-native";
import axios from "axios";

const ProfileAPIScreen = (props) => {
    let urlstring = "http://192.168.0.101:3000/user/getUserByID/";
    const [text, setText] = useState('');
    const [name, setname] = useState('Name');

    useEffect(()=>{
        urlstring = urlstring+text;
        console.log(urlstring);
    })
    return (
        <View style={styles.viewstyle}>
                <Image
                    style={styles.Image}
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/thumbnails/008/310/479/small_2x/account-circle-glyph-black-icon-vector.jpg',
                      }}
                />
                <Text style={styles.TextStyle}>
                    {name}
                </Text>
                <TextInput
                    style={styles.TestInputStyle}
                    placeholder="Enter ID Here"
                    onChangeText={newText => setText(newText)}
                />
                {/* <Button
                    title="Submit"
                    onPress={() => {
                        axios.get(urlstring).then((res)=>{
                        console.log(res.data);
                        setname(res.data);
                    })
                    }}>
                </Button > */}
                <Pressable 
                style={styles.ButtonStyle}
                onPress={() => {
                        axios.get(urlstring).then((res)=>{
                        console.log(res.data);
                        setname(res.data);
                    })
                    }}>
                <Text style={styles.ButtonTextStyle}>Submit</Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    TextStyle:{
        fontFamily : 'Inika',
        textAlign : "center",
        textAlignVertical : "center",
        fontSize : 16,
        backgroundColor : '#B3E2FC',
        borderRadius : 8,
        width : 278,
        height : 62,
        marginTop : 30,
        marginBottom : 30
    },
    TestInputStyle:{
        fontFamily : 'Inika',
        textAlign : "center",
        textAlignVertical : "center",
        fontSize : 16,
        backgroundColor : '#B3E2FC',
        borderRadius : 8,
        width : 278,
        height : 62,
        marginTop : 30,
        marginBottom : 30
    },
    viewstyle: {
        display: "flex",
        flexDirection : "column",
        alignItems :"center"
    },
    ButtonTextStyle :{
        fontFamily : 'Inika',
        textAlign : "center",
        textAlignVertical : "center",
        fontSize : 16,
        height : 58,
    },
    
    ButtonStyle :{
        width : 116,
        height : 58,
        backgroundColor : '#40B3F2',
        borderRadius : 8
    },
    Image :{
        width : 215,
        height : 215,
        borderRadius : 215,
        backgroundColor : '#B3E2FC'
    }
})

export default ProfileAPIScreen;