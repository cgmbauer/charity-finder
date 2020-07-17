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

interface Names {
  name: string;
}

const FindYourCharity: React.FC = () => {
  const SelectOption = (props: any) => (
    <option value="">{props.defaultOption}</option>
  );

  const [charities, setCharities] = useState<Charity[]>([]);

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

      const getProjectFromAPI = response.data.projects.project;

      setCharities(getProjectFromAPI);
      console.log(getProjectFromAPI);
    }

    loadCharities();
  }, []);

  function noRepetitiveStrings(arr: string[]): string[] {
    const noStringsRepeatingOnArray = arr.filter((str, index) => {
      return arr.indexOf(str) === index;
    });

    return noStringsRepeatingOnArray;
  }

  return (
    <>
      <Header />
      <Container>
        <h3>FIND YOUR CHARITY</h3>
        <HorizontalLine />
        <SelectContainer>
          <select>
            <SelectOption defaultOption="Organization Name" />
          </select>

          <select>
            <SelectOption defaultOption="Operates In" />
          </select>

          <select>
            <SelectOption defaultOption="Themes" />
          </select>
        </SelectContainer>
      </Container>
    </>
  );
};

export default FindYourCharity;
