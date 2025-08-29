import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

type ScreenWrapperProps = {
    children: ReactNode
    style?: StyleProp<ViewStyle>
}

export default function ScreenWrapper({children, style}:ScreenWrapperProps) {
    return (
        <LinearGradient
            colors={['#fef9ff', '#fffeff']}
            locations={[1, 0]}
            style={{ flex: 1 }}>
            <SafeAreaView style={[{flex: 1}, style]} > 
                {children}
            </SafeAreaView>
        </LinearGradient>
  )
}