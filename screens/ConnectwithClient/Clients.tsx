import React, {memo} from 'react';
import {FlatList} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import useLayout from '../../hooks/useLayout';

import {Images} from '../../assets/images';
import ClientDetails from './ClientDetails';
import keyExtractor from '../../utils/keyExtractor';
import {RefreshControl} from 'react-native-web-refresh-control';

const Clients = memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const renderItem = React.useCallback(({item}) => {
    return <ClientDetails data={item} noFavoritesAdd={true} />;
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      refreshControl={<RefreshControl tintColor="#F0DF67" />}
      contentContainerStyle={[styles.content, {paddingBottom: bottom + 32}]}
    />
  );
});

export default Clients;

const themedStyles = StyleService.create({
  content: {
    marginHorizontal: 24,
    marginTop: 16,
  },
});
const data = [
  {
    id: 0,
    image: Images.avatar0,
    name: 'user1',
    message: 'Hey there.....',
    read: true,
  },

  {
    id: 3,
    image: Images.avatar1,
    name: 'user2',
    message: 'Hi....',
    read: true,
  },
  {
    id: 2,
    image: Images.avatar2,
    name: 'user3',
    message: 'goood bye....',
    read: false,
  },

  {
    id: 4,
    image: Images.avatar3,
    name: 'user4',
    message: 'Hey',
    read: false,
  },
  {
    id: 1,
    image: Images.avatar4,
    name: 'user5',
    message: 'Hello',
    read: true,
  },
];
