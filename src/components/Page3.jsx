import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import header from "../assets/header.png";
import footer from "../assets/footer.png";

const tableStyles = StyleSheet.create({
  em: {
    fontStyle: "bold",
  },
  table: {
    width: "100%",
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    marginVertical: 12,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    flexWrap: "wrap",
  },
});

const styles = StyleSheet.create({
  title: {
    fontSize: "14px",
    textDecoration: "underline",
    fontWeight: "extrabold",
    textAlign: "center",
  },
  numberTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    fontSize: 12,
    bottom: 10,
    left: 0,
    right: 0,
  },
});
const Page3 = (props) => {
  //   useEffect(() => {
  //     console.log(props.data.data.data);
  //   }, [props]);
  return (
    <Page size="A4" style={styles.body}>
      <Image src={header} fixed />
      <View style={{ fontSize: "11px", paddingHorizontal: "1in" }}>
        <Text style={styles.title}>
          LAMPIRAN 1 - DAFTAR PEKERJAAN PEMASANGAN SOLAR PANEL PV SUNTERRA
        </Text>
        <View style={tableStyles.table}>
          <View style={[tableStyles.row, tableStyles.header]}>
            <Text style={[tableStyles.headerText, tableStyles.cell]}>
              Column 1 Header
            </Text>
            <Text style={[tableStyles.headerText, tableStyles.cell]}>
              Column 2 Header
            </Text>
            <Text style={[tableStyles.headerText, tableStyles.cell]}>
              Column 3 Header
            </Text>
            <Text style={[tableStyles.headerText, tableStyles.cell]}>
              Column 4 Header
            </Text>
          </View>
          <View style={[tableStyles.row]}>
            <Text style={[tableStyles.cell]}>Column 1 Row 1</Text>
            <Text style={[tableStyles.cell]}>Column 2 Row 1</Text>
            <Text style={[tableStyles.cell]}>Column 3 Row 1</Text>
            <Text style={[tableStyles.cell]}>Column 4 Row 1</Text>
          </View>
        </View>
      </View>
      <Image style={tableStyles.footer} src={footer} fixed />
    </Page>
  );
};

export default Page3;
