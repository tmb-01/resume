import {
    ButtonSubmit, ContactBox, ContactIcon, ContactInfo, ContactText,
    ContentContainer, DFlex,
    FormField,
    FullName, InputField,
    TextareaField
} from "./styles";
import {ReactComponent as Phone} from "../../assests/icons/phone-contact.svg";
import {ReactComponent as Location} from "../../assests/icons/location-contact.svg";
import {ReactComponent as Email} from "../../assests/icons/email-contact.svg";

function Contact() {
    return (
        <ContentContainer>

            <FullName>Contact</FullName>
            <DFlex>

                <ContactInfo>
                    <ContactBox>
                        <ContactIcon>
                            <Phone/>
                        </ContactIcon>
                        <ContactText>
                            <a href="tel:+998990997844">+998 (99) 099-76-44</a>
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

                <FormField>
                    <InputField placeholder={"Full Name"} type={"text"}/>
                    <InputField placeholder={"Email"} type={"email"}/>
                    <TextareaField placeholder={"Message"} rows={5}/>
                    <ButtonSubmit>Send Message</ButtonSubmit>
                </FormField>
            </DFlex>


        </ContentContainer>
    )
}

export default Contact
