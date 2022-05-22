import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

const CallAPIWithUseEffect = () => {
  const [state, setState] = useState({
    // listProduct: [],
    listCategory: [],
    listAllStore: [],
    loading: true,
    quantity: 0,
    size: [],
    selectedId: [],
  });
  const [listProduct, setLisProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getListProduct = await axios({
        url: 'http://svcy3.myclass.vn/api/Product',
        method: 'GET',
      });
      setLisProduct(getListProduct.data.content);
    };
    fetchData();
  }, []);

  console.log(listProduct);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const getListProduct = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product',
        method: 'GET',
      });

    const getListCategory = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
        method: 'GET',
      });
    const getListAllStore = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product/getAllStore',
        method: 'GET',
      });

    const [responseListProDuct, responseListCatelogy, responseListAllStore] =
      await Promise.all([
        getListProduct(),
        getListCategory(),
        getListAllStore(),
      ]);
    setState({
      ...state,
      listProduct: responseListProDuct.data.content,
      listCategory: responseListCatelogy.data.content,
      listAllStore: responseListAllStore.data.content,
      loading: false,
    });
  };

  const tinhTien = quantity => {
    setState({...state, quantity: state.quantity + quantity});
    console.log(state.quantity);
  };

  const [selectedId, changeIcon] = useState([]);

  const renderItem = ({item}) => {
    const nameIcon = item.name === selectedId ? 'heart' : 'hearto';

    return (
      <View style={styles.container}>
        <Icon
          name={nameIcon}
          size={30}
          style={[styles.productIcon]}
          onPress={() => changeIcon(item.name)}
        />
        <Image
          source={{uri: item.image}}
          style={{height: 300, width: '100%'}}
        />

        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.quantity}</Text>
        <Text
          onPress={() => {
            tinhTien(item.quantity);
          }}>
          Tính tiền :
        </Text>
        <Text>{state.quantity}</Text>
      </View>
    );
  };

  const onPressCategory = categoryId => {
    axios({
      url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryId}`,
      method: 'GET',
    })
      .then(response => {
        setState({
          ...state,
          listProduct: response.data.content,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderListCategory = () => {
    return state.listCategory.map(item => {
      return (
        <Text
          onPress={() => {
            onPressCategory(item.id);
          }}
          key={item.id}
          style={{
            fontSize: 22,
            paddingHorizontal: 5,
            backgroundColor: 'red',
            margin: 5,
            textTransform: 'capitalize',
          }}>
          {item.id}
        </Text>
      );
    });
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>CallAPIWithUseEffect</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {renderListCategory()}
        </ScrollView>
        <FlatList
          data={state.listProduct}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 180}}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />

        {/* <Text>123</Text> */}
        {/* {!state.loading && (
            <View style={styles.container}>
              <Image
                source={{uri: item.image}}
                style={{height: 300, width: '100%'}}
              />
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.description}</Text>
            </View>
          )} */}
      </View>
    </SafeAreaView>
  );
};

export default CallAPIWithUseEffect;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productIcon: {
    alignSelf: 'flex-end',
    right: 55,
  },
});
