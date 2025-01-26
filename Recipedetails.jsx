import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecipeDetails({ route }) {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{recipe.name}</Text>
      <Text style={styles.details}>Preparation Time: {recipe.prepTime} mins</Text>
      <Text style={styles.details}>Servings: {recipe.servings}</Text>
      <Text style={styles.details}>Calories: {recipe.calories}</Text>
      <Text style={styles.details}>Difficulty: {recipe.difficulty}</Text>
      <Text style={styles.heading}>Ingredients</Text>
      <Text>{recipe.ingredients.join(', ')}</Text>
      <Text style={styles.heading}>Instructions</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  name: { fontSize: 24, fontWeight: 'bold' },
  details: { marginTop: 8, fontSize: 16 },
  heading: { marginTop: 16, fontSize: 20, fontWeight: 'bold' },
});
