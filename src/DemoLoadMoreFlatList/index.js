import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const DemoLoadMoreFlatListuseHook = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [pageCurrent, setpageCurrent] = useState(0);

  useEffect(() => {
    console.log('use Effect pageCurrent', pageCurrent);
    setisLoading(true);
    this.getData();
    return () => {};
  }, [pageCurrent]);
  getData = async () => {
    const apiURL =
      'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
      pageCurrent;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(data.concat(resJson));
        setisLoading(false);
      })
      .catch(err => console.error(err));
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{uri: item.url}} style={styles.itemImage} />
        {/* <Image source={{uri: item.thumbnailUrl}} style={styles.itemImage} /> */}
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
    );
  };
  renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  handleLoadMore = () => {
    setpageCurrent(pageCurrent + 1);
    setisLoading(true);
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={this.renderFooter}
      onEndReached={this.handleLoadMore}
      onEndReachedThreshold={0}
    />
  );
};

export default DemoLoadMoreFlatListuseHook;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff',
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBotttomWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  itemText: {
    fontSize: 16,
    padding: 5,
  },
  loader: {
    margin: 10,
    alignItems: 'center',
  },
});
