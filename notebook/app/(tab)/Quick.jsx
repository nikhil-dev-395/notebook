import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'

const Quick = () => {

  /*
   quick note

   add a quick note form here, with the following fields:
1. title
2. description
3. date and time
4. icons /  image / if possible then add diagrams here ...
5. save / delete / edit buttons

  
  */
  const [text, setText] = useState('untitled');
  const [Description, setDescription] = useState('description');
  const [height, setHeight] = useState();
  return (
    <ScreenWrapper bg="#fff">
      <StatusBar backgroundColor='white' />

      <ScrollView >

        <View style={styles.container}>

          <View style={styles.wrapper}>

            <TextInput
              style={[styles.Title,]}
              multiline
              value={text}
              onChangeText={setText}
              autoFocus={true}
              selectionColor="blue"
              onContentSizeChange={(event) => {
                // Dynamically adjust height based on content
                setHeight(event.nativeEvent.contentSize.height);
              }}
            />
            {/* this is description */}
            <TextInput
              style={[styles.Description,]}
              multiline

              value={Description}
              onChangeText={setDescription}
              onContentSizeChange={(event) => {
                // Dynamically adjust height based on content
                setHeight(event.nativeEvent.contentSize.height);
              }}
            />

          </View>

        </View>
      </ScrollView>

    </ScreenWrapper>
  )
}

export default Quick

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },
  Title: {
    borderBottomWidth: .5,
    borderBottomColor: '#000',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
    minHeight: 40,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',


  },
  Description: {
    fontSize: 17,
    padding: 20,
    backgroundColor: "#cbd5e1",
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',

  },

  wrapper: {
    width: '100%',
    // backgroundColor: "#cbd5e1",
    height: '100%',
  }

})