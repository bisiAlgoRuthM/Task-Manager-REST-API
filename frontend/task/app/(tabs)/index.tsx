import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform, ScrollView, useColorScheme, FlatList} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function TaskScreen() {

  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://cjf4rwgz-8000.inc1.devtunnels.ms/');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);




  const announcePostStyles = StyleSheet.create({
    layout: {
      flexDirection: 'row',
      marginHorizontal: 5,
      marginVertical: 8,
    },
    content: {
      flex: 1,
      padding: 10,
    },
    Title: {
      color: isDarkMode ? "#fff" : '#000',
      fontSize: 15,
      paddingRight: 4,
      paddingVertical: 4,
      fontWeight: 'bold',
    },
    description: {
      color: isDarkMode ? "#fff" : '#000',
      fontSize: 15,
      paddingRight: 4,
      paddingVertical: 4,
    },
    timpestamp: {
      color: isDarkMode ? '#fff' : '#eee',
      fontSize: 10,
      bottom: -20
    }
  });

  return (
    <SafeAreaView>
      <View style={{marginTop: Platform.OS === 'ios' ? 50 : 50, marginBottom: Platform.OS === 'ios' ? 70 : 100}}>
        <View style={styles.container}>
          <Text style={[styles.subtitle, {fontWeight: 'bold', color: '#ffa500' }]}>WELCOME,</Text>
          <Text style={{fontWeight: 400, color: isDarkMode ? '#fff' : '#000', fontSize: 25 }}>These are your available Tasks</Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <>
              <View style={announcePostStyles.layout}>
                <View style={announcePostStyles.content}>
                  <Text style={announcePostStyles.Title}>{item.title}</Text>
                  <Text style={announcePostStyles.description} numberOfLines={2}>{item.description}</Text>
                  <Text style={announcePostStyles.timpestamp}>{item.due_date}</Text>
                </View>
              </View>
              <View style={{ width: '80%', height: 1, backgroundColor: 'black', alignSelf: 'left', marginVertical: 10 }} />
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
  container: {
    marginTop: Platform.OS === 'ios' ? 10 : 10,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 25
  },
  title: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 20
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    margin: Platform.OS === 'ios' ? 20 : 10,

  },
  cards: {
    height: 75,
    gap: 10,
    width: Platform.OS === 'ios' ? '98%' : '98%',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    elevation: 5,
  },
})

