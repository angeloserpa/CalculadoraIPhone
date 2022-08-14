import styled from 'styled-components';

type colorTypes = 'orange' | 'gray' | 'darkGrey' | 'black' | 'white'

type valueProps = {
    color: colorTypes
}

const colors = {
    orange: '#FF9500',
    gray: '#D4D4D2',
    darkGray: '#505050',
    black: '#000000',
    white: '#FFFFFF'
}

const getColor = (color: colorTypes) => colors[color];

export const CustomButton = styled.button`
    width: 3em;
    height: 3em;
    font-size: 1.5em;
    border: none;
    border-radius: 2em;
    margin: 0.3em;
    background-color: ${(props: valueProps) => getColor(props.color)};
    color: ${(props: valueProps) => getColor(props.color)};

    &:hover {
        filter: brightness(0.9);
      }
    
      & * {
        cursor: pointer;
      };
`