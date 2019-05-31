import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';
@connect(({map}) => ({
  ...map,
}))
export default class MapItem extends Component {
  
  render() {
    return (
      <View className="map-item">
        mapitem
      </View>
    )
  }
}
