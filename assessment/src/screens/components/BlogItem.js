import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BlogItem = ({blog}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('BlogDetail', {blog})}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `http://192.168.18.23:3001/uploads/${blog.author.profilePicUrl}`,
          }}
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.title}>{blog.title}</Text>
          <Text style={styles.subtitle}>{blog.subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ddd',
    marginVertical: 3,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
});

export default BlogItem;
