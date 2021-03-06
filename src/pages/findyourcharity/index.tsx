import React, { useState, useEffect, useCallback } from 'react';
import { MdExpandMore } from 'react-icons/md';

import {
  Container,
  SelectContainer,
  Background,
  CardsContainer,
  Card,
  TagsGrid,
} from './styles';

import api from '../../services/api';

import Header from '../../components/header';

interface Charity {
  id: number;
  title: string;
  contactUrl: string;
  organization: {
    name: string;
  };
  image: {
    imagelink: [
      {
        url: string;
      },
      {
        url: string;
      },
      {
        url: string;
      },
      {
        url: string;
      },
      {
        url: string;
      },
      {
        url: string;
      },
    ];
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

interface Keys {
  [key: string]: string;
}

const FindYourCharity: React.FC = () => {
  const noRepetitiveStrings = useCallback((arr: string[]) => {
    const noStringsRepeatingOnArray = arr.filter((str, index) => {
      return arr.indexOf(str) === index;
    });

    return noStringsRepeatingOnArray;
  }, []);

  const [charities, setCharities] = useState<Charity[]>([]);

  const [cardsInfo, setCardsInfo] = useState<Charity[]>([]);

  const [countryName, setCountryName] = useState<string[]>([]);

  const [themeName, setThemeName] = useState<string[]>([]);

  const [organizationName, setOrganizationName] = useState<string[]>([]);

  useEffect(() => {
    async function loadCharities(): Promise<void> {
      const response = await api.get(
        `/public/projectservice/all/projects/active?api_key=${process.env.REACT_APP_API_KEY}`,
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.data.projects.project) {
        const getProjectFromAPI: Charity[] = response.data.projects.project;

        setCharities(getProjectFromAPI);
        setCardsInfo(getProjectFromAPI);

        const arrayOfOrganizationsNames = getProjectFromAPI.map(
          charity => charity.organization.name,
        );
        setOrganizationName(noRepetitiveStrings(arrayOfOrganizationsNames));

        const arrayOfThemesNames: string[] = [];
        getProjectFromAPI.map(charity =>
          charity.themes.theme.map(names =>
            arrayOfThemesNames.push(names.name),
          ),
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
    }

    loadCharities();
  }, [noRepetitiveStrings]);

  const [selectedValue, setSelectedValue] = useState<string>('');

  const getFilterValue = useCallback((e: any) => {
    const { value } = e.target;

    setSelectedValue(value);
  }, []);

  const [filteredValues, setFilteredValues] = useState<string>('');

  const handleValuesFiltered = useCallback(
    (e: any) => {
      const { value: objectKeyValue } = e.target;
      const { id: secondLevelObjectKey } = e.target;
      const { title: objectKeyName } = e.target;
      const firstLevelObjectKey = selectedValue;

      setFilteredValues(objectKeyValue);

      let charitiesFiltered: Charity[] = [];

      if (charities.length > 0) {
        if (typeof charities[0][firstLevelObjectKey] === 'object') {
          // object
          if (
            typeof charities[0][firstLevelObjectKey][secondLevelObjectKey] ===
            'object'
          ) {
            // object
            charities.filter(charity =>
              charity[firstLevelObjectKey][
                secondLevelObjectKey
              ].map((key: Keys) =>
                key[objectKeyName] == objectKeyValue
                  ? charitiesFiltered.push(charity)
                  : false,
              ),
            );
          } else {
            // string ou number
            charitiesFiltered = charities.filter(
              charity =>
                charity[firstLevelObjectKey][objectKeyName] == objectKeyValue,
            );
          }
        } else {
          // string ou number
          charitiesFiltered = charities.filter(
            charity => charity[firstLevelObjectKey] == objectKeyValue,
          );
        }

        if (charitiesFiltered) {
          setCardsInfo(charitiesFiltered);
        }
      }
    },
    [charities, selectedValue],
  );

  useEffect(() => {
    function reloadCards(): void {
      if (selectedValue == 'filterby' || filteredValues === '0') {
        setCardsInfo(charities);
      }
    }

    reloadCards();
  }, [charities, filteredValues, selectedValue]);

  return (
    <>
      <Header />
      <Background>
        <h1>FIND YOUR PERFECT CHARITY</h1>
        <MdExpandMore size={65} color="#ff6f00" />
      </Background>
      <Container>
        <h3>FIND YOUR CHARITY</h3>
        <SelectContainer>
          <select onClick={getFilterValue}>
            <option value="filterby">Filter By</option>
            <option value="organization">Organization Name</option>
            <option value="countries">Operates In</option>
            <option value="themes">Themes</option>
          </select>

          {selectedValue === 'organization' && (
            <select id="" title="name" onClick={handleValuesFiltered}>
              <option value="0">Select Organization</option>
              {organizationName.map(name => (
                <option value={name}>{name}</option>
              ))}
            </select>
          )}

          {selectedValue === 'countries' && (
            <select id="country" title="name" onClick={handleValuesFiltered}>
              <option value="0">Countries</option>
              {countryName.map(country => (
                <option value={country}>{country}</option>
              ))}
            </select>
          )}

          {selectedValue === 'themes' && (
            <select id="theme" title="name" onClick={handleValuesFiltered}>
              <option value="0">Charities Themes</option>
              {themeName.map(themes => (
                <option value={themes}>{themes}</option>
              ))}
            </select>
          )}
        </SelectContainer>
      </Container>
      <CardsContainer>
        {cardsInfo.map(charity => (
          <Card key={charity.id}>
            <a
              href={charity.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={charity.image.imagelink[3].url}
                alt={charity.organization.name}
              />
            </a>

            <h4>{charity.organization.name}</h4>

            <div>
              <h5> Project Name </h5>
              <p>{charity.title}</p>
            </div>

            <div>
              <h5> Themes </h5>
              <TagsGrid>
                {charity.themes.theme.map(theme => (
                  <span key={theme.name}>{theme.name}</span>
                ))}
              </TagsGrid>
            </div>

            <div>
              <h5> Operates In </h5>
              <TagsGrid>
                {charity.countries.country.map(country => (
                  <span key={country.name}>{country.name}</span>
                ))}
              </TagsGrid>
            </div>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
};

export default FindYourCharity;
