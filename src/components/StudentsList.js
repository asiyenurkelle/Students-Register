import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {studentsListData} from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
  UNSAFE_componentWillMount() {
    this.props.studentsListData();
  }

  renderRow({item, index}) {
    return <ListItem ogrenci={item} />;
  }
  render() {
    console.log(this.props.studentsArray);
    return (
      <FlatList
        data={this.props.studentsArray}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
const mapStateToProps = ({studentDataResponse}) => {
  const studentsArray = _.map(studentDataResponse, (val, uid) => {
    return {...val, uid}; //Array'in içerisini: {isim: asiye,soyisim:kelle,sube: asube,uid: k9asass} şeklinde oluşturduk.
  });
  return {studentsArray};
};
export default connect(
  mapStateToProps,
  {studentsListData},
)(StudentsList);
