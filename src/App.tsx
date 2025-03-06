import { useState } from 'react';
import { Container, Button, Grid } from '@mui/material';
import { FormOdpb } from './components/FormOdpb';
import { FormShape } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('odpb');

  const [formValues, setformValues] = useState<FormShape>({
    jmeno: '',
    prijmeni: '',
    fasada: 0,
    strecha: 0,
    puda: 0,
    podlaha: 0,
    sklep: 0,
    stena: 0,
    dvere: 0,
    okna: 0,
    stineni: 0,
    solary: '',
    infigy: false,
    tigo: false,
    vytapeni: '',
    rekuperaceVody: false,
    rekuperaceVzduchu: 0,
    rekuperaceVzduchuMnozstvi: 0,
    destovka: '',
    nabijeciStanice: false,
    kombinacniBonus: 0,
    detiPlna: 0,
    detiPolovina: 0,
    obec: false,
    costClientA: 0,
    dotaceOblastA: 0,
    costClientC: 0,
    dotaceOblastC: 0,
    costClientD: 0,
    dotaceOblastD: 0,
    dotaceTotal: 0,
    costTotal: 0,
    costTotalClient: 0,
    monthlyPayment: 0,
    addProjectCost: false,
    customCost: 0,
  });

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            variant={activeTab === 'odpb' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('odpb')}
            fullWidth
          >
            ODPB
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant={activeTab === 'light' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('light')}
            fullWidth
            disabled
          >
            LIGHT
          </Button>
        </Grid>

        <Grid item xs={12}>
          {activeTab === 'odpb' && (
            <FormOdpb formValues={formValues} setformValues={setformValues} />
          )}
        </Grid>

        {/* <Grid item xs={12}>
          <PDFViewer width="100%" height={1200}>
            <PrintPdf formValues={formValues} />
          </PDFViewer>
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default App;
