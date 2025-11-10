import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = ({ onNavigate }: { onNavigate?: (tab: string) => void }) => {
  const [selectedView, setSelectedView] = useState("Daily");
  const router = useRouter();
  // create a metric card component
  const MetricCard = ({
    icon,
    color,
    title,
    value,
    target,
  }: {
    icon: string;
    color: string;
    title: string;
    value: number;
    target: number;
  }) => {
    const percentage = target > 0 ? Math.min((value / target) * 100, 100) : 0;

    const isOverTarget = value > target;

    return (
      <View>
        <View>
          <Ionicons name={icon as any} size={20} color="white" />
        </View>
        <Text>{title}</Text>
        <Text>
          {value}/{target}
          {title === "Calories" ? "kcal" : "g"}
        </Text>

        <View>
          <View
            style={{
              width: `${percentage}%`,
              height: 10,
              backgroundColor: color,
            }}
          />
        </View>

        <Text>{percentage.toFixed(0)}%</Text>
      </View>
    );
  };

  const MealCard = ({ meal }: { meal: any }) => (
    <View style={styles.mealCard}>
      <View style={styles.mealHeader}>
        <View>
          <Text style={styles.mealTitle}>{meal.title}</Text>
          <Text style={styles.mealTime}>({meal.time})</Text>
        </View>
        {meal.hasFood ? (
          <Ionicons name="checkmark" size={20} color="#4CAF50" />
        ) : (
          <Ionicons name="add" size={20} color="#999" />
        )}
      </View>
      {meal.food && <Text style={styles.mealFood}>{meal.food.name}</Text>}
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {/* header */}
        <View>
          <View>
            <Ionicons name="time-outline" size={16} color="#666" />
            <Text>Novermber, 10 2025</Text>
            <Ionicons name="chevron-down" size={16} color="#666" />
          </View>
          <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* greeting */}
        <View>
          <Text>Greeting there,</Text>
          <Text>Are you Eating Healthy?</Text>
        </View>

        {/* metrics */}

        <View>
          {true ? (
            <>
              <MetricCard
                icon="flame"
                color="#ffc107"
                title="Calories"
                value={500}
                target={2100}
              />
            </>
          ) : (
            <View>
              <Ionicons name="person-add" size={48} color={"#999"} />
              <Text>Complete your profile</Text>
              <Text>
                Set up your personal information to get personalized nutrition
                target and AI recommendations.
              </Text>
              <TouchableOpacity onPress={() => onNavigate?.("meals")}>
                <Text>Go to meals and setup</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1e3ec",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dateText: {
    fontSize: 16,
    color: "#666",
  },
  greetingContainer: {
    paddingHorizontal: 24,
    marginBottom: 36,
  },
  greetingText: {
    fontSize: 26,
    color: "#999",
    fontWeight: "300",
  },
  questionText: {
    fontSize: 32,
    color: "#333",
    fontWeight: "bold",
    marginTop: 8,
  },
  metricsContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 36,
  },
  metricCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    minHeight: 120,
  },
  metricIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  metricTitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  metricValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: "600",
  },
  toggleContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 24,
    backgroundColor: "white",
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 6,
  },
  toggleButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  toggleButtonActive: {
    backgroundColor: "#f1e3ec",
  },
  toggleText: {
    fontSize: 16,
    color: "#999",
  },
  toggleTextActive: {
    color: "#333",
    fontWeight: "600",
  },
  mealsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  mealRow: {
    flexDirection: "row",
    gap: 16,
  },
  mealCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    minHeight: 120,
  },
  mealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  mealTime: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  mealFood: {
    fontSize: 16,
    color: "#666",
    marginTop: 12,
  },
  setupPrompt: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f1e3ec",
    borderRadius: 20,
    marginTop: 20,
  },
  setupPromptTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 10,
  },
  setupPromptText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  setupButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#666",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  setupButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "bold",
  },
});
