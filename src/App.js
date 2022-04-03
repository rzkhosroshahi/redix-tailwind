import { useState } from "react";
import Toggle from "./components/Toggle";
import './App.css';

function App() {
    const [ToggleValue, setToggleValue] = useState(true);
    const [ToggleSmValue, setToggleSmValue] = useState(false);

    return (
      <section className={'flex justify-center py-5'}>
            <div className={'flex-center bg-gray-25 w-[90%] h-[160px] rounded-xl p-4'}>
                <div className={'flex-col-center-y items-start w-[200px]'}>
                    <div className={'space-x-2 flex-center'}>
                        <Toggle value={ToggleValue} onCheckedChange={(val) => setToggleValue(val)} />
                        <span>
                            Toggle
                        </span>
                    </div>
                    <div className={'space-x-2 flex-center'}>
                        <Toggle value={ToggleSmValue} onCheckedChange={(val) => setToggleSmValue(val)} sm />
                        <span>
                            Toggle sm
                        </span>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default App;
