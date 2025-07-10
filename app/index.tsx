import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { ProfileStyles, CommonStyles } from "./styles";

const skills = [
  "React",
  "Angular",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Node.js",
];

const ProfileCard = ({ icon, title, children, colors }) => (
  <View
    style={[
      ProfileStyles.infoCard,
      {
        backgroundColor: colors.cardBackground,
        borderColor: colors.cardBorder,
        shadowColor: colors.cardShadow,
      },
    ]}
  >
    <View style={ProfileStyles.cardHeader}>
      <View
        style={[
          ProfileStyles.iconContainer,
          { backgroundColor: colors.iconBackground },
        ]}
      >
        <Text style={ProfileStyles.icon}>{icon}</Text>
      </View>
      <Text style={[ProfileStyles.cardTitle, { color: colors.text }]}>
        {title}
      </Text>
    </View>
    {children}
  </View>
);

const SkillBadge = ({ skill, colors }) => (
  <View
    style={[ProfileStyles.skillBadge, { backgroundColor: colors.skillBadge }]}
  >
    <Text style={[ProfileStyles.skillText, { color: colors.skillText }]}>
      {skill}
    </Text>
  </View>
);

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[ProfileStyles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={ProfileStyles.contentContainer}
    >
      <View style={ProfileStyles.header}>
        <View
          style={[
            ProfileStyles.headerGradient,
            { backgroundColor: colors.headerBackground },
          ]}
        >
          <View style={ProfileStyles.profileSection}>
            <View style={ProfileStyles.avatarContainer}>
              <Image
                source={require("../assets/images/_MG_0124.jpg")}
                style={ProfileStyles.avatar}
              />
              <View
                style={[
                  ProfileStyles.statusDot,
                  { backgroundColor: colors.statusOnline },
                ]}
              />
            </View>
            <Text style={[ProfileStyles.name, { color: "#ffffff" }]}>
              ถิรวัฒน์ โชติธนกิจไพศาล
            </Text>
            <Text style={[ProfileStyles.subtitle, { color: "#ffffff" }]}>
              Computer Science Student
            </Text>
          </View>
          <View style={ProfileStyles.themeToggleContainer}>
            <ThemeToggle />
          </View>
        </View>
      </View>

      <View style={ProfileStyles.cardsContainer}>
        <ProfileCard icon="🎓" title="ข้อมูลการศึกษา" colors={colors}>
          <View style={ProfileStyles.cardContent}>
            <Text
              style={[ProfileStyles.infoText, { color: colors.textSecondary }]}
            >
              รหัสนักศึกษา: 653450090-6
            </Text>
            <Text
              style={[ProfileStyles.infoText, { color: colors.textSecondary }]}
            >
              สาขา: วิทยาการคอมพิวเตอร์
            </Text>
            <Text
              style={[ProfileStyles.infoText, { color: colors.textSecondary }]}
            >
              มหาวิทยาลัยข่อนแก่นวิทยาเขตหนองคาย
            </Text>
          </View>
        </ProfileCard>

        <ProfileCard icon="⚡" title="ความสามารถ" colors={colors}>
          <View style={ProfileStyles.skillGrid}>
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} colors={colors} />
            ))}
          </View>
        </ProfileCard>

        <Link
          href="/about"
          style={[
            CommonStyles.button,
            { backgroundColor: colors.primary, shadowColor: colors.primary },
          ]}
        >
          <Text style={CommonStyles.buttonText}>Go to About Page</Text>
        </Link>
      </View>

      <View
        style={[
          ProfileStyles.floatingElement1,
          { backgroundColor: colors.floatingElement1 },
        ]}
      />
      <View
        style={[
          ProfileStyles.floatingElement2,
          { backgroundColor: colors.floatingElement2 },
        ]}
      />
      <View
        style={[
          ProfileStyles.floatingElement3,
          { backgroundColor: colors.floatingElement3 },
        ]}
      />
    </ScrollView>
  );
}
