import { Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import header from "../assets/header.png";
import footer from "../assets/footer.png";

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: "16px",
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
const Page2 = (props) => {
  //   useEffect(() => {
  //     console.log(props.data.data.data);
  //   }, [props]);
  return (
    <Page size="A4" style={styles.body}>
      <Image src={header} fixed />
      <View style={{ fontSize: "11px", paddingHorizontal: "1in" }}>
        <Text>g. Test & Commissioning.</Text>
        <Text>
          seluruhnya untuk selanjutnya akan disebut sebagai “Pekerjaan”
        </Text>
        <Text>
          Dengan ini, PARA PIHAK sepakat untuk melaksanakan serah terima hasil
          Pekerjaan dengan ketentuan sebagai berikut:
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>1.</Text>
          <Text>
            PIHAK PERTAMA dengan ini telah menyelesaikan Pekerjaan instalasi
            Solar Panel untuk PIHAK KEDUA di lokasi dengan alamat tersebut di
            atas sesuai dengan kesepakatan. Saat ini, Solar Panel telah
            terpasang dan dapat berfungsi dengan baik, namun belum diaktifkan
            oleh PIHAK PERTAMA menunggu proses Net Metering selesai dilakukan
            oleh Perusahaan Listrik Negara (PLN) sesuai dengan peraturan
            perundang-undangan pemanfaatan Pembangkit Listrik Tenaga Surya yang
            berlaku di Indonesia.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>2.</Text>
          <Text>
            Melalui Berita Acara Penyelesaian Pekerjaan ini, maka PIHAK PERTAMA
            telah menyelesaikan kewajiban dan menyerahkan hasil Pekerjaan kepada
            PIHAK KEDUA sebagaimana dibuktikan dengan dokumen-dokumen terlampir
            di dalam Berita Acara Penyelesaian Pekerjaan ini.
          </Text>
        </View>
        <Text>
          Demikian Berita Acara Penyelesaian Pekerjaan ini dibuat oleh PIHAK
          PERTAMA dengan diketahui dan disetujui oleh PIHAK KEDUA untuk dapat
          dipergunakan sebagaimana mestinya.
        </Text>
        <Text style={{ textAlign: "center" }}>PARA PIHAK,</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>PIHAK PERTAMA</Text>
          <Text>PIHAK KEDUA</Text>
        </View>
      </View>
      <Image style={styles.footer} src={footer} fixed />
    </Page>
  );
};

export default Page2;
