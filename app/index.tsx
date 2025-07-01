import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <View style={styles.avatarShadow}>
          <Image
            source={require('../public/_MG_0124.jpg')}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>ถิรวัฒน์ โชติธนกิจไพศาล</Text>
        <Text style={styles.info}>รหัสนักศึกษา: 653450090-6</Text>
        <Text style={styles.info}>สาขา: วิทยาการคอมพิวเตอร์</Text>
        <Text style={styles.info}>มหาวิทยาลัย: มหาวิทยาลัยข่อนแก่นวิทยาเขตหนองคาย</Text>
        <View style={styles.skillSection}>
          <Text style={styles.skillTitle}>ความสามารถ</Text>
          <View style={styles.skillList}>
            <Text style={styles.skillItem}>• React</Text>
            <Text style={styles.skillItem}>• Angular</Text>
            <Text style={styles.skillItem}>• JavaScript</Text>
            <Text style={styles.skillItem}>• TypeScript</Text>
          </View>
        </View>
      </View>
      <View style={styles.gradientCircle1} />
      <View style={styles.gradientCircle2} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 340,
    backgroundColor: '#fff',
    borderRadius: 28,
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
    shadowColor: '#4f8cff',
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
    zIndex: 2,
  },
  avatarShadow: {
    shadowColor: '#4f8cff',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 16,
    borderRadius: 70,
    marginBottom: 18,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 10,
    letterSpacing: 0.5,
    textShadowColor: '#b3c6ff',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  info: {
    fontSize: 16,
    color: '#4f4f4f',
    marginBottom: 2,
    textAlign: 'center',
    opacity: 0.85,
  },
  skillSection: {
    marginTop: 22,
    width: '100%',
    backgroundColor: '#f7f8fa',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#4f8cff',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'flex-start',
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4f8cff',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  skillList: {
    marginLeft: 8,
  },
  skillItem: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  gradientCircle1: {
    position: 'absolute',
    top: -60,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#b3c6ff',
    opacity: 0.35,
    zIndex: 0,
  },
  gradientCircle2: {
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#4f8cff',
    opacity: 0.18,
    zIndex: 0,
  },
});
