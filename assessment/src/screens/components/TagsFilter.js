import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import fetchBlogs from '../../redux/services/blogs';

const TagFilter = () => {
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  function searchByTag(clear = false) {
    if (!!clear) {
      dispatch(fetchBlogs({page: 1, limit: 10}));
      setTag('');
    } else {
      dispatch(fetchBlogs({tags: tag}));
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTag}
        value={tag}
        placeholder="Inter Tags, Comma Seperated"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.tagButton}
        onPress={() => searchByTag(false)}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tagButton, {backgroundColor: 'red'}]}
        onPress={() => searchByTag(true)}>
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '65%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tagButton: {backgroundColor: 'lightblue', padding: 10, borderRadius: 5},
});

export default TagFilter;
