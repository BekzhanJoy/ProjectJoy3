import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts',
  'Vegan', 'Keto', 'Low Carb', 'Gluten-Free', 'Quick & Easy',
];

export default function MainFeed({ navigation }) {
  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryRecipes', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipe Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress(item)}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  category: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginRight: 8,
  },
  categoryText: { fontSize: 16 },
});
