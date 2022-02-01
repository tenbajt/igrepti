import React from "react";
import Helmet from "react-helmet";
import Styled from "styled-components";
import SignInButton from "../lib/SignInButton";
import GlobalStyles from "../lib/Style";
import { breakpoint, color, rounded } from "../lib/constants";

const Main = Styled.main`
    display: grid;
    padding: 0.75rem 1rem 0;
    min-height: 100%;
    grid-template-rows: auto 1fr auto;
    ${breakpoint.md} {
        padding-top: 1rem;
    }
`;

const Logo = Styled.img`
    height: 2.5rem;
    margin: 0 auto;
`;

const TextGroup = Styled.div`
    align-self: center;
    padding-bottom: 1rem;
    ${breakpoint.md} {
        padding-bottom: 8rem;
    }
`;

const Heading = Styled.h1`
    color: ${color.gray(900)};
    margin: 4rem auto 0;
    font-size: 1.875rem;
    text-align: center;
    font-weight: 800;
    line-height: 1;
    ${breakpoint.md} {
        font-size: 3.75rem;
    }
`;

const Text = Styled.p`
    color: ${color.gray(700)};
    margin: 0.75rem auto 0;
    max-width: 37rem;
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.25rem;
    ${breakpoint.md} {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

const ButtonGroup = Styled.div`
    padding-top: 3.5rem;
    padding-bottom: 1rem;
    ${breakpoint.sm} {
        padding-bottom: 2rem;
    }
    ${breakpoint.md} {
        display: none;
    }
`;

const CallButton = Styled(SignInButton)`
    background-color: ${color.green(600)};
    &:hover {
        background-color: ${color.green(700)};
    }
`;

const MessageButton = Styled(SignInButton)`
    color: ${color.gray(700)};
    margin-top: 0.75rem;
    border-color: ${color.gray(300)};
    background-color: white;
    &:hover {
        background-color: ${color.gray(50)};
    }
`;

const ContactGroup = Styled.div`
    gap: 1.5rem;
    display: grid;
    padding-bottom: 2.5rem;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
`;

const ContactOption = Styled.div`
    width: 15rem;
    color: ${color.gray(600)};
    border: 1px solid ${color.gray(300)};
    display: flex;
    padding: 0.5rem 1rem;
    position: relative;
    font-size: 0.875rem;
    border-radius: ${rounded.full};
    justify-content: center;
`;

const ContactOptionIconWrapper = Styled.span`
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    padding: 0 0 0 1rem;
    position: absolute;
    align-items: center;
`;

const ContactOptionIcon = Styled.span`
    color: ${color.gray(400)};
`;

const MaintenancePage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>IGRepti - Hurtownia terrarystyczna</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
            </Helmet>
        <GlobalStyles/>
        <Main>
            <Logo src="/images/logo/571x160.png"/>
            <TextGroup>
                <Heading>
                    Przerwa techniczna
                </Heading>
                <Text>
                    W sprawie zamówień prosimy o kontakt mailowy lub telefoniczny. Przepraszamy za wszelkie niedogodności. 
                </Text>
            </TextGroup>
            <ButtonGroup>
                <CallButton forwardedAs="a" href="tel:+48798921454" icon="smartphone" iconColor={color.green(500)} iconHoverColor={color.green(400)}>
                    Zadzwoń
                </CallButton>
                <MessageButton forwardedAs="a" href="mailto:info@igrepti.com" icon="mail" iconColor={color.gray(300)} iconHoverColor={color.gray(400)}>
                    Wyślij wiadomość
                </MessageButton>
            </ButtonGroup>
            <ContactGroup>
                <ContactOption>
                    <ContactOptionIconWrapper>
                        <ContactOptionIcon className="material-icons">
                            smartphone
                        </ContactOptionIcon>
                    </ContactOptionIconWrapper>
                    +48 727 928 080
                </ContactOption>
                <ContactOption>
                    <ContactOptionIconWrapper>
                        <ContactOptionIcon className="material-icons-outlined">
                            mail
                        </ContactOptionIcon>
                    </ContactOptionIconWrapper>
                    info@igrepti.com
                </ContactOption>
            </ContactGroup>
        </Main>
        </React.Fragment>
    )
}

export default MaintenancePage
