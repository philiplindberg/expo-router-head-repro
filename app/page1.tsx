import { Text, View } from 'react-native'
import Head from 'expo-router/head'

export default function Page1() {
  return <>
    <Head>
      <title>Page 1</title>
    </Head>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 1</Text>
    </View>
  </>
}
