<p align="center"> 
  <img src='https://github.com/cgmbauer/assets/blob/master/logo/CharityFinderLogo.jpg' alt='Charity Finder logo' width="400px" />
</p>

<p align="center">
  <a href="https://github.com/cgmbauer/charity-finder/blob/master/README.md">PT-BR</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/cgmbauer/charity-finder/blob/master/README.ENG.md">ENG</a>&nbsp;&nbsp;&nbsp;
</p>

# Charity Finder

Website designed to facilitate user engagement with charity projects.  
With this plataform, the user will be able to find charity projects around the world, filtering them by "Country", "Themes" and "Institution Name".  
This makes it much easier to find the project you most identify with!  <br></br>

![Chairy Finder gif](https://github.com/cgmbauer/assets/blob/master/gifs/charityfinder.gif)  

## Table of Contents
1. [Build with](#BuildWith)
2. [How to Use?](#How_to_use)
    1. [Requirements](#Requirements)
    2. [How to run](#How_to_run)
    3. [Using it](#Using_it)
    4. [Como Modificar?](#Como_modificar)
3. [Acknowledgments](#Acknowledgments)  
4. [API Data](#API_Data)


## Built with <a name="BuildWith"></a> 

- [ReactJS v.16.13.1](https://reactjs.org/)

- [Axios v.0.19.2](https://github.com/axios/axios)

- [Styled Components](https://github.com/styled-components/styled-components)

- [Typescript](https://www.typescriptlang.org/)

- [GlobalGiving API](https://www.globalgiving.org/api/getting-started/)

## How to use <a name="How_to_use"></a> 

### Requirements: <a name="Requirements"></a>

- [yarn v.1.x.x](https://classic.yarnpkg.com/en/docs/install)

### How to run <a name="How_to_run"></a>

1. Clone this repository ```git clone https://github.com/cgmbauer/charity-finder.git```.
2. Go inside your new folder through the terminal ```cd charityfinder```.
3. Execute ```yarn``` to install the dependencies.

### Using it <a name="Using_it"></a>

After the installation process is completed, you must register on [GlobalGiving](https://www.globalgiving.org/dy/v2/developer/get-api-key.html) to get an API Key, which will be used to retrieve data from the charities.  
GlobalGiving é uma instituição filantrópica que reune em sua plataforma diversas instituições de caridades que necessitam de ajuda.  

Inside the the ```charityfinder folder```, you'll se a ```.env``` file. Put your API Key after the equal sign `=`.
```
REACT_APP_API_KEY=
```

After that, the website will be ready to be used!
On your terminal, execute `yarn start` to initialize the application.

## Acknowledgments <a name="Acknowledgments"></a>

- [Suraphat Nuea-on](https://www.pexels.com/pt-br/@suraphat) for the free images;

- [Global Giving](https://www.globalgiving.org/) for the API;

- [Font Awesome](https://fontawesome.com/) and [Google Fonts](https://fonts.google.com/);

- [Brenda Profiro](https://github.com/bprofiro) for the guidance;

- [Florinpop17](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Charity-Finder-App.md) for the project idea;

## API Data: <a name="API_Data"></a>

The API data will be received in JSON format, as below:  

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

### More about it soon
