import React, {useState} from 'react';
import {View, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Icon,
  Avatar,
  Button,
  Text,
} from '@ui-kitten/components';
//import Text from '../../components/Text';
import {useNavigation} from '@react-navigation/native';

interface Props {
  image: ImageSourcePropType;
  name: string;
  enail: string;
}

const SessionDetails = ({data}) => {
  const navigation = useNavigation();
  const styles = useStyleSheet(themedStyles);

  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState('');

  const displayMessage = msg => {
    setMessage(msg);
    setClicked(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Avatar
            source={data.image}
            /* @ts-ignore */
            style={styles.image}
          />
        </TouchableOpacity>
        <View>
          <Text category="p1">{data.name}</Text>
          <Text category="label">{data.email}</Text>
        </View>
      </View>
      {clicked ? (
        <View style={styles.message_}>
          <Text style={styles.message}>{message}</Text>
        </View>
      ) : (
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Button
              onPress={() => displayMessage('Session has been Accepted')}
              style={styles.button}
              appearance="outline"
              status="success"
              size="small">
              Accept
            </Button>
          </View>
          <View style={styles.btn}>
            <Button
              onPress={() => displayMessage('Session has been Rejected')}
              style={styles.button}
              appearance="outline"
              status="danger"
              size="small">
              Reject
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default SessionDetails;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: '#2E3A59',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  main: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 20,
  },
  calsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    marginHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-primary-100',
  },
  message_: {
    alignItems: 'center',
    marginTop: 20,
  },
  message: {
    textAling: 'center',
    fontSize: 12,
  },
});
