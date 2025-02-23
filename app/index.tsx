import { Button, Text, View } from "react-native";

export default function Index() {
  const isNewUser = true;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      { isNewUser &&
        <>
          <Text>Welcome to Mini Spendy</Text>
          <Text>A minimalistic expense tracker iOS application designed to help users manage their spending effortlessly.</Text>
          <Button title="Get Started" onPress={() => {}} />
        </>
      }
      { !isNewUser &&
        <>
          <Text>Welcome back to Mini Spendy!</Text>
          <Text>A minimalistic expense tracker iOS application designed to help users manage their spending effortlessly.</Text>
          <Button title="Get Started" onPress={() => {}} />
        </>
      }
    </View>
  );
}
