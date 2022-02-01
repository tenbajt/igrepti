import React from "react";
import Styled from "styled-components";
import { color, rounded, shadow, text } from "./constants";

const Container = Styled.button`
    width: 100%;
    color: white;
    margin: 0 auto;
    border: 1px solid transparent;
    display: flex;
    padding: 0.5rem 1rem;
    position: relative;
    max-width: 28rem;
    font-size: ${text.sm.size};
    box-shadow: ${shadow.sm};
    font-weight: 500;
    line-height: ${text.sm.height};
    border-radius: ${rounded.md};
    justify-content: center;
    background-color: ${color.indigo(600)};
    &:hover {
        background-color: ${color.indigo(700)};
    }
`;

const IconWrapper = Styled.span`
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    padding: 0 0 0 0.75rem;
    position: absolute;
    align-items: center;
`;

const Icon = Styled.span`
    color: ${props => props.color || color.indigo(500)};
    font-size: 1.25rem;
    ${Container}:hover & {
        color: ${props=> props.hoverColor || color.indigo(400)};
    }
`;

const SignInButton = props => (
    <Container className={props.className} as={props.as} href={props.href}>
        {props.children}
        {props.icon && 
            <IconWrapper>
                <Icon className="material-icons-outlined" color={props.iconColor} hoverColor={props.iconHoverColor}>
                    {props.icon}
                </Icon>
            </IconWrapper>
        }
    </Container>
)

export default SignInButton;