import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormValues, resolver } from "../resolver";

import { useCustomContext } from "../custom-hooks/useGameContext";
import { setCustomWarrior } from "../actions/gameActions";

import HomeScreen from '../screens/HomeScreen'
import { useHistory } from "react-router-dom";
import { Warrior } from "../types/WarriorType";

export default function HomeView() {
  const { state, dispatch } = useCustomContext();
  const history = useHistory();
  const [warrior] = useState(state.warriors.find((warrior: Warrior) => warrior.id === state.selectedWarrior));
  const {register, handleSubmit, formState: { errors }} = useForm<FormValues>({resolver,});
  const [inputs, setInputs] = useState({ attack1: false, attack2: false, attack3: false})

  const handleOnChange = (event: any) => {
    setInputs({...inputs, [event.target.name]: (event.target.value ? true : false)})
  }

  const onSubmit = handleSubmit((data) => {
    dispatch(setCustomWarrior(data.warriorName, [+data.attack1, +data.attack2, +data.attack3,]));
    history.push("/fight");
  });

  return (
    <HomeScreen 
      warrior={warrior} 
      onSubmit={onSubmit} 
      state={state} 
      register={register} 
      errors={errors} 
      inputs={inputs} 
      handleOnChange={handleOnChange}
    />
  )
}
