import clsx from 'clsx';
import * as Switch from "@radix-ui/react-switch";
import {isRtl} from "../../module";

function Toggle({ sm, value, ...otherProp }) {
    return (
        <div className={getContainerClass(value, sm)}>
            <Switch.Root
                value={value}
                className={getSwitchClass(value, sm)}
                {...otherProp}
            >
                <Switch.Thumb className={getThumbClass(value, sm)} />
            </Switch.Root>
        </div>
    );
}

function getThumbClass (val, sm) {
    const baseClass = 'bg-white block z-10 rounded-full transition duration-150 ease-out';

    return clsx(baseClass, {
        'w-5 h-3': sm,
        'w-6 h-4': !sm,
        '-translate-x-4': !val && isRtl(),
        'translate-x-4': !val && !isRtl(),
        '-translate-x-1': val && isRtl(),
        'translate-x-1': val && !isRtl(),
    });
}

function getSwitchClass (val, sm) {
    const baseClass = 'rounded-full relative z-10';

    return clsx(baseClass, {
        'w-10 h-4': sm,
        'w-11 h-5': !sm,
        'bg-primary-500': val,
        'bg-gray-200': !val,
    });
}

function getContainerClass (val, sm) {
    const baseClass = 'flex-center rounded-full transition duration-150 ease-out';

    return clsx(baseClass, {
        'w-11 h-5': sm,
        'w-12 h-6': !sm,
        'hover:bg-primary-200': val,
        'hover:bg-gray-50': !val,
    });
}


Toggle.defaultProps = {
    sm: false,
    value: false,
};
export default Toggle;
