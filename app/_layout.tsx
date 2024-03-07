import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Provider } from '@fruits-chain/react-native-xiaoshu'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, router } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import customTheme from '@/core/styleSheet/component'

export { ErrorBoundary } from 'expo-router'

// eslint-disable-next-line react-refresh/only-export-components
export const unstable_settings = {
  initialRouteName: '(resume)/index',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // eslint-disable-next-line ts/no-require-imports
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error)
      throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
      router.push('/(resume)/detail')
      router.setParams({
        type: 'recruit',
      })
    }
  }, [loaded])

  if (!loaded)
    return null

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Provider theme={customTheme}>
      <ThemeProvider value={DefaultTheme}>
        <SafeAreaProvider>
          <Stack screenOptions={{ contentStyle: { backgroundColor: '#fff' }, headerShadowVisible: false, headerTitleStyle: { fontWeight: '700' }, headerBackTitleVisible: false, headerTitleAlign: 'center' }}>
            <Stack.Screen name="(resume)" options={{ headerShown: false }} />
            <Stack.Screen name="(recruit)" options={{ headerShown: false }} />
            <Stack.Screen name="user-change" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/guide" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/(password)/reset-guide" />
            <Stack.Screen name="(auth)/(password)/verification-code" />
            <Stack.Screen name="(search)/search-result" options={{ headerShown: false }} />
            <Stack.Screen name="(search)/filter-options" options={{ headerShown: false, presentation: 'modal' }} />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  )
}
