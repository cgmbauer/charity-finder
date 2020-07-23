import React, { useState, useEffect, useCallback } from 'react';
import { MdExpandMore } from 'react-icons/md';

import {
  Container,
  HorizontalLine,
  SelectContainer,
  Background,
  CardsContainer,
  Card,
} from './styles';

import api from '../../services/api';

import cardImg from '../../assets/cardDummy.jpg';

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
  const noRepetitiveStrings = useCallback((arr: string[]) => {
    const noStringsRepeatingOnArray = arr.filter((str, index) => {
      return arr.indexOf(str) === index;
    });

    return noStringsRepeatingOnArray;
  }, []);

  const [charities, setCharities] = useState<Charity[]>([]);

  const [countryName, setCountryName] = useState<string[]>([]);

  const [themeName, setThemeName] = useState<string[]>([]);

  const [organizationName, setOrganizationName] = useState<string[]>([]);

  useEffect(() => {
    async function loadCharities(): Promise<void> {
      const response = await api.get(
        '/public/projectservice/all/projects/active?api_key=API_KEY',
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
  }, [noRepetitiveStrings]);

  const [selectedValue, setSelectedValue] = useState<string>('');

  const checkValues = useCallback((e: any) => {
    const { value } = e.target;

    setSelectedValue(value);
  }, []);

  return (
    <>
      <Header />
      <Background>
        <h1>FIND YOUR PERFECT CHARITY</h1>
        <MdExpandMore size={65} color="#ff6f00" />
      </Background>
      <Container>
        <h3>FIND YOUR CHARITY</h3>
        <HorizontalLine />
        <SelectContainer>
          <select onClick={checkValues}>
            <option value="">Select Filter</option>
            <option value="OrganizationName">Organization Name</option>
            <option value="OperatesIn">Operates In</option>
            <option value="Themes">Themes</option>
          </select>

          {selectedValue === 'OrganizationName' && (
            <select>
              <option value="">Organizations Names</option>
              {organizationName.map(name => (
                <option value={name}>{name}</option>
              ))}
            </select>
          )}

          {selectedValue === 'OperatesIn' && (
            <select>
              <option value="">Countries</option>
              {countryName.map(country => (
                <option value={country}>{country}</option>
              ))}
            </select>
          )}

          {selectedValue === 'Themes' && (
            <select>
              <option value="">Charities Themes</option>
              {themeName.map(themes => (
                <option value={themes}>{themes}</option>
              ))}
            </select>
          )}
        </SelectContainer>
      </Container>
      <CardsContainer>
        <Card>
          <a href="">
            <img src={cardImg} alt="happy dog" />
          </a>
          <h4>ANIMAL'S FRIENDS</h4>
          <ul>
            <li>Project Name: Rescuing animals.</li>
            <li>Themes: Rescuing animals.</li>
            <li>Operates in: Brazil</li>
          </ul>
        </Card>

        <Card>
          <a href="">
            <img src={cardImg} alt="happy dog" />
          </a>
          <h4>ANIMAL'S FRIENDS</h4>
          <ul>
            <li>Project Name: Rescuing animals.</li>
            <li>Themes: Rescuing animals.</li>
            <li>Operates in: Brazil</li>
          </ul>
        </Card>

        <Card>
          <a href="">
            <img src={cardImg} alt="happy dog" />
          </a>
          <h4>ANIMAL'S FRIENDS</h4>
          <ul>
            <li>Project Name: Rescuing animals.</li>
            <li>Themes: Rescuing animals.</li>
            <li>Operates in: Brazil</li>
          </ul>
        </Card>
      </CardsContainer>
    </>
  );
};

export default FindYourCharity;
