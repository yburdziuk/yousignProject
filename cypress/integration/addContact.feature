Feature: New contact creation
    As a user I want to be able to add a contact to my contacts book

    Scenario: Adding a contact
        Given User is logged into the Yousign
            | username                | password        |
            | yana.burdziuk@gmail.com | NolanKubrick94* |
        When User clicks on the add contact button
        And Puts the personal data into the needed fields
            | role       | phone     |
            | Signataire | 655443399 |
        And Submits the contact creation
        Then The new contact is added