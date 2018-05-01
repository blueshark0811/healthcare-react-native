import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const { height, width } = Dimensions.get('window');


export default class ActivityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({item}) => <View style={styles.categoryContainer}>
                                                <View style={styles.subIcons}>
                                                    <TouchableOpacity style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                                        <Icon name="fav" size={50} style={{ marginLeft: -15}} color="#454545" />
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                                        <Icon name="plus" size={50} style={{ marginLeft: -15}} color="#454545" />
                                                    </TouchableOpacity>
                                                </View>
                                                <TouchableOpacity onPress={ () => this.props.goToNext('detailedView','AVACADO SALAD', true, true) } style={styles.categoryDetails}>
                                                    <ImageBackground style={styles.category} source={require('../../assets/images/demo.png')}>
                                                        <ImageBackground style={styles.category} source={require('../../assets/images/nutrition_frame.png')}>
                                                            <Text>{item.key}</Text>
                                                        </ImageBackground>
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                            </View>
                                }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    categoryContainer: {
        flex: 1,
        width: width - 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 100,
        margin: 5,
    },
    categoryDetails: {
        width: width - 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subIcons: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 3,
        marginBottom: 3,
        height: 100,
    },
    category: {
        flex: 1,
        width: width - 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

});