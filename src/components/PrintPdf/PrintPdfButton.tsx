import { Button } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PrintPdf } from './PrintPdf';
import { FormShape } from '../../types';

export const PrintPdfButton = ({ formValues }: { formValues: FormShape }) => {
  const fileName =
    formValues.jmeno && formValues.prijmeni
      ? `${formValues.jmeno}-${formValues.prijmeni}.pdf`
      : 'nabidka.pdf';

  return (
    <PDFDownloadLink document={<PrintPdf formValues={formValues} />} fileName={fileName}>
      {/* @ts-ignore */}
      {({ loading }) => (
        <Button type="button" variant="contained" color="primary" fullWidth>
          {loading ? 'Generování PDF...' : '📄 Stáhnout PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
