# Technical test for YOUSIGN entreprise

## I. Tech task Cypress using the [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

:warning: Only valid scenarios are implemented :warning:

* Successful authentification test case stored in *cypress/integration/login.feature*
* JS script file containing the step definitions *cypress/integration/login/login.js*
<img width="556" alt="Capture d’écran 2021-08-09 à 14 53 15" src="https://user-images.githubusercontent.com/61992820/128709254-937d0822-f6f8-4344-8dbb-ca2d85414e08.png">

* Successful new contact creation after being authentified stored in *cypress/integration/addContact.feature*
* JS script file containing the step definitions *cypress/integration/addContact/addContact.js*

<img width="556" alt="Capture d’écran 2021-08-09 à 14 49 53" src="https://user-images.githubusercontent.com/61992820/128708940-2d117c69-a877-490b-b9b2-b0439f56ad37.png">

To open the cypress, manually choose the test to execute and see the test running :

**npm run cy:open**

To execute the tests in background and see the report directly in the terminal :

**npm run test**

<img width="724" alt="Capture d’écran 2021-08-09 à 16 39 37" src="https://user-images.githubusercontent.com/61992820/128727312-0d0ace22-c8a9-4a98-b212-343ab8e5f317.png">

### Output aka HTML Report using the module [multiple-cucumber-html-reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter)

Execute this command to generate HTML reports :

**npm run cy:report**

* Report is stored in *cypress/cucumber-report/index.html*

<img width="1411" alt="Capture d’écran 2021-08-08 à 23 31 52" src="https://user-images.githubusercontent.com/61992820/128646376-a2ac76c8-576c-4e6b-b2a4-1ab322913fef.png">

**Nota Bene :**

-> Using the JS functions instead of custom commands is the best modus operandi for a long term strategic to avoid the complexity of maintainance and vaste of time/mental effort to understand what every custom command does

* JS functions are stored in *cypress/actions*

-> Forced to manually reset the session cookies/clear storage before every test to avoid the sabotage of the results (workaround for now is to log out the user after the test), the bug on cypress side
