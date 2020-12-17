import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {SkypeIndicator} from 'react-native-indicators';
import colors from '../res/colors';

class PNGLoadingIndicator extends React.Component {
  render() {
    const {isVisible} = this.props;
    return (
      <Modal
        isVisible={isVisible}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        backdropOpacity={0.5}
        useNativeDriver={true}>
        <View style={styles.loading}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 5,
              backgroundColor: colors.white,
              borderWidth: 0.5,
              borderColor: colors.blueLight,
            }}>
            <SkypeIndicator color={colors.blueDark} size={50} />
          </View>
        </View>
      </Modal>
    );
  }
}

export default PNGLoadingIndicator;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});
