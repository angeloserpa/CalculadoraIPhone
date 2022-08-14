import React from "react";
import { CustomWrapper } from "./styles";
import Button  from "../Button/Button";

const Wrapper: React.FC = () => (
    <CustomWrapper>
        <Button color={'gray'} label={'AC'}></Button>
        <Button color={'gray'} label={'+/-'}></Button>
        <Button color={'gray'} label={'%'}></Button>
        <Button color={'orange'} label={'÷'}></Button>
        <Button color={'darkGrey'} value ={'7'} label={'7'}></Button>
        <Button color={'darkGrey'} value ={'8'} label={'8'}></Button>
        <Button color={'darkGrey'} value ={'9'} label={'9'}></Button>
        <Button color={'orange'} label={'x'}></Button>
        <Button color={'darkGrey'} value ={'4'} label={'4'}></Button>
        <Button color={'darkGrey'} value ={'5'} label={'5'}></Button>
        <Button color={'darkGrey'} value ={'6'} label={'6'}></Button>
        <Button color={'orange'} label={'-'}></Button>
        <Button color={'darkGrey'} value ={'1'} label={'1'}></Button>
        <Button color={'darkGrey'} value ={'2'} label={'2'}></Button>
        <Button color={'darkGrey'} value ={'3'} label={'3'}></Button>
        <Button color={'orange'} label={'+'}></Button>
        <Button color={'darkGrey'} value ={'0'} label={'0'}></Button>
        <Button color={'darkGrey'} value ={'.'} label={','}></Button>
        <Button color={'orange'} label={'='}></Button>
    </CustomWrapper>
)

export default Wrapper;