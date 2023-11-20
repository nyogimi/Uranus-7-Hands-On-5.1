import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, BackHandler, Image, Modal, TouchableOpacity, Text } from "react-native";
import Status from "./components/Status";
import MessageList from "./components/MessageList";
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage,
} from "./utils/MessageUtils";

const App = () => {
  const [messages, setMessages] = useState([
    createImageMessage("https://unsplash.it/300/300"),
    createTextMessage("World"),
    createTextMessage("Hello"),
    createLocationMessage({
      latitude: 37.78825,
      longitude: -122.4324,
    }),
  ]);

  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (fullscreenImage) {
        closeFullscreenImage();
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, [fullscreenImage]);

  const handlePressMessage = (message) => {
    const options = ['Enlarge', 'Delete', 'Cancel'];

    if (message.type === 'image') {
      options.splice(0, 0, 'Show Image');
    }

    Alert.alert(
      'Message Options',
      `Type: ${message.type}\nText: ${message.text}`,
      options.map((option, index) => ({
        text: option,
        onPress: () => handleOptionPress(option, message),
        style: index === options.length - 1 ? 'cancel' : 'default',
      }))
    );
  };

  const handleOptionPress = (option, message) => {
    switch (option) {
      case 'Enlarge':
        setFullscreenImage(message.uri);
        break;
      case 'Delete':
        handleDeleteImage(message);
        break;
      default:
        break;
    }
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const renderFullscreenImage = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={fullscreenImage !== null}
        onRequestClose={closeFullscreenImage}
      >
        <View style={styles.fullscreenContainer}>
          <Image
            style={styles.fullscreenImage}
            source={{ uri: fullscreenImage }}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.closeButton} onPress={closeFullscreenImage}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteImage({ uri: fullscreenImage })}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const handleDeleteImage = (item) => {
    const updatedMessages = messages.filter((message) => message !== item);
    setMessages(updatedMessages);
    closeFullscreenImage();
  };

  return (
    <View style={styles.container}>
      <Status />
      <MessageList
        messages={messages}
        onPressMessage={handlePressMessage}
        onDeleteImage={handleDeleteImage}
      />
      {renderFullscreenImage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-end", // Align all contents to the right
    justifyContent: "center",
  },
  fullscreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  fullscreenImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  deleteButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default App;
