import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// const Width = 10;
// const Height = 10;

// var grid = [];
// var size;
// var step =
// function setup(){
//     createCanvas(400, 400);
//     initGrid();
// }
// function draw(){
//     background(21);
//     drawGride();
// }
// function drawGrid(){
//     noFill();
//     StrokeWeight(2);
//     Stroke(255);
//     var size = Math.min(width / Width, Height / Height);
// }
// function initGrid(){

//     for (var x = 0; x < Width; x++){
//         for (var y = 0; y < Height; y++){

//         }
//     }
// }



export default function Easy(props) {
    var i;
    var j;
    var row = [];
    var col = [];
    for (j = 0; j < 4; j++) {
        col.push(
            <TouchableOpacity style={styles.grid} />
        )
    }
    for (i = 0; i < 4; i++) {
        row.push(
            <View style={styles.gridlayout}>{col.map((item) => item)}</View>
        )
    }
    
    // console.log(col);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Easy Mode</Text>
            <View style={styles.frame}>
                {row.map((item) => item)}
            </View>
            <View style={styles.btnrow}>
                <TouchableOpacity style={styles.btngreen}
                    onPress={() => {
                        props.navigation.navigate("GameModeScreen");
                    }}
                >
                    <Text style={styles.text}>select mode</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnred}>
                    <Text style={styles.text}>End game</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    frame: {

    },
    header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 50,
    },
    gridlayout: {
        flexDirection: "row",


    },
    grid: {
        margin: "0.5%",
        width: 75,
        height: 75,
        backgroundColor: '#F8F9F9',
        borderRadius: 30,
    },

    btngreen: {
        margin: 25,
        borderRadius: 15,
        backgroundColor: "green",
        alignItems: "center",
        height: 50,
        width: 120,
    },
    btnred: {
        margin: 25,
        borderRadius: 15,

        backgroundColor: "red",
        alignItems: "center",
        height: 50,
        width: 120,
    },

    text: {
        fontSize: 18,
        color: "white",
        fontStyle: "italic",
        marginTop: 10,

    },
    btnrow: {
        flexDirection: "row",
        marginTop: 40,
    }

});
