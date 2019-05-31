import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';
@connect(({map}) => ({
  ...map,
}))
export default class Map extends Component {
  config = {
    navigationBarTitleText: 'map',
  };
  componentDidMount = () => {
  };
  render() {
    return (
      <View className="map-page">
        map
      </View>
    )
  }
}
