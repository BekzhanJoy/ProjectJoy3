export default function CategoryRecipes({ route }) {
  const { category } = route.params;
  const recipes = allRecipes.filter((r) => r.category === category);

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => <RecipeCard recipe={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
