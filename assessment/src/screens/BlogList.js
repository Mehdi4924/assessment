import React, {useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import BlogItem from './components/BlogItem';
import {useDispatch} from 'react-redux';
import fetchBlogs, {fetchTags} from '../redux/services/blogs';
import TagFilter from './components/TagsFilter';
const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs({page: 1, limit: 10}));
    dispatch(fetchTags());
  }, []);

  const blogs = useSelector(state => state.blogs.filteredData);
  const status = useSelector(state => state.blogs.status);

  return (
    <FlatList
      data={blogs}
      keyExtractor={item => item._id}
      renderItem={({item}) => <BlogItem blog={item} />}
      contentContainerStyle={{marginVertical: 10}}
      ListHeaderComponent={<TagFilter />}
      ListEmptyComponent={
        <View style={{alignSelf: 'center', marginVertical: 50}}>
          {status && status == 'loading' ? (
            <ActivityIndicator size={'small'} />
          ) : status == 'failed' ? (
            <Text>Error fetching blogs</Text>
          ) : (
            <Text>No Results Found</Text>
          )}
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default BlogList;
