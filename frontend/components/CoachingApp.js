import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const categories = [
  { id: 1, name: 'Fitness' },
  { id: 2, name: 'Meditation' },
  { id: 3, name: 'Yoga' },
];

const sessions = [
  { id: 1, name: 'Full Body Workout', category: 'Fitness' },
  { id: 2, name: 'Meditation for Relaxation', category: 'Meditation' },
  { id: 3, name: 'Vinyasa Yoga Flow', category: 'Yoga' },
];

const CoachingApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        borderRadius: 5,
        backgroundColor:
          selectedCategory?.name === item.name ? 'blue' : 'gray',
        marginBottom: 10,
      }}
      onPress={() => handleCategorySelect(item)}>
      <Text style={{ color: '#fff' }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSessionItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
      <Text>{item.category}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginBottom: 20 }}
      />
      {selectedCategory && (
        <>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
            Sessions in {selectedCategory.name}
          </Text>
          <FlatList
            data={sessions.filter((item) => item.category === selectedCategory.name)}
            renderItem={renderSessionItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

export default CoachingApp;
