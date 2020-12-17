/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from 'react-native';


import {connect} from 'react-redux';

import colors from '../res/colors';
import TitleBarView from '../components/titleBarView';

import PNGLoadingIndicator from '../components/pngActivityIndicator';


import {fetchdataStatus,fetchUser} from '../actions';

class SelectListItem extends Component{
    render(){
        return (

// eslint-disable-next-line react-native/no-inline-styles
<View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:colors.grayDark,marginLeft:20,marginRight:10}}>
                    {/* User Id : {this.props.item.userId} */}
                    User Name : {global.userName}
            </Text>
        <View>
            <Text style={{fontSize:13,color:colors.grayDarkest,marginLeft:20,marginRight:10}}>
                    {this.props.item.title.substring(0,55)}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}>
          <TouchableOpacity
            onPress={() => {
                alert(JSON.stringify(this.props.item.body));

            }}
            style={styles.Button}
            activeOpacity={0.45}
            underlayColor="white">
            <Text style={styles.btnText}>View Comments</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}>
          <TouchableOpacity
            onPress={() => {
              //  alert(JSON.stringify(this.props.item.body))
              console.log(this.props.item.id);
        fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();
console.log(response);
            if (!response.ok) {

                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            console.log('Delete successfully');
            alert('Delete successfully');
        })
        .catch(error => {
            alert('There was an error!' + error);
            console.error('There was an error!', error);
        });
            }}
            style={styles.Button}
            activeOpacity={0.45}
            underlayColor="white">
            <Text style={styles.btnText}>Delete Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
</View>
        );
    }
}

class Home extends React.Component {
    componentDidMount() {console.log('componentDidMount');
    this.props.fetchUser();
        this.props.fetchdataStatus();
      }

  render() {
      const FlatListItemSeparator = () => {
        return (
          <View style={styles.listItemSeparatorStyle} />
        );
      };
    return (
<View style={styles.container}>
    <PNGLoadingIndicator isVisible={this.props.home.loading} />
    <TitleBarView title="Welcome" />

    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
        <SectionList
          ItemSeparatorComponent={FlatListItemSeparator}
          sections={[
            {title: 'A', data: this.props.home.getdataStatus},
          ]}
        renderItem={({ item,index }) => {
         return (<SelectListItem item = {item} index= {index} />);
         }}
        keyExtractor={(item, index) => item.id + index}
        />
      </View>
    </SafeAreaView>
      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

export default connect(mapStateToProps, {fetchdataStatus,fetchUser})(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    marginTop:15,
    backgroundColor: '#C8C8C8',
  },
  Button: {
    width: 120,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.blue,
    marginTop: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Roboto-Medium',
    color: colors.white,
    fontSize: 13,
  },
});
