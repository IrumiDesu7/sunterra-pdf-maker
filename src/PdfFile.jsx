import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import header from "./assets/header.png";
import footer from "./assets/footer.png";

const styles = StyleSheet.create({
  body: {},
  footer: { position: "absolute", fontSize: 12, bottom: 10, left: 0, right: 0 },
});

const PdfFile = (props) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Image src={header} fixed />
        <View style={styles.body}>
          <Text>BERITA ACARA PENYELESAIAN PEKERJAAN</Text>
          <Text>
            No. {props.data.no}/SUNTERRA/BAPP-ON/{props.data.bulan}/
            {props.data.tanggal}
          </Text>
          <Text>
            Pada hari ini, xxxx Tanggal xx Bulan xxxxxx Tahun{" "}
            {new Date().getFullYear()}, telah dilakukan penyelesaian hasil
            pekerjaan oleh dan diantara:
          </Text>
        </View>
        <Image style={styles.footer} src={footer} fixed />
      </Page>
    </Document>
  );
};

export default PdfFile;
