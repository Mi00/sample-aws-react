import React from 'react';
import './App.css';
import {Authenticator, Heading, useTheme, Text} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Home} from "./Home";


const formFields = {
    confirmVerifyUser: {
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};

const components = {
    VerifyUser: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },

    ConfirmVerifyUser: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>{'Footer Information'}</Text>;
        },
    },
};

export default function App() {
    return (
        <Authenticator
            formFields={formFields}
            components={components}
            hideSignUp={true}
        >
            {({ signOut, user }) => (
                <main>
                    <h1>Witaj {user && user.username}</h1>
                    <button onClick={signOut}>Wyloguj</button>
                    <Home />
                </main>
            )}
        </Authenticator>
    );
}