import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { loadAsync } from 'expo-font';
import {
  Text,
  Provider,
  DefaultTheme,
  BuiltInFonts,
  Toast,
  Slider,
  Collapsible,
} from 'exoflex';

export default function App() {
  let [isFontLoaded, setFontLoaded] = useState(false);
  let [visible, setVisible] = useState(false);

  useEffect(() => {
    loadAsync(BuiltInFonts).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!isFontLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider theme={DefaultTheme}>
      <View style={styles.container}>
        <Text
          onPress={() =>
            Toast.showToast({
              message: 'Warning!',
              duration: 1000,
              mode: 'error',
            })
          }
          weight="700"
        >
          Exoflex
        </Text>
        <Collapsible title="Press Me">
          <Text fontStyle="italic" onPress={() => setVisible(!visible)}>
            Hello!
          </Text>
        </Collapsible>
        <Slider values={[3, 9]} />
      </View>
      <Toast visible={visible} mode="success">
        Info Messages
      </Toast>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
