import {
    ButtonSubmit, ContactBox, ContactIcon, ContactInfo, ContactText,
    DFlex,
    FormField,
    FullName, InputField,
    TextareaField
} from "./styles";
import {ReactComponent as Phone} from "../../assests/icons/phone-contact.svg";
import {ReactComponent as Location} from "../../assests/icons/location-contact.svg";
import {ReactComponent as Email} from "../../assests/icons/email-contact.svg";
import {ContentContainer, ContentTitle} from "../mainContent/styles";
import axios from "axios";
import {useState} from "react";

function Contact() {

    const [progress, setProgress] = useState({loading: false, success: false, error: false});

    const submitMessage = (e) => {
        setProgress({loading: true, success: false, error: false})
        e.preventDefault()
        const {fullName, email, message} = e.target

        const form = {
            fullName: fullName.value,
            email: email.value,
            message: message.value
        }

        const messageText =
            `<b>full name:</b> ${form.fullName}\n` +
            `<b>email:</b> ${form.email}\n` +
            `<b>message:</b> ${form.message}`
        ;

        const token = "2067332716:AAGGnQWJGozm78UOO2ysaFCCwHMR327FaY4";

        const api = `https://api.telegram.org/bot${token}/sendMessage`

        axios.post(api, {chat_id: "286602133", text: messageText, parse_mode: "html"})
            .then(() => {
                setProgress({loading: false, success: true, error: false})
                console.log("success")
            })
            .catch(() => {
                console.log("error")
                setProgress({loading: false, success: false, error: true})
            })
            .finally(() => {
                setTimeout(() => {
                    setProgress({loading: false, success: false, error: false})
                }, 5000)
            })
    }

    return (
        <ContentContainer>

            <ContentTitle>Contact</ContentTitle>
            <DFlex>

                <ContactInfo>
                    <ContactBox>
                        <ContactIcon>
                            <Phone/>
                        </ContactIcon>
                        <ContactText>
                            <a href="tel:+998990997644">+998 (99) 099-76-44</a>
                        </ContactText>
                    </ContactBox>
                    <ContactBox>
                        <ContactIcon>
                            <Location/>
                        </ContactIcon>
                        <ContactText>
                            Uzbekistan, Tashkent
                        </ContactText>
                    </ContactBox>
                    <ContactBox>
                        <ContactIcon>
                            <Email/>
                        </ContactIcon>
                        <ContactText>
                            <a href="mailto:maraimtuxtasunov@gmail.com">maraimtuxtasunov@gmail.com</a>
                        </ContactText>
                    </ContactBox>
                </ContactInfo>

                <FormField onSubmit={submitMessage}>
                    <InputField name={"fullName"} placeholder={"Full Name"} type={"text"} required/>
                    <InputField name={"email"} placeholder={"Email"} type={"email"} required/>
                    <TextareaField name={"message"} placeholder={"Message"} rows={5} required/>
                    <ButtonSubmit disabled={progress.loading || progress.success || progress.error}>
                        {progress.loading ? "Loading..." : progress.success ? "Success" : progress.error ? "Error" : "Send Message"}
                    </ButtonSubmit>
                </FormField>
            </DFlex>


        </ContentContainer>
    )
}

export default Contact
