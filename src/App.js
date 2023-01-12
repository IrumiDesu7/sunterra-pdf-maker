import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfFile from "./PdfFile";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    no: "",
    bulan: "",
    tanggal: "",
    namaPertama: "",
    jabatan: "",
    namaKedua: "",
    alamat: "",
    status: "",
  });

  const [savedData, setSavedData] = useState({
    no: "",
    bulan: "",
    tanggal: "",
    namaPertama: "",
    jabatan: "",
    namaKedua: "",
    alamat: "",
    status: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function saveChanges() {
    setSavedData(formData);
  }

  return (
    <div className="h-full flex justify-center ">
      <div className="flex flex-col gap-4 p-10 text-sm bg-slate-500 ">
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
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Pengajuan Penawaran Harga</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
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
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Pengurusan Permit Net Metering</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Pengerjaan Instalasi</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Test & Commissioning</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Starting Date"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="End Date"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Connected to WiFi</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="SSID"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Pass"
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
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">DTU</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="DTU"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white">Account</div>
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="User"
            />
            <input
              type="text"
              className="shadow-md rounded-lg p-2"
              placeholder="Pass"
            />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-4 p-4 sticky">
        <button
          className="text-white bg-slate-800 p-3 rounded-lg hover:bg-slate-300 hover:text-black"
          onClick={saveChanges}
        >
          Save Changes
        </button>
        <PDFDownloadLink document={<PdfFile data={savedData} />} fileName="pdf">
          {({ loading }) =>
            loading ? (
              <button
                disabled={true}
                className="text-white bg-slate-400 p-3 rounded-lg hover:bg-slate-300 hover:text-black"
              >
                Generating PDF
              </button>
            ) : (
              <button className="text-white bg-slate-800 p-3 rounded-lg hover:bg-slate-300 hover:text-black">
                Generate PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
