import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

@connect(({home}) => ({
  ...home,
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
    });
  };

  componentWillReceiveProps () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View className='index'>
        <View><Text>Hello, World{this.props.title}</Text></View>
      </View>
    )
  }
}

export default Index
