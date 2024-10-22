import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Modal } from 'react-native';
import Colors from '../component/Colors';
import { Icon } from '../component/Icon';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../component/Button';

const DriverDetails = () => {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleConfirm = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        navigation.goBack(); 
    };

    return (
        <ImageBackground source={require('../../Asset/Image/mapimage.jpg')} style={styles.backgroundImage}>
            <View style={{ padding: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.leftButton}>
                    <Icon.AntDesign name="left" size={30} color={Colors.lightgray} />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                
                <View style={styles.driverInfo}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/1597690/pexels-photo-1597690.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.profileImage}
                    />
                    <View style={styles.driverText}>
                        <Text style={styles.driverName}>Asif Raj</Text>
                        <Text style={styles.rating}>⭐ 4.9</Text>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity onPress={()=> navigation.navigate('MassageScreen')} style={styles.messageButton}>
                            <Text style={styles.iconText}>💬</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> {}} style={styles.callButton}>
                            <Text style={styles.iconText}>📞</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            
                <View style={styles.recommendations}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/5234256/pexels-photo-5234256.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.recommendationImage}
                    />
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.recommendationImage}
                    />
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/7956488/pexels-photo-7956488.jpeg?auto=compress&cs=tinysrgb&w=600' }}
                        style={styles.recommendationImage}
                    />
                    <Text style={styles.recommendationText}>25 Recommended</Text>
                </View>

                <View style={styles.rideInfo}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>DISTANCE</Text>
                        <Text style={styles.infoValue}>0.2 km</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>TIME</Text>
                        <Text style={styles.infoValue}>2 min</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>PRICE</Text>
                        <Text style={styles.infoValue}>$25.00</Text>
                    </View>
                </View>

                
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

           
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={handleModalClose}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalIcon}>
                            <Text style={styles.modalCheckmark}>✔️</Text>
                        </View>
                        <Text style={styles.modalTitle}>Booking Successful</Text>
                        <Text style={styles.modalText}>
                            Your booking has been confirmed. Driver will pick you up in 2 minutes.
                        </Text>
                        <View style={styles.modalButtons}>
                         
                                <CustomButton
                                title='Cancel'
                                onPress={handleModalClose} 
                                buttonStyle={styles.modalCancelButton}
                                textStyle={styles.modalCancelButtonText}
                                />
                            
                            
                                <CustomButton
                                title='Done'
                                 onPress={handleModalClose}
                                 onPress={() => navigation.navigate('menuScreen')}
                                 buttonStyle={styles.modalDoneButton}
                                 textStyle={styles.modalDoneButtonText}
                                />
                            
                        </View>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
};

export default DriverDetails;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        padding: 20,
        margin: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-between',
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    leftButton: {
        backgroundColor: Colors.white,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    driverText: {
        flex: 1,
        marginLeft: 10,
    },
    driverName: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.black,
    },
    rating: {
        color: Colors.black,
        fontSize: 14,
    },
    actions: {
        flexDirection: 'row',
    },
    messageButton: {
        backgroundColor: Colors.GoldenYellow,
        padding: 8,
        borderRadius: 5,
        marginRight: 5,
    },
    callButton: {
        backgroundColor: Colors.GoldenYellow,
        padding: 8,
        borderRadius: 5,
    },
    iconText: {
        fontSize: 16,
    },
    recommendations: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    recommendationImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
    },
    recommendationText: {
        marginLeft: 10,
        color: Colors.black,
        fontSize: 14,
    },
    rideInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    infoItem: {
        alignItems: 'center',
    },
    infoLabel: {
        color: Colors.black,
        fontSize: 12,
    },
    infoValue: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.black,
    },
    confirmButton: {
        backgroundColor: Colors.GoldenYellow,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        width: '80%',
    },
    modalIcon: {
        backgroundColor: Colors.GoldenYellow,
        padding: 10,
        borderRadius: 50,
        marginBottom: 10,
    },
    modalCheckmark: {
        fontSize: 30,
        color: Colors.white,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
        color :Colors.black
    },
    modalText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
        color :Colors.black
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalCancelButton: {
        padding: 10,
        width : '58%',
       borderWidth :1,
       backgroundColor :Colors.white
    },
    modalCancelButtonText: {
        color: Colors.black,
        fontWeight: 'bold',
    },
    modalDoneButton: {
        backgroundColor: Colors.white,
        padding: 10,
        
        width :'58%',
        borderWidth :1
        
    },
    modalDoneButtonText: {
        color: Colors.black,
        fontWeight: 'bold',
    },
});
