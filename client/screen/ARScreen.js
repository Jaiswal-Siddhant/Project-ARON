import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ViroARPlane, ViroUtils } from '@viro-community/react-viro';
import {
  ViroARScene,
  ViroText,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroScene,
  ViroAmbientLight,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
} from '@viro-community/react-viro';
import { serverUrl } from '../components/database/Database';


const InitialScene = (params) => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [position, setPosition] = useState([0, 0, -5]);
  const [scale, setScale] = useState([0.5, 0.5, 0.5]);

  // console.log(params.arSceneNavigator.viroAppProps.link);

  // const mat = ViroMaterials.createMaterials({
  //   skin: {
  //     lightingModel:
  //   }
  // })



  console.log(params.arSceneNavigator.viroAppProps.link);

  const rotateObj = (rotateState, rotationFactor, src) => {
    if (rotateState === 2) {
      console.log(rotation);
      let curRotate = [rotation[0], rotation[1] + rotationFactor * .5, rotation[2]];
      setRotation(curRotate);
    }
  }

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });

  return (
    // <ViroARScene>
    //   <ViroAmbientLight color="#ffff" />
    // </ViroARScene>
    <ViroARScene
    >
      <ViroAmbientLight color="#ffff" />
      {/* <ViroARPlane minHeight={0.1} minWidth={0.1} alignment={'Horizontal'} onAnchorFound={(arr) => {
        console.log(arr.position)
        let pos = arr.position;
        setPosition([pos[0], pos[1], pos[2]])
      }}
        onAnchorUpdated={(arr) => {
          let pos = arr.position;
          setPosition([pos[0], pos[1], pos[2]])
        }}
        onAnchorRemoved={() => { }}> */}
      <Viro3DObject
        source={{ uri: serverUrl + 'model/' + params.arSceneNavigator.viroAppProps.link }}
        position={position}
        scale={scale}
        rotation={rotation}
        type="GLB"
        onRotate={rotateObj}
        onPinch={(pinchState, scaleFactor, source) => {
          if (pinchState === 3) {
            setScale([scale[0] * -scaleFactor * .5, scale[1] * -scaleFactor * .5, scale[2] * -scaleFactor * .5])
          }
        }}
      // animation={{ name: 'rotate', loop: true, run: true }}
      />

      {/* </ViroARPlane> */}
    </ViroARScene >

  );
};

export default ({ route }) => {
  // console.log(route.params.link);
  const link = route.params.link

  // Do required things for opening playstore

  return (
    <View style={styles.main}>
      <Text>AR Screen</Text>
      <ViroARSceneNavigator
        initialScene={{ scene: InitialScene }}
        viroAppProps={{ link: link }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  controls: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 20,
    backgroundColor: '#9d9d9d',
    padding: 10,
    fontWeight: 'bold',
  },
});