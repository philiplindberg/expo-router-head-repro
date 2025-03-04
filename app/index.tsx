import { Text, View } from 'react-native'
import Head from 'expo-router/head'

export default function Index() {
  return <>
    <Head>
      <title>Index</title>
    </Head>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index</Text>
    </View>
  </>
}
