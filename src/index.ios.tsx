import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

export default class badgeExplorerTS extends Component<{}, {}> {
    render() {
        return (
            <View
                style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center'
                }}
            >
                <Text>Hello, Typed world</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('badgeExplorerTS', () => badgeExplorerTS);
