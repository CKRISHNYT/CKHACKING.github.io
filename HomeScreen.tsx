import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Image, 
  Animated, 
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, FontAwesome5, Ionicons, Feather } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function AboutUsScreen() {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [moveAnim] = useState(new Animated.Value(50));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleJoinUs = () => {
    Linking.openURL('https://t.me/CKHACKING');
  };

  const toggleServices = () => {
    setServicesExpanded(!servicesExpanded);
  };

  const ServiceCard = ({ icon, title, description, color }) => (
    <View style={styles.serviceCard}>
      <LinearGradient 
        colors={[color, '#000']} 
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }} 
        style={styles.serviceIconContainer}
      >
        {icon}
      </LinearGradient>
      <View style={styles.serviceTextContainer}>
        <Text style={styles.serviceTitle}>{title}</Text>
        <Text style={styles.serviceDescription}>{description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header Section */}
      <LinearGradient
        colors={['#1a1a2e', '#121212']}
        style={styles.headerContainer}
      >
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ translateY: moveAnim }] }]}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>CK</Text>
          </View>
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: moveAnim }] }}>
          <Text style={styles.headerTitle}>CKHACKING™ 🔥</Text>
          <Text style={styles.headerTagline}>Yahan knowledge free hai aur system ko samajhne wale hi future banate hain.</Text>
        </Animated.View>
      </LinearGradient>

      {/* Services Section */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={toggleServices} style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <Ionicons 
            name={servicesExpanded ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#16a085" 
          />
        </TouchableOpacity>
        
        {servicesExpanded && (
          <View style={styles.servicesContainer}>
            <ServiceCard 
              icon={<FontAwesome5 name="robot" size={24} color="white" />}
              title="Telegram Bots"
              description="Powerful automated solutions for your Telegram needs"
              color="#3498db"
            />
            <ServiceCard 
              icon={<MaterialCommunityIcons name="security" size={24} color="white" />}
              title="Ethical Hacking Tips"
              description="Learn security techniques the right way"
              color="#e74c3c"
            />
            <ServiceCard 
              icon={<MaterialCommunityIcons name="pi" size={24} color="white" />}
              title="Pi Network Updates"
              description="Stay informed about Pi cryptocurrency developments"
              color="#9b59b6"
            />
            <ServiceCard 
              icon={<FontAwesome5 name="money-bill-wave" size={24} color="white" />}
              title="Earning Tricks"
              description="Smart methods to maximize your online earnings"
              color="#2ecc71"
            />
            <ServiceCard 
              icon={<MaterialCommunityIcons name="robot-excited" size={24} color="white" />}
              title="Auto Reaction Bots"
              description="Automated engagement for your social platforms"
              color="#f39c12"
            />
          </View>
        )}
      </View>

      {/* Mission and Vision Section */}
      <View style={styles.missionContainer}>
        <View style={styles.missionCard}>
          <View style={styles.missionIconContainer}>
            <Feather name="eye" size={28} color="white" />
          </View>
          <Text style={styles.missionTitle}>Vision</Text>
          <Text style={styles.missionText}>Knowledge + Power = Future</Text>
        </View>
        
        <View style={styles.missionCard}>
          <View style={styles.missionIconContainer}>
            <FontAwesome5 name="flag" size={28} color="white" />
          </View>
          <Text style={styles.missionTitle}>Mission</Text>
          <Text style={styles.missionText}>System ko samajho, System ko hila do 😏</Text>
        </View>
      </View>

      {/* Binary Animation Background */}
      <View style={styles.binaryBackground}>
        {Array(15).fill(0).map((_, i) => (
          <Text key={i} style={[
            styles.binaryText, 
            { 
              top: Math.random() * 400, 
              left: Math.random() * SCREEN_WIDTH,
              opacity: 0.2 + (Math.random() * 0.3)
            }
          ]}>
            {Math.random() > 0.5 ? '1' : '0'}
          </Text>
        ))}
      </View>

      {/* Call to Action */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity 
          style={styles.joinButton}
          onPress={handleJoinUs}
        >
          <LinearGradient
            colors={['#16a085', '#1abc9c']}
            style={styles.gradientButton}
          >
            <Text style={styles.joinButtonText}>👉 Join Us: @CKHACKING</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.copyright}>© 2025 CKHACKING™</Text>
        <Text style={styles.footerTag}>System ko samajho, System ko hila do</Text>
      </View>

      {/* Matrix-like Animation for Background */}
      <Image 
        source={{ uri: 'https://api.a0.dev/assets/image?text=digital%20matrix%20pattern%20background%20dark%20green%20black&aspect=1:1&seed=5' }}
        style={styles.backgroundImage}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },    contentContainer: {
      paddingBottom: 55,
    },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.08,
    zIndex: -1,
  },
  headerContainer: {
    padding: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoContainer: {
    marginBottom: 15,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#16a085',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#16a085',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#333',
  },
  logoText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerTagline: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  sectionContainer: {
    margin: 15,
    backgroundColor: 'rgba(30, 30, 40, 0.7)',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#16a085',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(22, 160, 133, 0.3)',
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16a085',
  },
  servicesContainer: {
    marginTop: 10,
  },
  serviceCard: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'rgba(20, 20, 30, 0.7)',
    borderRadius: 10,
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#16a085',
  },
  serviceIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceTextContainer: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#aaa',
  },
  missionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  missionCard: {
    backgroundColor: 'rgba(26, 26, 46, 0.8)',
    width: '48%',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#16a085',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(22, 160, 133, 0.3)',
  },
  missionIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#16a085',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a085',
    marginBottom: 8,
  },
  missionText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  ctaContainer: {
    alignItems: 'center',
    marginVertical: 25,
    paddingHorizontal: 15,
  },
  joinButton: {
    width: '100%',
    borderRadius: 50,
    overflow: 'hidden',
    shadowColor: '#16a085',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  gradientButton: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 50,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  copyright: {
    color: '#999',
    fontSize: 14,
    marginBottom: 5,
  },
  footerTag: {
    color: '#16a085',
    fontSize: 12,
    fontStyle: 'italic',
  },
  binaryBackground: {
    position: 'absolute',
    width: '100%',
    height: 400,
    zIndex: -1,
    overflow: 'hidden',
  },
  binaryText: {
    position: 'absolute',
    fontSize: 18,
    color: '#16a085',
    fontFamily: 'monospace',
  },
});