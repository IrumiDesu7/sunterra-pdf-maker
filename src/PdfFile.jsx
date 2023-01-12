import { Document } from "@react-pdf/renderer";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const PdfFile = (props) => {
  return (
    <Document>
      <Page1 data={props} />
      <Page2 />
      <Page3 />
    </Document>
  );
};

export default PdfFile;
