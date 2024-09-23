import React, { useRef } from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";

const handleHead = ({ tintColor }) => <Text style={{ color: tintColor }}>H1</Text>;

const Search = () => {
  const richText = useRef();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Text>Description:</Text>
          <RichEditor
            ref={richText}
            style={{ flex: 1 }}
            onChange={descriptionText => {
              console.log("descriptionText:", descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <RichToolbar
        editor={richText}
        actions={[actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1]}
        iconMap={{ [actions.heading1]: handleHead }}
      />
    </SafeAreaView>
  );
};

export default Search;
