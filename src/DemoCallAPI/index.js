import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import BackgroundView from './components/BackgruondView';
import Icon from 'react-native-vector-icons/AntDesign';

export default class DemoCallApi extends Component {
  componentDidMount() {
    fetch('http://svcy3.myclass.vn/api/Product')
      .then(response => response.json())
      .then(data => console.log('result', data))
      .catch(err => console.error(err));
  }

  state = {
    listProduct: [],
    listCatelogy: [],
  };
  renderListCategory = () => {
    return this.state.listCatelogy.map(item => {
      return (
        <Text
          key={item.id}
          style={styles.categoryText}
          onPress={() => this.onPressCategory(item.id)}>
          {item.category}
        </Text>
      );
    });
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.productItemContainer}>
        <Icon name="hearto" size={30} style={styles.productIcon} />
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productTextContent}>{item.name}</Text>
        <Text style={styles.productPriceText}>$ {item.price}</Text>
      </View>
    );
  };
  onPressCategory = CategoryID => {
    axios({
      url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${CategoryID}`,
      method: 'GET',
    })
      .then(response => this.setState({listProduct: response.data.content}))
      .catch(err => console.error(err));
  };
  // componentDidMount() {
  //   const getListProduct = axios({
  //     url: 'http://svcy3.myclass.vn/api/Product',
  //     method: 'GET',
  //   });
  //   const getListCatelogy = axios({
  //     url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
  //     method: 'GET',
  //   });

  //   Promise.all([getListProduct, getListCatelogy])
  //     .then(response => {
  //       const [responseListProDuct, responseListCatelogy] = response;
  //       this.setState({
  //         listProduct: responseListProDuct.data.content,
  //         listCatelogy: responseListCatelogy.data.content,
  //       });
  //     })
  //     .catch(err => console.error(err));
  // }
  fetchAPI = async () => {
    console.log('fetchAPI');
    // const getListProduct = () =>
    //   axios({
    //     url: 'http://svcy3.myclass.vn/api/Product',
    //     method: 'GET',
    //   });
    // const getListCatelogy = () =>
    //   axios({
    //     url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //     method: 'GET',
    //   });
    // const listProduct = await getListProduct();
    // const listCategory = await getListCatelogy();

    const {
      data: {content: listCatelogy},
    } = await axios({
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
      method: 'GET',
    });
    const {
      data: {content: listProduct},
    } = await axios({
      url: 'http://svcy3.myclass.vn/api/Product',
      method: 'GET',
    });

    // const getListProduct = () =>
    //   axios({
    //     url: 'http://svcy3.myclass.vn/api/Product',
    //     method: 'GET',
    //   });
    // const getListCatelogy = () =>
    //   axios({
    //     url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //     method: 'GET',
    //   });
    // const listProduct = await getListProduct();
    // const listCategory = await getListCatelogy();
    this.setState({listProduct, listCatelogy});
  };

  componentDidMount() {
    this.fetchAPI();

    // const getListProduct = axios({
    //   url: 'http://svcy3.myclass.vn/api/Product',
    //   method: 'GET',
    // });
    // const getListCatelogy = axios({
    //   url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    //   method: 'GET',
    // });
    // Promise.all([getListProduct, getListCatelogy])
    //   .then(response => {
    //     const [responseListProDuct, responseListCatelogy] = response;
    //     this.setState({
    //       listProduct: responseListProDuct.data.content,
    //       listCatelogy: responseListCatelogy.data.content,
    //     });
    //   })
    //   .catch(err => console.error(err));
  }

  render() {
    return (
      <BackgroundView>
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <Icon name="close" size={30} color="#fff" />
            <Icon name="filter" size={30} color="#fff" />
          </View>
          <ScrollView
            style={{marginBottom: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {this.renderListCategory()}
          </ScrollView>
          <FlatList
            contentContainerStyle={{paddingBottom: 120}}
            data={this.state.listProduct}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </BackgroundView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  categoryText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 22,
    marginRight: 30,
    fontWeight: '800',
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  productItemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    height: 280,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 4,
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'space-between',
  },
  productTextContent: {
    color: '#000',
    textTransform: 'capitalize',
    fontSize: 22,
    marginRight: 30,
    fontWeight: '800',
  },
  productPriceText: {
    fontWeight: '800',
  },
  productImage: {
    height: 100,
    width: 200,
  },
  productIcon: {alignSelf: 'flex-end'},
});
