import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { PrintPdfButton } from './PrintPdf/PrintPdfButton';
import { destovkaOptions, rekuperaceVzdOptions, solaryOptions, vytapeniOptions } from './options';
import { calculateSubsidy, CONSTS } from './methods';
import NumberInput from './NumberInput';
import { FormShape } from '../types';
import { NumberFormatted } from './NumberFormatted';

export const FormOdpb = ({
  formValues,
  setformValues,
}: {
  formValues: FormShape;
  setformValues: (formValues: FormShape) => void;
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!name) {
      return;
    }

    const valueFormatted = isNaN(parseInt(value)) ? value : parseInt(value);

    const newformValues = {
      ...formValues,
      [name]: valueFormatted,
    };

    setformValues(calculateSubsidy(newformValues));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    if (!name) {
      return;
    }

    const newformValues = {
      ...formValues,
      [name]: value,
    };

    setformValues(calculateSubsidy(newformValues));
  };

  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (!name) {
      return;
    }

    const newformValues = {
      ...formValues,
      [name]: checked,
    };

    setformValues(calculateSubsidy(newformValues));
  };

  useEffect(() => {
    setformValues(calculateSubsidy(formValues));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      {/* Name Fields */}
      <Grid container spacing={1} mb={1}>
        <Grid item xs={4} display="flex" justifyContent="center">
          <FormControlLabel
            control={
              <Switch
                name="addProjectCost"
                checked={formValues.addProjectCost}
                onChange={handleSwitchChange}
              />
            }
            label="Projekce"
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Jméno klienta"
            name="jmeno"
            value={formValues.jmeno}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Příjmení klienta"
            name="prijmeni"
            value={formValues.prijmeni}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      {/* Oblast A */}

      <Typography variant="body1" fontWeight="bold" textAlign="center">
        Oblast A
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
        Zateplení
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <NumberInput
            label="Fasáda"
            name="fasada"
            value={formValues.fasada}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Střecha"
            name="strecha"
            value={formValues.strecha}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Půda"
            name="puda"
            value={formValues.puda}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Podlaha"
            name="podlaha"
            value={formValues.podlaha}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Sklep"
            name="sklep"
            value={formValues.sklep}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Stěna"
            name="stena"
            value={formValues.stena}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>
      </Grid>

      <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
        Výplň otvorů
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <NumberInput
            label="Dveře"
            name="dvere"
            value={formValues.dvere}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Okna"
            name="okna"
            value={formValues.okna}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <NumberInput
            label="Stínění"
            name="stineni"
            value={formValues.stineni}
            onChange={handleInputChange}
            placeholder="m²"
            suffix=" m²"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">
            Dotace:{' '}
            <strong>
              <NumberFormatted value={Math.min(formValues.dotaceOblastA ?? 0, CONSTS.maxDotaceA)} />
              ,-
            </strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Oblast C */}
      <Typography variant="body1" fontWeight="bold" textAlign="center">
        Oblast C
      </Typography>

      <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
        Technologie:
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="vytapeni">Zdroj vytápění</InputLabel>
            <Select
              name="vytapeni"
              id="vytapeni"
              labelId="vytapeni"
              value={formValues.vytapeni}
              onChange={handleSelectChange}
              label="Zdroj vytápění"
            >
              {vytapeniOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="solary">Solární elektrárna</InputLabel>
            <Select
              name="solary"
              id="solary"
              labelId="solary"
              value={formValues.solary}
              onChange={handleSelectChange}
              label="Solární elektrárna"
            >
              {solaryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            control={<Switch name="tigo" checked={formValues.tigo} onChange={handleSwitchChange} />}
            label="TIGO"
          />
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Switch name="infigy" checked={formValues.infigy} onChange={handleSwitchChange} />
            }
            label="Infigy"
          />
        </Grid>

        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Switch
                name="nabijeciStanice"
                checked={formValues.nabijeciStanice}
                onChange={handleSwitchChange}
              />
            }
            label="Wallbox Solax 11 kW"
          />
        </Grid>

        <Grid item xs={9} md={10}>
          <FormControl>
            <InputLabel id="rekuperaceVzduchu">Rekuperace vzduchu</InputLabel>
            <Select
              name="rekuperaceVzduchu"
              id="rekuperaceVzduchu"
              labelId="rekuperaceVzduchu"
              value={formValues.rekuperaceVzduchu.toString()}
              onChange={handleSelectChange}
              label="Rekuperace vzduchu"
            >
              {rekuperaceVzdOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3} md={2}>
          <NumberInput
            label="Množství"
            name="rekuperaceVzduchuMnozstvi"
            value={formValues.rekuperaceVzduchuMnozstvi}
            onChange={handleInputChange}
            suffix="x"
          />
        </Grid>

        <Grid item xs={9} md={10}>
          <FormControlLabel
            control={
              <Switch
                name="rekuperaceVody"
                checked={formValues.rekuperaceVody}
                onChange={handleSwitchChange}
              />
            }
            label="Rekuperace vody"
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">
            Dotace:{' '}
            <strong>
              <NumberFormatted value={formValues.dotaceOblastC} />
              ,-
            </strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Oblast D */}

      <Typography variant="body1" fontWeight="bold" textAlign="center" sx={{ mt: 1, mb: 1 }}>
        Oblast D
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel id="destovka">Dešťová voda</InputLabel>
            <Select
              name="destovka"
              id="destovka"
              labelId="destovka"
              value={formValues.destovka}
              onChange={handleSelectChange}
              label="Dešťová voda"
            >
              {destovkaOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1">
            Dotace:{' '}
            <strong>
              <NumberFormatted value={formValues.dotaceOblastD} />
              ,-
            </strong>
          </Typography>
        </Grid>
      </Grid>

      {/* Výsledek */}
      <Typography variant="body1" fontWeight="bold" textAlign="center" sx={{ mt: 1, mb: 1 }}>
        Výsledek
      </Typography>

      <Grid container spacing={1} mb={10}>
        <Grid item xs={3}>
          <NumberInput
            label="Kombinační"
            name="kombinacniBonus"
            value={formValues.kombinacniBonus}
            onChange={handleInputChange}
            readonly
            suffix=",-"
          />
        </Grid>

        <Grid item xs={3}>
          <NumberInput
            label="Děti plná péče"
            name="detiPlna"
            value={formValues.detiPlna}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={3}>
          <NumberInput
            label="Děti střídavá péče"
            name="detiPolovina"
            value={formValues.detiPolovina}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3} display="flex" justifyContent="center">
          <FormControlLabel
            control={<Switch name="obec" checked={formValues.obec} onChange={handleSwitchChange} />}
            label="Obec"
          />
        </Grid>

        <Grid item xs={3}>
          <NumberInput
            label="Dotace"
            name="dotaceTotal"
            value={formValues.dotaceTotal}
            onChange={handleInputChange}
            readonly
            suffix=",-"
          />
        </Grid>

        <Grid item xs={3}>
          <NumberInput
            label="Rozpočet"
            name="costTotal"
            value={formValues.costTotal}
            onChange={handleInputChange}
            readonly
            suffix=",-"
          />
        </Grid>

        <Grid item xs={3}>
          <NumberInput
            label="Úprava rozpočtu"
            name="customCost"
            value={formValues.customCost}
            onChange={handleInputChange}
            suffix=",-"
            allowNegative
          />
        </Grid>
        <Grid item xs={3}>
          <NumberInput
            label="Doplatek"
            name="costTotalClient"
            value={formValues.costTotalClient || (formValues.costTotal && '0')}
            onChange={handleInputChange}
            readonly
            suffix=",-"
          />
        </Grid>

        <Grid item xs={3} marginLeft="auto">
          <PrintPdfButton formValues={formValues} />
        </Grid>
      </Grid>
    </form>
  );
};
