/* Copyright 2015 Realm Inc - All Rights Reserved
 * Proprietary and Confidential
 */

'use strict';

import {
    Navigator,
    Platform,
    StyleSheet
} from 'react-native';

const { NavBarHeight, TotalNavHeight } = Navigator.NavigationBar.Styles.General;
const iOS = (Platform.OS == 'ios');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    navigator: {
        flex: 1,
    },
    navBar: {
        backgroundColor: '#f0727d',
    },
    navBarView: {
        alignItems: 'center',
        flexDirection: 'row',
        height: NavBarHeight,
    },
    navBarLeftArrow: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '200',
        letterSpacing: 2,
        marginTop: -6,
    },
    navBarLeftButton: {
        paddingLeft: 8,
    },
    navBarRightButton: {
        paddingRight: 8,
    },
    navBarText: {
        color: '#fff',
        fontSize: 18,
    },
    navBarTitleText: {
        fontWeight: '500',
    },
    navScene: {
        top: TotalNavHeight,
    },
    listItem: {
        borderColor: '#c8c7cc',
        borderBottomWidth: 0.5,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        height: 44,
    },
    listItemLeftSide: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
    },
    listItemCheckbox: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: 16,
        height: 16,
    },
    listItemCheckboxText: {
        width: 14,
        height: 14,
        fontSize: iOS ? 14 : 10,
        textAlign: 'center',
    },
    listItemCount: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        width: 24,
        height: 18,
    },
    listItemCountText: {
        backgroundColor: 'transparent',
        fontSize: iOS ? 12 : 11,
        textAlign: 'center',
    },
    listItemInput: {
        fontFamily: 'System',
        fontSize: 15,
        flexDirection: 'column',
        flex: 1,
    },
    listItemText: {
        alignSelf: 'center',
        fontFamily: 'System',
        fontSize: 15,
        flexDirection: 'column',
        flex: 1,
    },
    listItemTextSpecial: {
        fontStyle: 'italic',
    },
    listItemDelete: {
        backgroundColor: 'transparent',
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
