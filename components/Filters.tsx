import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "../constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selected, setSelected] = useState(params.filter || "All");

  const handleCategory = (category: string) => {
    if (category == selected) {
      setSelected("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelected(category);
    router.setParams({ filter: category });
    return;
  };

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleCategory(item.category)}
          className={`flex flex-col items-start  px-4 py-2 rounded-full ${
            selected == item.category
              ? "bg-primary-300"
              : "bg-primary-100 border border-primary-200"
          }`}
        >
          <Text
            className={`text-sm ${
              selected === item.category
                ? "text-white font-rubik-bold mt-0.5"
                : "text-black-300 font-rubik"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
      contentContainerClassName="px-5 flex gap-4"
    />
  );
};

export default Filters;
