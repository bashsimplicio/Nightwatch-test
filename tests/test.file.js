module.exports = {
    'Filling out form': (client) => {
        client.url('https://www.ultimateqa.com/filling-out-forms')
            .waitForElementVisible('body', 10000)
            .assert.titleEquals('Filling Out Forms | Ultimate QA')
            .waitForElementVisible("#et_pb_contact_name_0")
            .setValue("#et_pb_contact_name_0", "Bash")
            .waitForElementVisible("#et_pb_contact_message_0")
            .setValue("#et_pb_contact_message_0", "This is a sample message")
            .waitForElementVisible("#et_pb_contact_form_0", 10000)
            .click(".et_pb_contact_submit")
            .expect.element("#et_pb_contact_form_0").text.to.equal("Thanks for contacting us")
    },
};
