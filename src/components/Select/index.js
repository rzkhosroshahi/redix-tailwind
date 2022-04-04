import {useState} from 'react'
import { Listbox } from '@headlessui/react'
import clsx from "clsx";
import {isRtl} from "../../module";
import './index.css';
import Shadow from "./shadow";

const regions = [
    {
        title: 'فروغ',
        value: 'Forough'
    },
    {
        title: 'شهریار',
        value: 'Shahriar',
    },
    {
        title: 'هرمان',
        value: 'Herman',
    },
    {
        title: 'آسیاتک',
        value: 'Asiatech',
    },
    {
        title: 'مبین‌نت',
        value: 'Mobinnet',
    },
];

function Select() {
    const [selectedRegion, setSelectedRegion] = useState(regions[0]);

    return (
        <Listbox value={selectedRegion} onChange={setSelectedRegion}>
            {({ open }) => (
                <div className={'relative'}>
                    <Listbox.Button className={getButtonClassName(open)}>
                        {isRtl() ? selectedRegion.title : selectedRegion.value}
                    </Listbox.Button>
                    <Listbox.Options className={'select-options'}>
                        {regions.map((region) => (
                            <Listbox.Option
                                key={region.value}
                                value={region}
                                className={'mt-2 p-3 hover:bg-gray-50 rounded-3xl cursor-pointer'}
                            >
                                {isRtl() ? region.title : region.value}
                            </Listbox.Option>
                        ))}
                        {open && <Shadow className={'absolute -bottom-8 -right-5 -z-10'} />}
                    </Listbox.Options>
                </div>
            )}
        </Listbox>
    )
}

function getButtonClassName(open) {
    const baseClass = 'w-[240px] h-[40px] outline-0 rounded-tr-xl rounded-tl-xl flex justify-start items-center p-3';

    return clsx(baseClass, {
        'bg-gray-25 rounded-xl': !open,
        'bg-white border-[1px] border-b-0 border-primary-500 rounded-tr-xl rounded-tl-xl': open,
    });
}


export default Select;
