import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (error) {

        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: "center" }} />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) =>
         (
        <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id })}>
          <View style={styles.card}>

            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.title}>{item.title}</Text>
          </View>

        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
  
  image: { width: 50, height: 50, marginRight: 10 },
  title: { flex: 1, fontSize: 14 }
});
