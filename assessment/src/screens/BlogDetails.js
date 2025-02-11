import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

const BlogDetail = ({route}) => {
  const {blog} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: `http://192.168.18.23:3001/uploads/${blog.author.profilePicUrl}`,
        }}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.profilePic}
      />
      <Text style={styles.title}>{blog?.title}</Text>
      <Text style={styles.subtitle}>{blog?.subTitle}</Text>
      <Text style={styles.content}>{blog?.content}</Text>
      <View style={styles.authorContainer}>
        <Text style={styles.authorName}>
          By {blog?.author?.firstName} {blog?.author?.lastName}
        </Text>
        <Text style={styles.bio}>{blog?.author?.bio}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  profilePic: {
    width: '100%',
    height: '150%',
    borderRadius: 8,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  authorContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});

export default BlogDetail;
