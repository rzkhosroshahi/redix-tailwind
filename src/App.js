import { useState } from "react";
import Toggle from "./components/Toggle";
import './App.css';
import Select from "./components/Select";

function App() {
    const [ToggleValue, setToggleValue] = useState(true);
    const [ToggleSmValue, setToggleSmValue] = useState(false);

    const changeHtmlDir = (val) => {
        setToggleValue(val);
        document.dir = val ? 'rtl' : 'ltr';
    };

    return (
      <section className={'flex-col-center justify-center space-y-4 py-4'}>
            <div className={'flex-center border-2 border-primary-500 w-[90%] h-[160px] rounded-xl p-4'}>
                <div className={'flex-col-center-y items-start w-[200px] space-y-2'}>
                    <div className={'space-s-2 flex-center'}>
                        <Toggle value={ToggleValue} onCheckedChange={changeHtmlDir} />
                        <span>
                            Toggle - تغییر بادی
                        </span>
                    </div>
                    <div className={'space-s-2 flex-center'}>
                        <Toggle value={ToggleSmValue} onCheckedChange={(val) => setToggleSmValue(val)} sm />
                        <span>
                            Toggle sm
                        </span>
                    </div>
                </div>
            </div>
              <div className={'flex-center border-2 border-primary-500 w-[90%] h-[160px] rounded-xl p-4'}>
                  <Select />
              </div>
      </section>
    );
}

export default App;
