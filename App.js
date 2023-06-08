import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const App = () => {
  const ShowPicker = () => {
    launchImageLibrary({}, res => {
      alert(res.assets[0].uri);
      const formData = new FormData();
      formData.append('file', res.assets[0].uri);
      console.log(res);
    });

    //image 등의 파일을 http 통신으로 전송시 반드시 formdata 처리를 해주어야함
    const UploadImage = async () => {
      const img = {
        uri: '',
        type: '',
        name: '',
      };
      await launchImageLibrary({}, res => {
        if (res.didCancel) {
          console.log('이미지 픽커 취소');
        } else if (res.errorCode) {
          console.log('이미지 피커 에러', res.errorCode);
        } else if (res.assets) {
          //정상적으로 사진을 반환 받았을때
          console.log('이미지 피커 응답', res);
          img.name = res.assets[0].fileName;
          img.type = res.asset[0].type;
          img.uri =
            Platform.OS === 'android'
              ? res.assets[0].uri
              : res.assets[0].uri.replace('file://', '');
        }

        const formData = new FormData();
        formData.append('ticketImg', img);

        const headers = {
          'Content-Type':
            'multipart/form-data; boundary=someArbitraryUniqueString',
        };
      });
    };
  };

  return (
    <View style={styles.Container}>
      <View style={{flex: 1, padding: 16}}>
        <Button title="이미지 업로드 테스트" onPress={ShowPicker}></Button>
      </View>
      <View style={styles.Box1}>
        <Text>카테고리</Text>
      </View>
      <View style={styles.Box2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    color: 'salmon',
  },
  Box1: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  Box2: {
    flex: 3,
    backgroundColor: 'salmon',
  },
});

export default App;
