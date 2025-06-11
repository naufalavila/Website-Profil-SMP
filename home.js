import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Theme Configuration
const theme = {
  colors: {
    primary: "#2c8a4a",
    primaryDark: "#1e5c32",
    secondary: "#f8a51b",
    white: "#ffffff",
    lightGray: "#f5f5f5",
    mediumGray: "#dddddd",
    darkGray: "#555555",
    text: "#333333",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  typography: {
    header: 24,
    title: 20,
    subtitle: 16,
    body: 14,
    caption: 12,
  },
};

// Reusable Components
const FeatureCard = ({ title, description, icon }) => (
  <TouchableOpacity style={styles.featureCard}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </TouchableOpacity>
);

const NewsCard = ({ title, date, excerpt }) => (
  <View style={styles.newsCard}>
    <Text style={styles.newsDate}>{date}</Text>
    <Text style={styles.newsTitle}>{title}</Text>
    <Text style={styles.newsExcerpt}>{excerpt}</Text>
    <TouchableOpacity style={styles.readMoreButton}>
      <Text style={styles.readMoreText}>Read More</Text>
    </TouchableOpacity>
  </View>
);

// Screens
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>SELAMAT DATANG</Text>
        <Text style={styles.headerSubtitle}>DI SMP PLUS ARROUDHOH</Text>
        <Text style={styles.tagline}>
          "Mendidik dengan hati, membentuk generasi yang berakhlak dan berilmu."
        </Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.quickActionButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.quickActionText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quickActionButton}
          onPress={() => navigation.navigate("Academics")}
        >
          <Text style={styles.quickActionText}>Academics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quickActionButton}
          onPress={() => Linking.openURL("tel:+123456789")}
        >
          <Text style={styles.quickActionText}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Why Choose Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kenapa harus Spardhoti?</Text>
        <Text style={styles.sectionSubtitle}>
          Alasan mengapa SMP Plus Arroudhoh menjadi pilihan
        </Text>

        <View style={styles.divider} />

        <FeatureCard
          icon="🏫"
          title="Pendidikan Berbasis Pesantren"
          description="Integrasi kurikulum nasional dengan nilai-nilai pesantren untuk pendidikan holistik"
        />

        <FeatureCard
          icon="👨‍🏫"
          title="Guru Berpengalaman"
          description="Tenaga pendidik profesional dengan pengalaman mengajar di lingkungan pesantren"
        />

        <FeatureCard
          icon="📚"
          title="Kurikulum Unggulan"
          description="Kombinasi kurikulum Diknas dan kurikulum khas pesantren"
        />
      </View>

      {/* News Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Berita Terkini</Text>
        <View style={styles.divider} />

        <NewsCard
          date="15 Juni 2023"
          title="Penerimaan Siswa Baru Tahun Ajaran 2023/2024"
          excerpt="Pendaftaran dibuka mulai 1 Juli 2023 dengan kuota terbatas"
        />

        <NewsCard
          date="10 Juni 2023"
          title="Kegiatan Pesantren Kilat Ramadhan"
          excerpt="Program khusus selama bulan Ramadhan untuk pembentukan karakter"
        />
      </View>

      {/* Gallery Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Galeri Sekolah</Text>
        <View style={styles.divider} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.galleryItem}>
            <Image
              source={require("./assets/gallery1.jpg")}
              style={styles.galleryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryItem}>
            <Image
              source={require("./assets/gallery2.jpg")}
              style={styles.galleryImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.galleryItem}>
            <Image
              source={require("./assets/gallery3.jpg")}
              style={styles.galleryImage}
            />
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={styles.seeMoreButton}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Text style={styles.seeMoreText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Profile Screen</Text>
  </View>
);

const AcademicsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Academics Screen</Text>
  </View>
);

const GalleryScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Gallery Screen</Text>
  </View>
);

// Navigation Setup
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "SMP Plus Arroudhoh" }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Academics" component={AcademicsScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  );
};

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  header: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xlarge,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: theme.spacing.medium,
  },
  headerTitle: {
    fontSize: theme.typography.header,
    fontWeight: "bold",
    color: theme.colors.white,
    marginBottom: theme.spacing.small,
  },
  headerSubtitle: {
    fontSize: theme.typography.title,
    color: theme.colors.white,
    fontWeight: "600",
  },
  tagline: {
    fontSize: theme.typography.subtitle,
    color: theme.colors.white,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: theme.spacing.medium,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.lightGray,
  },
  quickActionButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
    borderRadius: 20,
  },
  quickActionText: {
    color: theme.colors.white,
    fontWeight: "600",
  },
  section: {
    padding: theme.spacing.large,
  },
  sectionTitle: {
    fontSize: theme.typography.title,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: theme.spacing.small,
  },
  sectionSubtitle: {
    fontSize: theme.typography.subtitle,
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.medium,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.mediumGray,
    marginVertical: theme.spacing.medium,
  },
  featureCard: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 8,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: theme.spacing.small,
  },
  featureTitle: {
    fontSize: theme.typography.subtitle,
    fontWeight: "600",
    color: theme.colors.primary,
    marginBottom: theme.spacing.small,
  },
  featureDescription: {
    fontSize: theme.typography.body,
    color: theme.colors.text,
    lineHeight: 20,
  },
  newsCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    padding: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
    borderWidth: 1,
    borderColor: theme.colors.mediumGray,
  },
  newsDate: {
    fontSize: theme.typography.caption,
    color: theme.colors.darkGray,
    marginBottom: theme.spacing.small,
  },
  newsTitle: {
    fontSize: theme.typography.subtitle,
    fontWeight: "600",
    color: theme.colors.primary,
    marginBottom: theme.spacing.small,
  },
  newsExcerpt: {
    fontSize: theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.medium,
  },
  readMoreButton: {
    alignSelf: "flex-end",
  },
  readMoreText: {
    color: theme.colors.primary,
    fontWeight: "600",
  },
  galleryItem: {
    width: 150,
    height: 150,
    marginRight: theme.spacing.medium,
    borderRadius: 8,
    overflow: "hidden",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
  },
  seeMoreButton: {
    alignSelf: "center",
    marginTop: theme.spacing.medium,
  },
  seeMoreText: {
    color: theme.colors.primary,
    fontWeight: "600",
  },
});
