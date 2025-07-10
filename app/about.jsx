import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { AboutStyles, CommonStyles } from "./styles";

const About = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[AboutStyles.container, { backgroundColor: colors.background }]}
    >
      {/* Theme Toggle */}
      <View style={AboutStyles.themeToggleContainer}>
        <ThemeToggle />
      </View>

      <Text style={[AboutStyles.title, { color: colors.text }]}>
        About Page
      </Text>
      <Text style={[AboutStyles.description, { color: colors.textSecondary }]}>
        This is a profile app built with React Native and Expo Router.
      </Text>
      <Text style={[AboutStyles.description, { color: colors.textSecondary }]}>
        It features a theme toggle functionality that allows switching between
        light and dark modes.
      </Text>

      {/* Back to Profile Button */}
      <Link
        href="/"
        style={[
          CommonStyles.button,
          { backgroundColor: colors.primary, shadowColor: colors.primary },
        ]}
      >
        <Text style={CommonStyles.buttonText}>Back to Profile</Text>
      </Link>
    </View>
  );
};

export default About;
