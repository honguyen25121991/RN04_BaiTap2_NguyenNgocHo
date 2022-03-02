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
import BackroundView1 from './components/BackgroundView1';
import AntIcon from 'react-native-vector-icons/FontAwesome';
import AntIconFilter from 'react-native-vector-icons/Ionicons';
import Iconheart from 'react-native-vector-icons/AntDesign';

export default class DemoCallApi1 extends Component {
  state = {
    listProduct: [],
    listCategory: [],
  };

  renderListCategory = () => {
    return this.state.listCategory.map(item => {
      return (
        <Text
          key={item.id}
          style={styles.titleCategory}
          onPress={() => this.onPressCategory(item.id)}>
          {item.category}
        </Text>
      );
    });
  };
  renderItem = ({item}) => {
    return (
      <View style={styles.productItemContainer}>
        <Iconheart
          name="hearto"
          size={30}
          color="#000"
          style={styles.productIconHeart}
        />
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productNameText}>{item.name}</Text>
        <Text style={styles.productPriceText}>$ {item.price}</Text>
      </View>
    );
  };

  fetchAPI = async () => {
    console.log('fetchAPI');
    const getListProduct = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product',
        method: 'GET',
      });

    const getListCatelogy = () =>
      axios({
        url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
        method: 'GET',
      });
    try {
      const [reponseListProduct, reponseListCategory] = await Promise.all([
        getListProduct(),
        getListCatelogy(),
      ]);

      this.setState({
        listProduct: reponseListProduct.data.content,
        listCategory: reponseListCategory.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
  onPressCategory = categoryID => {
    axios({
      url: `http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${categoryID}`,
      method: 'GET',
    })
      .then(response => this.setState({listProduct: response.data.content}))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <BackroundView1>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <AntIcon name="close" size={40} color="#fff" />
              <AntIconFilter name="filter" size={40} color="#fff" />
            </View>
            <ScrollView
              style={{marginBottom: 10}}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {this.renderListCategory()}
            </ScrollView>
            <FlatList
              data={this.state.listProduct}
              renderItem={this.renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 200}}
            />
          </View>
        </SafeAreaView>
      </BackroundView1>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleCategory: {
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 20,
    paddingRight: 20,
    marginTop: 10,
    fontWeight: '700',
  },
  productItemContainer: {
    backgroundColor: '#fff',
    height: 250,
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  productNameText: {fontWeight: '800', color: '#000', fontSize: 22},
  productPriceText: {
    fontWeight: '600',
  },
  productImage: {height: 100, width: 200, marginTop: 30},
  productIconHeart: {position: 'absolute', top: 20, right: 20},
});
