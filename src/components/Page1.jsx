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
const Page1 = (props) => {
  //   useEffect(() => {
  //     console.log(props.data.data.data);
  //   }, [props]);
  return (
    <Page size="A4" style={styles.body} wrap>
      <Image src={header} fixed />
      <View style={{ fontSize: "11px", paddingHorizontal: "1in" }}>
        <Text style={styles.mainTitle}>
          BERITA ACARA PENYELESAIAN PEKERJAAN
        </Text>
        <Text style={styles.numberTitle}>
          No. {props.data.data.no}/SUNTERRA/BAPP-ON/{props.data.data.bulan}/
          {props.data.data.tanggal}
        </Text>
        <Text style={{ marginTop: "16px" }}>
          Pada hari ini, xxxx Tanggal xx Bulan xxxxxx Tahun{" "}
          {new Date().getFullYear()}, telah dilakukan penyelesaian hasil
          pekerjaan oleh dan diantara:
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "11px",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>1.</Text>
          <View style={{ fontWeight: "extrabold" }}>
            <Text>Nama</Text>
            <Text>Perusahaan</Text>
            <Text>Jabatan</Text>
            <Text>Alamat</Text>
          </View>
          <View>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
          </View>
          <View>
            <Text>{props.data.data.namaPertama}</Text>
            <Text>PT Energi Indonesia Berkarya</Text>
            <Text>{props.data.data.jabatan}</Text>
            <Text style={{ maxWidth: "350px" }}>
              The Plaza Tower Lt 41 Jl. MH. Thamrin, Kav 28-30, Gondangdia,
              Menteng, Jakarta Selatan 10350
            </Text>
          </View>
        </View>
        <Text>Selanjutnya disebut sebagai “PIHAK PERTAMA.</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontWeight: "extrabold" }}>1.</Text>
          <View style={{ fontWeight: "extrabold" }}>
            <Text>Nama</Text>
            <Text>Alamat</Text>
            <Text>Status Kepemilikan Bangunan</Text>
          </View>
          <View>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
          </View>
          <View>
            <Text>{props.data.data.namaKedua}</Text>
            <Text>{props.data.data.alamat}</Text>
            <Text>{props.data.data.status}</Text>
          </View>
        </View>
        <Text style={{ marginVertical: "11px" }}>
          Selanjutnya disebut sebagai “PIHAK KEDUA”.
        </Text>
        <Text>
          PIHAK PERTAMA dan PIHAK KEDUA secara bersama-sama selanjutnya disebut
          sebagai “PARA PIHAK”, dengan ini terlebih dahulu menerangkan hal-hal
          sebagai berikut:
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>1.</Text>
          <Text>
            Bahwa, sebelumnya PIHAK PERTAMA dan PIHAK KEDUA telah mengadakan
            Perjanjian Jual-Beli dan Pelaksanaan Pekerjaan Pemasangan Solar
            Panel PV.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Text>2.</Text>
          <Text>
            Bahwa, Perjanjian tersebut telah menempatkan PIHAK PERTAMA sebagai
            Perusahaan dan PIHAK KEDUA sebagai Pembeli;
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>3.</Text>
          <Text>
            Bahwa, Perjanjian tersebut telah mewajibkan PIHAK PERTAMA sebagai
            Perusahaan yang akan bertanggung jawab terkait pelaksanaan pekerjaan
            dan akan menyerahkan hasil pekerjaan kepada PIHAK KEDUA sebagai
            Pembeli, yaitu berupa pekerjaan instalasi Solar Panel PV dengan
            spesifikasi pekerjaan sebagai berikut:
          </Text>
        </View>
        <Text>
          a. Pelaksanaan digital survey menggunakan teknologi Helioscope;
        </Text>
        <Text>b. Pelaksanaan offsite / survey lapangan</Text>
        <Text>c. Pengajuan Quotation</Text>
        <Text>d. Pembuatan design engineering terkustomisasi;</Text>
        <Text>e. Pengurusan Administrasi SLO & Net Metering ke PLN;</Text>
        <Text>f. Pengerjaan Instalasi;</Text>
      </View>
      <Image style={styles.footer} src={footer} fixed />
    </Page>
  );
};

export default Page1;
