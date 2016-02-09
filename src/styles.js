const StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  dialog: {
    flex: 1,
    alignItems: 'center'
  },
  dialogOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: -200,
    bottom: -200,
    left: 0,
    right: 0
  },
  dialogContent: {
    elevation: 5,
    marginTop: 150,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    overflow: 'hidden'
  },
  dialogTitle: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  dialogTitleText: {
    fontSize: 18,
    fontWeight: '600'
  },
  dialogBody: {
    flex: 1,
    paddingHorizontal: 10
  },
  dialogInput: {
    flex: 1,
    height: 50,
    fontSize: 18
  },
  dialogFooter: {
    borderTopWidth: 1,
    flexDirection: 'row',
    flex: 1
  },
  dialogAction: {
    flex: 1,
    padding: 15
  },
  dialogActionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#006dbf'
  }
});
