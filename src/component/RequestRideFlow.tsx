import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HrLine from './hrLine';
import Colors from './Colors';
import CustomButton from './Button';
import { useNavigation } from '@react-navigation/native';


interface RequestRideFlowProps {
  initialStep?: number;
  stepContents?: {
    image: any;
    title: string;
    description: string;
  }[];
}

const RequestRideFlow: React.FC<RequestRideFlowProps> = ({
  initialStep = 1,
  stepContents = [
    {
      image: require('../../Asset/Image/Page1.png'),
      title: 'Request Ride',
      description: 'Request a ride, get picked up by a\nnearby community driver',
    },
    {
      image: require('../../Asset/Image/Page2.png'),
      title: 'Confirm Your Driver',
      description: 'Huge drivers network helps you find\ncomfortable, safe and cheap ride',
    },
    {
      image: require('../../Asset/Image/Page3.png'),
      title: 'Track Your Ride',
      description: 'Know your driver in advance and be\nable to view current location in real\ntime on the map',
    },
  ],
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigation = useNavigation();

  const content = stepContents[currentStep - 1];

  const handleNextStep = () => {
    if (currentStep < stepContents.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleNextStep}>
        <View>
          <Image source={content?.image} style={styles.requestImage} />
          <View style={styles.textContainer}>
            <Text style={styles.requestRideText}>{content?.title}</Text>
            <Text style={styles.paraText}>{content?.description}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {currentStep === stepContents.length && (
        <View>
          <CustomButton
            title="GET STARTED!"
            onPress={() => navigation.navigate('GpsScreen')}
            buttonStyle={styles.startButton}
            textStyle={styles.startButtonText}
          />
        </View>
      )}

      <View style={styles.lineCenter}>
        <View style={styles.lineContainer}>
          {stepContents.map((_, index) => (
            <HrLine
              key={index}
              width={40}
              height={10}
              color={currentStep === index + 1 ? Colors.GoldenYellow : Colors.LavenderGray}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default RequestRideFlow;

const styles = StyleSheet.create({
  requestImage: {
    width: 278,
    height: 278,
  },
  requestRideText: {
    fontWeight: '400',
    fontSize: 30,
    color: Colors.black,
    marginTop: 30,
    marginBottom: 10,
  },
  paraText: {
    fontWeight: '300',
    fontSize: 17,
    color: Colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    marginTop: 70,
  },
  lineCenter: {
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: Colors.GoldenYellow,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  startButtonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});
