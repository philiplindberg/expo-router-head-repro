import { Text, View } from 'react-native'
import Head from 'expo-router/head'

export default function Page2() {
  return <>
    <Head>
      <title>Page 2</title>
    </Head>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page 2</Text>
    </View>
  </>
}
