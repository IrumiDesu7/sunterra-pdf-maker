import { useState } from "react";
import header from "./assets/header.png";
import footer from "./assets/footer.png";

function App() {
  const [formData, setFormData] = useState({
    no: "",
    bulan: "",
    hariDesc: "",
    bulanDesc: "",
    tahunDesc: "",
    tanggal: "",
    tanggalDesc: "",
    namaPertama: "",
    duaStart: "",
    duaEnd: "",
    tigaStart: "",
    tigaEnd: "",
    empatStart: "",
    empatEnd: "",
    limaStart: "",
    limaEnd: "",
    enamStart: "",
    enamEnd: "",
    tujuhStart: "",
    tujuhEnd: "",
    wifiId: "",
    wifiPass: "",
    inverter: "",
    dtu: "",
    accountUser: "",
    accountPass: "",
    jabatan: "",
    namaKedua: "",
    alamat: "",
    status: "",
  });
  const [image, setImage] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="h-[900px] flex justify-center ">
      <div>
        <header>
          <img src={header} alt="header" />
        </header>
        <section className="flex flex-col h-full mx-[1in] ">
          <div className="text-center mb-4">
            <h1 className="font-bold text-2xl underline">
              BERITA ACARA PENYELESAIAN PEKERJAAN
            </h1>
            <h2 className="font-bold text-xl">
              No. {formData.no}/SUNTERRA/BAPP-ON/{formData.bulan}/
              {formData.tanggal}
            </h2>
          </div>
          <div className="text-sm mb-[14px]">
            Pada hari ini, {formData.hariDesc} Tanggal {formData.tanggalDesc}{" "}
            Bulan {formData.bulanDesc} Tahun {formData.tahunDesc}, telah
            dilakukan penyelesaian hasil pekerjaan oleh dan diantara:
          </div>
          <div className="flex justify-start items-start text-sm gap-4 px-3 ">
            <div className="font-bold">1.</div>
            <div>
              <ul>
                <li>
                  <div class="flex gap-[53px] font-bold">
                    <span>Nama</span>
                    <span>: {formData.namaPertama}</span>
                  </div>
                </li>
                <li>
                  <div class="flex gap-5">
                    <span className="font-bold">Perusahaan</span>
                    <span>: PT Energi Indonesia Berkarya</span>
                  </div>
                </li>
                <li>
                  <div class="flex gap-[43px]">
                    <span className="font-bold">Jabatan</span>
                    <span>: {formData.jabatan}</span>
                  </div>
                </li>
                <li>
                  <div class="flex gap-[47px]">
                    <span className="font-bold">Alamat</span>
                    <span>
                      : The Plaza Tower Lt 41 Jl. MH. Thamrin, Kav 28-30,
                      Gondangdia, Menteng, Jakarta Selatan 10350
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm ml-9 my-[14px]">
            Selanjutnya disebut sebagai{" "}
            <span className="font-bold">“PIHAK PERTAMA”</span>.
          </div>
          <div className="flex justify-start items-start text-sm gap-4 px-3 ">
            <div className="font-bold">1.</div>
            <div>
              <ul>
                <li>
                  <div class="flex gap-[148px] font-bold">
                    <span>Nama</span>
                    <span>: {formData.namaKedua}</span>
                  </div>
                </li>

                <li>
                  <div class="flex gap-[140px] font-bold">
                    <span>Alamat</span>
                    <span>: {formData.alamat}</span>
                  </div>
                </li>
                <li>
                  <div class="flex gap-[10px]">
                    <span className="font-bold">
                      Status Kepemilikan Bangunan
                    </span>
                    <span>: {formData.status}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm ml-9 my-[14px]">
            Selanjutnya disebut sebagai{" "}
            <span className="font-bold">“PIHAK KEDUA</span>.
          </div>
          <div className="text-sm my-[14px]">
            <span className="font-bold">PIHAK PERTAMA</span> dan{" "}
            <span className="font-bold">PIHAK KEDUA</span> secara bersama-sama
            selanjutnya disebut sebagai{" "}
            <span className="font-bold">“PARA PIHAK”</span>, dengan ini terlebih
            dahulu menerangkan hal-hal sebagai berikut:
          </div>
          <div className="text-sm my-[14px] flex gap-4">
            <div>1.</div>
            <div className="text-justify">
              Bahwa, sebelumnya PIHAK PERTAMA dan PIHAK KEDUA telah mengadakan
              Perjanjian Jual-Beli dan Pelaksanaan Pekerjaan Pemasangan Solar
              Panel PV.
            </div>
          </div>
          <div className="text-sm my-[14px] flex gap-4">
            <div>2.</div>
            <div className="text-justify">
              Bahwa, Perjanjian tersebut telah menempatkan PIHAK PERTAMA sebagai
              Perusahaan dan PIHAK KEDUA sebagai Pembeli;
            </div>
          </div>
          <div className="text-sm mt-[14px] flex gap-4">
            <div>3.</div>
            <div className="text-justify">
              Bahwa, Perjanjian tersebut telah mewajibkan PIHAK PERTAMA sebagai
              Perusahaan yang akan bertanggung jawab terkait pelaksanaan
              pekerjaan dan akan menyerahkan hasil pekerjaan kepada PIHAK KEDUA
              sebagai Pembeli, yaitu berupa pekerjaan instalasi Solar Panel PV
              dengan spesifikasi pekerjaan sebagai berikut:
            </div>
          </div>
          <div className="italic text-sm ml-11">
            <ul>
              <li>
                a. Pelaksanaan digital survey menggunakan teknologi Helioscope;
              </li>
              <li>b. Pelaksanaan offsite / survey lapangan</li>
              <li>c. Pengajuan Quotation</li>
              <li>d. Pembuatan design engineering terkustomisasi;</li>
              <li>e. Pengurusan Administrasi SLO & Net Metering ke PLN;</li>
              <li>f. Pengerjaan Instalasi;</li>
              <li>g. Test & Commissioning.</li>
              <li className="not-italic">
                (seluruhnya untuk selanjutnya akan disebut sebagai “Pekerjaan”)
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <img src={footer} alt="footer" />
        </footer>
        <header>
          <img src={header} alt="header" />
        </header>
        <section className="flex flex-col h-full mx-[1in] ">
          <div className="text-sm my-[14px]">
            Dengan ini, <span className="font-bold">PARA PIHAK</span> sepakat
            untuk melaksanakan serah terima hasil Pekerjaan dengan ketentuan
            sebagai berikut:
          </div>
          <div className="text-sm flex gap-4">
            <div>1.</div>
            <div className="text-justify">
              PIHAK PERTAMA dengan ini telah menyelesaikan Pekerjaan instalasi
              Solar Panel untuk PIHAK KEDUA di lokasi dengan alamat tersebut di
              atas sesuai dengan kesepakatan. Saat ini, Solar Panel telah
              terpasang dan dapat berfungsi dengan baik, namun belum diaktifkan
              oleh PIHAK PERTAMA menunggu proses Net Metering selesai dilakukan
              oleh Perusahaan Listrik Negara (PLN) sesuai dengan peraturan
              perundang-undangan pemanfaatan Pembangkit Listrik Tenaga Surya
              yang berlaku di Indonesia.
            </div>
          </div>
          <div className="text-sm flex gap-4 mt-3">
            <div>2.</div>
            <div className="text-justify">
              Melalui{" "}
              <span className="font-bold">
                Berita Acara Penyelesaian Pekerjaan
              </span>{" "}
              ini, maka <span className="font-bold">PIHAK PERTAMA</span> telah
              menyelesaikan kewajiban dan menyerahkan hasil Pekerjaan kepada{" "}
              <span className="font-bold">PIHAK KEDUA</span> sebagaimana
              dibuktikan dengan dokumen-dokumen terlampir di dalam Berita Acara
              Penyelesaian Pekerjaan ini.
            </div>
          </div>
          <div className="text-sm mt-[14px]">
            Demikian Berita Acara Penyelesaian Pekerjaan ini dibuat oleh PIHAK
            PERTAMA dengan diketahui dan disetujui oleh PIHAK KEDUA untuk dapat
            dipergunakan sebagaimana mestinya.
          </div>
          <div className="font-bold text-lg mt-14 text-center">PARA PIHAK,</div>
          <div className="flex justify-center gap-40 font-bold text-sm mt-7 text-center">
            <div>PIHAK PERTAMA</div>
            <div>PIHAK KEDUA</div>
          </div>
          <div className="flex justify-center gap-40 font-bold text-sm mt-28 text-center">
            <div>_______________</div>
            <div>_______________</div>
          </div>
        </section>
        <footer>
          <img src={footer} alt="footer" />
        </footer>
        <header>
          <img src={header} alt="header" />
        </header>
        <section className="flex flex-col h-full mx-[1in] ">
          <div className="text-lg font-bold">
            LAMPIRAN 1 - DAFTAR PEKERJAAN PEMASANGAN SOLAR PANEL PV SUNTERRA
          </div>
          <div>
            <table className="w-full">
              <thead className="bg-[#008000] text-white font-bold">
                <tr>
                  <th rowSpan={2}>NO</th>
                  <th rowSpan={2}>TASK LIST</th>
                  <th rowSpan={2}>STATUS</th>
                  <th colSpan={2}>PROGRESS REPORT</th>
                  <th rowSpan={2}>STATUS</th>
                  <th rowSpan={2}>REMARKS</th>
                </tr>
                <tr>
                  <th>STARTING DATE</th>
                  <th>END DATE</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td>1</td>
                  <td>Proses Digital Survey</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Pelaksanaan Off Site Survey</td>
                  <td></td>
                  <td>{formData.duaStart}</td>
                  <td>{formData.duaEnd}</td>
                  <td>OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pengajuan Penawaran Harga</td>
                  <td></td>
                  <td>{formData.tigaStart}</td>
                  <td>{formData.tigaEnd}</td>
                  <td>OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Detailed Design Engineering Solar Panel</td>
                  <td></td>
                  <td>{formData.empatStart}</td>
                  <td>{formData.empatEnd}</td>
                  <td>OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Pengurusan Permit Net Metering</td>
                  <td></td>
                  <td>{formData.limaStart}</td>
                  <td>{formData.limaEnd}</td>
                  <td>OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pengerjaan Instalasi</td>
                  <td></td>
                  <td>{formData.enamStart}</td>
                  <td>{formData.enamEnd}</td>
                  <td>OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Test & Commissioning</td>
                  <td></td>
                  <td>{formData.tujuhStart}</td>
                  <td>{formData.tujuhEnd}</td>
                  <td>OK</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-lg font-bold mt-4">CONDITION CHECKLIST</div>
          <div>
            <table className="w-full">
              <thead className="bg-[#008000] text-white font-bold">
                <tr>
                  <th>NO</th>
                  <th>DESCRIPTION</th>
                  <th>PASS</th>
                  <th>FAIL</th>
                  <th>REMARKS</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td>1</td>
                  <td>Clean/ no debris on PV module surface</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>No visible Damage on PV Module</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>No Corrosion on PV mounting structure</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Structure stable</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PV connector are connected</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>No abnormal operation</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Cable string area connected</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Outdoor accessories specification</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Grounding system</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>No accident during activity</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Connected to WiFi</td>
                  <td className="text-center">V</td>
                  <td></td>
                  <td>
                    <div>{formData.wifiId}</div>
                    <div>{formData.wifiPass}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer>
          <img src={footer} alt="footer" />
        </footer>
        <header>
          <img src={header} alt="header" />
        </header>
        <section className="flex flex-col h-full mx-[1in] ">
          <div className="text-lg font-bold">
            LAMPIRAN 2 - LAPORAN AKHIR PEKERJAAN PROJECT TEDY KOMPONEN UTAMA
            FASILITAS PLTS
          </div>
          <div>
            <table className="w-full">
              <thead className="bg-[#008000] text-white font-bold">
                <tr>
                  <th>NO</th>
                  <th>COMPONENTS</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td>1</td>
                  <td>Proses Digital Survey</td>
                  <td className="text-center">10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <table className="w-full">
              <thead className="bg-[#008000] text-white font-bold">
                <tr>
                  <th colSpan={3}>INVERTER & DTU SERIAL NUMBER</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td>PV Module</td>
                  <td>dynamic</td>
                  <td>dynamic</td>
                </tr>
                <tr>
                  <td>Inverter</td>
                  <td colSpan={2}>{formData.inverter}</td>
                </tr>
                <tr>
                  <td>DTU</td>
                  <td colSpan={2}>dynamic</td>
                </tr>
                <tr>
                  <td>Account</td>
                  <td colSpan={2}>
                    <div>User :</div>
                    <div>Pass :</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer>
          <img src={footer} alt="footer" />
        </footer>
        <header>
          <img src={header} alt="header" />
        </header>
        <section className="flex flex-col h-full mx-[1in] ">
          <div className="text-lg font-bold">
            LAMPIRAN 3 - DOKUMENTASI PEMASANGAN & PRODUK
          </div>
          <div>
            <table className="w-full">
              <thead className="bg-[#008000] text-white font-bold">
                <tr>
                  <th>Dokumentasi </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="flex justify-center">
                    <div>
                      <input
                        className="print:hidden"
                        type="file"
                        onChange={handleFileSelect}
                      />
                      {image && <img src={image} alt="Uploaded" />}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer>
          <img src={footer} alt="footer" />
        </footer>
      </div>
      <div className="print:hidden flex flex-col gap-4 p-10 text-sm bg-slate-500 h-[1080PX]">
        <div>
          <div className="text-white">Nomor Surat</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              name="no"
              className="shadow-md rounded-lg p-2"
              placeholder="No"
              value={formData.no}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bulan"
              className="shadow-md rounded-lg p-2"
              placeholder="Bulan"
              value={formData.bulan}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tanggal"
              className="shadow-md rounded-lg p-2"
              placeholder="Tanggal"
              value={formData.tanggal}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="text-white">Tanggal Deskripsi</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              name="hariDesc"
              className="shadow-md rounded-lg p-2"
              placeholder="Hari"
              value={formData.hariDesc}
              onChange={handleChange}
            />

            <input
              type="text"
              name="tanggalDesc"
              className="shadow-md rounded-lg p-2"
              placeholder="Tanggal"
              value={formData.tanggalDesc}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bulanDesc"
              className="shadow-md rounded-lg p-2"
              placeholder="Bulan"
              value={formData.bulanDesc}
              onChange={handleChange}
            />
            <input
              type="text"
              name="tahunDesc"
              className="shadow-md rounded-lg p-2"
              placeholder="Tahun"
              value={formData.tahunDesc}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="text-white">Pihak Pertama</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Nama"
              name="namaPertama"
              value={formData.namaPertama}
              onChange={handleChange}
            />

            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Jabatan"
              name="jabatan"
              value={formData.jabatan}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="text-white">Pihak Kedua</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Nama"
              name="namaKedua"
              value={formData.namaKedua}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Status Kepemilikan Bangunan"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg text-white">Lampiran 1</div>

          <div className="flex items-center gap-4">
            <div className="text-white">Pelaksanaan Off Site Survey</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
              name="duaStart"
              value={formData.duaStart}
              onChange={handleChange}
            />
            <input
              type="text"
              name="duaEnd"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
              value={formData.duaEnd}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Pengajuan Penawaran Harga</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
              name="tigaStart"
              value={formData.tigaStart}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
              name="tigaEnd"
              value={formData.tigaEnd}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">
              Detailed Design Engineering Solar Panel
            </div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
              name="empatStart"
              value={formData.empatStart}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
              name="empatEnd"
              value={formData.empatEnd}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Pengurusan Permit Net Metering</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
              name="limaStart"
              value={formData.limaStart}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
              name="limaEnd"
              value={formData.limaEnd}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Pengerjaan Instalasi</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
              name="enamStart"
              value={formData.enamStart}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
              name="enamEnd"
              value={formData.enamEnd}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Test & Commissioning</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
              name="tujuhStart"
              value={formData.tujuhStart}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
              name="tujuhEnd"
              value={formData.tujuhEnd}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Connected to WiFi</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="SSID"
              name="wifiId"
              value={formData.wifiId}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Pass"
              name="wifiPass"
              value={formData.wifiPass}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg text-white">Lampiran 2</div>
          <div className="flex items-center gap-4">
            <div className="text-white">Component 1</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Components Name"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Quantity"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">PV Module</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="PV Module"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Inverter</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Inverter"
              name="inverter"
              value={formData.inverter}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">DTU</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="DTU"
              name="dtu"
              value={formData.dtu}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Account</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="User"
              name="accountUser"
              value={formData.accountUser}
              onChange={handleChange}
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Pass"
              name="accountPass"
              value={formData.accountPass}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
