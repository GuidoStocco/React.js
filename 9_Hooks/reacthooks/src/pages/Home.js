import HookUseState from "../components/HookUseState";
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from "../components/HookUseEffect";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";

//
import { useContext } from "react";
import HookCustom from "../components/HookCustom";


const Home = () => {

    const {contextValue} = useContext(SomeContext);

    return(
        <div>
            <HookUseState/>
            <HookUseReducer/>
            <HookUseEffect/>
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr/>
            <HookUseRef/>
            <HookCustom/>
        </div>
    )
};

export default Home;