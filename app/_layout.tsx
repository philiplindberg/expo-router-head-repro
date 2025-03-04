import { Link, Stack, LinkProps, usePathname } from "expo-router"
import { StyleSheet, View } from 'react-native'

export default function RootLayout() {
  return <>
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <NavItem href='/'>Index</NavItem>
      <NavItem href='/page1'>Page 1</NavItem>
      <NavItem href='/page2'>Page 2</NavItem>
    </View>
    <Stack screenOptions={{ headerShown: false }} />
  </>
}

function NavItem(props: LinkProps) {
  const pathname = usePathname()

  const styles = StyleSheet.create({
    link: {
      color: pathname === props.href ? 'blue' : 'black',
      padding: 10,
    },
  })

  return (
    <Link {...props} style={styles.link} />
  )
}
