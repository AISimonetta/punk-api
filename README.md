✦Punk-Api Project✦

This project was developed during my training at _nology. The aim of this project was to retrieve informtation from the PUNK-API => https://punkapi.com/documentation/v2. Beers can be filtered using different information as requiered such as name, brew range, alcohol content and ph.

✦Technologies used:

| HTML | SCSS | Typescript | Javascript | ReactJs |

Punk Api Project Preview :
![Screenshot 2024-01-02 at 14 19 02](https://github.com/AISimonetta/punk-api/assets/122782260/d2e18d76-eac0-4c69-aab1-dd2a24576ddc)

✦The structure for this project is as follow :
  ∙APP = root component. Here , MAIN and NAV components are called .
    ∙∙NAV =  Component which includes filter and search functionalities with a reset button to restart values. This is done by     
      referencing his children components: 
        ∙∙∙SEARCHBOX: A component for user input that searches the beers by name.
        ∙∙∙FILTERLIST: A component for user input that filters the beers by brew range, alcohol content and ph.
    ∙∙MAIN = Component that renders the filtered cards which displays the beers. This is the parent component of CARD.
        ∙∙∙CARD: A component which display the information about the beers.

✦CONTACT
If you have any question,feedback or contribution for this project please get in touch.
