import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf',
});

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 2,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  header1: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
  header2: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 10,
    color: '#998E8E',
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
  },
  box: {
    border: 1,
    borderColor: '#ff0000',
    borderRadius: 8,
    minHeight: 18,
  },
  boldText: {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 4,
  },
  bigNumber: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  mbSmall: {
    marginBottom: 5,
  },
  mbMedium: {
    marginBottom: 10,
  },
  mtMedium: {
    marginTop: 10,
  },
  mtLarge: {
    marginTop: 20,
  },
  paddingSmall: {
    padding: '5 10',
  },
  paddingMedium: {
    padding: '10 20',
  },
  paddingInlineSmall: {
    padding: '0 5',
  },
  highlight: {
    backgroundColor: '#FF06064F',
  },
  width70: {
    width: 70,
  },
  width200: {
    width: 180,
    // maxWidth: 180,
    flexGrow: 0,
  },
  width100: {
    width: 140,
    // maxWidth: 140,
    flexGrow: 0,
  },
  bold: {
    fontWeight: 700,
  },
  redSubheader: {
    fontSize: 12,
    color: '#FF03072B',
    textAlign: 'center',
  },
  logo: {
    width: 130,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  flex1: {
    flex: 1,
  },
});
