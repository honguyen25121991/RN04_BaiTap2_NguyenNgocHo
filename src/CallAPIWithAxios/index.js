import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import BackgroundView from './components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

export default class DemoCallAPIWithAxios extends Component {
  state = {
    listProduct: [],
    listCategory: [],
  };
  onPressCategory = CategoryId => {
    axios({
      url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${CategoryId}`,
      method: 'GET',
    })
      .then(resphonse => this.setState({listProduct: resphonse.data.content}))
      .catch(err => console.error(err));
  };
  renderListCategory = () => {
    return this.state.listCategory.map((item, index) => {
      return (
        <Text
          key={index}
          value={item}
          style={{
            color: '#fff',
            textTransform: 'capitalize',
            fontSize: 22,
            marginRight: 30,
          }}
          onPress={() => this.onPressCategory(item.id)}>
          {item.category}
        </Text>
      );
    });
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.productItemContainer} key={item.id}>
        <Icon
          name="hearto"
          size={30}
          style={styles.productIcon}
          onPress={() => {
            console.log('123');
          }}
        />
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productNameText}>{item.name}</Text>
        <Text style={styles.productPriceText}> $ {item.price}</Text>
      </View>
    );
  };

  fetchAPI = async () => {
    // const {
    //   data: {content: listProduct},
    // } = await axios({
    //   url: 'http://svcy3.myclass.vn/api/Product',
    //   method: 'GET',
    // });
    // const {
    //   data: {content: listCategory},
    // } = await axios({
    //   url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //   method: 'GET',
    // });
    // this.setState({listProduct, listCategory});
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
    try {
      const [resListProduct, resListCategory] = await Promise.all([
        getListProduct(),
        getListCategory(),
      ]);
      this.setState({
        listProduct: resListProduct.data.content,
        listCategory: resListCategory.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <BackgroundView>
        <SafeAreaView style={{paddingHorizontal: 20}}>
          <View style={styles.headerContainer}>
            <Icon name="close" size={30} color="#fff" />
            <Icon name="filter" size={30} color="#fff" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginBottom: 20,
            }}>
            {this.renderListCategory()}
          </ScrollView>

          <FlatList
            data={this.state.listProduct}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}
          />
        </SafeAreaView>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  productIcon: {alignSelf: 'flex-end'},
  productImage: {
    height: 150,
    width: 200,
  },
  productNameText: {
    fontSize: 22,
    fontWeight: '800',
  },
  productItemContainer: {
    backgroundColor: '#eceef2',
    padding: 20,
    height: 280,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 4,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  productPriceText: {
    fontWeight: '600',
  },
});
