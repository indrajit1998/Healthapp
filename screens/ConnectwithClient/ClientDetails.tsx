import React from 'react';
import {View, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Icon,
  Avatar,
  Text,
} from '@ui-kitten/components';
//import Text from '../../components/Text';
import {useNavigation} from '@react-navigation/native';

interface Props {
  image: ImageSourcePropType;
  name: string;
  message: string;
}
const ClientDetails = ({data}) => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatPage')}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Avatar
            source={data.image}
            /* @ts-ignore */
            style={styles.image}
          />
          <View>
            <Text category="p1">{data.name}</Text>
            <Text category={data.read ? 'c1' : 'label'}>{data.message}</Text>
          </View>
        </View>
        <View>
          {!data.read ? (
            <Text category="label" style={styles.unread}>
              1
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ClientDetails;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#2E3A59',
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  main: {
    flexDirection: 'row',
  },
  unread: {
    flexDirection: 'row',
    backgroundColor: 'color-primary-100',
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 30,
    color: '#000',
  },
  image: {
    marginRight: 20,
  },
  calsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  btn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-primary-100',
  },
});
