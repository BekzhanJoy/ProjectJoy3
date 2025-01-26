import { AntDesign } from '@expo/vector-icons';

function FavoriteIcon({ isFavorite, onPress }) {
  return (
    <AntDesign
      name={isFavorite ? 'heart' : 'hearto'}
      size={24}
      color="red"
      onPress={onPress}
    />
  );
}
