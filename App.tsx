import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginPage from "./src/feature/Auth/Login/page";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <>
          <StatusBar style="auto" />
          <LoginPage />
        </>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
