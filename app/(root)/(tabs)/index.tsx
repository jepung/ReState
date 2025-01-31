import { Link } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../../constants/images";
import { useGlobalContext } from "../../../lib/global-provider";
import icons from "../../../constants/icons";
import Search from "../../../components/Search";
import { Card, FeaturedCard } from "../../../components/Cards";
import Filters from "../../../components/Filters";
import { cards, featuredCards } from "../../../constants/data";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={cards}
        renderItem={({ item }) => <Card onPress={() => {}} />}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="">
            <View className="px-5">
              <View className="flex flex-row items-center justify-between mt-5">
                <View className="flex flex-row items-center">
                  <Image
                    source={{ uri: user?.avatar }}
                    className="size-12 rounded-full"
                  />
                  <View className="flex-col items-start ml-2 justify-center">
                    <Text className="text-xs font-rubik text-black-100">
                      Good Morning
                    </Text>
                    <Text className="text-base font-rubik-medium text-black-300">
                      {user?.name}
                    </Text>
                  </View>
                </View>
                <Image source={icons.bell} className="size-6" />
              </View>
              <Search />
              <View className="mt-5">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-rubik-bold text-xl text-black-300">
                    Featured
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-base font-rubik-bold text-primary-300">
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <FlatList
              data={featuredCards}
              horizontal
              ItemSeparatorComponent={() => <View className="w-5" />}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="px-5"
              renderItem={({ item }) => <FeaturedCard onPress={() => {}} />}
              className="flex flex-row gap-5 mt-5"
            >
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
            </FlatList>
            <View className="px-5">
              <View className="mt-5">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-rubik-bold text-xl text-black-300">
                    Our Recommendations
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-base font-rubik-bold text-primary-300">
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
