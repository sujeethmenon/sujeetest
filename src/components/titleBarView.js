import React from 'react';
import {View, Text} from 'react-native';

import colors from '../res/colors';

class TitleBarView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title} = this.props;

    return (
      <View
        style={{
          height: 85,
          paddingTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.blue,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Roboto-Bold',
              fontSize: 25,
              color: colors.white,
              marginLeft: 20,
            }}>
            {title}
          </Text>
        </View>
      </View>
    );
  }
}

export default TitleBarView;
