<p align="center"> 
  <img src='https://github.com/cgmbauer/assets/blob/master/logo/CharityFinderLogo.jpg' alt='Charity Finder logo' width="400px" />
</p>

<p align="center">
  <a href="https://github.com/cgmbauer/charity-finder/blob/master/README.md">PT-BR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/cgmbauer/charity-finder/blob/master/README.ENG.md">ENG</a>&nbsp;&nbsp;&nbsp;
</p>

# Charity Finder

Aplicação web feita para facilitar o engajamento do usuário com projetos de caridades.  
Com esta plataforma, o usuário poderá encontrar projetos de caridades espalhados pelo mundo inteiro, filtrando-os por "Local de Atuação", "Temas" e "Nome da Instituição".   
Assim fica bem mais fácil encontrar aquele projeto com o qual você mais se identifica! <br></br>

![Chairy Finder gif](https://github.com/cgmbauer/assets/blob/master/gifs/charityfinder.gif)

## Índice
1. [Ferramentas](#Ferramentas)
2. [Como Utilizar?](#Como_Utilizar)
    1. [Pré-requesitos](#Pre-requesitos)
    2. [Instalando](#Instalando)
    3. [Utilizando](#Utilizando)
3. [Agradecimentos](#Agradecimentos)  
4. [Dados API](#Dados_API)

## Ferramentas: <a name="Ferramentas"></a>

- [ReactJS v.16.13.1](https://reactjs.org/)

- [Axios v.0.19.2](https://github.com/axios/axios)

- [Styled Components](https://github.com/styled-components/styled-components)

- [Typescript](https://www.typescriptlang.org/)

- [GlobalGiving API](https://www.globalgiving.org/api/getting-started/)

## Como utilizar? <a name="Como_Utilizar"></a>

Se você está interessad@ em utilizar está página de web, siga os passos abaixo. Se encontrar algum problema, sinta-se a vontade para entrar em contato!

### Pré-requesitos: <a name="Pre-requesitos"></a>

- [yarn v.1.x.x](https://classic.yarnpkg.com/en/docs/install)

### Instalando: <a name="Instalando"></a>

1. Clone este repositório ```git clone https://github.com/cgmbauer/charity-finder.git```.
2. Entre na pasta recém criada utilizando o terminal ```cd charityfinder```.
3. Execute o comando ```yarn``` para instalar as dependências.

### Utilizando: <a name="Utilizando"></a>

Após o processo de instalação finalizar, você deve se cadastrar no [GlobalGiving](https://www.globalgiving.org/dy/v2/developer/get-api-key.html) para receber uma API Key, que será utilizada para buscar os dados das instituições de caridades.  
GlobalGiving é uma instituição filantrópica que reune em sua plataforma diversas instituições de caridades que necessitam de ajuda.

No arquivo .env, coloque sua chave após o sinal de igual `=`
```
REACT_APP_API_KEY=
```

Após isto, o site estará pronto para ser utilizado!  
Execute o comando ``` yarn start ``` e a plataforma será inicializada.

## Agradecimentos <a name="Agradecimentos"></a>

- [Suraphat Nuea-on](https://www.pexels.com/pt-br/@suraphat) por disponibilzar as imagens;

- [Global Giving](https://www.globalgiving.org/) pela API e prontidão dar soluções;

- [Font Awesome](https://fontawesome.com/) e [Google Fonts](https://fonts.google.com/);

- [Brenda Profiro](https://github.com/bprofiro) por me mentorar;

- [Florinpop17](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Charity-Finder-App.md) pela dica do projeto;


## Dados da API: <a name="Dados_API"></a>

Os dados serão recebidos no formato JSON, com a seguinte estrutura:  

```json
    "project": [
         {
            "active": "true",
            "activities": "Literacy, math, computers, English, and income-generating skills classes such as tailoring are offered at Learning Centers in Herat Province, Afghanistan. Each year over 18,000 students benefit from educational opportunities that include classes and workshops.",
            "approvedDate": "2008-08-05T15:10:59-04:00",
            "contactAddress": "Creating Hope International",
            "contactAddress2": "P. O. Box 1058",
            "contactCity": "Dearborn",
            "contactCountry": "United States",
            "contactName": "Sakena Yacoobi",
            "contactPostal": "48121",
            "contactState": "Michigan",
            "contactTitle": "Founder & CEO",
            "contactUrl": "http://www.creatinghope.org",
            "countries": {
               "country": [
                  {
                     "iso3166CountryCode": "AF",
                     "name": "Afghanistan"
                  }
               ]
            },
            "country": [
               "Afghanistan"
            ],
            "donationOptions": {
               "donationOption": [
                  {
                     "amount": "25",
                     "description": "15 women will learn to read."
                  }
               ]
            },
            "funding": "57932.29",
            "goal": "70000.00",
            "id": "354",
            "image": {
               "imagelink": [
                  {
                     "url": "https://www.globalgiving.org/pfil/354/pict_grid1.jpg",
                     "_size": "small"
                  },
                  {
                     "url": "https://www.globalgiving.org/pfil/354/pict_thumbnail.jpg",
                     "_size": "thumbnail"
                  },
                  {
                     "url": "https://www.globalgiving.org/pfil/354/pict_med.jpg",
                     "_size": "medium"
                  },
                  {
                     "url": "https://www.globalgiving.org/pfil/354/pict_grid7.jpg",
                     "_size": "large"
                  },
                  {
                     "url": "https://www.globalgiving.org/pfil/354/pict_large.jpg",
                     "_size": "extraLarge"
                  },
                  {
                     "url": "https://www.globalgiving.org/pfil/354/pict_original.jpg",
                     "_size": "original"
                  }
               ],
               "title": "Learning Centers for Rural Afghan Women in Herat",
               "_id": "0"
            },
            "imageGallerySize": "8",
            "imageLink": "https://www.globalgiving.org/pfil/354/pict.jpg",
            "iso3166CountryCode": "AF",
            "latitude": "34.56085968017578",
            "longTermImpact": "A full array of educational services are provided to rural women and girls through Learning Centers in Herat Province, Afghanistan. These centers improve the education of Afghan women in the region giving them more options in life.",
            "longitude": "62.16064453125",
            "need": "During the time of the Taliban regime in Afghanistan, education for women and girls was banned. AIL ran underground schools nonetheless, and then in 2003 opened Learning Centers to help make up for \"the lost education years\". Education services include: literacy, math, language and skills training classes. This project will ensure continuation of these urgently needed, accessible, culturally appropriate educational opportunities.",
            "numberOfDonations": "1444",
            "organization": {
               "activeProjects": "16",
               "addressLine1": "Afghan Institute of Learning",
               "addressLine2": "c/o CHI, PO Box 1058",
               "bridgeId": "3656085010",
               "city": "Dearborn",
               "countries": {
                  "country": [
                     {
                        "iso3166CountryCode": "AF",
                        "name": "Afghanistan"
                     }
                  ]
               },
               "country": [
                  "United States"
               ],
               "ein": "38-3288402",
               "id": "372",
               "iso3166CountryCode": "US",
               "logoUrl": "https://www.globalgiving.org/pfil/organ/372/orglogo.jpg",
               "mission": "The Afghan Institute of Learning (AIL) works to empower all Afghans who are needy, especially women and children, providing them the knowledge and skills to care for themselves. AIL is expanding access to quality education and healthcare through community based programming, enabling communities to develop the capacity of their people. The goal is to create a foundation of quality education and health systems throughout Afghanistan which meet the needs of local people now and in the future. AIL was founded by an Afghan woman and is run mainly by women, reaching thousands each year through health facilities, educational centers and training programs.",
               "name": "Afghan Institute of Learning",
               "postal": "48121",
               "state": "Michigan",
               "themes": {
                  "theme": [
                     {
                        "id": "children",
                        "name": "Children"
                     }
                  ]
               },
               "totalProjects": "111",
               "url": "http://www.afghaninstituteoflearning.org"
            },
            "progressReportLink": "https://www.globalgiving.org/projects/learning-centers-afghan-women/updates/",
            "projectLink": "https://www.globalgiving.org/projects/learning-centers-afghan-women/",
            "region": "Asia and Oceania",
            "remaining": "12067.71",
            "status": "active",
            "summary": "This project supports rural Learning Centers for Afghan Women in Herat Province, Afghanistan. The centers provide educational classes and income generating skills instruction, as well as giving students information on topics such as health, democracy, elections, self- care both physical and mental and leadership skills. The centers also provide opportunities to attend workshops on such things as children's rights and violence against women.",
            "themeName": "Education",
            "themes": {
               "theme": [
                  {
                     "id": "edu",
                     "name": "Education"
                  }
               ]
            },
            "title": "Learning Centers for Rural Afghan Women in Herat",
            "type": "project"
         },
```
