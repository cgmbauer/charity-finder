import React, { useState, useEffect } from 'react';
import { Container, HorizontalLine, SelectContainer } from './styles';

import api from '../../services/api';

// import cardImg from '../../assets/cardy_dummy.jpg';

import Header from '../../components/header';

interface Charity {
  id: string;
  organization: {
    name: string;
  };
  countries: {
    country: [
      {
        name: string;
      },
    ];
  };
  themes: {
    theme: [
      {
        name: string;
      },
    ];
  };
}

const FindYourCharity: React.FC = () => {
  // const SelectOption = (props: any) => (
  //   <option value="">{props.defaultOption}</option>
  // );

  function noRepetitiveStrings(arr: string[]): string[] {
    const noStringsRepeatingOnArray = arr.filter((str, index) => {
      return arr.indexOf(str) === index;
    });

    return noStringsRepeatingOnArray;
  }

  const [charities, setCharities] = useState<Charity[]>([]);

  const [countryName, setCountryName] = useState<string[]>([]);

  const [themeName, setThemeName] = useState<string[]>([]);

  const [organizationName, setOrganizationName] = useState<string[]>([]);

  useEffect(() => {
    async function loadCharities(): Promise<void> {
      const response = await api.get(
        '/public/projectservice/all/projects/active?api_key=5772bea8-1d42-4825-b726-17b12f1cd23e',
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      const getProjectFromAPI: Charity[] = response.data.projects.project;

      setCharities(getProjectFromAPI);
      console.log(getProjectFromAPI);

      const arrayOfOrganizationsNames = getProjectFromAPI.map(
        charity => charity.organization.name,
      );
      setOrganizationName(noRepetitiveStrings(arrayOfOrganizationsNames));

      const arrayOfThemesNames: string[] = [];
      getProjectFromAPI.map(charity =>
        charity.themes.theme.map(names => arrayOfThemesNames.push(names.name)),
      );
      setThemeName(noRepetitiveStrings(arrayOfThemesNames));

      const arrayOfCountriesNames: string[] = [];
      getProjectFromAPI.map(charity =>
        charity.countries.country.map(countries =>
          arrayOfCountriesNames.push(countries.name),
        ),
      );
      setCountryName(noRepetitiveStrings(arrayOfCountriesNames));
    }

    loadCharities();
  }, []);

  const [orgNameBoolean, setOrgNameBoolean] = useState<boolean>(false);

  const [operatesInBoolean, setOperatesInBoolean] = useState<boolean>(false);

  const [themeBoolean, setThemeBoolean] = useState<boolean>(false);

  function giveMeValue(e: any): void {
    const { value } = e.target;

    switch (value) {
      case 'OrganizationName':
        setOrgNameBoolean(true);
        setOperatesInBoolean(false);
        setThemeBoolean(false);
        break;
      case 'OperatesIn':
        setOrgNameBoolean(false);
        setOperatesInBoolean(true);
        setThemeBoolean(false);
        break;
      case 'Themes':
        setOrgNameBoolean(false);
        setOperatesInBoolean(false);
        setThemeBoolean(true);
        break;
      default:
        setOrgNameBoolean(false);
        setOperatesInBoolean(false);
        setThemeBoolean(false);
        break;
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h3>FIND YOUR CHARITY</h3>
        <HorizontalLine />
        <SelectContainer>
          <select onClick={giveMeValue}>
            <option value="Select">Select Filter</option>
            <option value="OrganizationName">Organization Name</option>
            <option value="OperatesIn">Operates In</option>
            <option value="Themes">Themes</option>
          </select>

          {orgNameBoolean && (
            <select>
              {organizationName.map(name => (
                <option value={name}>{name}</option>
              ))}
            </select>
          )}

          {operatesInBoolean && (
            <select>
              {countryName.map(country => (
                <option value={country}>{country}</option>
              ))}
            </select>
          )}

          {themeBoolean && (
            <select>
              {themeName.map(themes => (
                <option value={themes}>{themes}</option>
              ))}
            </select>
          )}
        </SelectContainer>
      </Container>
    </>
  );
};

export default FindYourCharity;
