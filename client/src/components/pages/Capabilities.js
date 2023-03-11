import React from 'react';

const Capabilities = () => (
    <div
        style={{
            textAlign: 'center',
            paddingLeft: '70px',
            paddingRight: '70px',
        }}
    >
        <h1 className="teal-text text-darken-1">Capabilities of Cakap Sihat</h1>
        <p
            style={{
                textAlign: 'justify',
            }}
        >
            Being a prototype for fulfillment of requriement of Master's Thesis,
            there was a time limit for working with CakapSihat. Health and
            fitness are enormous domains. So, it was not possible to insert data
            about every aspects of health and fitness domains in the
            knowledgebase of this application. Below is table containing the
            list of health and fitness related topics on which CakapSihat has
            been trained. Of course, with time and more training it will be able
            to cover more aspects.
        </p>
        <table>
            <thead>
                <tr>
                    <th>Diseases</th>
                    <th>Healthy Lifestyle</th>
                    <th>Fitness</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        Allergies, Chickenpox, Colds and Flu, Covid-19, Diabetes
                    </td>
                    <td>Birth Control, Control Cholesterol, Dental Hygiene</td>
                    <td>Cardio, Endurance, HIIT</td>
                </tr>
                <tr>
                    <td>Diarrhea, Diphtheria, Headaches, HIV, Influenza</td>
                    <td>
                        Healthy diet, Manage Blood Pressure, Manage Blood Sugar
                    </td>
                    <td>Intermittent fasting, Kickboxing, Martial Arts</td>
                </tr>
                <tr>
                    <td>Pneumonia, Malaria, Measles, Meningitis, Mumps, </td>
                    <td>Meditation, Nutrition, Quit Smoking</td>
                    <td>Running, Strength Training, Stretching</td>
                </tr>

                <tr>
                    <td>
                        STD, Stomach Aches, Tetanus, Thalassemia, Tuberculosis
                    </td>
                    <td>Sleep, Stress management, Weight Management</td>
                    <td>Water Aerobics, Workout, Yoga</td>
                </tr>
            </tbody>
        </table>
        <p
            style={{
                textAlign: 'justify',
                color: '#c62828',
            }}
        >
            * This chatbot has been trained with data of more than 250 common
            medicines and drugs.
        </p>
    </div>
);

export default Capabilities;
