import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null,  };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBa35dclVONkSfLdDAnMhrFJ1kOumc1GtY',
            authDomain: 'authentication-2120e.firebaseapp.com',
            databaseURL: 'https://authentication-2120e.firebaseio.com',
            projectId: 'authentication-2120e',
            storageBucket: 'authentication-2120e.appspot.com',
            messagingSenderId: '782527912980'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                </CardSection>
            );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size='large' />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    buttonStyle: {

    },
    spinnerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 300
    }
};
export default App;
