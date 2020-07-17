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

  return (
    <>
      <Header />
      <Container>
        <h3>FIND YOUR CHARITY</h3>
        <HorizontalLine />
        <SelectContainer>
          <select>
            <option value="">Organization Name</option>
            {organizationName.map(name => (
              <option value={name}>{name}</option>
            ))}
          </select>

          <select>
            <option value="">Operates In</option>
            {countryName.map(country => (
              <option value={country}>{country}</option>
            ))}
          </select>

          <select>
            <option value="">Themes</option>
            {themeName.map(themes => (
              <option value={themes}>{themes}</option>
            ))}
          </select>
        </SelectContainer>
      </Container>
    </>
  );
};

export default FindYourCharity;
