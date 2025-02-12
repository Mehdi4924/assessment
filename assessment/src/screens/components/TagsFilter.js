import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import fetchBlogs from '../../redux/services/blogs';
import {useDebounce} from '../hooks/useDebounce';
const TagFilter = () => {
  const [tag, setTag] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const debouncedQuery = useDebounce(search, 500);
  const {tags, status} = useSelector(state => state.tags);

  useEffect(() => {
    searchByTag();
  }, [debouncedQuery]);

  function searchByTag() {
    if (search == '') {
      dispatch(fetchBlogs({page: 1, limit: 10}));
    } else {
      dispatch(fetchBlogs({search: search}));
    }
  }
  console.log(tag);
  useEffect(() => {
    dispatch(fetchBlogs({tags: tag.join(',')}));
  }, [tag]);

  function onTagPress(incomingTag) {
    if (!incomingTag) return;
    const currentTags = Array.isArray(tag) ? tag : [];
    const tagIndex = currentTags.findIndex(item => item === incomingTag);
    let newTags;
    if (tagIndex !== -1) {
      newTags = currentTags.filter((_, index) => index !== tagIndex);
    } else {
      newTags = [...currentTags, incomingTag];
    }
    setTag(newTags);
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          onChangeText={setSearch}
          value={search}
          placeholder="Inter Tags, Comma Seperated"
          style={styles.input}
        />
        <TouchableOpacity
          style={[styles.tagButton, {backgroundColor: 'red'}]}
          onPress={() => setSearch('')}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, styles.tagContainer]}>
        {!!tags && tags.length > 0 ? (
          tags.map(item => {
            const indexFound = tag.findIndex(prevTag => prevTag == item);
            return (
              <TouchableOpacity id={item} onPress={() => onTagPress(item)}>
                <Text
                  style={[
                    styles.tagButton,
                    {
                      backgroundColor: indexFound != -1 ? 'black' : 'grey',
                    },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })
        ) : status == 'loading' ? (
          <ActivityIndicator
            style={{alignSelf: 'center'}}
            size={'small'}
            color={'blue'}
          />
        ) : (
          status == 'failed' && <Text>Error Getting Tags</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tagButton: {
    color: 'lightgrey',
    padding: 10,
    borderRadius: 5,
  },
  tagContainer: {marginVertical: 0, paddingBottom: 0, paddingTop: 0},
});

export default TagFilter;
