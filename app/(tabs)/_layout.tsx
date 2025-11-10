import Home from "@/app/(tabs)/index";
import CustomBottomNav, { NAV_ITEMS } from "@/components/CustomBottomNav";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  const [activeTab, setIsActiveTab] = useState("home");

  const handleTabPress = (id: string) => {
    setIsActiveTab(id);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "meals":
        return (
          <View>
            <Text>Meals</Text>
          </View>
        );
      case "profile":
        return (
          <View>
            <Text>Profile</Text>
          </View>
        );
      case "settings":
        return (
          <View>
            <Text>Settings</Text>
          </View>
        );
      default:
        return (
          <View>
            <Text>Home</Text>
          </View>
        );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>

      <CustomBottomNav
        items={NAV_ITEMS}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        backgroundColor="white"
        activeBackgroundColor="#f1e3ec"
        iconColor="#666"
        activeIconColor="#333"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1e3ec",
  },
  content: {
    flex: 1,
  },
});
