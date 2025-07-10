import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import { AboutStyles, CommonStyles } from "./styles";

const About = () => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        AboutStyles.container,
        { backgroundColor: colors.background, flex: 1 },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[AboutStyles.title, { color: colors.text }]}>
          About Page
        </Text>
        <Text
          style={[AboutStyles.description, { color: colors.textSecondary }]}
        >
          This is a profile app built with React Native and Expo Router.
        </Text>
        <Text
          style={[AboutStyles.description, { color: colors.textSecondary }]}
        >
          It features a theme toggle functionality that allows switching between
          light and dark modes.
        </Text>
      </View>

      <View style={{ paddingBottom: 30 }}>
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
    </View>
  );
};

export default About;
